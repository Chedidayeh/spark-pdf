"use client";

import { Hero } from "@/components/hero/hero";
import { Nav } from "@/components/hero/nav";
import { CustomSparkles } from "@/components/ui/custom-sparkles";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme } = useTheme();

  

  return (
    <div className="flex flex-col h-screen w-full relative overflow-hidden">
      <CustomSparkles
        color={theme === "dark" ? "#FFFFFF" : "#000000"}
        quantity={50}
        className="-z-5"
      />
      <Nav />
      <Hero />
      {/* <Showcase /> */}
    </div>
  );
}
