import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MobileBottomNav } from "@/components/mobile-bottom-nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Platform Crowdfunding Indonesia",
  description: "Platform crowdfunding terpercaya untuk membantu sesama",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
        <MobileBottomNav />
      </body>
    </html>
  );
}
