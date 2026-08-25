import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/navigation/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-canvas text-ink">
        <Navbar />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
