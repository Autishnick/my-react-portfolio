import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Vladyslav Shevchuk - Frontend Engineer",
  description: "Portfolio of Vladyslav Shevchuk, specializing in React, Next.js, and TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`${inter.variable} ${poppins.variable} font-sans bg-slate-950 text-slate-50 antialiased selection:bg-blue-500/30`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
