import { SignOut, RedirectTo, SignOutButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export default function SignOutPage() {
  return (
    <SignOutButton as={RedirectTo} href="/">
      <Button className="bg-[#26292b] dark:bg-[#f7f8f8] text-gray-200 dark:text-gray-800 hover:bg-gray-700 dark:hover:bg-gray-200">
        Sign out
      </Button>
    </SignOutButton>
  );
}
