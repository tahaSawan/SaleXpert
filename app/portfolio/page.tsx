import type { Metadata } from "next"
import PortfolioContent from "@/components/portfolio-content"
import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/site"

export const metadata: Metadata = {
  title: "Portfolio",
  description: `Sample website layouts by industry (not live client work) — ${SITE_NAME}. ${SITE_DESCRIPTION.slice(0, 100)}…`,
}

export default function PortfolioPage() {
  return <PortfolioContent />
}
