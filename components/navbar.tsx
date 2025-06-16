"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <nav className="fixed left-0 right-0 top-0 z-50 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="text-xl font-bold">
              <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
                Obsidian Linux
              </span>
            </Link>
            <div className="flex items-center gap-4">
            </div>
          </div>
        </div>
      </nav>
    )
  }

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
              Obsidian Linux
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <Link href="#about" className="text-sm text-gray-300 transition-colors hover:text-purple-400">
              About
            </Link>
            <Link href="#features" className="text-sm text-gray-300 transition-colors hover:text-purple-400">
              Features
            </Link>
            <Link href="#roadmap" className="text-sm text-gray-300 transition-colors hover:text-purple-400">
              Roadmap
            </Link>
            <Link href="#developers" className="text-sm text-gray-300 transition-colors hover:text-purple-400">
              Team
            </Link>
            <Link href="#testers" className="text-sm text-gray-300 transition-colors hover:text-purple-400">
              Testers
            </Link>
            <Link href="#download" className="text-sm text-gray-300 transition-colors hover:text-purple-400">
              Download
            </Link>
            <Link href="#faq" className="text-sm text-gray-300 transition-colors hover:text-purple-400">
              FAQ
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="rounded-lg p-2 text-gray-400 hover:bg-white/10 hover:text-white md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="bg-black/50 backdrop-blur-sm md:hidden">
            <div className="flex flex-col space-y-4 px-4 py-4">
              <Link
                href="#about"
                className="text-sm text-gray-300 transition-colors hover:text-purple-400"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="#features"
                className="text-sm text-gray-300 transition-colors hover:text-purple-400"
                onClick={() => setIsOpen(false)}
              >
                Features
              </Link>
              <Link
                href="#roadmap"
                className="text-sm text-gray-300 transition-colors hover:text-purple-400"
                onClick={() => setIsOpen(false)}
              >
                Roadmap
              </Link>
              <Link
                href="#developers"
                className="text-sm text-gray-300 transition-colors hover:text-purple-400"
                onClick={() => setIsOpen(false)}
              >
                Team
              </Link>
              <Link
                href="#testers"
                className="text-sm text-gray-300 transition-colors hover:text-purple-400"
                onClick={() => setIsOpen(false)}
              >
                Testers
              </Link>
              <Link
                href="#download"
                className="text-sm text-gray-300 transition-colors hover:text-purple-400"
                onClick={() => setIsOpen(false)}
              >
                Download
              </Link>
              <Link
                href="#faq"
                className="text-sm text-gray-300 transition-colors hover:text-purple-400"
                onClick={() => setIsOpen(false)}
              >
                FAQ
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
