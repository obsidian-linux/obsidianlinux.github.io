interface EnhancedRoadmapItemProps {
  title: string
  date: string
  status: "Completed" | "In Progress" | "Planned"
  description: string
  isLast?: boolean
  index: number
}

export function EnhancedRoadmapItem({
  title,
  date,
  status,
  description,
  isLast = false,
  index,
}: EnhancedRoadmapItemProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-500 shadow-green-500/50"
      case "In Progress":
        return "bg-yellow-500 shadow-yellow-500/50 animate-pulse"
      default:
        return "bg-purple-500 shadow-purple-500/50"
    }
  }

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-900/50 text-green-400 border-green-500/30"
      case "In Progress":
        return "bg-yellow-900/50 text-yellow-400 border-yellow-500/30"
      default:
        return "bg-purple-900/50 text-purple-400 border-purple-500/30"
    }
  }

  return (
    <div
      className={`relative mb-12 animate-fade-in-up ${isLast ? "" : ""}`}
      style={{ animationDelay: `${index * 200}ms` }}
    >
      {/* Timeline dot */}
      <div
        className={`absolute -left-10 mt-2 h-6 w-6 rounded-full border-4 border-black shadow-lg ${getStatusColor(status)}`}
      >
        <div className="absolute inset-1 rounded-full bg-white/20"></div>
      </div>

      {/* Content card */}
      <div className="group rounded-xl bg-gradient-to-br from-zinc-800/60 to-zinc-900/60 p-6 backdrop-blur-sm transition-all duration-300 hover:from-zinc-800/80 hover:to-zinc-900/80 hover:shadow-xl hover:shadow-purple-500/10">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-2xl font-bold text-white group-hover:text-purple-100 transition-colors duration-300">
            {title}
          </h3>
          <span className="text-sm font-medium text-gray-400 bg-zinc-800/50 px-3 py-1 rounded-full">{date}</span>
        </div>

        <div className="mb-4">
          <span
            className={`inline-block rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${getStatusBadgeColor(status)}`}
          >
            {status}
          </span>
        </div>

        <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
          {description}
        </p>
      </div>
    </div>
  )
}
