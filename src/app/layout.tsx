import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/footer/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vineshsarathy.com"),
  title: {
    default: "Vinesh Parthasarathy — Full Stack Engineer",
    template: "%s | Vinesh Parthasarathy",
  },
  description:
    "Vinesh Parthasarathy is a Full Stack Engineer specializing in React, Next.js, TypeScript, Node.js, databases, and AI-powered web applications.",
  openGraph: {
    title: "Vinesh Parthasarathy — Full Stack Engineer",
    description:
      "Full Stack Engineer focusing on high-performance web architectures, end-to-end features, and clean user experiences.",
    url: "https://vineshsarathy.com",
    siteName: "Vinesh Parthasarathy Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vinesh Parthasarathy — Full Stack Engineer",
    description:
      "Full Stack Engineer focusing on high-performance web architectures, end-to-end features, and clean user experiences.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased dark`}>
      <body className="relative min-h-full flex flex-col text-[#f5f5f7] selection:bg-[#a855f7]/35 selection:text-white">
        <Navbar />
        <main className="relative z-[1] flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
