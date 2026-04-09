/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "motion/react";
import Head from "next/head";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function TermsPage() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-[#0a0a0a]">
      <Head>
        <title>Terms & Conditions - SparkPDF</title>
        <meta name="description" content="Read the Terms & Conditions for using SparkPDF." />
      </Head>

      {/* Header */}
      <div className="sticky top-0 z-20 flex items-center border-b border-[#4E6BFF]/20 bg-white p-4 backdrop-blur-sm dark:bg-[#0a0a0a]">
        <div
          onClick={() => router.back()}
          className="rounded-lg border border-[#4E6BFF]/30 px-4 py-2 text-[#000c51] transition-colors hover:bg-[#4E6BFF]/10 md:px-6 dark:text-white"
        >
          <ChevronLeft size={16} />
        </div>

        <h1 className="absolute left-1/2 -translate-x-1/2 text-lg font-bold text-[#000c51] md:text-xl dark:text-white">
          Terms & Conditions
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
          <p>
            <strong>Effective Date: April 9, 2026 · Last Updated: April 9, 2026</strong>
          </p>

          <p>
            These Terms & Conditions ("Terms") govern your access to and use of the SparkPDF mobile application,
            website, and related services (the "Service") provided by Forgebase.
          </p>

          <p>
            By downloading, accessing, or using SparkPDF, you agree to these Terms. If you do not agree, please do not
            use the Service.
          </p>

          {/* About */}
          <p className="font-semibold text-[#000c51] dark:text-white">1. About SparkPDF</p>
          <p>
            SparkPDF helps users scan, sign, fill, merge, organize, and prepare PDF documents. Some features may require
            a subscription or purchase.
          </p>

          {/* Eligibility */}
          <p className="font-semibold text-[#000c51] dark:text-white">2. Eligibility</p>
          <p>
            You must comply with applicable laws and platform rules. You are responsible for accurate account info and
            keeping credentials secure.
          </p>

          {/* Use */}
          <p className="font-semibold text-[#000c51] dark:text-white">3. Use of the Service</p>
          <div className="rounded-lg border border-red-300 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20">
            <p>You agree NOT to:</p>
            <ul className="list-inside list-disc">
              <li>Violate laws or regulations</li>
              <li>Disrupt or interfere with the Service</li>
              <li>Reverse engineer or misuse the Service</li>
              <li>Process unlawful or harmful content</li>
            </ul>
            <p>We may suspend access if misuse is detected.</p>
          </div>

          {/* Accounts */}
          <p className="font-semibold text-[#000c51] dark:text-white">4. Accounts</p>
          <div className="rounded-lg border border-green-300 bg-green-50 p-4 dark:border-green-800 dark:bg-green-900/20">
            <p>Accounts are optional.</p>
            <p>You are responsible for your credentials and all activity under your account.</p>
          </div>

          {/* Processing */}
          <p className="font-semibold text-[#000c51] dark:text-white">5. Document Processing and Storage</p>
          <div className="rounded-lg border border-blue-300 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-900/20">
            <p>Documents are processed locally on your device.</p>
            <p>They are NOT uploaded unless explicitly stated or you choose to use external services.</p>
            <p>You are responsible for backups and sharing.</p>
          </div>

          {/* Premium */}
          <p className="font-semibold text-[#000c51] dark:text-white">6. Subscriptions & Premium Features</p>
          <div className="rounded-lg border border-yellow-300 bg-yellow-50 p-4 dark:border-yellow-800 dark:bg-yellow-900/20">
            <p>Premium features may include:</p>
            <ul className="list-inside list-disc">
              <li>Exporting documents</li>
              <li>Printing or sharing</li>
              <li>Removing watermarks</li>
            </ul>
            <p>Payments are handled by Apple App Store or Google Play.</p>
          </div>

          {/* Subscriptions */}
          <p className="font-semibold text-[#000c51] dark:text-white">7. Auto-Renewing Subscriptions</p>
          <p>Subscriptions renew automatically unless canceled. Manage them via your app store account.</p>

          {/* Promotions */}
          <p className="font-semibold text-[#000c51] dark:text-white">8. Promotions</p>
          <p>Promotions may be limited and can be modified or revoked.</p>

          {/* Refunds */}
          <p className="font-semibold text-[#000c51] dark:text-white">9. Refunds</p>
          <p>Refunds are handled by Apple or Google Play policies.</p>

          {/* IP */}
          <p className="font-semibold text-[#000c51] dark:text-white">10. Intellectual Property</p>
          <p>SparkPDF and its assets are owned by Forgebase. You are granted only a limited usage right.</p>

          {/* User Content */}
          <p className="font-semibold text-[#000c51] dark:text-white">11. User Content</p>
          <p>You retain ownership of your documents. You are responsible for content you process.</p>

          {/* Availability */}
          <p className="font-semibold text-[#000c51] dark:text-white">12. Availability</p>
          <p>Service may change, pause, or stop at any time without guarantee of uptime.</p>

          {/* Disclaimer */}
          <p className="font-semibold text-[#000c51] dark:text-white">13. Disclaimer</p>
          <div className="rounded-lg border border-gray-300 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900/20">
            <p>Service is provided "as is" without guarantees.</p>
            <p>You should review documents before relying on them.</p>
          </div>

          {/* Liability */}
          <p className="font-semibold text-[#000c51] dark:text-white">14. Limitation of Liability</p>
          <div className="rounded-lg border border-red-300 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20">
            <p>Forgebase is not liable for indirect damages or losses.</p>
            <p>Liability is limited to the amount you paid (if any).</p>
          </div>

          {/* Termination */}
          <p className="font-semibold text-[#000c51] dark:text-white">15. Termination</p>
          <p>You can stop using the app anytime. We may suspend access for violations.</p>

          {/* Deletion */}
          <p className="font-semibold text-[#000c51] dark:text-white">16. Account Deletion</p>
          <p>Account data can be deleted upon request. Local files remain on your device.</p>

          {/* Privacy */}
          <p className="font-semibold text-[#000c51] dark:text-white">17. Privacy</p>
          <p>See our Privacy Policy: https://getsparkpdf.app/privacy</p>

          {/* Changes */}
          <p className="font-semibold text-[#000c51] dark:text-white">18. Changes</p>
          <p>Continued use after updates means you accept new Terms.</p>

          {/* Law */}
          <p className="font-semibold text-[#000c51] dark:text-white">19. Governing Law</p>
          <p>Governed by applicable laws unless consumer laws require otherwise.</p>

          {/* Contact */}
          <p className="font-semibold text-[#000c51] dark:text-white">20. Contact Us</p>
          <p>Forgebase</p>
          <p className="font-semibold">contact@forgebase.xyz</p>
          <p>https://getsparkpdf.app</p>
        </div>
      </motion.div>
    </div>
  );
}
