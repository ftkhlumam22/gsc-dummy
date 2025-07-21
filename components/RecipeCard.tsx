import Image from 'next/image';
import Link from 'next/link';

interface RecipeCardProps {
  id: string;
  title: string;
  image: string;
  time: string;
  difficulty: string;
  category: string;
}

export default function RecipeCard({ id, title, image, time, difficulty, category }: RecipeCardProps) {
  return (
    <Link href={`/recipes/${id}`} className="block group">
      <div className="rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
        <div className="relative h-48">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-110"
          />
        </div>
        <div className="p-4">
          <span className="inline-block px-2 py-1 text-xs font-semibold text-white bg-amber-500 rounded-full mb-2">
            {category}
          </span>
          <h3 className="font-semibold text-lg mb-2 group-hover:text-amber-500 transition-colors">{title}</h3>
          <div className="flex justify-between text-sm text-gray-600">
            <span className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
              </svg>
              {time}
            </span>
            <span>{difficulty}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
