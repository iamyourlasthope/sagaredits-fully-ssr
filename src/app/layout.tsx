import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sagar Edits – Meme Marketer & Digital Creator",
  description: "Meme Marketing Expert & Digital Creator | 100K+ Instagram & YouTube | Viral Content & Brand Growth",
  keywords: ["meme marketing", "digital creator", "content creation", "social media", "marketing", "Sagar Edits", "Sagar Edits Instagram", "Sagar Edits YouTube", "Sagar Edits memer", "meme marketing expert", "digital creator", "viral content", "brand growth", "start your campaign", "paid promotion", "promos India", "content creation", "social media marketing", "reels creator", "video promotion", "online branding"],
  authors: [{ name: "Sagar Edits" }],
  creator: "Sagar Edits",
  publisher: "Sagar Edits",
  robots: "index, follow",
  verification: {
    google: "googlec90083e55f2b591a",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.sagaredits.in",
    siteName: "Sagar Edits",
    title: "Sagar Edits – Meme Marketer & Digital Creator",
    description: "Meme Marketing Expert & Digital Creator | 100K+ Instagram & YouTube | Viral Content & Brand Growth",
    images: [
      {
        url: "https://www.sagaredits.in/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Sagar Edits - Meme Marketer & Digital Creator",
      },
      {
        url: "https://www.sagaredits.in/apple-touch-icon.png",
        width: 180,
        height: 180,
        alt: "Sagar Edits - Meme Marketer & Digital Creator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sagar Edits – Meme Marketer & Digital Creator",
    description: "Meme Marketing Expert & Digital Creator | 100K+ Instagram & YouTube | Viral Content & Brand Growth",
    images: ["https://www.sagaredits.in/android-chrome-512x512.png"],
    creator: "@sagaredits",
    site: "@sagaredits",
  },
  icons: {
    icon: [
      { url: 'https://www.sagaredits.in/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: 'https://www.sagaredits.in/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: 'https://www.sagaredits.in/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { url: 'https://www.sagaredits.in/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: 'https://www.sagaredits.in/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  manifest: 'https://www.sagaredits.in/site.webmanifest',
  alternates: {
    canonical: "https://www.sagaredits.in",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="googlec90083e55f2b591a" />
        {/* Fallback for older browsers */}
        <link rel="icon" type="image/x-icon" href="https://www.sagaredits.in/favicon.ico" />
        {/* Primary favicon for social media and browsers */}
        <link rel="icon" type="image/png" href="https://www.sagaredits.in/favicon-32x32.png" />
        {/* Modern PNG favicons */}
        <link rel="icon" type="image/png" sizes="32x32" href="https://www.sagaredits.in/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="https://www.sagaredits.in/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="https://www.sagaredits.in/apple-touch-icon.png" />
        {/* Android Chrome icons */}
        <link rel="icon" type="image/png" sizes="192x192" href="https://www.sagaredits.in/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="https://www.sagaredits.in/android-chrome-512x512.png" />
        {/* Web manifest */}
        <link rel="manifest" href="https://www.sagaredits.in/site.webmanifest" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
        
        {/* Google Analytics - Load after page is interactive */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-G0Z9GK9303"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-G0Z9GK9303');
          `}
        </Script>
        
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
      </body>
    </html>
  );
}
