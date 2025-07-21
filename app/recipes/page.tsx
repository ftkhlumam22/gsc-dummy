"use client";

import Image from "next/image";
import Link from "next/link";
import RecipeCard from "@/components/RecipeCard";
import { useState } from "react";

// This would typically come from a database or API
const recipes = [
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
  {
    id: "soto-ayam",
    title: "Soto Ayam Lamongan",
    image:
      "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-4.0.3",
    time: "1.5 jam",
    difficulty: "Menengah",
    category: "Sup",
  },
  {
    id: "gado-gado",
    title: "Gado-gado Jakarta",
    image:
      "https://images.unsplash.com/photo-1622973536968-3ded92fde927?ixlib=rb-4.0.3",
    time: "45 menit",
    difficulty: "Mudah",
    category: "Sayur",
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
  {
    id: "bakso",
    title: "Bakso Malang",
    image:
      "https://images.unsplash.com/photo-1603088549155-6ae9578d8f0d?ixlib=rb-4.0.3",
    time: "2 jam",
    difficulty: "Menengah",
    category: "Sup",
  },
];

export default function RecipesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = recipes.filter(
      (recipe) =>
        recipe.title.toLowerCase().includes(term) ||
        recipe.category.toLowerCase().includes(term)
    );

    setFilteredRecipes(filtered);
  };

  return (
    <>
      {/* Hero Section */}
      <div className="bg-amber-500 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white text-center">
            Koleksi Resep
          </h1>
          <p className="text-white text-center mt-2 max-w-2xl mx-auto">
            Jelajahi berbagai resep masakan Indonesia lengkap dengan bahan dan
            cara membuat
          </p>
        </div>
      </div>

      {/* Filtering and Search */}
      <div className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <div>
              <h2 className="text-2xl font-bold mb-2">Temukan Resep</h2>
              <p className="text-gray-600">
                Jelajahi {filteredRecipes.length} resep lezat
              </p>
            </div>

            {/* Search input */}
            <div className="w-full md:w-1/3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Cari resep atau kategori..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500"
                  value={searchTerm}
                  onChange={handleSearch}
                />
                <div className="absolute left-3 top-1/2 -translate-y-1/2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Filter dropdown (existing code) */}
            <div className="w-full md:w-auto flex gap-4">
              <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500">
                <option value="">Semua Kategori</option>
                <option value="nasi">Nasi</option>
                <option value="daging">Daging</option>
                <option value="sup">Sup</option>
                <option value="sayur">Sayur</option>
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
          {filteredRecipes.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredRecipes.map((recipe) => (
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
              <h3 className="text-xl font-semibold mb-2">
                Tidak ada resep yang ditemukan
              </h3>
              <p className="text-gray-600 mb-6">
                Silakan coba kata kunci lain atau reset pencarian
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setFilteredRecipes(recipes);
                }}
                className="inline-block bg-amber-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-amber-600 transition-colors"
              >
                Tampilkan Semua Resep
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
