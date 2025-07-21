import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import RecipeCard from "@/components/RecipeCard";

// Category data - dalam implementasi nyata dari database/API
const categoriesData: Record<string, any> = {
  sarapan: {
    name: "Sarapan",
    description: "Resep sarapan bergizi untuk memulai hari dengan energi",
    image:
      "https://images.unsplash.com/photo-1533089860892-a71c4c8f3d3b?ixlib=rb-4.0.3",
    recipes: [
      {
        id: "nasi-uduk",
        title: "Nasi Uduk Betawi",
        image:
          "https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3",
        time: "45 menit",
        difficulty: "Mudah",
        category: "Sarapan",
      },
      {
        id: "bubur-ayam",
        title: "Bubur Ayam Jakarta",
        image:
          "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-4.0.3",
        time: "1 jam",
        difficulty: "Mudah",
        category: "Sarapan",
      },
    ],
  },
  "makan-siang": {
    name: "Makan Siang",
    description: "Hidangan lengkap dan mengenyangkan untuk makan siang",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3",
    recipes: [
      {
        id: "nasi-goreng",
        title: "Nasi Goreng Spesial",
        image:
          "https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3",
        time: "30 menit",
        difficulty: "Mudah",
        category: "Nasi",
      },
      {
        id: "rendang",
        title: "Rendang Daging Sapi",
        image:
          "https://images.unsplash.com/photo-1606843046080-45bf7a23c39f?ixlib=rb-4.0.3",
        time: "4 jam",
        difficulty: "Menengah",
        category: "Daging",
      },
    ],
  },
  nasi: {
    name: "Nasi",
    description: "Berbagai olahan nasi tradisional dan modern",
    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3",
    recipes: [
      {
        id: "nasi-goreng",
        title: "Nasi Goreng Spesial",
        image:
          "https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3",
        time: "30 menit",
        difficulty: "Mudah",
        category: "Nasi",
      },
    ],
  },
  daging: {
    name: "Daging",
    description: "Resep olahan daging sapi, ayam, dan kambing",
    image:
      "https://images.unsplash.com/photo-1606843046080-45bf7a23c39f?ixlib=rb-4.0.3",
    recipes: [
      {
        id: "rendang",
        title: "Rendang Daging Sapi",
        image:
          "https://images.unsplash.com/photo-1606843046080-45bf7a23c39f?ixlib=rb-4.0.3",
        time: "4 jam",
        difficulty: "Menengah",
        category: "Daging",
      },
      {
        id: "sate-ayam",
        title: "Sate Ayam Madura",
        image:
          "https://images.unsplash.com/photo-1530469912745-a215c6b256ea?ixlib=rb-4.0.3",
        time: "1 jam",
        difficulty: "Mudah",
        category: "Daging",
      },
    ],
  },
};

// Generate metadata for each category
export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const category = categoriesData[params.id];

  if (!category) {
    return {
      title: "Kategori Tidak Ditemukan",
    };
  }

  return {
    title: `Resep ${category.name} | ResepKu`,
    description: `${
      category.description
    }. Temukan berbagai resep ${category.name.toLowerCase()} terbaik dan mudah dibuat di rumah.`,
    keywords: [
      `resep ${category.name.toLowerCase()}`,
      "masakan indonesia",
      "cara memasak",
      `makanan ${category.name.toLowerCase()}`,
    ],
    openGraph: {
      title: `Resep ${category.name}`,
      description: category.description,
      url: `https://www.resepku.com/categories/${params.id}`,
      images: [
        {
          url: category.image,
          width: 1200,
          height: 630,
          alt: `Resep ${category.name}`,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `Resep ${category.name}`,
      description: category.description,
      images: [category.image],
    },
  };
}

export default function CategoryPage({ params }: { params: { id: string } }) {
  const category = categoriesData[params.id];

  // Handle not found
  if (!category) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Kategori Tidak Ditemukan</h1>
        <p className="mb-8">Maaf, kategori yang Anda cari tidak tersedia.</p>
        <Link
          href="/categories"
          className="inline-block bg-amber-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-amber-600 transition-colors"
        >
          Kembali ke Daftar Kategori
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* Category Hero */}
      <section className="bg-amber-500 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <nav className="text-white text-sm mb-4">
                <Link href="/" className="hover:text-amber-100">
                  Beranda
                </Link>
                <span className="mx-2">/</span>
                <Link href="/categories" className="hover:text-amber-100">
                  Kategori
                </Link>
                <span className="mx-2">/</span>
                <span>{category.name}</span>
              </nav>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Resep {category.name}
              </h1>
              <p className="text-white text-lg mb-6">{category.description}</p>
              <div className="bg-white bg-opacity-20 px-4 py-2 rounded-lg text-white inline-block">
                <span className="font-bold">
                  {category.recipes.length} Resep Tersedia
                </span>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative h-64 md:h-80 w-full rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow">
              <input
                type="text"
                placeholder={`Cari resep ${category.name.toLowerCase()}...`}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
            <div className="flex gap-2">
              <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500">
                <option value="">Waktu Memasak</option>
                <option value="quick"> 30 menit</option>
                <option value="medium">30-60 menit</option>
                <option value="long"> 1 jam</option>
              </select>
              <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500">
                <option value="">Tingkat Kesulitan</option>
                <option value="mudah">Mudah</option>
                <option value="menengah">Menengah</option>
                <option value="sulit">Sulit</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Recipe List */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          {category.recipes.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.recipes.map((recipe: any) => (
                  <RecipeCard key={recipe.id} {...recipe} />
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-12">
                <nav aria-label="Pagination" className="flex space-x-2">
                  <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200">
                    &laquo; Prev
                  </button>
                  <button className="px-4 py-2 bg-amber-500 text-white rounded-md">
                    1
                  </button>
                  <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200">
                    2
                  </button>
                  <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200">
                    3
                  </button>
                  <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200">
                    Next &raquo;
                  </button>
                </nav>
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold mb-4">Belum Ada Resep</h2>
              <p className="text-gray-600 mb-8">
                Resep untuk kategori ini sedang dalam pengembangan.
              </p>
              <Link
                href="/categories"
                className="inline-block bg-amber-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-amber-600 transition-colors"
              >
                Lihat Kategori Lain
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Related Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Kategori Lainnya</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Jelajahi kategori resep lainnya yang mungkin Anda suka
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(categoriesData)
              .filter(([id]) => id !== params.id)
              .slice(0, 4)
              .map(([id, cat]) => (
                <Link
                  key={id}
                  href={`/categories/${id}`}
                  className="block group"
                >
                  <div className="relative h-32 rounded-lg overflow-hidden shadow-md">
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                      <h3 className="text-white text-lg font-bold">
                        {cat.name}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
