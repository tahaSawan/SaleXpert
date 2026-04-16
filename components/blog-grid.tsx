"use client"

import Link from "next/link"
import { useState } from "react"
import { Calendar, User, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const blogPosts = [
  {
    id: 1,
    slug: "5-reasons-website",
    title: "5 Reasons Why Your Business Needs a Website in 2025",
    excerpt:
      "A professional website is no longer optional. Discover how a strong online presence can transform your business and attract more customers.",
    category: "Business",
    author: "Abdullah Khan",
    date: "January 15, 2025",
    readTime: "5 min read",
    image: "🌐",
  },
  {
    id: 2,
    slug: "website-seo-tips",
    title: "Website SEO Tips to Rank Higher on Google",
    excerpt:
      "Learn practical SEO ideas that can help your website show up for the right local searches—results vary by market and competition.",
    category: "Marketing",
    author: "Taha S Awan",
    date: "January 12, 2025",
    readTime: "7 min read",
    image: "📊",
  },
  {
    id: 3,
    slug: "mobile-optimization",
    title: "Why Mobile Optimization is Critical for Your Website",
    excerpt:
      "Over 60% of web traffic comes from mobile devices. Learn why responsive design is essential for your business.",
    category: "Design",
    author: "Abdullah Khan",
    date: "January 10, 2025",
    readTime: "6 min read",
    image: "📱",
  },
  {
    id: 4,
    slug: "conversion-optimization",
    title: "10 Ways to Increase Website Conversions",
    excerpt:
      "Turn more visitors into customers with these conversion-focused techniques—test what works for your audience.",
    category: "Marketing",
    author: "Taha S Awan",
    date: "January 8, 2025",
    readTime: "8 min read",
    image: "💰",
  },
  {
    id: 5,
    slug: "website-security",
    title: "Keeping Your Website Safe: A Security Guide",
    excerpt:
      "Protect your business and customers with essential website security practices that every business owner should know.",
    category: "Security",
    author: "Abdullah Khan",
    date: "January 5, 2025",
    readTime: "6 min read",
    image: "🔒",
  },
  {
    id: 6,
    slug: "website-analytics",
    title: "Understanding Your Website Analytics",
    excerpt: "Learn how to read and interpret your website analytics to make data-driven decisions for your business.",
    category: "Analytics",
    author: "Taha S Awan",
    date: "January 2, 2025",
    readTime: "7 min read",
    image: "📈",
  },
]

export default function BlogGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const categories = ["All", ...new Set(blogPosts.map((post) => post.category))]

  const filteredPosts =
    selectedCategory === "All" ? blogPosts : blogPosts.filter((post) => post.category === selectedCategory)

  return (
    <section className="py-20 sm:py-24 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-md text-sm font-medium border transition-colors ${
                selectedCategory === cat
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <div className="group rounded-xl border border-border bg-card h-full p-6 hover:border-primary/30 transition-colors cursor-pointer">
                {/* Image placeholder */}
                <div className="w-full h-40 bg-muted border border-border rounded-lg flex items-center justify-center text-5xl mb-4">
                  {post.image}
                </div>

                {/* Category badge */}
                <div className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full mb-3">
                  {post.category}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{post.excerpt}</p>

                {/* Meta info */}
                <div className="border-t border-border pt-4 mb-4">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      {post.date}
                    </div>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <User size={14} />
                    {post.author}
                  </div>
                </div>

                {/* Read more */}
                <Button className="w-full font-semibold gap-2 group-hover:gap-3 transition-all">
                  Read Article <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
