import { MainNav } from "@/components/main-nav"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

// This would typically come from a CMS or API
const paintings = [
  { title: "Abstract Sunset", src: "/placeholder.svg?height=300&width=400", alt: "Abstract painting of a sunset" },
  { title: "Mountain Landscape", src: "/placeholder.svg?height=300&width=400", alt: "Painting of a mountain landscape" },
  { title: "Urban Nightscape", src: "/placeholder.svg?height=300&width=400", alt: "Painting of a city at night" },
  { title: "Floral Still Life", src: "/placeholder.svg?height=300&width=400", alt: "Still life painting of flowers" },
  { title: "Seascape", src: "/placeholder.svg?height=300&width=400", alt: "Painting of the sea" },
  { title: "Portrait Study", src: "/placeholder.svg?height=300&width=400", alt: "Portrait painting study" },
]

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <header className="border-b border-gray-800">
        <div className="container mx-auto px-4">
          <MainNav />
        </div>
      </header>
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-600 text-transparent bg-clip-text">Gallery</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {paintings.map((painting, index) => (
            <Card key={index} className="bg-gray-900/50 border-gray-800 overflow-hidden">
              <CardContent className="p-0">
                <Image
                  src={painting.src}
                  alt={painting.alt}
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-cyan-400">{painting.title}</h2>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}

