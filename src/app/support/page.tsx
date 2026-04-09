/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/navigation";
import {  ChevronLeft } from "lucide-react";

export default function SupportPage() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-[#0a0a0a]">
      <Head>
        <title>Support - SparkPDF</title>
        <meta
          name="description"
          content="Need help with SparkPDF? Contact our support team for assistance with questions, issues, or feedback."
        />
      </Head>

      {/* Header */}
      <div className="sticky top-0 z-20 flex items-center border-b border-[#4E6BFF]/20 bg-white p-4 backdrop-blur-sm dark:bg-[#0a0a0a]">
        <div
          aria-label="Go back to homepage"
          className="rounded-lg border border-[#4E6BFF]/30 px-4 py-2 text-[#000c51] transition-colors hover:bg-[#4E6BFF]/10 md:px-6 dark:text-white"
          onClick={() => router.back()}
        >
          <ChevronLeft size={16} />
        </div>
        <h1 className="absolute left-1/2 -translate-x-1/2 text-lg font-bold text-[#000c51] md:text-xl dark:text-white">
          Support
        </h1>
      </div>

      {/* Content */}
      <motion.div
        className="flex-1 p-6 md:p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mx-auto max-w-3xl space-y-6 text-sm leading-relaxed text-[#000c51]/80 md:text-base dark:text-white/80">
          <p className="text-lg font-semibold text-[#000c51] dark:text-white">Need help with SparkPDF?</p>
          <p>We're here to help you with any questions, issues, or feedback related to the SparkPDF app.</p>

          {/* Contact Support */}
          <p className="pt-4 font-semibold text-[#000c51] dark:text-white">Contact Support</p>
          <div className="space-y-2 rounded-lg border border-blue-300 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-900/20">
            <p>If you need assistance, please reach out to us at:</p>
            <p>
              <span className="font-semibold">Email:</span> contact@forgebase.xyz
            </p>
            <p>
              We typically respond within <span className="font-semibold">24–48 hours</span>.
            </p>
          </div>

          {/* Legal */}
          <p className="pt-4 font-semibold text-[#000c51] dark:text-white">Legal</p>
          <div className="space-y-2 rounded-lg border border-gray-300 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-900/20">
            <p>
              <Link href="/privacy" className="text-blue-600 hover:underline dark:text-blue-400">
                Privacy Policy
              </Link>
            </p>
          </div>

          {/* Company Info */}
          <p className="pt-4 font-semibold text-[#000c51] dark:text-white">Company Information</p>
          <p>SparkPDF is developed and operated by Forgebase.</p>

          {/* Additional Info */}
          <p className="pt-4 font-semibold text-[#000c51] dark:text-white">Additional Information</p>
          <div className="space-y-2 rounded-lg border border-yellow-300 bg-yellow-50 p-4 dark:border-yellow-800 dark:bg-yellow-900/20">
            <p>SparkPDF offers optional subscriptions that unlock advanced features.</p>
            <p>Basic app functionality remains available without a subscription.</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
