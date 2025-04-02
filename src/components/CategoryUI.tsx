import { getJokeTotalKeyword, slugify } from '@/utils/func'
import Link from 'next/link'

const CategoryUI = ({currentCategory, className}: {currentCategory?: string, className?: string}) => {
  return (
    <div>
        <div className={`${className}`}>
        <h2 className="text-xl font-semibold mb-4">Browse Jokes</h2>
        <div className="flex flex-wrap gap-2">
          {getJokeTotalKeyword().map((category) => (
            <Link
              key={category}
              href={`/${slugify(category)}`}
              className={`px-3 py-1 rounded-full text-xs 
                ${slugify(category) === currentCategory
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 hover:bg-[#FEFAE8]'
                }`}
            >
              {category}
            </Link>
          ))}
        </div>
      </div>
      
    </div>
  )
}

export default CategoryUI
