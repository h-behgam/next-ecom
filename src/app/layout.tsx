import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeaderLayout from "@/components/layout/header";
import FooterLayout from "@/components/layout/footer";
import { vaziri } from "@/lib/fonts";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gadget shop",
  description: "We offer the best experience for eshopping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased font-iranSans`}>
        <HeaderLayout />
        {children}
        <FooterLayout />
      </body>
    </html>
  );
}
