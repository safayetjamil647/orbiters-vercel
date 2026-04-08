import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import JsonLd from "../components/JsonLd";
import { Analytics } from "@vercel/analytics/next";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Orbiters",
    default: "Orbiters — Automotive Digital Marketing & Technology Agency",
  },
  description: "Accelerate your automotive brand with Orbiters. We're the specialized digital marketing and design agency for car dealerships and automotive SaaS companies.",
  keywords: ["automotive marketing", "car dealer ads", "automotive SEO", "EV marketing", "automotive SaaS design", "lead response technology"],
  authors: [{ name: "Orbiters Team" }],
  metadataBase: new URL('https://orbiters.io'),
  alternates: {
    canonical: './',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE", // Replace with your actual code
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://orbiters.io",
    siteName: "Orbiters",
    title: "Orbiters — Automotive Digital Marketing & Technology Agency",
    description: "Technology and marketing that puts your automotive business in orbit. Specialized in Ads, SEO, and SaaS design.",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Orbiters | Automotive Digital Agency",
    description: "Fueling the digital transformation of the automotive industry.",
    images: ["/og-image.png"],
    creator: "@orbiters_io",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable} scroll-smooth`}>
      <body className="antialiased">
        <JsonLd />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
