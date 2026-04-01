import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { AnimatedThemeToggler } from "../ui/animated-theme-toggler";
import { useTheme } from "next-themes";

type Props = {
  className?: string;
};

export function DesktopNav({ className }: Props) {
  const { theme } = useTheme();

  return (
    <nav className={cn("mx-auto flex w-full max-w-7xl items-center justify-between gap-4", className)}>
<Link href="/">
  <Image
    src="/spark_pdf_icon.svg"
    alt="logo"
    width={40}
    height={50}
    className={theme === "dark" ? "brightness-200" : "brightness-0"}
  />
</Link>

      <AnimatedThemeToggler className="border"/>
    </nav>
  );
}
