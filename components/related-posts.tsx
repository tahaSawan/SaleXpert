import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const blogPosts = [
  {
    slug: "5-reasons-website",
    title: "5 Reasons Why Your Business Needs a Website in 2025",
    category: "Business",
    image: "🌐",
  },
  {
    slug: "website-seo-tips",
    title: "Website SEO Tips to Rank Higher on Google",
    category: "Marketing",
    image: "📊",
  },
  {
    slug: "mobile-optimization",
    title: "Why Mobile Optimization is Critical for Your Website",
    category: "Design",
    image: "📱",
  },
]

export default function RelatedPosts({ slug }: { slug: string }) {
  const related = blogPosts.filter((post) => post.slug !== slug).slice(0, 3)

  return (
    <section className="py-20 sm:py-24 border-t border-border bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-foreground mb-10">Related articles</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {related.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <div className="group rounded-xl border border-border bg-card h-full p-6 hover:border-primary/30 transition-colors cursor-pointer">
                <div className="w-full h-32 bg-muted border border-border rounded-lg flex items-center justify-center text-4xl mb-4">
                  {post.image}
                </div>

                <div className="inline-block px-2.5 py-1 bg-muted text-primary text-xs font-medium rounded-md mb-3 border border-border">
                  {post.category}
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>

                <Button size="sm" className="w-full font-semibold gap-2 group-hover:gap-3 transition-all">
                  Read <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </Button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
