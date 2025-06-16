import { Cpu } from "lucide-react"

export function ChipSupportCard() {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-black/80 to-black/90 p-8 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
      <div className="relative z-10">
        <div className="mb-6 inline-flex rounded-xl bg-purple-900/30 p-4 text-purple-400 transition-colors duration-300 group-hover:bg-purple-800/40">
          <Cpu className="h-8 w-8" />
        </div>
        <h3 className="mb-4 text-2xl font-bold text-white">Multi-Architecture Support</h3>
        <p className="text-gray-300 leading-relaxed">
          Native support for x86_64, ARM64, and Apple Silicon processors, ensuring optimal performance across all platforms.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          <span className="rounded-full bg-black/80 px-3 py-1 text-sm text-gray-300">x86_64</span>
          <span className="rounded-full bg-black/80 px-3 py-1 text-sm text-gray-300">ARM64</span>
          <span className="rounded-full bg-black/80 px-3 py-1 text-sm text-gray-300">Apple Silicon</span>
        </div>
      </div>
    </div>
  )
}
