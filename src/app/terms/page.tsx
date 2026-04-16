/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "motion/react";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function TermsPage() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-[#0a0a0a]">
      {/* Header */}
      <div className="sticky top-0 z-20 flex items-center border-b border-[#4E6BFF]/20 bg-white p-4 backdrop-blur-sm dark:bg-[#0a0a0a]">
        <button
          onClick={() => {
            if (window.history.length > 1) {
              router.back();
            } else {
              router.push("/");
            }
          }}
          className="rounded-lg border border-[#4E6BFF]/30 px-4 py-2 text-[#000c51] transition-colors hover:bg-[#4E6BFF]/10 md:px-6 dark:text-white"
        >
          <ChevronLeft size={16} />
        </button>

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
          
          <p className="font-bold">
            Terms & Conditions <br />
            Effective Date: April 9, 2026 · Last Updated: April 9, 2026
          </p>

          <p>
            These Terms & Conditions ("Terms") govern your access to and use of the SparkPDF mobile application, website, and related services (collectively, the "Service") provided by Forgebase ("Forgebase", "we", "our", or "us").
          </p>

          <div className="rounded-lg border border-blue-300 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-900/20">
            <p>
              By downloading, accessing, or using SparkPDF, you agree to these Terms. If you do not agree, please do not use the Service.
            </p>
          </div>

          <p className="font-semibold">1. About SparkPDF</p>
          <p>
            SparkPDF is a mobile application designed to help users scan, sign, fill, merge, organize, and prepare PDF documents on their devices. Certain features may require a paid subscription or purchase.
          </p>

          <p className="font-semibold">2. Eligibility</p>
          <p>
            You must comply with all applicable laws and platform rules when using SparkPDF. If you create an account, you are responsible for providing accurate information and keeping your login credentials secure.
          </p>

          <p className="font-semibold">3. Use of the Service</p>
          <p>
            You may use SparkPDF only for lawful purposes and in accordance with these Terms.
          </p>

          <p>You agree not to:</p>
          <ul className="list-disc list-inside">
            <li>use the Service in any way that violates applicable law or regulations</li>
            <li>interfere with or disrupt the Service</li>
            <li>attempt to reverse engineer, copy, or misuse the Service except as permitted by law</li>
            <li>use the Service to process or distribute unlawful, infringing, fraudulent, or harmful content</li>
          </ul>

          <p>
            We may suspend or restrict access to the Service if we reasonably believe misuse, abuse, or a violation of these Terms has occurred.
          </p>

          <p className="font-semibold">4. Accounts</p>
          <p>
            Some features of SparkPDF may be available without creating an account. If you choose to create an account, you are responsible for maintaining the confidentiality of your account credentials and for activities that occur under your account.
          </p>

          <p>
            You must notify us promptly if you believe your account has been used without authorization.
          </p>

          <p className="font-semibold">5. Document Processing and Storage</p>
          <div className="rounded-lg border border-gray-300 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-900/20 space-y-2">
            <p>
              SparkPDF is designed with a local-first approach. Document processing features such as scanning, signing, filling, merging, page management, and organization are performed on your device.
            </p>
            <p>
              Your documents are not uploaded to our servers for those document operations unless a feature clearly states otherwise or you choose to use a third-party service under your control.
            </p>
            <p>
              You are responsible for your own documents, backups, exports, and any sharing actions you initiate.
            </p>
          </div>

          <p className="font-semibold">6. Subscriptions, Purchases, and Premium Features</p>
          <p>
            SparkPDF may offer paid subscriptions, one-time purchases, or promotional access to unlock premium features.
          </p>

          <p>Premium features may include, for example:</p>
          <ul className="list-disc list-inside">
            <li>exporting finished documents</li>
            <li>saving, sharing, or printing documents</li>
            <li>access to certain premium tools or limits</li>
            <li>removal of watermarks</li>
            <li>other premium functionality described in the app</li>
          </ul>

          <p>
            All purchases are processed through the Apple App Store or Google Play, depending on your device and platform. We do not directly process payment card details.
          </p>

          <p>
            Prices, feature availability, and subscription options may change from time to time.
          </p>

          <p className="font-semibold">7. Auto-Renewing Subscriptions</p>
          <p>
            If you purchase an auto-renewing subscription, your subscription will automatically renew unless it is canceled before the end of the current billing period.
          </p>

          <p>
            Subscription management, billing, and cancellation are handled through your Apple App Store or Google Play account. You are responsible for reviewing and managing your subscription settings through the relevant platform.
          </p>

          <p className="font-semibold">8. Free Trials, Coupons, and Promotions</p>
          <div className="rounded-lg border border-yellow-300 bg-yellow-50 p-4 dark:border-yellow-800 dark:bg-yellow-900/20 space-y-2">
            <p>
              We may offer free trials, coupon codes, launch promotions, or other promotional offers from time to time.
            </p>
            <p>Such offers:</p>
            <ul className="list-disc list-inside">
              <li>may be limited by time, geography, eligibility, platform, or redemption count</li>
              <li>may not be combined unless explicitly stated</li>
              <li>may be modified, suspended, or withdrawn where permitted</li>
              <li>may be revoked in cases of abuse, fraud, or misuse</li>
            </ul>
            <p>Promotional offers have no cash value unless required by law.</p>
          </div>

          <p className="font-semibold">9. Refunds</p>
          <div className="rounded-lg border border-blue-300 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-900/20 space-y-2">
            <p>
              Refunds for subscriptions and purchases are generally handled by the Apple App Store or Google Play according to their own billing and refund policies.
            </p>
            <p>
              Except where required by law, Forgebase does not guarantee refunds for purchases processed by those platforms.
            </p>
          </div>

          <p className="font-semibold">10. Intellectual Property</p>
          <p>
            SparkPDF, including its software, design, branding, logos, interface, text, graphics, and related materials, is owned by Forgebase or its licensors and is protected by applicable intellectual property laws.
          </p>

          <p>
            These Terms do not grant you ownership of the Service or any intellectual property rights in SparkPDF, except for the limited right to use the Service in accordance with these Terms.
          </p>

          <p className="font-semibold">11. User Content</p>
          <p>
            You retain ownership of the documents and content you process using SparkPDF.
          </p>

          <p>
            You are solely responsible for ensuring you have the necessary rights and permissions to use, modify, sign, export, print, or share any content processed through the app.
          </p>

          <p>We do not claim ownership over your documents.</p>

          <p className="font-semibold">12. Availability and Changes</p>
          <p>
            We may update, improve, modify, suspend, or discontinue all or part of the Service at any time, with or without notice, to the extent permitted by law.
          </p>

          <p>
            We do not guarantee that SparkPDF will always be available, uninterrupted, error-free, or compatible with every device, file, or operating system version.
          </p>

          <p className="font-semibold">13. Disclaimer</p>
          <p>
            SparkPDF is provided on an "as is" and "as available" basis to the fullest extent permitted by law.
          </p>

          <p>
            While we aim to provide a reliable and high-quality experience, we do not guarantee that the Service will be uninterrupted, secure, error-free, or suitable for every particular purpose.
          </p>

          <p>
            You are responsible for reviewing your documents before exporting, printing, sharing, signing, or relying on them.
          </p>

          <p className="font-semibold">14. Limitation of Liability</p>
          <div className="rounded-lg border border-gray-300 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-900/20 space-y-2">
            <p>
              To the fullest extent permitted by law, Forgebase and its affiliates, officers, employees, and partners shall not be liable for any indirect, incidental, special, consequential, exemplary, or punitive damages, or for any loss of profits, revenue, data, goodwill, or business opportunities arising from or related to your use of SparkPDF.
            </p>
            <p>
              To the fullest extent permitted by law, our total liability for claims relating to the Service will not exceed the amount you paid, if any, for SparkPDF in the twelve (12) months preceding the event giving rise to the claim.
            </p>
            <p>
              Nothing in these Terms excludes liability that cannot be excluded under applicable law.
            </p>
          </div>

          <p className="font-semibold">15. Termination</p>
          <p>You may stop using SparkPDF at any time.</p>

          <p>
            We may suspend or terminate access to the Service, including promotional access or accounts, if we believe you have violated these Terms, abused the Service, or used it in a fraudulent or harmful way.
          </p>

          <p>
            Sections that by their nature should survive termination will continue to apply, including sections on intellectual property, disclaimers, limitation of liability, and governing provisions.
          </p>

          <p className="font-semibold">16. Account Deletion</p>
          <div className="rounded-lg border border-red-300 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20 space-y-2">
            <p>
              If SparkPDF offers account deletion, you may request deletion through the method described in the app or on our website.
            </p>
            <p>
              Deleting your account will remove the account data we store for your SparkPDF account, subject to legal obligations, fraud prevention, dispute resolution, and legitimate operational needs where applicable.
            </p>
            <p>
              Documents stored locally on your device are not automatically deleted unless you remove them yourself.
            </p>
            <p>
              Subscription and billing records managed by Apple App Store or Google Play remain subject to those platforms' own policies.
            </p>
          </div>

          <p className="font-semibold">17. Privacy</p>
          <p>
            Your use of SparkPDF is also governed by our Privacy Policy, which explains how we collect, use, and protect personal data.
          </p>

          <p>
            Privacy Policy:{" "}
            <Link
              href="https://getsparkpdf.app/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              https://getsparkpdf.app/privacy
            </Link>
          </p>

          <p className="font-semibold">18. Changes to These Terms</p>
          <p>
            We may update these Terms from time to time. When we do, we will update the "Last Updated" date above. Continued use of SparkPDF after updated Terms become effective means you accept the revised Terms.
          </p>

          <p className="font-semibold">19. Governing Law</p>
          <p>
            These Terms are governed by the laws applicable to Forgebase, unless otherwise required by mandatory consumer protection laws in your country or region.
          </p>

          <p className="font-semibold">20. Contact Us</p>
          <p>If you have questions about these Terms, you can contact us at:</p>
          <div className="rounded-lg border border-blue-300 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-900/20 space-y-1">
            <p>Forgebase</p>
            <p className="font-semibold">contact@forgebase.xyz</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}