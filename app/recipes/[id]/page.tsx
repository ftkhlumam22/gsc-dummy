import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

interface RecipeNutrition {
  calories: string;
  protein: string;
  fat: string;
  carbs: string;
}

interface Recipe {
  title: string;
  image: string;
  time: string;
  difficulty: string;
  category: string;
  servings: number;
  description: string;
  ingredients: string[];
  steps: string[];
  tips: string;
  nutrition: RecipeNutrition;
  relatedRecipes: string[];
}

interface RecipesData {
  [key: string]: Recipe;
}

// This would normally come from a database or API
const recipesData: RecipesData = {
  "nasi-goreng": {
    title: "Nasi Goreng Spesial",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3",
    time: "30 menit",
    difficulty: "Mudah",
    category: "Nasi",
    servings: 2,
    description: "Nasi goreng spesial dengan telur, ayam, dan udang. Rasanya yang khas dengan campuran kecap manis membuat hidangan ini menjadi favorit di Indonesia.",
    ingredients: [
      "2 piring nasi putih dingin",
      "2 butir telur",
      "100g daging ayam, potong dadu",
      "100g udang, kupas",
      "3 siung bawang putih, cincang",
      "5 butir bawang merah, iris tipis",
      "2 buah cabai merah, iris serong",
      "1 batang daun bawang, iris tipis",
      "2 sdm kecap manis",
      "1 sdm saus tiram",
      "1/2 sdt garam",
      "1/2 sdt merica bubuk",
      "Minyak untuk menumis"
    ],
    steps: [
      "Panaskan minyak, tumis bawang putih dan bawang merah hingga harum.",
      "Masukkan daging ayam, masak hingga berubah warna.",
      "Tambahkan udang, masak hingga berubah warna menjadi kemerahan.",
      "Sisihkan tumisan ke pinggir wajan, masukkan telur, buat orak-arik.",
      "Masukkan nasi putih, aduk rata dengan tumisan.",
      "Tambahkan kecap manis, saus tiram, garam, dan merica. Aduk rata.",
      "Masukkan cabai merah dan daun bawang, aduk sebentar.",
      "Sajikan nasi goreng dengan taburan bawang goreng dan irisan mentimun."
    ],
    tips: "Gunakan nasi yang sudah dingin agar tidak lengket saat digoreng. Untuk rasa yang lebih autentik, tambahkan terasi yang dihaluskan saat menumis bumbu.",
    nutrition: {
      calories: "450 kkal",
      protein: "22g",
      fat: "15g",
      carbs: "58g"
    },
    relatedRecipes: ["mie-goreng", "bakmi", "nasi-kuning"]
  },
  "rendang": {
    title: "Rendang Daging Sapi",
    image: "https://images.unsplash.com/photo-1606843046080-45bf7a23c39f?ixlib=rb-4.0.3",
    time: "4 jam",
    difficulty: "Menengah",
    category: "Daging",
    servings: 8,
    description: "Rendang adalah masakan daging yang berasal dari Minangkabau, dimasak dengan santan dan rempah-rempah hingga kering dan berwarna cokelat pekat.",
    ingredients: [
      "1 kg daging sapi, potong kotak",
      "3 batang serai, memarkan",
      "5 lembar daun jeruk",
      "3 lembar daun salam",
      "1 lembar daun kunyit (opsional)",
      "2 cm lengkuas, memarkan",
      "1 liter santan dari 2 butir kelapa",
      "2 sdm gula merah, serut",
      "Garam secukupnya",
      "Minyak untuk menumis",
      "Bumbu halus:",
      "10 butir bawang merah",
      "5 siung bawang putih",
      "15 buah cabai merah keriting",
      "5 buah cabai rawit (sesuai selera)",
      "5 butir kemiri, sangrai",
      "2 cm jahe",
      "2 cm kunyit, bakar",
      "1/2 sdt jintan, sangrai",
      "1 sdt ketumbar, sangrai"
    ],
    steps: [
      "Panaskan minyak, tumis bumbu halus hingga harum.",
      "Masukkan serai, daun jeruk, daun salam, daun kunyit, dan lengkuas. Aduk rata.",
      "Masukkan daging sapi, aduk hingga berubah warna.",
      "Tuang santan, masak dengan api sedang sambil sesekali diaduk.",
      "Tambahkan gula merah dan garam, aduk rata.",
      "Masak terus dengan api kecil hingga santan menyusut dan daging empuk.",
      "Terus masak hingga rendang mengering dan berwarna cokelat pekat.",
      "Angkat dan sajikan dengan nasi putih hangat."
    ],
    tips: "Masak dengan api kecil dan waktu yang lama untuk mendapatkan rendang yang empuk dan bumbu yang meresap. Rendang akan lebih enak jika didiamkan sehari setelah dimasak.",
    nutrition: {
      calories: "550 kkal",
      protein: "35g",
      fat: "42g",
      carbs: "10g"
    },
    relatedRecipes: ["gulai-daging", "kalio", "sate-padang"]
  },
  "soto-ayam": {
    title: "Soto Ayam Lamongan",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-4.0.3",
    time: "1.5 jam",
    difficulty: "Menengah",
    category: "Sup",
    servings: 6,
    description: "Soto ayam Lamongan adalah sup ayam khas dari daerah Lamongan, Jawa Timur. Dikenal dengan kuahnya yang gurih dan suwiran ayam yang lembut.",
    ingredients: [
      "1 ekor ayam, potong 8 bagian",
      "2 liter air",
      "3 batang serai, memarkan",
      "3 lembar daun jeruk",
      "2 lembar daun salam",
      "2 cm lengkuas, memarkan",
      "Garam secukupnya",
      "1 sdm gula pasir",
      "Minyak untuk menumis",
      "Bumbu halus:",
      "8 butir bawang merah",
      "5 siung bawang putih",
      "4 butir kemiri, sangrai",
      "2 cm jahe",
      "3 cm kunyit, bakar",
      "1/2 sdt merica bubuk",
      "1/2 sdt ketumbar bubuk",
      "Pelengkap:",
      "Soun, seduh air panas",
      "Kol, iris halus",
      "Telur rebus, belah dua",
      "Daun bawang, iris halus",
      "Seledri, iris halus",
      "Bawang goreng",
      "Jeruk nipis",
      "Sambal"
    ],
    steps: [
      "Rebus ayam dalam air hingga empuk, angkat dan suwir-suwir dagingnya. Simpan kaldu.",
      "Panaskan minyak, tumis bumbu halus hingga harum.",
      "Masukkan serai, daun jeruk, daun salam, dan lengkuas.",
      "Tuang tumisan bumbu ke dalam kaldu, masak dengan api kecil.",
      "Tambahkan garam dan gula, koreksi rasa.",
      "Siapkan mangkuk, isi dengan soun, kol, suwiran ayam, dan telur rebus.",
      "Siram dengan kuah soto panas.",
      "Taburi dengan daun bawang, seledri, dan bawang goreng.",
      "Sajikan dengan sambal dan jeruk nipis."
    ],
    tips: "Untuk mendapatkan kuah yang lebih bening, saring kaldu sebelum digunakan. Untuk rasa yang lebih kaya, gunakan ayam kampung.",
    nutrition: {
      calories: "320 kkal",
      protein: "28g",
      fat: "18g",
      carbs: "12g"
    },
    relatedRecipes: ["soto-betawi", "soto-kudus", "soto-madura"]
  },
  "gado-gado": {
    title: "Gado-gado Jakarta",
    image: "https://images.unsplash.com/photo-1622973536968-3ded92fde927?ixlib=rb-4.0.3",
    time: "45 menit",
    difficulty: "Mudah",
    category: "Sayur",
    servings: 4,
    description: "Gado-gado adalah salad sayuran tradisional Indonesia dengan saus kacang yang kaya rasa.",
    ingredients: [
      "200g tahu, goreng",
      "200g tempe, goreng",
      "100g tauge",
      "100g kacang panjang, potong 3 cm",
      "100g kubis, iris kasar",
      "2 butir telur rebus",
      "2 buah mentimun, iris",
      "Kerupuk",
      "Saus kacang:",
      "200g kacang tanah goreng",
      "3 siung bawang putih",
      "2 cm kencur",
      "2 buah cabai merah",
      "1 sdt terasi bakar",
      "2 sdm gula merah",
      "1 sdt garam",
      "Air secukupnya"
    ],
    steps: [
      "Rebus sayuran (kacang panjang, kubis, tauge) hingga matang tapi masih renyah.",
      "Haluskan semua bahan saus kacang, tambahkan air secukupnya.",
      "Tata semua sayuran, tahu, tempe, dan telur rebus di piring.",
      "Siram dengan saus kacang.",
      "Taburi dengan kerupuk.",
      "Sajikan segera."
    ],
    tips: "Jangan merebus sayuran terlalu lama agar tetap renyah. Saus kacang bisa dibuat lebih encer atau kental sesuai selera.",
    nutrition: {
      calories: "380 kkal",
      protein: "18g",
      fat: "25g",
      carbs: "28g"
    },
    relatedRecipes: ["pecel", "karedok", "urap"]
  },
  "sate-ayam": {
    title: "Sate Ayam Madura",
    image: "https://images.unsplash.com/photo-1530469912745-a215c6b256ea?ixlib=rb-4.0.3",
    time: "1 jam",
    difficulty: "Mudah",
    category: "Daging",
    servings: 4,
    description: "Sate ayam Madura dengan bumbu kecap yang manis dan gurih, disajikan dengan lontong dan sambal.",
    ingredients: [
      "500g daging ayam, potong dadu",
      "Tusuk sate",
      "Bumbu marinasi:",
      "3 sdm kecap manis",
      "2 siung bawang putih, haluskan",
      "1 sdt ketumbar bubuk",
      "1/2 sdt garam",
      "Bumbu sate:",
      "5 sdm kecap manis",
      "2 sdm air asam jawa",
      "1 sdm gula merah",
      "2 buah cabai rawit",
      "1 siung bawang putih",
      "Pelengkap:",
      "Lontong",
      "Timun",
      "Bawang merah iris"
    ],
    steps: [
      "Marinasi daging ayam dengan bumbu marinasi selama 30 menit.",
      "Tusuk daging ayam dengan tusuk sate.",
      "Panggang sate sambil diolesi bumbu sate hingga matang.",
      "Haluskan semua bahan bumbu sate, masak sebentar.",
      "Sajikan sate dengan lontong, timun, dan bumbu sate.",
      "Taburi dengan bawang merah iris."
    ],
    tips: "Rendam tusuk sate dalam air sebelum digunakan agar tidak mudah terbakar. Panggang dengan api sedang agar matang merata.",
    nutrition: {
      calories: "420 kkal",
      protein: "32g",
      fat: "18g",
      carbs: "35g"
    },
    relatedRecipes: ["sate-kambing", "sate-lilit", "sate-padang"]
  },
  "bakso": {
    title: "Bakso Malang",
    image: "https://images.unsplash.com/photo-1603088549155-6ae9578d8f0d?ixlib=rb-4.0.3",
    time: "2 jam",
    difficulty: "Menengah",
    category: "Sup",
    servings: 6,
    description: "Bakso Malang dengan kuah bening yang segar dan bakso yang kenyal, dilengkapi dengan mie dan sayuran.",
    ingredients: [
      "500g daging sapi giling",
      "100g tepung tapioka",
      "3 siung bawang putih, haluskan",
      "1 sdt garam",
      "1/2 sdt merica",
      "1 butir telur",
      "Es batu secukupnya",
      "Kuah:",
      "1 kg tulang sapi",
      "2 liter air",
      "3 siung bawang putih",
      "1 sdt garam",
      "1/2 sdt merica",
      "Pelengkap:",
      "Mie kuning",
      "Sawi hijau",
      "Daun bawang",
      "Seledri",
      "Bawang goreng"
    ],
    steps: [
      "Rebus tulang sapi untuk membuat kaldu, saring.",
      "Campur daging giling dengan tepung tapioka, bawang putih, garam, merica, dan telur.",
      "Uleni adonan sambil tambahkan es batu hingga kenyal.",
      "Bentuk adonan menjadi bulatan bakso.",
      "Rebus bakso dalam air mendidih hingga mengapung.",
      "Panaskan kaldu, bumbui dengan garam dan merica.",
      "Rebus mie dan sawi sebentar.",
      "Sajikan bakso dengan mie, sawi, dan kuah kaldu.",
      "Taburi dengan daun bawang, seledri, dan bawang goreng."
    ],
    tips: "Gunakan es batu saat menguleni adonan agar bakso lebih kenyal. Jangan terlalu lama merebus bakso agar tidak keras.",
    nutrition: {
      calories: "350 kkal",
      protein: "25g",
      fat: "12g",
      carbs: "35g"
    },
    relatedRecipes: ["bakso-urat", "bakso-ikan", "mie-ayam"]
  }
};

