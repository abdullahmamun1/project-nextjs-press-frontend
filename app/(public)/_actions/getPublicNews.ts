"use server";
import { cookies } from "next/headers";

export const getPublicNews = async ({
  query,
}: {
  query?: { [key: string]: string | string[] | undefined };
}) => {
  // const searchTerm = `${search?.searchTerm ? `?searchTerm=${search.searchTerm}` : ""}`;
  const params = new URLSearchParams();
  if (query && query.searchTerm) {
    params.set("searchTerm", query.searchTerm as string);
  }
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;

  if (!accessToken) {
    return {
      success: false,
      message: "User not logged in",
    };
  }
  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/posts?${params.toString()}`,
    {
      headers: {
        Cookie: `accessToken=${accessToken}`,
      },
      cache: "force-cache",
      next: {
        revalidate: 60 * 60 * 6,
        tags: ["public-posts"],
      },
    },
  );

  const result = await res.json();
  return result;
};
