import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"; // Ensure your Navbar is here too
import Footer from "@/components/Footer"; // 1. Add this import

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NEWLUBE | High-Performance Lubricants UAE",
  description: "Premier lubricant manufacturer in Ajman, UAE.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer /> {/* 2. Add this at the bottom */}
      </body>
    </html>
  );
}