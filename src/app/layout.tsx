import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import type { LayoutProps } from "@/types";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "CodeWithTabish - Learn Web Development, Mobile Dev",
  description:
    "Learn Web Development, Mobile App Development, DevOps, and AI Engineering with CodeWithTabish. Build real-world projects and become job-ready.",

  manifest: "/manifest.json",

  icons: {
    icon: "/favicon.png",
  },

  openGraph: {
    title: "CodeWithTabish",
    description:
      "Learn Web Development, Mobile App Development, DevOps and AI Engineering with CodeWithTabish. Build real-world projects.",
    siteName: "CodeWithTabish",
    type: "website",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "CodeWithTabish - Web Development & AI Learning Platform",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "CodeWithTabish",
    description:
      "Learn Web Development, Mobile App Development, DevOps and AI Engineering with CodeWithTabish.",
    images: ["/twitter-image.jpg"],
  },
};

export default async function RootLayout({children,params}:LayoutProps) {
  const resolvedParams=await params
  console.log(resolvedParams)
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col dark:bg-gray-800  dark:text-gray-200 text-gray-900">{children}</body>
    </html>
  );
}
