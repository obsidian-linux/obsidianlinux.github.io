import type { ReactNode } from "react"

interface EnhancedFeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  delay?: number
}

export function EnhancedFeatureCard({ icon, title, description, delay = 0 }: EnhancedFeatureCardProps) {
  return (
    <div
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 p-8 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Hover gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

      {/* Animated border */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/20 via-transparent to-purple-600/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

      <div className="relative z-10">
        <div className="mb-6 inline-flex rounded-xl bg-purple-900/30 p-4 text-purple-400 transition-all duration-300 group-hover:bg-purple-800/40 group-hover:scale-110 group-hover:rotate-3">
          {icon}
        </div>
        <h3 className="mb-4 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-purple-100">
          {title}
        </h3>
        <p className="text-gray-300 leading-relaxed transition-colors duration-300 group-hover:text-gray-200">
          {description}
        </p>
      </div>

      {/* Subtle shine effect */}
      <div className="absolute -top-2 -right-2 h-4 w-4 rounded-full bg-purple-400/20 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-150"></div>
    </div>
  )
}
