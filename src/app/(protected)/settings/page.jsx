import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import { Poppins } from "next/font/google";

const SettingsPage = async () => {
  const session = await auth();

  return (
    <div>
      {JSON.stringify(session)}
      <img src="https://links.papareact.com/9j" alt="f" />
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <Button type="submit" variant="destructive">
          Sign out
        </Button>
      </form>
    </div>
  );
};
export default SettingsPage;
