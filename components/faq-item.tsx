"use client"

import { useState, useEffect } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface FaqItemProps {
  question: string
  answer: string
}

export function FaqItem({ question, answer }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <div className="rounded-lg bg-black/60 backdrop-blur-sm">
        <div className="flex w-full items-center justify-between p-4 text-left">
          <h3 className="text-lg font-medium text-white">{question}</h3>
          <ChevronDown className="h-5 w-5 text-purple-400" />
        </div>
      </div>
    )
  }

  return (
    <div className="rounded-lg bg-black/60 backdrop-blur-sm">
      <button className="flex w-full items-center justify-between p-4 text-left" onClick={() => setIsOpen(!isOpen)}>
        <h3 className="text-lg font-medium text-white">{question}</h3>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-purple-400" />
        ) : (
          <ChevronDown className="h-5 w-5 text-purple-400" />
        )}
      </button>
      {isOpen && (
        <div className="border-t border-zinc-800 p-4">
          <p className="text-gray-300">{answer}</p>
        </div>
      )}
    </div>
  )
}
