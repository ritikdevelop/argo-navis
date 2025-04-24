export interface BlogPost {
  id: number
  title: string
  slug: string
  excerpt: string
  content?: string
  image: string
  date: string
  author: string
  categories: string[]
  tags: string[]
  readTime: number
  featured: boolean
}
