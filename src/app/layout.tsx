import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/general/(themes)/theme-provider";

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

  metadataBase: new URL("http://localhost:3000"),

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}