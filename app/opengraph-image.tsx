import { ImageResponse } from "next/og"
import { SITE_LOCATION, SITE_NAME, SITE_TAGLINE } from "@/lib/site"

export const runtime = "edge"

export const alt = `${SITE_NAME} — ${SITE_TAGLINE}`
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(145deg, #0f172a 0%, #1e3a8a 45%, #0f172a 100%)",
          padding: 64,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 20,
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "#ffffff",
              lineHeight: 1.1,
            }}
          >
            {SITE_NAME}
          </div>
          <div
            style={{
              fontSize: 32,
              fontWeight: 500,
              color: "rgba(255,255,255,0.88)",
              maxWidth: 900,
              lineHeight: 1.35,
            }}
          >
            {SITE_TAGLINE}
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 22,
              color: "rgba(147,197,253,0.95)",
              fontWeight: 500,
            }}
          >
            Local service websites · {SITE_LOCATION}
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
