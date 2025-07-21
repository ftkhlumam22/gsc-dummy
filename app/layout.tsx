import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleTagManager from "@/components/GoogleTagManager";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "ResepKu - Koleksi Resep Masakan Indonesia Terlengkap",
    template: "%s | ResepKu",
  },
  description: "Temukan inspirasi masakan sehari-hari dengan koleksi resep terbaik dari ResepKu. Panduan memasak lengkap dengan bahan dan cara membuat.",
  keywords: ["resep masakan", "resep makanan", "resep indonesia", "masakan tradisional", "cara memasak", "kuliner"],
  authors: [{ name: "ResepKu Team" }],
  creator: "ResepKu",
  publisher: "ResepKu",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://gsc.backoffice-tim.web.id"),
  alternates: {
    canonical: "/",
    languages: {
      "id-ID": "/",
      "en-US": "/en",
    },
  },
  openGraph: {
    title: "ResepKu - Koleksi Resep Masakan Indonesia Terlengkap",
    description: "Temukan inspirasi masakan sehari-hari dengan koleksi resep terbaik dari ResepKu.",
    url: "https://gsc.backoffice-tim.web.id",
    siteName: "ResepKu",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ResepKu - Koleksi Resep Masakan Indonesia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ResepKu - Koleksi Resep Masakan Indonesia Terlengkap",
    description: "Temukan inspirasi masakan sehari-hari dengan koleksi resep terbaik dari ResepKu.",
    images: ["/images/twitter-image.jpg"],
    creator: "@resepkuapp",
  },
  verification: {
    google: "YOUR_GOOGLE_SITE_VERIFICATION_ID", // Replace with actual Google verification ID
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gtmId = "GTM-XXXXXXX"; // Replace with your actual GTM ID

  return (
    <html lang="id">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <GoogleTagManager gtmId={gtmId} />
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
