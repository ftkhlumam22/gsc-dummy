import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ResepKu</h3>
            <p className="text-gray-300">
              Temukan inspirasi masakan sehari-hari dengan koleksi resep terbaik kami.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Tautan</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/recipes" className="text-gray-300 hover:text-white">
                  Resep
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-gray-300 hover:text-white">
                  Kategori
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white">
                  Tentang Kami
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Kontak</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Email: info@resepku.com</li>
              <li>Phone: +62 123 4567 890</li>
              <li>Jakarta, Indonesia</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {currentYear} ResepKu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
