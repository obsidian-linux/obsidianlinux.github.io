"use client"

import { useState } from "react"
import { Cpu, Check } from "lucide-react"

export function ArchitectureSupport() {
  const [activeTab, setActiveTab] = useState<"x86" | "arm">("arm")

  return (
    <div className="mt-12 rounded-xl bg-black/40 p-6 backdrop-blur-sm">
      <div className="mb-6 flex items-center gap-3">
        <Cpu className="h-6 w-6 text-purple-400" />
        <h3 className="text-xl font-bold text-white">Multi-Architecture Support</h3>
      </div>

      <div className="mb-6">
        <div className="flex rounded-lg bg-black/60 p-1">
          <button
            className={`relative flex-1 rounded-md py-2 text-sm font-medium transition-colors ${
              activeTab === "x86" ? "text-white bg-purple-800/30" : "text-gray-400 hover:text-gray-300"
            }`}
            onClick={() => setActiveTab("x86")}
          >
            <span className="relative z-10">x86_64 Architecture</span>
          </button>
          <button
            className={`relative flex-1 rounded-md py-2 text-sm font-medium transition-colors ${
              activeTab === "arm" ? "text-white bg-purple-800/30" : "text-gray-400 hover:text-gray-300"
            }`}
            onClick={() => setActiveTab("arm")}
          >
            <span className="relative z-10">ARM64 / Apple Silicon</span>
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {activeTab === "x86" ? (
          <div className="animate-fade-in-up">
            <p className="mb-4 text-gray-300">
              Traditional x86_64 support ensures compatibility with most desktop and laptop computers, including Intel
              and AMD processors.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 text-green-400" />
                <span className="text-gray-300">Compatible with Intel Core and AMD Ryzen processors</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 text-green-400" />
                <span className="text-gray-300">Optimized for modern multi-core CPUs</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 text-green-400" />
                <span className="text-gray-300">Full hardware acceleration support</span>
              </li>
            </ul>
          </div>
        ) : (
          <div className="animate-fade-in-up">
            <p className="mb-4 text-gray-300">
              Native ARM64 support brings Obsidian Linux to Apple Silicon Macs (M1/M2/M3) and other ARM-based devices
              with full performance and compatibility.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 text-green-400" />
                <span className="text-gray-300">Native support for Apple M1, M2, and M3 chips</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 text-green-400" />
                <span className="text-gray-300">Optimized for power efficiency on ARM architecture</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 text-green-400" />
                <span className="text-gray-300">No emulation required - runs at native speeds</span>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
