/* eslint-disable @typescript-eslint/no-explicit-any */
import { IPost } from "@/lib/types";
import { NewsCard } from "./NewsCard";

export async function PublicNewsList() {
  const result = {
    success: true,
    data: [
      {
        id: "clx9f7t2c0004s6oqz8w1r3y5",
        title: "Coastal Districts Brace for Early Monsoon Surge",
        content:
          "Meteorologists have warned of an unusually early monsoon front moving inland, with heavy rainfall expected across low-lying coastal districts within seventy-two hours. Local authorities have opened shelters and suspended ferry services on three major routes. Farmers in the region say the timing could damage standing crops that were already delayed by a dry planting season.",
        thumbnail: "",
        isFeatured: false,
        status: "PUBLISHED",
        tags: ["weather", "climate", "local"],
        views: 124530,
        isPremium: false,
        authorId: "clx9f1c8d0002s6oq9k2l3m4n",
        createdAt: new Date("2026-07-24T06:40:00.000Z"),
        updatedAt: new Date("2026-07-24T06:40:00.000Z"),
      },
    ],
  };
  if (!result.success || !result.data?.length) {
    return (
      <p className="py-12 text-center text-muted-foreground">
        No premium news found.
      </p>
    );
  }
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {result.data.map((post: IPost | any) => (
          <NewsCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
