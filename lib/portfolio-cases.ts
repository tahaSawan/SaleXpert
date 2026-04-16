export type PortfolioCase = {
  slug: string
  title: string
  category: string
  description: string
  image: string
  tags: string[]
  /** Detail page body (HTML) */
  contentHtml: string
  /** One-line outcome for hero subtitle */
  outcome: string
}

/** Sample layouts only—fictional labels, not live client work. */
export const portfolioCases: PortfolioCase[] = [
  {
    slug: "sample-dental-practice",
    title: "Dental practice · sample layout",
    category: "dental",
    description: "Sample layout for booking, services, and trust on a dental site",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&h=700&fit=crop",
    tags: ["Healthcare", "Booking", "Local SEO"],
    outcome: "Appointment-focused structure with clear services and trust signals.",
    contentHtml: `
      <p>This pattern puts services, insurance, and team credentials up front—so new patients know they are in the right place before they scroll.</p>
      <h2>What we emphasize in this layout</h2>
      <ul>
        <li>Primary CTA to call or book in the hero and on every service page</li>
        <li>Structured headings for local and service keywords without keyword stuffing</li>
        <li>Room for reviews and proof where you want them</li>
      </ul>
      <p>A real practice would get custom copy, photos, and booking links matched to how you schedule patients.</p>
    `,
  },
  {
    slug: "sample-salon-beauty",
    title: "Salon & beauty · sample layout",
    category: "beauty",
    description: "Sample layout for services, gallery, and a clear booking path",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&h=700&fit=crop",
    tags: ["Beauty", "Gallery", "Appointments"],
    outcome: "Gallery + services menu with one obvious way to book or call.",
    contentHtml: `
      <p>Salon and spa sites work when visitors see the vibe fast—then get one clear way to book or call.</p>
      <h2>What we emphasize in this layout</h2>
      <ul>
        <li>Service categories with time and price where you want them shown</li>
        <li>Mobile-friendly gallery and team section</li>
        <li>Sticky phone or book button on small screens</li>
      </ul>
    `,
  },
  {
    slug: "sample-plumbing-home-services",
    title: "Plumbing & home services · sample layout",
    category: "home services",
    description: "Sample layout for emergency contact, areas, and service list",
    image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=1200&h=700&fit=crop",
    tags: ["Services", "Emergency", "Reviews"],
    outcome: "Emergency number and service area easy to find immediately.",
    contentHtml: `
      <p>Home services depend on trust and speed. This layout leads with contact and coverage area.</p>
      <h2>What we emphasize in this layout</h2>
      <ul>
        <li>Click-to-call above the fold on every device</li>
        <li>Service list mapped to how homeowners search (drain, water heater, etc.)</li>
        <li>Space for reviews and licenses</li>
      </ul>
    `,
  },
  {
    slug: "sample-restaurant-dine-in",
    title: "Restaurant (dine-in) · sample layout",
    category: "restaurants",
    description: "Sample layout for hours, menu, and reservations",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=700&fit=crop",
    tags: ["Food", "Menu", "Reservations"],
    outcome: "Hours, menu, and directions scannable in seconds.",
    contentHtml: `
      <p>Restaurant visitors want hours, menu, and how to reserve or order—without hunting.</p>
      <h2>What we emphasize in this layout</h2>
      <ul>
        <li>Prominent hours and location with map</li>
        <li>Menu structure that is easy to skim on a phone</li>
        <li>CTA for reservations or third-party ordering if you use it</li>
      </ul>
    `,
  },
  {
    slug: "sample-gym-fitness",
    title: "Gym & fitness · sample layout",
    category: "fitness",
    description: "Sample layout for classes, membership, and schedule",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=700&fit=crop",
    tags: ["Fitness", "Schedule", "Membership"],
    outcome: "Schedule and membership CTAs aligned with how you sell.",
    contentHtml: `
      <p>Gyms and studios need fast answers: what you offer, when, and how to join.</p>
      <h2>What we emphasize in this layout</h2>
      <ul>
        <li>Class or training schedule blocks</li>
        <li>Pricing or “get started” paths</li>
        <li>Social proof and trainer highlights</li>
      </ul>
    `,
  },
  {
    slug: "sample-dental-family",
    title: "Family dental · sample layout",
    category: "dental",
    description: "Sample layout for family-friendly tone, insurance, and new patients",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&h=700&fit=crop",
    tags: ["Healthcare", "Family", "Contact"],
    outcome: "Warm tone with insurance and new-patient flow.",
    contentHtml: `
      <p>Family practices need warmth plus clarity—especially for first-time and pediatric patients.</p>
      <h2>What we emphasize in this layout</h2>
      <ul>
        <li>Separate paths for new vs returning patients if needed</li>
        <li>Insurance and financing mentions where you want them</li>
        <li>Team photos and bios to build trust</li>
      </ul>
    `,
  },
  {
    slug: "sample-spa-nails",
    title: "Nails & spa · sample layout",
    category: "beauty",
    description: "Sample layout for service menu and booking",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1200&h=700&fit=crop",
    tags: ["Spa", "Services", "Booking"],
    outcome: "Premium feel with a simple booking or call path.",
    contentHtml: `
      <p>Spa and nail businesses compete on look and feel—then convert with an easy booking action.</p>
      <h2>What we emphasize in this layout</h2>
      <ul>
        <li>Service grid with durations and pricing if you publish them</li>
        <li>Gift cards or specials sections when relevant</li>
        <li>Gallery or social tie-in</li>
      </ul>
    `,
  },
  {
    slug: "sample-landscaping",
    title: "Landscaping & lawn care · sample layout",
    category: "home services",
    description: "Sample layout for gallery and quote requests",
    image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=1200&h=700&fit=crop",
    tags: ["Landscaping", "Gallery", "Quotes"],
    outcome: "Visual proof plus a simple quote request.",
    contentHtml: `
      <p>Landscaping buyers want to see results and know you cover their neighborhood.</p>
      <h2>What we emphasize in this layout</h2>
      <ul>
        <li>Project gallery or before/after</li>
        <li>Service area map or city list</li>
        <li>Quote request with minimal friction</li>
      </ul>
    `,
  },
  {
    slug: "sample-restaurant-ordering",
    title: "Restaurant (ordering) · sample layout",
    category: "restaurants",
    description: "Sample layout for menu and online ordering links",
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=1200&h=700&fit=crop",
    tags: ["Restaurant", "Ordering", "Menu"],
    outcome: "Menu-first with clear paths to order.",
    contentHtml: `
      <p>When takeout and delivery matter, the site should route people to the right channel fast.</p>
      <h2>What we emphasize in this layout</h2>
      <ul>
        <li>Menu sections that load quickly on mobile</li>
        <li>Buttons to your ordering stack (DoorDash, Toast, etc.)</li>
        <li>Location and hours repeated in the footer</li>
      </ul>
    `,
  },
]

export function getCaseBySlug(slug: string): PortfolioCase | undefined {
  return portfolioCases.find((c) => c.slug === slug)
}
