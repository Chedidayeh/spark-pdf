/* eslint-disable @typescript-eslint/no-explicit-any */
import { AppStoreButton, GooglePlayButton } from "../base/buttons/app-store-buttons";
import { TypingAnimation } from "../ui/typing-animation";
import { motion } from "motion/react";

export function Hero() {
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
            className="mx-auto grid max-w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.25,
                },
              },
            }}
          >
            <motion.div
              className="flex flex-col items-center gap-4 rounded-xl border border-[#4E6BFF]/20 bg-gradient-to-br from-[#4E6BFF]/10 to-[#4E6BFF]/5 p-4 backdrop-blur-md transition-all will-change-transform hover:border-[#4E6BFF]/40 hover:bg-gradient-to-br hover:from-[#4E6BFF]/15 hover:to-[#4E6BFF]/8"
              variants={{
                hidden: { opacity: 0, y: 10, scale: 0.97, rotateY: -5 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  rotateY: 0,
                  transition: { duration: 0.6, ease: "easeInOut" },
                },
              }}
            >
              <div className="text-center">
                <h4 className="text-base font-semibold text-[#000c51] dark:text-white">Capture & Convert</h4>
              </div>
              <div className="w-full max-w-xl aspect-video will-change-transform">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-full w-full rounded-2xl object-cover"
                >
                  <source src="/animations/capture-optimized.mp4" type="video/mp4" />
                </video>
              </div>
            </motion.div>
            <motion.div
              className="flex flex-col items-center gap-4 rounded-xl border border-[#4E6BFF]/20 bg-gradient-to-br from-[#4E6BFF]/10 to-[#4E6BFF]/5 p-4 backdrop-blur-md transition-all will-change-transform hover:border-[#4E6BFF]/40 hover:bg-gradient-to-br hover:from-[#4E6BFF]/15 hover:to-[#4E6BFF]/8"
              variants={{
                hidden: { opacity: 0, y: 10, scale: 0.97, rotateY: -5 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  rotateY: 0,
                  transition: { duration: 0.6, ease: "easeInOut" },
                },
              }}
            >
              <div className="text-center">
                <h4 className="text-base font-semibold text-[#000c51] dark:text-white">Scan & Extract</h4>
              </div>
              <div className="w-full max-w-xl aspect-video will-change-transform">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-full w-full rounded-2xl object-cover"
                >
                  <source src="/animations/stamp-optimized.mp4" type="video/mp4" />
                </video>
              </div>
            </motion.div>
            <motion.div
              className="flex flex-col items-center gap-4 rounded-xl border border-[#4E6BFF]/20 bg-gradient-to-br from-[#4E6BFF]/10 to-[#4E6BFF]/5 p-4 backdrop-blur-md transition-all will-change-transform hover:border-[#4E6BFF]/40 hover:bg-gradient-to-br hover:from-[#4E6BFF]/15 hover:to-[#4E6BFF]/8"
              variants={{
                hidden: { opacity: 0, y: 10, scale: 0.97, rotateY: -5 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  rotateY: 0,
                  transition: { duration: 0.6, ease: "easeInOut" },
                },
              }}
            >
              <div className="text-center">
                <h4 className="text-base font-semibold text-[#000c51] dark:text-white">Sign & Edit</h4>
              </div>
              <div className="w-full max-w-xl aspect-video will-change-transform">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-full w-full rounded-2xl object-cover"
                >
                  <source src="/animations/sign-optimized.mp4" type="video/mp4" />
                </video>
              </div>
            </motion.div>
            <motion.div
              className="flex flex-col items-center gap-4 rounded-xl border border-[#4E6BFF]/20 bg-gradient-to-br from-[#4E6BFF]/10 to-[#4E6BFF]/5 p-4 backdrop-blur-md transition-all will-change-transform hover:border-[#4E6BFF]/40 hover:bg-gradient-to-br hover:from-[#4E6BFF]/15 hover:to-[#4E6BFF]/8"
              variants={{
                hidden: { opacity: 0, y: 10, scale: 0.97, rotateY: -5 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  rotateY: 0,
                  transition: { duration: 0.6, ease: "easeInOut" },
                },
              }}
            >
              <div className="text-center">
                <h4 className="text-base font-semibold text-[#000c51] dark:text-white">Organize & Export</h4>
              </div>
              <div className="w-full max-w-xl aspect-video will-change-transform">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-full w-full rounded-2xl object-cover"
                >
                  <source src="/animations/organize-optimized.mp4" type="video/mp4" />
                </video>
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
            Try <span className="font-bold">Spark PDF</span> now !
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
        className="z-10 w-full border-white/10 px-4 pt-8 pb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-xs text-[#000c51]/80 md:text-sm dark:text-white/60">
          <p>&copy; {new Date().getFullYear()} ForgeBase. All rights reserved.</p>
        </div>
      </motion.div>
    </div>
  );
}
