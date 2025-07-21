import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Kami | ResepKu",
  description:
    "Mengenal lebih dekat dengan tim ResepKu dan perjalanan kami berbagi resep masakan Indonesia terbaik",
  keywords: [
    "tentang resepku",
    "tim resepku",
    "sejarah resepku",
    "misi resepku",
    "kuliner indonesia",
  ],
  openGraph: {
    title: "Tentang Kami | ResepKu",
    description:
      "Mengenal lebih dekat dengan tim ResepKu dan perjalanan kami berbagi resep masakan Indonesia terbaik",
    url: "https://gsc.backoffice-tim.web.id/about",
    images: [
      {
        url: "/images/about-resepku.jpg",
        width: 1200,
        height: 630,
        alt: "Tim ResepKu",
      },
    ],
  },
};
