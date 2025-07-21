import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kategori Resep Masakan Indonesia",
  description:
    "Jelajahi resep berdasarkan kategori seperti sarapan, makan siang, makan malam, dan camilan. Temukan inspirasi masakan sesuai kebutuhan Anda.",
  keywords: [
    "kategori resep",
    "resep sarapan",
    "resep makan siang",
    "resep makan malam",
    "resep camilan",
    "masakan indonesia",
  ],
  openGraph: {
    title: "Kategori Resep Masakan Indonesia",
    description:
      "Jelajahi resep berdasarkan kategori seperti sarapan, makan siang, makan malam, dan camilan.",
    url: "https://www.resepku.com/categories",
    images: [
      {
        url: "/images/categories-og.jpg",
        width: 1200,
        height: 630,
        alt: "Kategori Resep Masakan Indonesia",
      },
    ],
  },
};

// Categories data - dalam implementasi nyata, ini bisa dari database/API
const categories = [
  {
    id: "sarapan",
    name: "Sarapan",
    description: "Resep sarapan bergizi untuk memulai hari dengan energi",
    image:
      "https://images.unsplash.com/photo-1533089860892-a71c4c8f3d3b?ixlib=rb-4.0.3",
    recipeCount: 25,
    featured: true,
  },
  {
    id: "makan-siang",
    name: "Makan Siang",
    description: "Hidangan lengkap dan mengenyangkan untuk makan siang",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3",
    recipeCount: 42,
    featured: true,
  },
  {
    id: "makan-malam",
    name: "Makan Malam",
    description: "Resep makan malam yang lezat untuk keluarga",
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3",
    recipeCount: 38,
    featured: true,
  },
  {
    id: "camilan",
    name: "Camilan",
    description: "Cemilan sehat dan lezat untuk segala suasana",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3",
    recipeCount: 31,
    featured: true,
  },
  {
    id: "nasi",
    name: "Nasi",
    description: "Berbagai olahan nasi tradisional dan modern",
    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3",
    recipeCount: 18,
    featured: false,
  },
  {
    id: "daging",
    name: "Daging",
    description: "Resep olahan daging sapi, ayam, dan kambing",
    image:
      "https://images.unsplash.com/photo-1606843046080-45bf7a23c39f?ixlib=rb-4.0.3",
    recipeCount: 23,
    featured: false,
  },
  {
    id: "sup",
    name: "Sup",
    description: "Sup dan kuah hangat untuk segala cuaca",
    image:
      "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-4.0.3",
    recipeCount: 15,
    featured: false,
  },
  {
    id: "sayur",
    name: "Sayur",
    description: "Resep sayuran sehat dan bergizi",
    image:
      "https://images.unsplash.com/photo-1622973536968-3ded92fde927?ixlib=rb-4.0.3",
    recipeCount: 20,
    featured: false,
  },
];

export default function CategoriesPage() {
  const featuredCategories = categories.filter((cat) => cat.featured);
  const otherCategories = categories.filter((cat) => !cat.featured);

  return (
    <>
      {/* Page Header */}
      <div className="bg-amber-500 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white text-center">
            Kategori Resep
          </h1>
          <p className="text-white text-center mt-2 max-w-2xl mx-auto">
            Temukan resep berdasarkan kategori yang Anda inginkan. Dari sarapan
            hingga makan malam, semua ada di sini.
          </p>
        </div>
      </div>

      {/* Featured Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Kategori Populer</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kategori resep yang paling banyak dicari dan disukai pengguna
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredCategories.map((category) => (
              <Link
                key={category.id}
                href={`/categories/${category.id}`}
                className="group block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <div className="text-center text-white">
                      <h3 className="text-xl font-bold mb-2">
                        {category.name}
                      </h3>
                      <p className="text-sm">{category.recipeCount} Resep</p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 text-sm">
                    {category.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Semua Kategori</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Jelajahi seluruh kategori resep yang tersedia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/categories/${category.id}`}
                className="group block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="flex">
                  <div className="relative w-24 h-24 flex-shrink-0">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      sizes="96px"
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 flex-grow">
                    <h3 className="font-bold text-lg mb-1 group-hover:text-amber-500 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">
                      {category.description}
                    </p>
                    <div className="flex items-center text-amber-500 text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="mr-1"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                      </svg>
                      {category.recipeCount} Resep
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Tidak Menemukan yang Anda Cari?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Jelajahi semua resep kami atau gunakan fitur pencarian untuk
            menemukan resep yang tepat
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/recipes"
              className="bg-white text-amber-500 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Lihat Semua Resep
            </Link>
            <Link
              href="/recipes"
              className="bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
            >
              Cari Resep
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
