import { MainNav } from "@/components/main-nav"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

// This would typically come from a CMS or API
const blogPosts = [
  {
    title: "Exploring the Future of AI",
    date: "2024-03-15",
    excerpt: "A deep dive into the latest advancements in artificial intelligence and their potential impact on society.",
    slug: "exploring-future-ai"
  },
  {
    title: "Building Scalable Web Applications",
    date: "2024-02-28",
    excerpt: "Best practices and techniques for creating web applications that can handle millions of users.",
    slug: "building-scalable-web-apps"
  },
  {
    title: "The Rise of Quantum Computing",
    date: "2024-02-10",
    excerpt: "An overview of quantum computing technology and its potential to revolutionize various industries.",
    slug: "rise-of-quantum-computing"
  }
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <header className="border-b border-gray-800">
        <div className="container mx-auto px-4">
          <MainNav />
        </div>
      </header>
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-600 text-transparent bg-clip-text">Blog</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Card key={post.slug} className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-400 mb-2">{post.date}</p>
                <p className="text-gray-300 mb-4">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="text-cyan-400 hover:underline">
                  Read more
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}

