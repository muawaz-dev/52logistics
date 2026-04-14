import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import { AnimationProvider } from "@/context/AnimationContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "52Logistics – Smart Fulfilment Solutions",
  description:
    "52Logistics provides end‑to‑end ecommerce, retail, and Amazon fulfilment services with a focus on speed, reliability, and efficiency.",
  icons: {
    icon: "/home/logo.png", // favicon/logo served from public/logo.png
  },
  openGraph: {
    title: "52Logistics – Smart Fulfilment Solutions",
    description:
      "Discover 52Logistics' fulfilment services for ecommerce, retail, and Amazon sellers.",
    url: "https://www.52logistics.com",
    siteName: "52Logistics",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "52Logistics Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "52Logistics – Smart Fulfilment Solutions",
    description:
      "Efficient fulfilment services for ecommerce, retail, and Amazon sellers.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white">
        <AnimationProvider>
          <Navbar />
          <main className="flex-grow bg-white">{children}</main>
          <Footer />
        </AnimationProvider>
      </body>
    </html>
  );
}