"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronDown, Code, Github, Globe, Lock, MessageSquare, Shield, Terminal, Zap } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FaqItem } from "@/components/faq-item"
import { RoadmapItem } from "@/components/roadmap-item"
import { ParallaxBackground } from "@/components/parallax-background"
import { EnhancedDeveloperCard } from "@/components/enhanced-developer-card"
import { TeamSectionAnimation } from "@/components/team-section-animation"
import { ChipSupportCard } from "@/components/chip-support-card"
import { useState, useEffect } from "react"

export default function Home() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <div className="flex min-h-screen flex-col bg-black text-white">
        <Navbar />
        <div className="flex-1">
          <div className="container mx-auto px-4 py-32 text-center">
            <h1 className="mb-8 bg-gradient-to-r from-purple-300 via-purple-400 to-purple-600 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl md:text-7xl lg:text-8xl">
              Obsidian Linux
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-gray-300 md:text-2xl lg:text-3xl">
              A professional, modular pentesting distribution built for security professionals, by security professionals.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Navbar />

      {/* Hero Section - With Parallax */}
      <section className="relative flex flex-col items-center justify-center overflow-hidden py-32 md:py-48 lg:py-64">
        {/* Parallax Background */}
        <ParallaxBackground>
          {/* Smooth transition gradient at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black via-black/80 to-transparent z-30"></div>
        </ParallaxBackground>

        <div className="container relative z-20 mx-auto px-4 text-center">
          <div className="animate-fade-in-up">
            <h1 className="mb-8 bg-gradient-to-r from-purple-300 via-purple-400 to-purple-600 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl md:text-7xl lg:text-8xl">
              Obsidian Linux
            </h1>
            <div className="mb-10 h-20 md:h-24">
              <p className="mx-auto max-w-3xl text-xl text-gray-300 md:text-2xl lg:text-3xl animate-fade-in-up delay-300">
                A professional, modular pentesting distribution built for security professionals, by security
                professionals.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-6 sm:flex-row animate-fade-in-up delay-500">
              <Link href="#about" className="group flex items-center gap-3 rounded-lg border-2 border-purple-600/50 bg-black/20 px-10 py-5 text-xl font-semibold text-purple-300 backdrop-blur-sm transition-all duration-300 hover:border-purple-500 hover:bg-purple-950/30 hover:scale-105">
                Learn More
                <ChevronDown className="h-6 w-6 transition-transform duration-300 group-hover:translate-y-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About / Mission Statement */}
      <section id="about" className="relative bg-black py-16">
        {/* Smooth transition gradient at top */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black via-black/80 to-transparent z-10"></div>

        <div className="container relative z-20 mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-purple-400 md:text-4xl">Our Mission</h2>
          <div className="mx-auto max-w-3xl rounded-xl bg-black/60 p-6 backdrop-blur-sm">
            <p className="mb-4 text-lg text-gray-300">
              Obsidian Linux is a specialized pentesting distribution designed to provide security professionals with a
              powerful, flexible, and stealthy toolkit for ethical hacking and security assessments.
            </p>
            <p className="text-lg text-gray-300">
              Built on Fedora's solid foundation, we've crafted a lightweight, modular system that prioritizes
              performance, customization, and cutting-edge security tools. Our mission is to create the most effective
              and community-driven pentesting platform available.
            </p>
          </div>
        </div>
      </section>

      {/* Features / Key Tools */}
      <section id="features" className="relative bg-black py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
        <div className="container relative mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
              Key Features
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-400">
              Discover what makes Obsidian Linux the ultimate pentesting distribution
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-black/80 to-black/90 p-8 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
              <div className="relative z-10">
                <div className="mb-6 inline-flex rounded-xl bg-purple-900/30 p-4 text-purple-400 transition-colors duration-300 group-hover:bg-purple-800/40">
                  <Terminal className="h-8 w-8" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-white">Modular Toolset</h3>
                <p className="text-gray-300 leading-relaxed">
                  Customize your toolkit with only the tools you need, reducing bloat and improving performance for
                  targeted assessments.
                </p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-black/80 to-black/90 p-8 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
              <div className="relative z-10">
                <div className="mb-6 inline-flex rounded-xl bg-purple-900/30 p-4 text-purple-400 transition-colors duration-300 group-hover:bg-purple-800/40">
                  <Code className="h-8 w-8" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-white">Custom Shell</h3>
                <p className="text-gray-300 leading-relaxed">
                  Purpose-built shell environment optimized for pentesting workflows and command efficiency.
                </p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-black/80 to-black/90 p-8 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
              <div className="relative z-10">
                <div className="mb-6 inline-flex rounded-xl bg-purple-900/30 p-4 text-purple-400 transition-colors duration-300 group-hover:bg-purple-800/40">
                  <Zap className="h-8 w-8" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-white">Lightweight Design</h3>
                <p className="text-gray-300 leading-relaxed">
                  Minimal resource footprint allows for deployment in resource-constrained environments.
                </p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-black/80 to-black/90 p-8 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
              <div className="relative z-10">
                <div className="mb-6 inline-flex rounded-xl bg-purple-900/30 p-4 text-purple-400 transition-colors duration-300 group-hover:bg-purple-800/40">
                  <Globe className="h-8 w-8" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-white">Fedora-Based</h3>
                <p className="text-gray-300 leading-relaxed">
                  Built on the solid foundation of Fedora for stability, security, and up-to-date packages.
                </p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-black/80 to-black/90 p-8 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
              <div className="relative z-10">
                <div className="mb-6 inline-flex rounded-xl bg-purple-900/30 p-4 text-purple-400 transition-colors duration-300 group-hover:bg-purple-800/40">
                  <Shield className="h-8 w-8" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-white">Community-Driven</h3>
                <p className="text-gray-300 leading-relaxed">
                  Open development process with direct community input shaping the distribution's future.
                </p>
              </div>
            </div>
            <ChipSupportCard />
          </div>
        </div>
      </section>

      {/* Development & Roadmap */}
      <section id="roadmap" className="bg-black py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-purple-400 md:text-4xl">Development Roadmap</h2>
          <div className="mx-auto max-w-3xl">
            <div className="relative border-l border-purple-700 pl-8">
              <RoadmapItem
                title="Alpha Release"
                date="Q3 2025"
                status="In Progress"
                description="Core system with essential pentesting tools and custom shell environment."
              />
              <RoadmapItem
                title="Beta Release"
                date="Q1 2026"
                status="Planned"
                description="Expanded toolset, improved UI, and community testing phase."
              />
              <RoadmapItem
                title="Version 1.0"
                date="Q3 2026"
                status="Planned"
                description="First stable release with complete documentation and full feature set."
              />
              <RoadmapItem
                title="Version 2.0"
                date="Q1 2027"
                status="Planned"
                description="Major update with advanced features and expanded ecosystem."
                isLast={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="developers" className="relative bg-black py-20">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-purple-900/20 blur-3xl"></div>
          <div className="absolute bottom-20 left-20 h-60 w-60 rounded-full bg-purple-800/10 blur-3xl"></div>
        </div>

        {/* Animated particles */}
        <TeamSectionAnimation />

        <div className="container relative z-10 mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
              Meet Our Team
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-400">
              The brilliant minds behind Obsidian Linux working to create the ultimate pentesting distribution
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <EnhancedDeveloperCard
              name="D6 (D6fault)"
              role="Lead Developer"
              image="/d6fault-pfp.png"
              description="Security researcher and Linux enthusiast with a passion for building efficient, purpose-driven tools for the security community."
              github="https://github.com/D6fault"
              skills={["Penetration Testing", "Linux Kernel", "C/C++", "Python", "Shell Scripting"]}
              projects={[
                { name: "Custom Shell Environment", url: "https://github.com/D6fault/obsidian-shell" },
                { name: "Kernel Hardening Tools", url: "https://github.com/D6fault/obsidian-kernel" },
              ]}
              index={0}
            />
            <EnhancedDeveloperCard
              name="0verr1de"
              role="Secondary Developer"
              image="/eeceba0076f54334c6a3d7496db8681a.jpg"
              description="Specializing in vulnerability research and exploit development with a focus on network security and protocol analysis."
              github="https://github.com/0verr1de"
              skills={["Exploit Development", "Reverse Engineering", "Network Security", "Protocol Analysis"]}
              projects={[
                { name: "Network Analysis Tools", url: "https://github.com/0verr1de/obsidian-network" },
                { name: "Protocol Fuzzing Framework", url: "https://github.com/0verr1de/obsidian-fuzz" },
              ]}
              index={1}
            />
            <EnhancedDeveloperCard
              name="Curtis Snively (Firegod)"
              role="Mentor & Advisor"
              image="/firegod-pfp.jpeg"
              description="Cybersecurity researcher and Linux enthusiast focused on creating practical tools to enhance security and streamline systems."
              github="https://github.com/Firegod"
              skills={["Linux Systems", "Security Tools", "System Optimization", "Research & Development"]}
              projects={[
                { name: "Security Tool Development", url: "https://github.com/Firegod/obsidian-tools" },
                { name: "System Enhancement Framework", url: "https://github.com/Firegod/obsidian-framework" },
              ]}
              index={2}
            />
          </div>
        </div>
      </section>

      {/* Alpha & Beta Testers */}
      <section id="testers" className="relative bg-black py-20">
        <div className="container relative z-10 mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
              Alpha & Beta Testers
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-400">
              Huge thanks to our early testers for their invaluable feedback and dedication!
            </p>
          </div>
          <div className="mx-auto max-w-3xl grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center rounded-lg bg-black/80 p-4 text-white">
              <img src="/B0vIzc5.png" alt="kvts" className="w-28 h-28 rounded-full object-cover mb-2" />
              <span className="font-semibold">kvts</span>
              <span className="text-xs text-purple-300 mt-1">Beta Tester</span>
            </div>
            <div className="flex flex-col items-center rounded-lg bg-black/80 p-4 text-white">
              <img src="/0xslayy-pfp.jpg" alt="0xSlayy" className="w-28 h-28 rounded-full object-cover mb-2" />
              <span className="font-semibold">0xSlayy</span>
              <span className="text-xs text-purple-300 mt-1">Beta Tester</span>
            </div>
            <div className="flex flex-col items-center rounded-lg bg-black/80 p-4 text-white">
              <img src="/s1r0ty-pfp.jpg" alt="S1r0ty" className="w-28 h-28 rounded-full object-cover mb-2" />
              <span className="font-semibold">S1r0ty</span>
              <span className="text-xs text-purple-300 mt-1">Beta Tester</span>
            </div>
            <div className="flex flex-col items-center rounded-lg bg-black/80 p-4 text-white">
              <img src="/bd7d2f24dba1842e397fd3c54f1bec2a.webp" alt="FIREGOD" className="w-28 h-28 rounded-full object-cover mb-2" />
              <span className="font-semibold">FIREGOD</span>
              <span className="text-xs text-purple-300 mt-1">Beta Tester</span>
            </div>
          </div>
        </div>
      </section>

      {/* Download (Coming Soon) */}
      <section id="download" className="bg-black py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-purple-400 md:text-4xl">Download</h2>
          <div className="mx-auto max-w-3xl rounded-xl bg-black/80 p-8 text-center backdrop-blur-sm">
            <Lock className="mx-auto mb-4 h-16 w-16 text-purple-400" />
            <h3 className="mb-2 text-2xl font-bold">Coming Soon</h3>
            <p className="mb-6 text-gray-300">
              Obsidian Linux is currently in active development. Follow us on social media to stay updated on our progress.
            </p>
            <div className="mb-8 rounded-lg bg-black/90 p-4">
              <h4 className="mb-2 text-lg font-semibold text-purple-400">System Requirements</h4>
              <ul className="mx-auto max-w-md space-y-1 text-left text-gray-300">
                <li>• CPU: 64-bit processor (x86_64 or ARM64/Apple Silicon)</li>
                <li>• RAM: 4GB minimum (8GB recommended)</li>
                <li>• Storage: 20GB free space</li>
                <li>• Graphics: Basic GPU with OpenGL 3.3 support</li>
                <li>• Network: Internet connection for updates</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-black py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-purple-400 md:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="mx-auto max-w-3xl space-y-4">
            <FaqItem
              question="When will Obsidian Linux be released?"
              answer="We're targeting an alpha release in Q3 2025, followed by a beta in Q1 2026, and a stable 1.0 release in Q3 2026. Join our newsletter to stay updated on our progress."
            />
            <FaqItem
              question="Does Obsidian Linux support UEFI boot?"
              answer="Yes, Obsidian Linux will fully support UEFI secure boot as well as legacy BIOS systems."
            />
            <FaqItem
              question="How can I contribute to the project?"
              answer="We welcome contributions in many forms! You can contribute code on GitHub, help with documentation, report bugs, suggest features, or join our community discussions on Discord or Matrix."
            />
            <FaqItem
              question="Will Obsidian Linux be free to use?"
              answer="Yes, Obsidian Linux will be completely free and open-source. We believe in the power of community-driven development and the open-source philosophy."
            />
            <FaqItem
              question="How is Obsidian Linux different from other pentesting distributions?"
              answer="Obsidian Linux focuses on modularity, performance, and a streamlined workflow specifically designed for professional security assessments. Our Fedora base provides stability while allowing for cutting-edge tools and techniques."
            />
            <FaqItem
              question="Does Obsidian Linux work on Apple Silicon Macs?"
              answer="Yes! Obsidian Linux is designed with multi-architecture support, including native compatibility with Apple Silicon (M1/M2/M3) processors. You'll get full performance and functionality on your modern Mac without emulation or virtualization overhead."
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
