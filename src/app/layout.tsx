import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";
import { Sidebar } from "@/components/layout/Sidebar";
import { Navbar } from "@/components/layout/Navbar";
import { MobileNav } from "@/components/layout/MobileNav";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Open Guild OS — Build. Govern. Prosper.",
  description:
    "A digital tavern for doers and dreamers. Post quests. Earn gold. Build guilds. Govern together. Prosper as one.",
  openGraph: {
    title: "The Open Guild OS",
    description: "Where artisans forge their destiny. A medieval guild-themed freelancing platform.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex bg-tavern-bg text-parchment-300" style={{ fontFamily: "var(--font-body)" }}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-gold-400 focus:text-tavern-bg focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-bold"
        >
          Skip to main content
        </a>
        <Sidebar />
        <div className="flex-1 flex flex-col min-h-screen">
          <Navbar />
          <main id="main-content" className="flex-1 pb-16 lg:pb-0">{children}</main>
          <Footer />
        </div>
        <MobileNav />
      </body>
    </html>
  );
}
