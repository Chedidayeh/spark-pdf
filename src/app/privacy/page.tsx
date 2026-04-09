/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "motion/react";
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-[#0a0a0a]">
      {/* Header with back button */}
      <div className="sticky top-0 z-10 flex items-center border-b border-[#4E6BFF]/20 bg-white p-4 backdrop-blur-sm dark:bg-[#0a0a0a]">
        <Link
          href="/"
          className="rounded-lg  border border-[#4E6BFF]/30 px-4 md:px-6 py-2 text-[#000c51] transition-colors hover:bg-[#4E6BFF]/10 dark:text-white"
        >
          Back
        </Link>

        <h1 className="absolute left-1/2 -translate-x-1/2 text-lg md:text-xl font-bold text-[#000c51] dark:text-white">
          Privacy Policy
        </h1>
      </div>

      {/* Content */}
      <motion.div
        className="flex-1 p-6 md:p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mx-auto max-w-3xl space-y-4 text-sm text-[#000c51]/80 md:text-base dark:text-white/80">
          <p>
            <strong>Last Updated: April 8, 2026</strong>
          </p>
          <p>
            This Privacy Policy describes how SparkPDF ("we", "us", or "the app"), developed by Forgebase, handles
            information when you use our mobile application.
          </p>
          <p>
            SparkPDF is a mobile application that allows you to scan documents, sign and fill PDF files, add signatures,
            stamps, text, and dates, reorder or delete pages, merge documents, organize files, and export, print, or
            share your documents.
          </p>
          <p>
            SparkPDF is designed with a privacy-first approach. All document processing happens directly on your device.
          </p>
          <p className="font-semibold text-[#000c51] dark:text-white">Key privacy facts:</p>
          <div className="space-y-3 rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-900/20">
            <p>✓ PDF documents are processed locally on your device</p>
            <p>✓ Documents are not uploaded to the developer's servers</p>
            <p>✓ Your files remain on your device unless you explicitly choose to export, share, or back them up</p>
            <p>✓ The developer cannot access your documents</p>
          </div>
          <p className="pt-4 font-semibold text-[#000c51] dark:text-white">User Accounts</p>
          <p>Creating an account in SparkPDF is optional.</p>
          <p>If you choose to create an account, the following information may be collected:</p>
          <p>
            Email address
            <br />
            Display name or optional profile information you provide
          </p>
          <p>
            This information is used only to support account functionality and improve your experience within the app.
          </p>
          <p className="pt-4 font-semibold text-[#000c51] dark:text-white">Analytics and Diagnostics</p>
          <p>
            SparkPDF uses analytics and diagnostic tools to help improve the app and ensure reliability. These tools may
            collect limited technical information such as:
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
          <p>These services may be provided by trusted partners such as Google Firebase.</p>
          <p>
            This information is used only to understand how the app is used and to improve performance and stability. No
            document contents or file data are collected through these tools.
          </p>
          <p className="pt-4 font-semibold text-[#000c51] dark:text-white">Data Storage</p>
          <p>User files such as PDFs, signatures, and stamps are stored locally on your device.</p>
          <p>
            SparkPDF does not upload your documents to the developer's servers for scanning, signing, filling, merging,
            organizing, or any other document operation. Your files remain on your device unless you explicitly choose
            to export, print, share, or back them up using services you control.
          </p>
          <p className="pt-4 font-semibold text-[#000c51] dark:text-white">Contact</p>
          <p>If you have any questions about this Privacy Policy, you may contact us at:</p>
          <p>
            <span className="font-semibold">contact@forgebase.xyz</span>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
