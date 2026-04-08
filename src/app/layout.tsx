import type { Metadata } from "next";
import { Toaster } from "sonner";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { getDevice } from "@/lib/device";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "SparkPDF",
  description:
    "A powerful document scanning and management app that turns your phone into a portable scanner. Capture, edit, and organize your documents with ease, creating clean PDFs in seconds.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const userAgent = (await headers()).get("user-agent") || "";
  console.log("User Agent:", userAgent);
  const device = getDevice(userAgent);

  if (device === "ios") {
    redirect("https://apps.apple.com");
  }

  if (device === "android") {
    redirect("https://play.google.com/store/apps");
  }
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
