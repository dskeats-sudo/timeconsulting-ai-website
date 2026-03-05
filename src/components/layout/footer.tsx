'use client'

import { motion } from "framer-motion"
import Link from "next/link"

const links = [
    { label: "Solutions", href: "#solutions" },
    { label: "Results", href: "#results" },
    { label: "Audit", href: "#audit" },
]

export function Footer() {
    return (
        <footer className="relative border-t border-white/[0.04] bg-black">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(6,182,212,0.03),transparent_50%)]" />

            <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Link href="/" className="text-2xl font-black text-white tracking-tight group">
                            TIME
                            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-blue-400 transition-all duration-300">
                                CONSULTING
                            </span>
                        </Link>
                        <p className="text-neutral-600 text-sm mt-2">AI Automation for UK Businesses</p>
                    </motion.div>

                    {/* Nav */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="flex items-center gap-8"
                    >
                        {links.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="text-sm text-neutral-500 hover:text-white transition-colors duration-300"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </motion.div>
                </div>

                {/* Bottom bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-12 pt-8 border-t border-white/[0.04] flex flex-col md:flex-row items-center justify-between gap-4"
                >
                    <p className="text-xs text-neutral-700">
                        © {new Date().getFullYear()} Time Consulting. All rights reserved.
                    </p>
                    <p className="text-xs text-neutral-700 flex items-center gap-1">
                        Built with
                        <motion.span
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1, repeat: Infinity }}
                            className="text-cyan-500"
                        >
                            ⚡
                        </motion.span>
                        by AI
                    </p>
                </motion.div>
            </div>
        </footer>
    )
}
