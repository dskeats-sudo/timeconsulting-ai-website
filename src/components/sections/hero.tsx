'use client'

import { SplineScene } from "@/components/ui/splite"
import { Spotlight } from "@/components/ui/spotlight"
import { motion } from "framer-motion"
import Link from "next/link"

export function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background gradient layers */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(6,182,212,0.08),transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(139,92,246,0.06),transparent_60%)]" />

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

            <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-4">

                    {/* Left: Copy */}
                    <div className="flex-1 pt-24 lg:pt-0">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            {/* Urgency badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-500/30 bg-red-500/5 mb-8">
                                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                                <span className="text-xs font-medium text-red-400 tracking-wide uppercase">
                                    Your competitors are already automating
                                </span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tight">
                                <span className="text-white">While you&apos;re doing </span>
                                <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                                    everything manually
                                </span>
                                <span className="text-white">,</span>
                                <br />
                                <span className="text-white">AI is replacing </span>
                                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                                    your industry.
                                </span>
                            </h1>

                            <p className="mt-6 text-lg sm:text-xl text-neutral-400 max-w-xl leading-relaxed">
                                We install AI-powered systems that answer calls, book appointments,
                                follow up leads, and run operations — <span className="text-white font-medium">so you don&apos;t have to.</span>
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4"
                        >
                            <Link
                                href="#audit"
                                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold text-lg rounded-full hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] transition-all duration-300 hover:scale-105"
                            >
                                Get Your Free Audit
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </Link>
                            <span className="text-sm text-neutral-500">
                                Free. No obligation. Takes 2 minutes.
                            </span>
                        </motion.div>

                        {/* Social proof stats */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.6 }}
                            className="mt-14 flex items-center gap-10 border-t border-white/5 pt-8"
                        >
                            <div>
                                <div className="text-3xl font-black text-white">£2M+</div>
                                <div className="text-xs text-neutral-500 uppercase tracking-wider mt-1">Revenue Generated</div>
                            </div>
                            <div className="w-px h-12 bg-white/10" />
                            <div>
                                <div className="text-3xl font-black text-white">10k+</div>
                                <div className="text-xs text-neutral-500 uppercase tracking-wider mt-1">Hours Saved</div>
                            </div>
                            <div className="w-px h-12 bg-white/10" />
                            <div>
                                <div className="text-3xl font-black text-white">50+</div>
                                <div className="text-xs text-neutral-500 uppercase tracking-wider mt-1">Businesses Automated</div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: 3D Robot */}
                    <div className="flex-1 relative h-[500px] lg:h-[700px] w-full">
                        <Spotlight
                            className="-top-40 left-0 md:left-60 md:-top-20"
                            size={400}
                        />
                        <SplineScene
                            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                            className="w-full h-full"
                        />
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-xs text-neutral-600 uppercase tracking-widest">Scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-5 h-8 border border-neutral-700 rounded-full flex justify-center pt-1.5"
                >
                    <div className="w-1 h-2 bg-neutral-500 rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    )
}
