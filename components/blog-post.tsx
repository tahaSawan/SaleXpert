import Link from "next/link"
import { Calendar, User, Share2, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

const blogContent: Record<string, any> = {
  "5-reasons-website": {
    title: "5 Reasons Why Your Business Needs a Website in 2025",
    author: "Abdullah Khan",
    date: "January 15, 2025",
    readTime: "5 min read",
    category: "Business",
    image: "🌐",
    content: `
      <p>In today's digital world, having a professional website is essential for any business. Whether you're a dentist, plumber, beautician, or running any local service business, a website is your digital storefront and can be the difference between success and obscurity.</p>
      
      <h2>1. Builds Trust and Credibility</h2>
      <p>Customers search online before making purchasing decisions. A professional website shows potential customers that your business is legitimate, established, and trustworthy. It's like having a permanent storefront open 24/7.</p>
      
      <h2>2. Reach More Customers</h2>
      <p>Your website reaches people beyond your immediate geographic area. Customers searching for your services on Google will find you online. Without a website, you're invisible to the majority of your potential customers.</p>
      
      <h2>3. Generate More Leads</h2>
      <p>A website acts as a lead generation channel. With a contact form, phone number, and appointment booking system, you can convert visitors into customers. Results vary by market and how you promote the site—we never promise a fixed lift.</p>
      
      <h2>4. Compete with Larger Companies</h2>
      <p>A professional website levels the playing field. Your small business can compete with larger companies by presenting a polished, professional online presence. Customers often can't tell the difference between a small and large company based on website quality.</p>
      
      <h2>5. Cost-Effective Marketing</h2>
      <p>Compared to traditional advertising, a website is incredibly cost-effective. You can reach thousands of potential customers for a fraction of what you'd spend on print ads or billboards.</p>
    `,
  },
  "website-seo-tips": {
    title: "Website SEO Tips to Rank Higher on Google",
    author: "Taha S Awan",
    date: "January 12, 2025",
    readTime: "7 min read",
    category: "Marketing",
    image: "📊",
    content: `
      <p>Search Engine Optimization (SEO) matters for getting your website found in search. Here are practical strategies many local businesses use to improve visibility—rankings are never guaranteed.</p>
      
      <h2>1. Optimize Your Page Titles</h2>
      <p>Your page title is one of the most important SEO factors. Make sure it includes your target keyword and clearly describes what the page is about. Keep it under 60 characters so it displays fully in search results.</p>
      
      <h2>2. Use Keywords Naturally</h2>
      <p>Research relevant keywords for your business and use them naturally throughout your content. Avoid keyword stuffing—focus on creating content that's helpful to your readers first.</p>
      
      <h2>3. Create High-Quality Content</h2>
      <p>Google rewards websites with helpful, original content. Write articles that answer your customers' questions and provide real value. Longer, detailed content tends to rank better.</p>
      
      <h2>4. Build Quality Backlinks</h2>
      <p>Backlinks from other websites tell Google that your content is credible. Focus on getting mentioned in local directories and industry publications.</p>
      
      <h2>5. Mobile Optimization</h2>
      <p>Over 60% of searches happen on mobile. Google prioritizes mobile-friendly websites, so make sure yours is responsive and loads quickly on all devices.</p>
    `,
  },
  "mobile-optimization": {
    title: "Why Mobile Optimization is Critical for Your Website",
    author: "Abdullah Khan",
    date: "January 10, 2025",
    readTime: "6 min read",
    category: "Design",
    image: "📱",
    content: `
      <p>Mobile optimization is no longer optional—it's essential. Here's why and how to do it right.</p>
      
      <h2>Mobile Traffic is Dominant</h2>
      <p>Over 60% of all web traffic now comes from mobile devices. If your website isn't optimized for mobile, you're losing more than half your potential customers.</p>
      
      <h2>Google Prioritizes Mobile-Friendly Sites</h2>
      <p>Google's search algorithm now prioritizes mobile-friendly websites. If your site isn't mobile-optimized, you'll rank lower in search results.</p>
      
      <h2>Mobile Users Have Different Needs</h2>
      <p>Mobile users are often looking for quick answers—directions, hours, phone numbers, or pricing. Make sure this information is easy to find on mobile devices.</p>
      
      <h2>Key Mobile Optimization Tips</h2>
      <ul>
        <li>Use responsive design that adapts to any screen size</li>
        <li>Make buttons and links large enough to tap easily</li>
        <li>Minimize loading time on mobile networks</li>
        <li>Avoid pop-ups that block content</li>
        <li>Use mobile-friendly fonts and readable text sizes</li>
      </ul>
    `,
  },
  "conversion-optimization": {
    title: "10 Ways to Increase Website Conversions",
    author: "Taha S Awan",
    date: "January 8, 2025",
    readTime: "8 min read",
    category: "Marketing",
    image: "💰",
    content: `
      <p>Getting traffic to your website is great, but converting that traffic into customers is what matters. Here are practical ideas to improve conversions.</p>
      
      <h2>1. Clear Call-to-Action Buttons</h2>
      <p>Make it obvious what you want visitors to do. Use clear, action-oriented button text like "Book Now," "Call Us," or "Get Started."</p>
      
      <h2>2. Social Proof</h2>
      <p>Display customer testimonials, ratings, and success stories. People trust recommendations from other customers.</p>
      
      <h2>3. Fast Loading Times</h2>
      <p>Slow websites lose customers. Optimize images, enable caching, and use a content delivery network to ensure fast loading.</p>
      
      <h2>4. Simple Forms</h2>
      <p>Long forms reduce conversions. Ask only for essential information—name, email, and phone number are usually enough.</p>
      
      <h2>5. Trust Signals</h2>
      <p>Display security badges, SSL certificates, and your business address. These trust signals increase conversion rates significantly.</p>
    `,
  },
  "website-security": {
    title: "Keeping Your Website Safe: A Security Guide",
    author: "Abdullah Khan",
    date: "January 5, 2025",
    readTime: "6 min read",
    category: "Security",
    image: "🔒",
    content: `
      <p>Website security is critical for protecting your business and customers. Here's what you need to know.</p>
      
      <h2>1. Use HTTPS/SSL Certificate</h2>
      <p>An SSL certificate encrypts data between your website and visitors. It's essential for collecting payment information or customer data.</p>
      
      <h2>2. Keep Software Updated</h2>
      <p>Regularly update your website software, plugins, and themes. Updates often include security patches that fix vulnerabilities.</p>
      
      <h2>3. Strong Passwords</h2>
      <p>Use strong, unique passwords for all admin accounts. Consider using a password manager to keep track of them securely.</p>
      
      <h2>4. Regular Backups</h2>
      <p>Regularly backup your website data. In case of a security breach, you can restore your website quickly.</p>
      
      <h2>5. Monitor for Threats</h2>
      <p>Use security monitoring tools to detect threats early. Many hosting providers offer security monitoring as part of their service.</p>
    `,
  },
  "website-analytics": {
    title: "Understanding Your Website Analytics",
    author: "Taha S Awan",
    date: "January 2, 2025",
    readTime: "7 min read",
    category: "Analytics",
    image: "📈",
    content: `
      <p>Website analytics can reveal valuable insights about your visitors and help you make data-driven decisions. Here's how to understand them.</p>
      
      <h2>Key Metrics to Track</h2>
      <p>Focus on metrics that matter: traffic sources, visitor behavior, conversion rates, and average session duration. These tell you what's working and what's not.</p>
      
      <h2>Traffic Sources</h2>
      <p>Understand where your visitors come from—organic search, social media, email, or direct traffic. This helps you allocate marketing budget effectively.</p>
      
      <h2>Visitor Behavior</h2>
      <p>Track which pages visitors spend time on and which ones they leave quickly. This helps you improve underperforming pages.</p>
      
      <h2>Conversion Tracking</h2>
      <p>Set up conversion tracking to measure how many visitors become customers. This is the most important metric for your business.</p>
    `,
  },
}

export default function BlogPost({ slug }: { slug: string }) {
  const post = blogContent[slug]

  if (!post) {
    return (
      <section className="py-20 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Article not found</h1>
          <p className="text-muted-foreground mt-4">
            Sorry—we couldn&apos;t find that article.{" "}
            <Link href="/blog" className="text-primary font-medium hover:underline">
              Back to insights
            </Link>
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="pb-16 sm:pb-20">
      <div className="border-b border-border bg-muted/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline mb-6"
          >
            <ArrowLeft size={16} />
            Back to insights
          </Link>
          <div className="inline-block px-3 py-1 bg-primary/15 text-primary text-xs font-semibold rounded-md mb-4 border border-primary/20">
            {post.category}
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-bold text-foreground tracking-tight leading-tight">
            {post.title}
          </h1>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-12">
        <div className="mb-8">

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-8 items-start sm:items-center text-muted-foreground text-sm pb-2">
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-primary shrink-0" />
              {post.date}
            </div>
            <div className="flex items-center gap-2">
              <User size={16} className="text-primary shrink-0" />
              {post.author}
            </div>
            <span className="text-foreground/80">{post.readTime}</span>
          </div>
        </div>

        <div className="w-full h-56 sm:h-72 bg-muted border border-border rounded-xl flex items-center justify-center text-7xl sm:text-9xl mb-10 sm:mb-12">
          {post.image}
        </div>

        {/* Content */}
        <div className="prose prose-neutral max-w-none mb-12">
          <div
            className="text-foreground/90 leading-relaxed space-y-6"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        {/* Share buttons */}
        <div className="border-t border-border pt-8 flex items-center gap-4">
          <p className="text-foreground font-semibold">Share this article:</p>
          <Button variant="outline" size="sm" className="gap-2 bg-transparent">
            <Share2 size={16} />
            Twitter
          </Button>
          <Button variant="outline" size="sm" className="gap-2 bg-transparent">
            <Share2 size={16} />
            LinkedIn
          </Button>
          <Button variant="outline" size="sm" className="gap-2 bg-transparent">
            <Share2 size={16} />
            Facebook
          </Button>
        </div>
      </article>
    </section>
  )
}
