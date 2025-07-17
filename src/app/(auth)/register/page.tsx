import RegisterPageIntro from "@/components/registerPage/RegisterPageIntro";
import { db } from "@/lib/db";

export default async function RegisterPage() {
  await db.user;

  return (
    <main>
      <RegisterPageIntro />
    </main>
  );
}
