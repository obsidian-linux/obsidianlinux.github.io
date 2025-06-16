"use client"

import { useState, useEffect } from "react"

export function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    // Only add event listener if window is available (client-side)
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll)
      handleScroll() // Initial call
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll)
      }
    }
  }, [])

  return { scrollY }
} 