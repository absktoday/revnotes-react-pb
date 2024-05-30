import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function LoginForm() {
  return (
    <main className=" min-h-screen flex flex-col items-center justify-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Just click the button below to authenticate using Passkeys without
            any Password or Usernames.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <Button className="w-full">Login with Passkey</Button>
        </CardContent>
        <CardFooter>
          <p className="text-xs">
            By creating an account and/or logging in, you agree to RevNotes
            <span className="text-primary"> Terms of Service</span> and
            <span className="text-primary"> Privacy Policy</span>.
          </p>
        </CardFooter>
      </Card>
    </main>
  );
}
