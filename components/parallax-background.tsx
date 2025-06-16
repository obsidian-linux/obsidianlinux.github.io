"use client"

import type React from "react"

import { useScrollPosition } from "@/hooks/use-scroll-position"
import { useEffect, useRef } from "react"

interface ParallaxBackgroundProps {
  children: React.ReactNode
}

export function ParallaxBackground({ children }: ParallaxBackgroundProps) {
  const { scrollY } = useScrollPosition()
  const dotGridRef = useRef<HTMLDivElement>(null)
  const gridLinesRef = useRef<HTMLDivElement>(null)
  const topRightGlowRef = useRef<HTMLDivElement>(null)
  const bottomLeftGlowRef = useRef<HTMLDivElement>(null)
  const middleGlowRef = useRef<HTMLDivElement>(null)
  const bottomRightGlowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Only apply transforms if window is available (client-side)
    if (typeof window === "undefined") return

    if (dotGridRef.current) {
      dotGridRef.current.style.transform = `translateY(${scrollY * 0.05}px)`
    }
    if (gridLinesRef.current) {
      gridLinesRef.current.style.transform = `translateY(${scrollY * 0.08}px)`
    }
    if (topRightGlowRef.current) {
      topRightGlowRef.current.style.transform = `translate(${scrollY * 0.1}px, ${scrollY * -0.05}px)`
    }
    if (bottomLeftGlowRef.current) {
      bottomLeftGlowRef.current.style.transform = `translate(${scrollY * -0.1}px, ${scrollY * 0.05}px)`
    }
    if (middleGlowRef.current) {
      middleGlowRef.current.style.transform = `translate(${scrollY * -0.03}px, ${scrollY * 0.02}px)`
    }
    if (bottomRightGlowRef.current) {
      bottomRightGlowRef.current.style.transform = `translate(${scrollY * 0.07}px, ${scrollY * 0.03}px)`
    }
  }, [scrollY])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Main gradient background - static */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-black"></div>

      {/* Parallax dot pattern */}
      <div
        ref={dotGridRef}
        className="absolute inset-0 opacity-40 will-change-transform"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(168, 85, 247, 0.15) 1px, transparent 0)`,
          backgroundSize: "30px 30px",
        }}
      ></div>

      {/* Parallax grid lines */}
      <div
        ref={gridLinesRef}
        className="absolute inset-0 opacity-10 will-change-transform"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(168, 85, 247, 0.1) 1px, transparent 1px), 
                           linear-gradient(to bottom, rgba(168, 85, 247, 0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      ></div>

      {/* Parallax floating elements */}
      <div
        ref={topRightGlowRef}
        className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-purple-600/10 blur-3xl animate-pulse will-change-transform"
      ></div>
      <div
        ref={bottomLeftGlowRef}
        className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-purple-800/10 blur-3xl animate-pulse delay-1000 will-change-transform"
      ></div>
      <div
        ref={middleGlowRef}
        className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-purple-700/5 blur-3xl animate-pulse delay-500 will-change-transform"
      ></div>
      <div
        ref={bottomRightGlowRef}
        className="absolute bottom-1/3 right-1/3 h-48 w-48 rounded-full bg-purple-500/5 blur-3xl animate-pulse delay-1500 will-change-transform"
      ></div>

      {children}
    </div>
  )
}
