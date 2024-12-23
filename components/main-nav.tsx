import Link from "next/link"

export function MainNav() {
  return (
    <nav className="flex items-center space-x-4 lg:space-x-6 h-16">
      <Link
        href="/"
        className="text-sm font-medium transition-colors hover:text-cyan-400"
      >
        Home
      </Link>
      <Link
        href="/projects"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-cyan-400"
      >
        Projects
      </Link>
      <Link
        href="/publications"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-cyan-400"
      >
        Publications
      </Link>
      <Link
        href="/blog"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-cyan-400"
      >
        Blog
      </Link>
      <Link
        href="/gallery"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-cyan-400"
      >
        Gallery
      </Link>
    </nav>
  )
}

