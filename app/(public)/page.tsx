import { Button } from "@/components/ui/button";
import { getMe } from "@/service/getMe";

export default async function HomePage() {
  const user = await getMe();
  console.log("Root route");
  console.log(user);
  return (
    <div>
      hello nextjs
      <Button>Button</Button>
    </div>
  );
}
