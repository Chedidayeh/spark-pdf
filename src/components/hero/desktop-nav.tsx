import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { AnimatedThemeToggler } from "../ui/animated-theme-toggler";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

type Props = {
  className?: string;
};

export function DesktopNav({ className }: Props) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const brightness = mounted && theme === "dark" ? "brightness-200" : mounted ? "brightness-0" : "brightness-0";

  return (
    <nav className={cn("mx-auto flex w-full max-w-7xl items-center justify-between gap-4", className)}>
<Link href="/">
  <Image
    src="/spark_pdf_icon.svg"
    alt="logo"
    width={40}
    height={50}
    className={brightness}
  />
</Link>

      <AnimatedThemeToggler className="border"/>
    </nav>
  );
}
