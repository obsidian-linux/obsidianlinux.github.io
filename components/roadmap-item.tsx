"use client"

import { useState, useEffect } from "react"

interface RoadmapItemProps {
  title: string
  date: string
  status: "Completed" | "In Progress" | "Planned"
  description: string
  isLast?: boolean
}

export function RoadmapItem({ title, date, status, description, isLast = false }: RoadmapItemProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <div className="relative mb-8">
        <div className="absolute -left-10 mt-1.5 h-5 w-5 rounded-full border-4 border-purple-700 bg-purple-400"></div>
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <span className="text-sm text-gray-400">{date}</span>
        </div>
        <div className="mb-2">
          <span className="inline-block rounded-full px-3 py-1 text-xs font-medium bg-zinc-800 text-gray-400">
            {status}
          </span>
        </div>
        <p className="text-gray-300">{description}</p>
      </div>
    )
  }

  return (
    <div className={`relative mb-8 ${isLast ? "" : ""}`}>
      <div className="absolute -left-10 mt-1.5 h-5 w-5 rounded-full border-4 border-purple-700 bg-purple-400"></div>
      <div className="mb-2 flex items-center justify-between">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <span className="text-sm text-gray-400">{date}</span>
      </div>
      <div className="mb-2">
        <span
          className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${
            status === "Completed"
              ? "bg-green-900/50 text-green-400"
              : status === "In Progress"
                ? "bg-yellow-900/50 text-yellow-400"
                : "bg-zinc-800 text-gray-400"
          }`}
        >
          {status}
        </span>
      </div>
      <p className="text-gray-300">{description}</p>
    </div>
  )
}
