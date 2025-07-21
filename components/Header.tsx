import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-amber-500 shadow-md">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-white">
            ResepKu
          </Link>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="text-white hover:text-amber-100">
                Beranda
              </Link>
            </li>
            <li>
              <Link href="/recipes" className="text-white hover:text-amber-100">
                Resep
              </Link>
            </li>
            <li>
              <Link href="/categories" className="text-white hover:text-amber-100">
                Kategori
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-white hover:text-amber-100">
                Tentang Kami
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
