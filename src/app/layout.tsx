import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Senseflows",
  description: "SaaS Landing Page with React, Next.js, TailwindCSS & Framer Motion",
  icons: {
    icon: [
      {
        url: 'https://res.cloudinary.com/dvgtcyyzh/image/upload/v1733690720/logosss_gb1chv.webp',
        type: 'image/webp',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <body className={twMerge(dmSans.className, "antialiased bg-[#EAEEFE]")}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
