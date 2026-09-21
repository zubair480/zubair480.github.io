import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { ScrollExperience } from "./experience-layer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zubair480.github.io"),
  title: "Zubair Zafar | Software Engineer & AI Builder",
  description:
    "Portfolio of Zubair Zafar. A San Francisco software engineer building full stack products with AI systems and developer tools.",
  applicationName: "Zubair Zafar Portfolio",
  authors: [{ name: "Zubair Zafar" }],
  creator: "Zubair Zafar",
  category: "technology",
  keywords: [
    "Zubair Zafar",
    "software engineer",
    "AI engineer",
    "full stack developer",
    "developer tools",
    "San Francisco",
  ],
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Zubair Zafar | Software Engineer & AI Builder",
    description:
      "Full stack products with applied AI systems and developer tools built by Zubair Zafar.",
    siteName: "Zubair Zafar Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1733,
        height: 909,
        alt: "Zubair Zafar software engineer and AI builder portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zubair Zafar | Software Engineer & AI Builder",
    description:
      "Full stack products with applied AI systems and developer tools built by Zubair Zafar.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  appleWebApp: {
    capable: true,
    title: "Zubair Zafar",
    statusBarStyle: "black-translucent",
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#12241c",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable}`}>
        <div className="loadingScreen" aria-hidden="true">
          <div className="loadingInner">
            <div className="loadingMark">ZZ<span>.</span></div>
            <div className="loadingMeta">
              <span>Zubair Zafar</span>
              <span>Software Engineer</span>
            </div>
            <div className="loadingTrack"><span /></div>
          </div>
        </div>
        <ScrollExperience />
        {children}
      </body>
    </html>
  );
}
