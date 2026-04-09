import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { AnimatedThemeToggler } from "../ui/animated-theme-toggler";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

type Props = {
  className?: string;
};

export function MobileNav({ className }: Props) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const brightness = mounted && theme === "dark" ? "brightness-200" : mounted ? "brightness-0" : "brightness-0";

  return (
    <nav className={cn("mx-auto flex w-full items-center justify-between gap-4 px-4", className)}>
      <Link href="/">
        <Image src="/spark_pdf_icon.svg" alt="logo" width={40} height={50} className={brightness} />
      </Link>

      <div className="flex items-center gap-2">
        <AnimatedThemeToggler className="border" />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-md p-2 transition-colors hover:bg-gray-200 dark:hover:bg-gray-800"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen && (
        <div className="bg-background/70 absolute top-14 right-7 left-7 z-50 rounded-2xl border-b border-gray-200 shadow-md backdrop-blur-xl dark:border-gray-800">
          <div className="flex flex-col items-center justify-center gap-2 p-4">
            <Link
              href="/support"
              className="rounded-md px-4 py-2 text-sm transition-colors hover:bg-gray-100 dark:hover:bg-gray-900"
              onClick={() => setIsOpen(false)}
            >
              Support
            </Link>
            <Link
              href="/privacy"
              className="rounded-md px-4 py-2 text-sm transition-colors hover:bg-gray-100 dark:hover:bg-gray-900"
              onClick={() => setIsOpen(false)}
            >
              Privacy
            </Link>
            <Link
              href="/delete-account"
              className="rounded-md px-4 py-2 text-sm transition-colors hover:bg-gray-100 dark:hover:bg-gray-900"
              onClick={() => setIsOpen(false)}
            >
              Delete Account
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
