import { Ghost, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background px-4">
      <div
        className="w-full max-w-md p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-border shadow-xl text-center relative group"
        data-easter-egg="👀 Curious developer detected!"
      >
        <div className="flex justify-center mb-4 animate-bounce">
          <Ghost className="h-12 w-12 text-purple-500" />
        </div>

        <h1 className="text-5xl font-extrabold gradient-text select-none">
          404
        </h1>

        <p className="text-lg font-semibold text-black dark:text-white mt-2">
          Page not found.
        </p>

        <p className="mt-3 text-sm text-muted-foreground">
          Looks like this page doesn’t exist... yet.
        </p>

        <div className="mt-6">
          <Link href="/">
            <Button className="rounded-full px-6 text-sm hover:scale-105 transition-transform" variant="outline">
              <Rocket className="mr-2 h-4 w-4" />
              Return home
            </Button>
          </Link>
        </div>

        <div className="absolute -bottom-5 left-3 text-[10px] text-muted-foreground opacity-30 group-hover:opacity-100 transition-opacity">
          <span title="Not a secret... or is it?">/* sector-void */</span>
        </div>
      </div>
    </div>
  );
}