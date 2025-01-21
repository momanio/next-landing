import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["arabic"],
  variable: "--font-ibm-plex-arabic",
  display: "swap",
});

export const metadata: Metadata = {
  title: "RTL Landing Page",
  description: "Arabic RTL Landing Page built with Next.js and Tailwind",
  openGraph: {
    title: "RTL Landing Page",
    description: "Arabic RTL Landing Page built with Next.js and Tailwind",
    locale: "ar_SA",
    type: "website",
    siteName: "RTL Landing Page",
  },
  twitter: {
    card: "summary_large_image",
    title: "RTL Landing Page",
    description: "Arabic RTL Landing Page built with Next.js and Tailwind",
  },
  icons: {
    icon: "/favicon.ico",
    apple: [
      { url: "/favicon.svg" },
      { url: "/favicon.svg", sizes: "72x72" },
      { url: "/favicon.svg", sizes: "144x144" },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${geistSans.variable} ${geistMono.variable} ${ibmPlexArabic.variable}`}
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`
          antialiased
          font-sans
          bg-white
          text-gray-900
          leading-normal
          tracking-normal
          min-h-screen
          flex
          flex-col
        `}
      >
        {children}
        <div id="portal-root" />
      </body>
    </html>
  );
}
