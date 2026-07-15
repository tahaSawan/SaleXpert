"use client"

import { useEffect, useState } from "react"

const AUDIENCES = [
  "Plumbers",
  "Dentists",
  "Electricians",
  "Salons",
  "HVAC pros",
  "Restaurants",
  "Contractors",
  "Clinics",
] as const

export default function HeroRotatingAudience() {
  const [index, setIndex] = useState(0)
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReduceMotion(mq.matches)
    const onChange = () => setReduceMotion(mq.matches)
    mq.addEventListener("change", onChange)
    return () => mq.removeEventListener("change", onChange)
  }, [])

  useEffect(() => {
    if (reduceMotion) return
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % AUDIENCES.length)
    }, 3000)
    return () => window.clearInterval(id)
  }, [reduceMotion])

  const word = AUDIENCES[index]

  return (
    <h1 className="text-3xl sm:text-4xl lg:text-[2.85rem] lg:leading-[1.12] font-bold tracking-tight text-center lg:text-left">
      <span className="text-white">Websites that get </span>
      <span
        key={reduceMotion ? "static" : word}
        className="hero-rotate-word inline-block min-w-[11ch] text-left text-sky-300"
        aria-live={reduceMotion ? "off" : "polite"}
        aria-atomic="true"
      >
        {reduceMotion ? "local businesses" : word}
      </span>
      <br />
      <span className="text-white">more customers</span>
    </h1>
  )
}