// Generate metadata for each recipe dynamically
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  // Fetch data from an API or use mock data
  const recipe = recipesData[params.id];
  
  if (!recipe) {
    return {
      title: "Recipe Not Found",
    };
  }
  
  return {
    title: recipe.title,
    description: recipe.description,
    keywords: [`resep ${recipe.title.toLowerCase()}`, recipe.category.toLowerCase(), "masakan indonesia", "cara memasak"],
    openGraph: {
      title: recipe.title,
      description: recipe.description,
      url: `https://www.resepku.com/recipes/${params.id}`,
      images: [
        {
          url: recipe.image,
          width: 1200,
          height: 630,
          alt: recipe.title,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: recipe.title,
      description: recipe.description,
      images: [recipe.image],
    }
  };
}

export default function RecipePage({ params }: { params: { id: string } }) {
  const recipe = recipesData[params.id];
  
  // Handle not found
  if (!recipe) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Resep Tidak Ditemukan</h1>
        <p className="mb-8">Maaf, resep yang Anda cari tidak tersedia.</p>
        <Link 
          href="/recipes" 
          className="inline-block bg-amber-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-amber-600 transition-colors">
          Kembali ke Daftar Resep
        </Link>
      </div>
    );
  }
  
  return (
    <>
      {/* Recipe Hero */}
      <section className="bg-amber-500 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <span className="inline-block bg-white text-amber-500 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                {recipe.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{recipe.title}</h1>
              <p className="text-white text-lg mb-6">{recipe.description}</p>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="bg-white bg-opacity-20 px-4 py-2 rounded-lg text-white">
                  <div className="font-bold">Waktu</div>
                  <div>{recipe.time}</div>
                </div>
                <div className="bg-white bg-opacity-20 px-4 py-2 rounded-lg text-white">
                  <div className="font-bold">Kesulitan</div>
                  <div>{recipe.difficulty}</div>
                </div>
                <div className="bg-white bg-opacity-20 px-4 py-2 rounded-lg text-white">
                  <div className="font-bold">Porsi</div>
                  <div>{recipe.servings} orang</div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative h-64 md:h-80 w-full rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src={recipe.image}
                  alt={recipe.title}
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

      {/* Recipe Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 pb-2 border-b">Bahan-bahan</h2>
                <ul className="space-y-2">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 pb-2 border-b">Cara Membuat</h2>
                <ol className="space-y-6">
                  {recipe.steps.map((step, index) => (
                    <li key={index} className="flex">
                      <span className="flex-shrink-0 w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center mr-4">
                        {index + 1}
                      </span>
                      <div className="mt-1">{step}</div>
                    </li>
                  ))}
                </ol>
              </div>
              
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 pb-2 border-b">Tips Memasak</h2>
                <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
                  <p className="italic">{recipe.tips}</p>
                </div>
              </div>
              
              {/* Nutrition Info */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 pb-2 border-b">Informasi Nutrisi</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="text-gray-500 text-sm">Kalori</div>
                    <div className="font-bold text-lg">{recipe.nutrition.calories}</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="text-gray-500 text-sm">Protein</div>
                    <div className="font-bold text-lg">{recipe.nutrition.protein}</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="text-gray-500 text-sm">Lemak</div>
                    <div className="font-bold text-lg">{recipe.nutrition.fat}</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="text-gray-500 text-sm">Karbohidrat</div>
                    <div className="font-bold text-lg">{recipe.nutrition.carbs}</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:w-1/3">
              {/* Author Card */}
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                  <div>
                    <h3 className="font-bold">Chef ResepKu</h3>
                    <p className="text-sm text-gray-600">Tim Ahli Kuliner</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Tim ahli kuliner kami telah menguji resep ini untuk memastikan hasil terbaik untuk Anda coba di rumah.
                </p>
                <button className="w-full py-2 border border-amber-500 text-amber-500 rounded-lg hover:bg-amber-500 hover:text-white transition-colors">
                  Ikuti
                </button>
              </div>
              
              {/* Related Recipes */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-4">Resep Terkait</h3>
                <div className="space-y-4">
                  {recipe.relatedRecipes.map((relatedId, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-16 h-16 bg-gray-200 rounded-md mr-3"></div>
                      <div>
                        <Link 
                          href={`/recipes/${relatedId}`} 
                          className="font-semibold hover:text-amber-500 transition-colors">
                          Resep Terkait {index + 1}
                        </Link>
                        <p className="text-sm text-gray-600">30 menit • Mudah</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Share and Save */}
      <section className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="mb-4 sm:mb-0">
              <h3 className="font-bold mb-2">Bagikan Resep</h3>
              <div className="flex space-x-2">
                <button className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center">
                  f
                </button>
                <button className="w-10 h-10 bg-sky-500 text-white rounded-full flex items-center justify-center">
                  t
                </button>
                <button className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center">
                  w
                </button>
                <button className="w-10 h-10 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center">
                  ...
                </button>
              </div>
            </div>
            <button className="flex items-center bg-amber-500 text-white px-6 py-3 rounded-lg hover:bg-amber-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mr-2" viewBox="0 0 16 16">
                <path d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"/>
                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
              </svg>
              Simpan Resep
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
