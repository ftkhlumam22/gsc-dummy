import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Koleksi Resep Masakan Indonesia",
  description:
    "Jelajahi berbagai resep masakan Indonesia lengkap dengan bahan dan cara membuat. Dari resep tradisional hingga makanan modern.",
  keywords: [
    "resep masakan",
    "resep makanan",
    "masakan indonesia",
    "cara membuat makanan",
  ],
  openGraph: {
    title: "Koleksi Resep Masakan Indonesia",
    description:
      "Jelajahi berbagai resep masakan Indonesia lengkap dengan bahan dan cara membuat. Dari resep tradisional hingga makanan modern.",
    url: "https://www.resepku.com/recipes",
    images: [
      {
        url: "/images/recipes-og.jpg",
        width: 1200,
        height: 630,
        alt: "Koleksi Resep Masakan Indonesia",
      },
    ],
  },
};
