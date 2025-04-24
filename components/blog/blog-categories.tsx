import Link from "next/link"
import { Tag } from "lucide-react"

// Sample categories with post counts
const categories = [
  { name: "Military Equipment", count: 12 },
  { name: "Defense Technology", count: 8 },
  { name: "Security Solutions", count: 7 },
  { name: "Tactical Operations", count: 6 },
  { name: "Cybersecurity", count: 5 },
  { name: "Intelligence", count: 4 },
  { name: "Border Security", count: 3 },
  { name: "Counter-Terrorism", count: 3 },
]

export default function BlogCategories() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
      <div className="flex items-center mb-4">
        <Tag className="h-5 w-5 text-yellow-500 mr-2" />
        <h3 className="text-xl font-bold text-gray-800">Categories</h3>
      </div>

      <ul className="space-y-2">
        {categories.map((category, index) => (
          <li key={index}>
            <Link
              href={`/blog?category=${category.name.toLowerCase().replace(/\s+/g, "-")}`}
              className="flex justify-between items-center py-2 text-gray-700 hover:text-yellow-600 transition-colors"
            >
              <span>{category.name}</span>
              <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">{category.count}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
