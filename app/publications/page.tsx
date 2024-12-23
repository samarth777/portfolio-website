import { MainNav } from "@/components/main-nav"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { publications } from "@/data/publications"

export default function PublicationsPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <header className="border-b border-gray-800">
        <div className="container mx-auto px-4">
          <MainNav />
        </div>
      </header>
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-600 text-transparent bg-clip-text">Publications</h1>
        <div className="space-y-6">
          {publications.map((publication, index) => (
            <Card key={index} className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle>{publication.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-2">{publication.authors}</p>
                <p className="text-gray-400 mb-4">{publication.conference}</p>
                <p className="text-gray-300 mb-4">{publication.description}</p>
                <div className="flex flex-wrap gap-2">
                  {publication.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}

