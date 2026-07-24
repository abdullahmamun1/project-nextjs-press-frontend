import { Button } from "@/components/ui/button";
import { getMe } from "@/service/getMe";

export default async function HomePage() {
  const user = await getMe();
  return (
    <div>
      hello nextjs
      <Button>Button</Button>
    </div>
  );
}
