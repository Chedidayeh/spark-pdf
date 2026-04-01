/* eslint-disable @typescript-eslint/no-explicit-any */
import { AppStoreButton, GooglePlayButton } from "../base/buttons/app-store-buttons";
import { TypingAnimation } from "../ui/typing-animation";
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import Lottie from "lottie-react";

export function Hero() {
  const [animations, setAnimations] = useState<{
    capture: any;
    sign: any;
    organize: any;
  }>({ capture: null, sign: null, organize: null });

  useEffect(() => {
    const loadAnimations = async () => {
      const [capture, sign, organize] = await Promise.all([
        fetch("/animations/capture.json").then((res) => res.json()),
        fetch("/animations/sign.json").then((res) => res.json()),
        fetch("/animations/organize.json").then((res) => res.json()),
      ]);
      setAnimations({ capture, sign, organize });
    };
    loadAnimations();
  }, []);
  return (
    <div className="grid w-full flex-1 place-items-center p-8">
      {/* <BackgroundBlur className="-top-40 md:-top-0" /> */}
      {/* box  */}
      <div className="relative flex w-full flex-col items-center overflow-hidden rounded-b-3xl bg-gradient-to-b from-white/0 to-white/5 pb-8">
        <div className="pointer-events-none absolute inset-0 top-1/3 right-0 bottom-auto left-0 -z-10 h-96 bg-gradient-to-b from-transparent via-transparent to-white/0"></div>

        {/* Gradient Background */}
        <div className="absolute inset-0 -z-20 overflow-hidden rounded-b-3xl">
          <div className="absolute inset-x-0 bottom-0 h-[550px] rounded-b-3xl bg-gradient-to-t from-[#4E6BFF]/70 via-[#4E6BFF]/10 to-transparent"></div>
        </div>

        {/* Circular Border Elements */}
        <div className="pointer-events-none absolute bottom-0 left-1/2 -z-10 h-full w-full -translate-x-1/2 overflow-hidden rounded-b-3xl">
          {/* <div className="absolute bottom-[-700px] left-1/2 h-[1400px] w-[1400px] -translate-x-1/2 rounded-full border border-white/25 dark:border-white/10"></div> */}
          <div className="absolute bottom-[-600px] left-1/2 h-[1200px] w-[1200px] -translate-x-1/2 rounded-full border border-white/35 dark:border-white/5"></div>
          <div className="absolute bottom-[-500px] left-1/2 h-[1000px] w-[1000px] -translate-x-1/2 rounded-full border border-white/40 dark:border-white/10"></div>
          <div className="absolute bottom-[-400px] left-1/2 h-[800px] w-[800px] -translate-x-1/2 rounded-full border border-white/45 dark:border-white/15"></div>
        </div>

        {/* First section - centered */}
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
            <br />
          </h1>
        </motion.div>
        {/* Feature Cards */}
        <div className="mt-6 w-full px-4">
          <motion.div
            className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.12,
                  delayChildren: 0.3,
                },
              },
            }}
          >
            <motion.div
              className="flex flex-col items-center gap-0 rounded-xl border border-[#4E6BFF]/20 bg-gradient-to-br from-[#4E6BFF]/10 to-[#4E6BFF]/5 p-4 backdrop-blur-md transition-all hover:border-[#4E6BFF]/40 hover:bg-gradient-to-br hover:from-[#4E6BFF]/15 hover:to-[#4E6BFF]/8"
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.95 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
              whileHover={{ scale: 1.05, y: -5, transition: { duration: 0.3, ease: "easeOut" } }}
            >
              <div className="text-center">
                <h4 className="text-base font-semibold text-[#000c51] dark:text-white">Capture & Convert</h4>
              </div>
              <div className="h-72 w-72">
                {animations.capture && <Lottie animationData={animations.capture} loop={true} />}
              </div>
            </motion.div>
            <motion.div
              className="flex flex-col items-center gap-0 rounded-xl border border-[#4E6BFF]/20 bg-gradient-to-br from-[#4E6BFF]/10 to-[#4E6BFF]/5 p-4 backdrop-blur-md transition-all hover:border-[#4E6BFF]/40 hover:bg-gradient-to-br hover:from-[#4E6BFF]/15 hover:to-[#4E6BFF]/8"
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.95 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
              whileHover={{ scale: 1.05, y: -5, transition: { duration: 0.3, ease: "easeOut" } }}
            >
              <div className="text-center">
                <h4 className="text-base font-semibold text-[#000c51] dark:text-white">Sign & Edit</h4>
              </div>
              <div className="h-72 w-72">
                {animations.sign && <Lottie animationData={animations.sign} loop={true} />}
              </div>
            </motion.div>
            <motion.div
              className="flex flex-col items-center gap-0 rounded-xl border border-[#4E6BFF]/20 bg-gradient-to-br from-[#4E6BFF]/10 to-[#4E6BFF]/5 p-4 backdrop-blur-md transition-all hover:border-[#4E6BFF]/40 hover:bg-gradient-to-br hover:from-[#4E6BFF]/15 hover:to-[#4E6BFF]/8"
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.95 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
              whileHover={{ scale: 1.05, y: -5, transition: { duration: 0.3, ease: "easeOut" } }}
            >
              <div className="text-center">
                <h4 className="text-base font-semibold text-[#000c51] dark:text-white">Organize & Export</h4>
              </div>
              <div className="h-72 w-72">
                {animations.organize && <Lottie animationData={animations.organize} loop={true} />}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Second section - Download Buttons at bottom */}
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
            Try <span className="font-bold">Spark PDF</span> for free now!
          </motion.p>
          <motion.div
            className="flex flex-col items-center gap-2 md:flex-row"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-xl border border-black/20 bg-black/30 p-2"
            >
              <GooglePlayButton size="lg" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-xl border border-black/20 bg-black/30 p-2"
            >
              <AppStoreButton size="lg" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

    </div>
  );
}
