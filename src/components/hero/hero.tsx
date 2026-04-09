/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { AppStoreButton, GooglePlayButton } from "../base/buttons/app-store-buttons";
import { TypingAnimation } from "../ui/typing-animation";
import { motion } from "motion/react";
import Link from "next/link";
import lottie from "lottie-web";
import { useEffect, useRef } from "react";

function LottieAnimation({ animationPath }: { animationPath: string }) {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current) return;

    const anim = lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: animationPath, // <-- use path instead of imported JSON
    });

    return () => anim.destroy();
  }, [animationPath]);

  return <div ref={container} className="h-full w-full rounded-2xl" />;
}

export function Hero() {
  const features = [
    { title: "Capture & Convert", animationPath: "/animations/lottie/Scene-1.json" },
    { title: "Scan & Extract", animationPath: "/animations/lottie/Scene-2.json" },
    { title: "Sign & Edit", animationPath: "/animations/lottie/Scene-3.json" },
    { title: "Organize & Export", animationPath: "/animations/lottie/Scene-4.json" },
  ];

  return (
    <div className="grid w-full flex-1 place-items-center p-8">
      <div className="relative flex w-full flex-col items-center overflow-hidden rounded-b-3xl bg-gradient-to-b from-white/0 to-white/5 pb-8">
        {/* Gradient Background */}
        <div className="absolute inset-0 -z-20 overflow-hidden rounded-b-3xl">
          <div className="absolute inset-x-0 bottom-0 h-[550px] rounded-b-3xl bg-gradient-to-t from-[#4E6BFF]/70 via-[#4E6BFF]/10 to-transparent"></div>
        </div>

        {/* Circular Border Elements */}
        <div className="pointer-events-none absolute bottom-0 left-1/2 -z-10 h-full w-full -translate-x-1/2 overflow-hidden rounded-b-3xl">
          <div className="absolute bottom-[-600px] left-1/2 h-[1200px] w-[1200px] -translate-x-1/2 rounded-full border border-white/35 dark:border-white/5"></div>
          <div className="absolute bottom-[-500px] left-1/2 h-[1000px] w-[1000px] -translate-x-1/2 rounded-full border border-white/40 dark:border-white/10"></div>
          <div className="absolute bottom-[-400px] left-1/2 h-[800px] w-[800px] -translate-x-1/2 rounded-full border border-white/45 dark:border-white/15"></div>
        </div>

        {/* Hero Text */}
        <motion.div
          className="z-10 flex w-full max-w-6xl flex-col items-center gap-3 px-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl leading-[1.2] font-bold tracking-tight md:text-5xl">
            <TypingAnimation
              className="text-[#000c51] dark:text-white"
              words={["Scan documents in seconds", "Turn paper into clean PDFs"]}
            />
          </h1>
        </motion.div>

        {/* Feature Cards */}
        <div className="mt-6 w-full px-4">
          <motion.div
            className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.25 } },
            }}
          >
            {features.map((feature, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center gap-4 rounded-xl border border-[#4E6BFF]/20 bg-gradient-to-br from-[#4E6BFF]/10 to-[#4E6BFF]/5 p-4 backdrop-blur-md transition-all will-change-transform hover:border-[#4E6BFF]/40 hover:bg-gradient-to-br hover:from-[#4E6BFF]/15 hover:to-[#4E6BFF]/8"
                variants={{
                  hidden: { opacity: 0, y: 10, scale: 0.97, rotateY: -5 },
                  visible: { opacity: 1, y: 0, scale: 1, rotateY: 0, transition: { duration: 0.6, ease: "easeInOut" } },
                }}
              >
                <div className="text-center">
                  <h4 className="text-base font-semibold text-[#000c51] dark:text-white">{feature.title}</h4>
                </div>
                <div className="w-90 will-change-transform">
                  <LottieAnimation animationPath={feature.animationPath} />{" "}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Download Buttons */}
        <motion.div
          className="z-10 flex w-full flex-col items-center justify-center gap-3 px-4 py-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <motion.p
            className="md:text-md text-center text-sm font-medium text-[#000c51] dark:text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Try <span className="font-bold">Spark PDF</span> now!
          </motion.p>
          <motion.div
            className="flex flex-col items-center gap-8 md:flex-row"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-xl border border-black/20 bg-black/30 p-2 px-8"
            >
              <GooglePlayButton size="lg" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-xl border border-black/20 bg-black/30 p-2 px-8"
            >
              <AppStoreButton size="lg" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        className="z-10 flex w-full items-center justify-between border-white/10 px-4 pt-8 pb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-xs text-[#000c51]/80 md:text-sm dark:text-white/60">
          <p>&copy; {new Date().getFullYear()} ForgeBase. All rights reserved.</p>
        </div>
        <div className="mx-auto flex max-w-6xl flex-row items-center gap-6 text-xs text-[#000c51]/80 md:text-sm dark:text-white/60">
          <Link href="/privacy" className="cursor-pointer transition-colors hover:text-[#000c51] dark:hover:text-white">
            Privacy Policy
          </Link>
          <Link
            href="/delete-account"
            className="cursor-pointer transition-colors hover:text-[#000c51] dark:hover:text-white"
          >
            Delete Account
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
