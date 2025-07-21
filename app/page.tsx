import Image from "next/image";
import Link from "next/link";
import RecipeCard from "@/components/RecipeCard";

export default function Home() {
  // Sample featured recipes
  const featuredRecipes = [
    {
      id: "nasi-goreng",
      title: "Nasi Goreng Spesial",
      image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3",
      time: "30 menit",
      difficulty: "Mudah",
      category: "Nasi"
    },
    {
      id: "rendang",
      title: "Rendang Daging Sapi",
      image: "https://images.unsplash.com/photo-1606843046080-45bf7a23c39f?ixlib=rb-4.0.3",
      time: "4 jam",
      difficulty: "Menengah",
      category: "Daging"
    },
    {
      id: "soto-ayam",
      title: "Soto Ayam Lamongan",
      image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-4.0.3",
      time: "1.5 jam",
      difficulty: "Menengah",
      category: "Sup"
    }
  ];

  // Sample categories
  const categories = [
    { id: "sarapan", name: "Sarapan", image: "https://images.unsplash.com/photo-1533089860892-a71c4c8f3d3b?ixlib=rb-4.0.3" },
    { id: "makan-siang", name: "Makan Siang", image: "https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3" },
    { id: "makan-malam", name: "Makan Malam", image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3" },
    { id: "camilan", name: "Camilan", image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3" }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-amber-500 to-amber-400 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Temukan Inspirasi Masakan Sehari-hari</h1>
              <p className="text-lg md:text-xl mb-8">
                Koleksi resep lengkap untuk membuat hidangan lezat di rumah. Dari makanan tradisional hingga kreasi modern.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/recipes" 
                  className="bg-white text-amber-500 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition-colors">
                  Jelajahi Resep
                </Link>
                <Link 
                  href="/categories" 
                  className="bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors">
                  Lihat Kategori
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative h-64 sm:h-80 lg:h-96 w-full rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3"
                  alt="Koleksi Resep Masakan Indonesia"
                  priority
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Recipes */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Resep Populer</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Resep yang paling banyak dicari dan disukai oleh pengguna ResepKu. Coba dan rasakan kelezatannya!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} {...recipe} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/recipes" 
              className="inline-block bg-amber-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-amber-600 transition-colors">
              Lihat Semua Resep
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Kategori Resep</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Temukan resep berdasarkan kategori yang Anda inginkan
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link key={category.id} href={`/categories/${category.id}`} className="block group">
                <div className="relative h-40 rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <h3 className="text-white text-xl font-bold">{category.name}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-amber-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Dapatkan Resep Terbaru</h2>
            <p className="text-lg mb-8">
              Berlangganan newsletter kami untuk mendapatkan resep terbaru dan tips memasak setiap minggu.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Alamat email Anda"
                className="flex-grow px-4 py-3 rounded-lg text-gray-800 focus:outline-none"
                required
              />
              <button
                type="submit"
                className="bg-white text-amber-500 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Berlangganan
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
