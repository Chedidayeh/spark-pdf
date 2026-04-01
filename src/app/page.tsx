"use client";

import { Hero } from "@/components/hero/hero";
import { Nav } from "@/components/hero/nav";
import { Particles } from "@/components/ui/particles";
import { CustomSparkles } from "@/components/ui/custom-sparkles";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme } = useTheme();

  return (
    <div className="flex flex-col h-screen w-full relative overflow-hidden">
      <Particles
        className="absolute inset-0 -z-10"
        quantity={100}
        ease={80}
        color={theme === "dark" ? "FFFFFF" : "4E6BFF"}
        refresh
      />
      <CustomSparkles
        color={theme === "dark" ? "#FFFFFF" : "#4E6BFF"}
        quantity={50}
        className="-z-5"
      />
      <Nav />
      <Hero />
      {/* <Showcase /> */}
    </div>
  );
}
