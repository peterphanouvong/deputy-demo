import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Home() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <div>
      {user ? <LogoutLink>Logout</LogoutLink> : <LoginLink>Login</LoginLink>}
    </div>
  );
}
