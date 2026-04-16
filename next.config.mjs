/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: "/portfolio/bright-smile-dental", destination: "/portfolio/sample-dental-practice", permanent: true },
      { source: "/portfolio/glamour-beauty-studio", destination: "/portfolio/sample-salon-beauty", permanent: true },
      { source: "/portfolio/profix-plumbing", destination: "/portfolio/sample-plumbing-home-services", permanent: true },
      { source: "/portfolio/bella-italia-restaurant", destination: "/portfolio/sample-restaurant-dine-in", permanent: true },
      { source: "/portfolio/elite-fitness-center", destination: "/portfolio/sample-gym-fitness", permanent: true },
      { source: "/portfolio/dr-smith-family-dentistry", destination: "/portfolio/sample-dental-family", permanent: true },
      { source: "/portfolio/luxury-nails-spa", destination: "/portfolio/sample-spa-nails", permanent: true },
      { source: "/portfolio/green-lawn-care", destination: "/portfolio/sample-landscaping", permanent: true },
      { source: "/portfolio/sushi-paradise", destination: "/portfolio/sample-restaurant-ordering", permanent: true },
    ]
  },
}

export default nextConfig
