"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Github, ExternalLink, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

interface EnhancedDeveloperCardProps {
  name: string
  role: string
  image: string
  description: string
  github: string
  skills?: string[]
  projects?: Array<{ name: string; url: string }>
  index: number
}

export function EnhancedDeveloperCard({
  name,
  role,
  image,
  description,
  github,
  skills = [],
  projects = [],
  index,
}: EnhancedDeveloperCardProps) {
  const [expanded, setExpanded] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <div
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-black/80 to-black/90 p-8 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 animate-fade-in-up"
      style={{ animationDelay: `${index * 200}ms` }}
    >
      {/* Hover gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

      {/* Top section with image and basic info */}
      <div className="relative z-10 p-6">
        <div className="flex flex-col items-center md:flex-row md:items-start md:gap-6">
          {/* Profile image with glow effect */}
          <div className="relative mb-4 md:mb-0">
            <div className="relative h-32 w-32 overflow-hidden rounded-full border-2 border-purple-500/30 transition-all duration-300 group-hover:border-purple-500/50 group-hover:shadow-lg group-hover:shadow-purple-500/20">
              <Image src={image || "/placeholder.svg?height=200&width=200"} alt={name} fill className="object-cover" />
            </div>
            <div className="absolute -inset-0.5 rounded-full bg-gradient-to-br from-purple-500/20 to-transparent opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-100"></div>
          </div>

          {/* Text content */}
          <div className="flex flex-1 flex-col items-center text-center md:items-start md:text-left">
            <h3 className="mb-1 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-purple-100">
              {name}
            </h3>
            <p className="mb-3 text-lg font-medium text-purple-400">{role}</p>
            <p className="mb-4 text-gray-300 transition-colors duration-300 group-hover:text-gray-200">{description}</p>

            {/* Social links */}
            <div className="flex gap-3">
            </div>
          </div>
        </div>
      </div>

      {/* Expandable section */}
      {(skills.length > 0 || projects.length > 0) && (
        <div className="relative z-10 border-t border-zinc-700/50">
          <Button
            variant="ghost"
            className="flex w-full items-center justify-center gap-2 py-3 text-sm text-gray-400 transition-colors hover:text-purple-300"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "Show less" : "Show more"}
            <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} />
          </Button>

          {expanded && (
            <div className="border-t border-zinc-700/50 p-6">
              {/* Skills section */}
              {skills.length > 0 && (
                <div className="mb-4">
                  <h4 className="mb-2 text-sm font-semibold uppercase text-gray-400">Skills & Expertise</h4>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <span
                        key={index}
                        className="rounded-full bg-black/80 px-3 py-1 text-sm text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Projects section */}
              {projects.length > 0 && (
                <div>
                  <h4 className="mb-2 text-sm font-semibold uppercase text-gray-400">Notable Projects</h4>
                  <div className="mt-4 space-y-2">
                    {projects.map((project, index) => (
                      <Link
                        key={index}
                        href={project.url}
                        className="block rounded-lg bg-black/80 p-3 text-sm text-gray-300 transition-colors hover:bg-purple-900/30 hover:text-purple-200"
                      >
                        {project.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
