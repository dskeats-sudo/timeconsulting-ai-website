'use client'

import Link from "next/link"
import { useState, useEffect } from "react"

export function Navbar() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
            ? "bg-black/80 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent"
            }`}>
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <span className="text-xl font-bold tracking-wider text-white">
                        TIME CONSULTING
                    </span>
                    <span className="w-2 h-2 rounded-full bg-cyan-400 group-hover:bg-cyan-300 transition-colors group-hover:shadow-[0_0_12px_rgba(34,211,238,0.6)]" />
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    <Link href="#problem" className="text-sm text-neutral-400 hover:text-white transition-colors tracking-wide">
                        THE PROBLEM
                    </Link>
                    <Link href="#solutions" className="text-sm text-neutral-400 hover:text-white transition-colors tracking-wide">
                        SOLUTIONS
                    </Link>
                    <Link href="#results" className="text-sm text-neutral-400 hover:text-white transition-colors tracking-wide">
                        RESULTS
                    </Link>
                    <Link
                        href="#audit"
                        className="relative px-6 py-2.5 text-sm font-semibold text-black bg-white rounded-full overflow-hidden group hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300"
                    >
                        <span className="relative z-10 group-hover:text-white transition-colors">Get Free Audit</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Link>
                </div>
            </div>
        </nav>
    )
}
