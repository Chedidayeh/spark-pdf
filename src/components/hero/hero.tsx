/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { AppStoreButton, GooglePlayButton } from "../base/buttons/app-store-buttons";
import { TypingAnimation } from "../ui/typing-animation";
import { motion } from "motion/react";
import { useState } from "react";

export function Hero() {
  const [activeModal, setActiveModal] = useState<"privacy" | "delete" | null>(null);

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
            className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
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
        className="z-10 flex items-center justify-between w-full border-white/10 px-4 pt-8 pb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-xs text-[#000c51]/80 md:text-sm dark:text-white/60">
          <p>&copy; {new Date().getFullYear()} ForgeBase. All rights reserved.</p>
        </div>
        <div className="mx-auto flex max-w-6xl flex-row items-center gap-6 text-xs text-[#000c51]/80 md:text-sm dark:text-white/60">
          <button
            onClick={() => setActiveModal("privacy")}
            className="cursor-pointer hover:text-[#000c51] dark:hover:text-white transition-colors"
          >
            Privacy Policy
          </button>
          <button
            onClick={() => setActiveModal("delete")}
            className="cursor-pointer hover:text-[#000c51] dark:hover:text-white transition-colors"
          >
            Delete Account
          </button>
        </div>
      </motion.div>

      {/* Privacy Policy Modal */}
      {activeModal === "privacy" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <motion.div
            className="w-full max-w-2xl rounded-2xl bg-white dark:bg-[#0a0a0a] border border-[#4E6BFF]/20 shadow-xl max-h-[80vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="sticky top-0 flex items-center justify-between border-b border-[#4E6BFF]/20 bg-white dark:bg-[#0a0a0a] p-6 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-[#000c51] dark:text-white">Privacy Policy</h2>
              <button
                onClick={() => setActiveModal(null)}
                className="text-[#000c51]/60 dark:text-white/60 hover:text-[#000c51] dark:hover:text-white transition-colors text-2xl leading-none"
              >
                ×
              </button>
            </div>
            <div className="p-6 text-[#000c51]/80 dark:text-white/80 space-y-4 text-sm md:text-base whitespace-pre-line">
              <p>
                <strong>Last Updated: April 8, 2026</strong>
              </p>
              <p>
                This Privacy Policy describes how SparkPDF ("we", "us", or "the app"), developed by Forgebase, handles information when you use our mobile application.
              </p>
              <p>
                SparkPDF is a mobile application that allows you to scan documents, sign and fill PDF files, add signatures, stamps, text, and dates, reorder or delete pages, merge documents, organize files, and export, print, or share your documents.
              </p>
              <p>
                SparkPDF is designed with a privacy-first approach. All document processing happens directly on your device.
              </p>
              <p className="font-semibold text-[#000c51] dark:text-white">Key privacy facts:</p>
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 space-y-3">
                <p>
                  ✓ PDF documents are processed locally on your device
                </p>
                <p>
                  ✓ Documents are not uploaded to the developer's servers
                </p>
                <p>
                  ✓ Your files remain on your device unless you explicitly choose to export, share, or back them up
                </p>
                <p>
                  ✓ The developer cannot access your documents
                </p>
              </div>
              <p className="font-semibold text-[#000c51] dark:text-white pt-4">User Accounts</p>
              <p>
                Creating an account in SparkPDF is optional.
              </p>
              <p>
                If you choose to create an account, the following information may be collected:
              </p>
              <p>
                Email address
                <br />
                Display name or optional profile information you provide
              </p>
              <p>
                This information is used only to support account functionality and improve your experience within the app.
              </p>
              <p className="font-semibold text-[#000c51] dark:text-white pt-4">Analytics and Diagnostics</p>
              <p>
                SparkPDF uses analytics and diagnostic tools to help improve the app and ensure reliability. These tools may collect limited technical information such as:
              </p>
              <p>
                Device type
                <br />
                Operating system version
                <br />
                App version
                <br />
                Usage events within the app
                <br />
                Crash reports and error diagnostics
              </p>
              <p>
                These services may be provided by trusted partners such as Google Firebase.
              </p>
              <p>
                This information is used only to understand how the app is used and to improve performance and stability. No document contents or file data are collected through these tools.
              </p>
              <p className="font-semibold text-[#000c51] dark:text-white pt-4">Data Storage</p>
              <p>
                User files such as PDFs, signatures, and stamps are stored locally on your device.
              </p>
              <p>
                SparkPDF does not upload your documents to the developer's servers for scanning, signing, filling, merging, organizing, or any other document operation. Your files remain on your device unless you explicitly choose to export, print, share, or back them up using services you control.
              </p>
              <p className="font-semibold text-[#000c51] dark:text-white pt-4">Contact</p>
              <p>
                If you have any questions about this Privacy Policy, you may contact us at:
              </p>
              <p>
                <span className="font-semibold">contact@forgebase.xyz</span>
              </p>
            </div>
            <div className="border-t border-[#4E6BFF]/20 bg-white dark:bg-[#0a0a0a] p-6 flex justify-end gap-3 sticky bottom-0">
              <button
                onClick={() => setActiveModal(null)}
                className="px-6 py-2 rounded-lg border border-[#4E6BFF]/30 text-[#000c51] dark:text-white hover:bg-[#4E6BFF]/10 transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Delete Account Modal */}
      {activeModal === "delete" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <motion.div
            className="w-full max-w-2xl rounded-2xl bg-white dark:bg-[#0a0a0a] border shadow-xl max-h-[80vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-between border-b  p-6 sticky top-0 bg-white dark:bg-[#0a0a0a] backdrop-blur-sm">
              <h2 className="text-2xl font-bold ">Delete Your Account</h2>
              <button
                onClick={() => setActiveModal(null)}
                className="text-[#000c51]/60 dark:text-white/60 hover:text-[#000c51] dark:hover:text-white transition-colors text-2xl leading-none"
              >
                ×
              </button>
            </div>
            <div className="p-6 text-[#000c51]/80 dark:text-white/80 space-y-4 text-sm md:text-base">
              <p>
                <strong>Last Updated: April 8, 2026</strong>
              </p>
              <p>
                If you would like to delete your SparkPDF account, you can request account deletion by following the steps below.
              </p>
              <p className="font-semibold text-[#000c51] dark:text-white pt-4">What Gets Deleted</p>
              <p>
                When your account is deleted, the following data held by SparkPDF will be permanently removed from our systems:
              </p>
              <p>
                • Your email address and profile information
                <br />
                • Account preferences and settings synced to your account
                <br />
                • Any entitlement or promotional records associated with your account
              </p>
              <p className="font-semibold text-[#000c51] dark:text-white pt-4">Please note:</p>
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 space-y-3">
                <p>
                  ✓ Documents, signatures, and stamps stored locally on your device are not affected by account deletion — they remain on your device
                </p>
                <p>
                  ✓ Deleting your SparkPDF account does not cancel any App Store or Google Play subscriptions — those are managed separately by the respective platform
                </p>
                <p>
                  ✓ Account deletion is permanent and cannot be undone
                </p>
              </div>
              <p className="font-semibold text-[#000c51] dark:text-white pt-4">How to Request Account Deletion</p>
              <p>
                To request deletion of your account, send an email to the address below from the email associated with your SparkPDF account:
              </p>
              <div className="bg-[#4E6BFF]/10 dark:bg-[#4E6BFF]/5 border border-[#4E6BFF]/30 rounded-lg p-4">
                <p className="font-semibold text-[#000c51] dark:text-white mb-2">contact@forgebase.xyz</p>
                <p className="text-xs">Subject: SparkPDF Account Deletion Request</p>
              </div>
              <p>
                We will process your request and complete the deletion of your account within 30 days of receiving it. You will receive a confirmation email once your account has been deleted.
              </p>
            </div>
            <div className="border-t  bg-white dark:bg-[#0a0a0a] p-6 flex justify-end gap-3 sticky bottom-0">
              <button
                onClick={() => setActiveModal(null)}
                className="px-6 py-2 rounded-lg border border-[#4E6BFF]/30 text-[#000c51] dark:text-white hover:bg-[#4E6BFF]/10 transition-colors"
              >
                Cancel
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
