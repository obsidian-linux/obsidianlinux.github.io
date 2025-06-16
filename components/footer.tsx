"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Github } from "lucide-react"

export function Footer() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <footer className="border-t border-zinc-800 bg-black py-8">
        <div className="container mx-auto px-4">
          <div className="mt-8 text-center text-sm text-gray-400">
            <p>© 2024 Obsidian Linux. All rights reserved.</p>
          </div>
        </div>
      </footer>
    )
  }

  return (
    <footer className="border-t border-zinc-800 bg-black py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <Link href="/" className="text-xl font-bold text-purple-400">
              Obsidian Linux
            </Link>
            <div className="mt-8 text-center text-sm text-gray-400">
              <p>© 2024 Obsidian Linux. All rights reserved.</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
          </div>
        </div>
      </div>
    </footer>
  )
}
