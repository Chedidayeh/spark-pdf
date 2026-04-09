"use client";

import { motion } from "motion/react";
import Link from "next/link";

export default function DeleteAccountPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-[#0a0a0a]">
      {/* Header with back button */}
      <div className="sticky top-0 z-10 flex items-center border-b border-[#4E6BFF]/20 bg-white p-4 backdrop-blur-sm dark:bg-[#0a0a0a]">
        <Link
          href="/"
          className="rounded-lg border border-[#4E6BFF]/30 px-4 md:px-6 py-2 text-[#000c51] transition-colors hover:bg-[#4E6BFF]/10 dark:text-white"
        >
          Back
        </Link>

        <h1 className="absolute left-1/2 -translate-x-1/2 text-lg md:text-xl font-bold text-[#000c51] dark:text-white">
          Delete Account
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
            If you would like to delete your SparkPDF account, you can request account deletion by following the steps
            below.
          </p>
          <p className="pt-4 font-semibold text-[#000c51] dark:text-white">What Gets Deleted</p>
          <p>
            When your account is deleted, the following data held by SparkPDF will be permanently removed from our
            systems:
          </p>
          <p>
            • Your email address and profile information
            <br />
            • Account preferences and settings synced to your account
            <br />• Any entitlement or promotional records associated with your account
          </p>
          <p className="pt-4 font-semibold text-[#000c51] dark:text-white">Please note:</p>
          <div className="space-y-3 rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-900/20">
            <p>
              ✓ Documents, signatures, and stamps stored locally on your device are not affected by account deletion —
              they remain on your device
            </p>
            <p>
              ✓ Deleting your SparkPDF account does not cancel any App Store or Google Play subscriptions — those are
              managed separately by the respective platform
            </p>
            <p>✓ Account deletion is permanent and cannot be undone</p>
          </div>
          <p className="pt-4 font-semibold text-[#000c51] dark:text-white">How to Request Account Deletion</p>
          <p>
            To request deletion of your account, send an email to the address below from the email associated with your
            SparkPDF account:
          </p>
          <div className="rounded-lg border border-[#4E6BFF]/30 bg-[#4E6BFF]/10 p-4 dark:bg-[#4E6BFF]/5">
            <p className="mb-2 font-semibold text-[#000c51] dark:text-white">contact@forgebase.xyz</p>
            <p className="text-xs">Subject: SparkPDF Account Deletion Request</p>
          </div>
          <p>
            We will process your request and complete the deletion of your account within 30 days of receiving it. You
            will receive a confirmation email once your account has been deleted.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
