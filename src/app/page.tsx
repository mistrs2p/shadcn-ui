import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Mail } from "lucide-react";
import { Loader2 } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "auto 2rem",
        width: "400px",
      }}
    >
      <Button>Click Me</Button>
      <Button variant={"outline"}>Click Me outline</Button>
      <Button variant={"default"}>Click Me default</Button>
      <Button variant={"secondary"}>Click Me secondary</Button>
      <Button variant={"destructive"}>Click Me destructive</Button>
      <Button variant={"ghost"}>Click Me ghost</Button>
      <Button variant={"link"}>Click Me link</Button>
      <Button variant="outline" size="icon">
        <ChevronRight className="h-4 w-4" />
      </Button>
      <Button>
        <Mail className="mr-2 h-4 w-4" /> Login with Email
      </Button>
      <Button disabled>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Please wait
      </Button>
      <Button asChild>
        <Link href="/login">Login</Link>
      </Button>
    </div>
  );
}
