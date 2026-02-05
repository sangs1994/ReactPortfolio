import React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import FixedSidebar from "@/components/FixedSidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio Sangeetha",
  description: "This web contains all portfolios of Sangeetha",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Navbar /> */}
        <div className="lg:flex lg:min-h-screen">
          <div className="lg:w-2/5 lg:flex lg:justify-end lg:items-start">
            <FixedSidebar />
          </div>
          <main className="flex-1 pt-4 lg:py-24 lg:bg-slate-950">
            <div className="px-6 py-4 md:px-12 md:py-6 lg:px-24">
              <section className="">{children}</section>
            </div>
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
