/* eslint-disable react/no-unescaped-entities */
"use client";

import { ChevronLeft } from "lucide-react";
import { motion } from "motion/react";
import Head from "next/head";
import { useRouter } from "next/navigation";

export default function PrivacyPage() {
    const router = useRouter();

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-[#0a0a0a]">
      <Head>
        <title>Privacy Policy - SparkPDF</title>
        <meta
          name="description"
          content="Learn how SparkPDF handles your documents and privacy. All processing happens locally on your device."
        />
      </Head>

      {/* Header */}
      <div className="sticky top-0 z-20 flex items-center border-b border-[#4E6BFF]/20 bg-white p-4 backdrop-blur-sm dark:bg-[#0a0a0a]">
        <div
          className="rounded-lg border border-[#4E6BFF]/30 px-4 md:px-6 py-2 text-[#000c51] transition-colors hover:bg-[#4E6BFF]/10 dark:text-white"
          onClick={() => router.back()}
        >
                    <ChevronLeft size={16} />

        </div>
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
        <div className="mx-auto max-w-3xl space-y-6 text-sm md:text-base text-[#000c51]/80 dark:text-white/80 leading-relaxed">

          <p><strong>Last Updated: April 8, 2026</strong></p>

          <p>
            This Privacy Policy describes how SparkPDF ("we", "us", or "the app"), developed by Forgebase, handles information when you use our mobile application.
          </p>

          <p>
            SparkPDF is a mobile application that allows you to scan documents, sign and fill PDF files, add signatures, stamps, text, and dates, reorder or delete pages, merge documents, organize files, and export, print, or share your documents.
          </p>

          <p>
            SparkPDF is designed with a privacy-first approach. All document processing happens directly on your device.
          </p>

          {/* Key privacy facts */}
          <p className="font-semibold text-[#000c51] dark:text-white">Key privacy facts:</p>
          <div className="space-y-2 rounded-lg border border-blue-300 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-900/20">
            <p>✓ PDF documents are processed locally on your device</p>
            <p>✓ Documents are not uploaded to the developer's servers</p>
            <p>✓ Your files remain on your device unless you explicitly choose to export, share, or back them up</p>
            <p>✓ The developer cannot access your documents</p>
          </div>

          {/* User Accounts */}
          <p className="pt-4 font-semibold text-[#000c51] dark:text-white">User Accounts</p>
          <div className="space-y-2 rounded-lg border border-green-300 bg-green-50 p-4 dark:border-green-800 dark:bg-green-900/20">
            <p>Creating an account in SparkPDF is optional.</p>
            <p>If you choose to create an account, the following information may be collected:</p>
            <ul className="list-disc list-inside">
              <li>Email address</li>
              <li>Display name or optional profile information you provide</li>
            </ul>
            <p>This information is used only to support account functionality and improve your experience within the app.</p>
          </div>

          {/* Analytics */}
          <p className="pt-4 font-semibold text-[#000c51] dark:text-white">Analytics and Diagnostics</p>
          <div className="space-y-2 rounded-lg border border-indigo-300 bg-indigo-50 p-4 dark:border-indigo-800 dark:bg-indigo-900/20">
            <p>SparkPDF uses analytics and diagnostic tools to help improve the app and ensure reliability. These tools may collect limited technical information such as:</p>
            <ul className="list-disc list-inside">
              <li>Device type</li>
              <li>Operating system version</li>
              <li>App version</li>
              <li>Usage events within the app</li>
              <li>Crash reports and error diagnostics</li>
            </ul>
            <p>These services may be provided by trusted partners such as Google Firebase.</p>
            <p>No document contents or file data are collected through these tools.</p>
          </div>

          {/* Premium Features */}
          <p className="pt-4 font-semibold text-[#000c51] dark:text-white">Premium Features and Purchases</p>
          <div className="space-y-2 rounded-lg border border-yellow-300 bg-yellow-50 p-4 dark:border-yellow-800 dark:bg-yellow-900/20">
            <p>SparkPDF allows you to scan, sign, fill, organize, and merge PDF documents within the app. However, exporting, printing, or sharing the final document may require a purchase or subscription.</p>
            <p>Payments and subscriptions are processed securely through the Apple App Store or Google Play Store. The developer does not collect or store payment card information.</p>
            <p>You may receive promotional access, coupons, or limited-time trial offers that temporarily unlock premium functionality.</p>
          </div>

          {/* Data Storage */}
          <p className="pt-4 font-semibold text-[#000c51] dark:text-white">Data Storage</p>
          <div className="space-y-2 rounded-lg border border-teal-300 bg-teal-50 p-4 dark:border-teal-800 dark:bg-teal-900/20">
            <p>User files such as PDFs, signatures, and stamps are stored locally on your device.</p>
            <p>SparkPDF does not upload your documents to the developer's servers for any document operation. Files remain on your device unless you explicitly export, print, share, or back them up using services you control.</p>
          </div>

          {/* Permissions */}
          <p className="pt-4 font-semibold text-[#000c51] dark:text-white">Permissions Used by the App</p>
          <div className="space-y-2 rounded-lg border border-purple-300 bg-purple-50 p-4 dark:border-purple-800 dark:bg-purple-900/20">
            <p>SparkPDF may request access to certain device features to provide functionality:</p>
            <ul className="list-disc list-inside">
              <li>Camera – Used for scanning documents</li>
              <li>Photos or Media Library – Used to import images or documents</li>
              <li>Files or File Access – Used to open, import, organize, and save PDF files</li>
            </ul>
            <p>These permissions are only to enable app features and can be managed or revoked at any time in your device settings.</p>
          </div>

          {/* Advertising */}
          <p className="pt-4 font-semibold text-[#000c51] dark:text-white">Advertising</p>
          <div className="space-y-2 rounded-lg border border-gray-300 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900/20">
            <p>SparkPDF does not display advertisements and does not use advertising networks.</p>
          </div>

          {/* Children */}
          <p className="pt-4 font-semibold text-[#000c51] dark:text-white">Children's Privacy</p>
          <div className="space-y-2 rounded-lg border border-pink-300 bg-pink-50 p-4 dark:border-pink-800 dark:bg-pink-900/20">
            <p>SparkPDF is not intended for children under 13. The app does not knowingly collect personal information from children.</p>
            <p>If you believe a child has provided personal information through the app, please contact us so we can take appropriate action.</p>
          </div>

          {/* Data Security */}
          <p className="pt-4 font-semibold text-[#000c51] dark:text-white">Data Security</p>
          <div className="space-y-2 rounded-lg border border-red-300 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20">
            <p>SparkPDF is designed to protect your privacy. Because document processing occurs locally on your device, documents are not transmitted to external servers controlled by the developer.</p>
            <p>Reasonable measures are taken to protect any information associated with user accounts.</p>
          </div>

          {/* Changes */}
          <p className="pt-4 font-semibold text-[#000c51] dark:text-white">Changes to This Privacy Policy</p>
          <p>This Privacy Policy may be updated from time to time. If changes are made, the "Last Updated" date at the top of this page will be updated accordingly.</p>
          <p>We encourage you to review this policy periodically.</p>

          {/* Contact */}
          <p className="pt-4 font-semibold text-[#000c51] dark:text-white">Contact</p>
          <p>If you have any questions about this Privacy Policy, you may contact us at:</p>
          <p><span className="font-semibold">contact@forgebase.xyz</span></p>

          <p>SparkPDF is developed by Forgebase.</p>
        </div>
      </motion.div>
    </div>
  );
}