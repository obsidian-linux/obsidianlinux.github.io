"use client"

import { useEffect, useRef, useState } from 'react'
import { useScrollPosition } from "@/hooks/use-scroll-position"

export function TeamSectionAnimation() {
  const { scrollY } = useScrollPosition()
  const containerRef = useRef<HTMLDivElement>(null)
  const [particles, setParticles] = useState<Array<{
    opacity: number
    width: number
    height: number
    top: number
    left: number
    duration: number
    delay: number
  }>>([])

  useEffect(() => {
    // Only apply transforms if window is available (client-side)
    if (typeof window === "undefined") return

    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      const containerRect = container.getBoundingClientRect()
      const isVisible = containerRect.top < window.innerHeight && containerRect.bottom > 0

      if (isVisible) {
        const particles = container.querySelectorAll(".particle")
        particles.forEach((particle, index) => {
          const speed = 0.05 + (index % 3) * 0.02
          const yOffset = scrollY * speed
          const xOffset = Math.sin(scrollY * 0.002 + index) * 10

          // Apply the transform
          ;(particle as HTMLElement).style.transform = `translate(${xOffset}px, ${yOffset}px)`
        })
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrollY])

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }).map(() => ({
      opacity: Math.random() * 0.3 + 0.1,
      width: Math.floor(Math.random() * 5) + 2,
      height: Math.floor(Math.random() * 5) + 2,
      top: Math.random() * 100,
      left: Math.random() * 100,
      duration: Math.floor(Math.random() * 8) + 10,
      delay: Math.random() * 5
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle, i) => (
        <div
          key={i}
          className="particle absolute rounded-full will-change-transform"
          style={{
            width: `${particle.width}px`,
            height: `${particle.height}px`,
            backgroundColor: 'rgba(168, 85, 247, 0.2)',
            opacity: particle.opacity,
            top: `${particle.top}%`,
            left: `${particle.left}%`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`
          }}
        />
      ))}
    </div>
  )
}
