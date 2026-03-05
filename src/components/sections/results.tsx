'use client'

import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import { useEffect, useRef, useState } from "react"

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
    const [count, setCount] = useState(0)
    const ref = useRef<HTMLDivElement>(null)
    const hasAnimated = useRef(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true
                    const duration = 2000
                    const startTime = performance.now()

                    const step = (currentTime: number) => {
                        const elapsed = currentTime - startTime
                        const progress = Math.min(elapsed / duration, 1)
                        const eased = 1 - Math.pow(1 - progress, 3) // ease-out cubic
                        setCount(Math.round(target * eased))

                        if (progress < 1) {
                            requestAnimationFrame(step)
                        }
                    }

                    requestAnimationFrame(step)
                }
            },
            { threshold: 0.5 }
        )

        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [target])

    return (
        <div ref={ref} className="text-5xl md:text-6xl font-black text-white">
            {count}{suffix}
        </div>
    )
}

const stats = [
    { value: 2, suffix: "M+", prefix: "£", label: "Revenue generated for clients", color: "text-emerald-400" },
    { value: 10, suffix: "k+", prefix: "", label: "Hours of manual work eliminated", color: "text-cyan-400" },
    { value: 97, suffix: "%", prefix: "", label: "Client satisfaction rate", color: "text-violet-400" },
    { value: 14, suffix: " days", prefix: "", label: "Average time to full deployment", color: "text-amber-400" },
]

export function ResultsSection() {
    return (
        <section id="results" className="relative py-28 px-6">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-emerald-950/5 to-black" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-xs font-medium text-emerald-400 tracking-wide uppercase mb-6">
                        Real results
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
                        Numbers that <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">speak for themselves</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="text-center p-8 rounded-2xl border border-white/5 bg-white/[0.02]"
                        >
                            <div className={`text-5xl md:text-6xl font-black ${stat.color}`}>
                                {stat.prefix}<AnimatedCounter target={stat.value} suffix={stat.suffix} />
                            </div>
                            <p className="text-sm text-neutral-500 mt-3">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Testimonial / Quote */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative rounded-3xl border border-white/5 bg-white/[0.02] p-12 md:p-16 text-center overflow-hidden"
                >
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.05),transparent_70%)]" />
                    <div className="relative z-10">
                        <svg className="w-12 h-12 text-cyan-500/30 mx-auto mb-6" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                        <blockquote className="text-2xl md:text-3xl font-bold text-white leading-relaxed max-w-3xl mx-auto">
                            The only way to scale is to remove yourself from the operations.
                            That&apos;s exactly what Time Consulting did for us.
                        </blockquote>
                        <div className="mt-8 flex items-center justify-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold">
                                JW
                            </div>
                            <div className="text-left">
                                <div className="text-white font-semibold">UK Business Owner</div>
                                <div className="text-sm text-neutral-500">Service Industry</div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
