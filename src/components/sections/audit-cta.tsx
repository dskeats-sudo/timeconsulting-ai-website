'use client'

import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Check, Clock, Zap, Shield, Sparkles, CalendarCheck } from "lucide-react"
import { useRef } from "react"

const benefits = [
    { icon: Check, text: "Custom automation roadmap", detail: "Tailored to your business" },
    { icon: Check, text: "ROI projection", detail: "See exact savings" },
    { icon: Check, text: "Priority areas", detail: "What to automate first" },
    { icon: Clock, text: "15 minutes", detail: "Quick and painless" },
    { icon: Shield, text: "100% free", detail: "No obligation at all" },
    { icon: Zap, text: "Results in 48hrs", detail: "Fast turnaround" },
]

export function AuditCTA() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    })

    const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
    const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1])

    return (
        <section id="audit" ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
            {/* Dramatic multi-layered background */}
            <motion.div style={{ y: bgY }} className="absolute inset-0 bg-gradient-to-b from-black via-cyan-950/12 to-black" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.08),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.06),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(139,92,246,0.04),transparent_50%)]" />

            {/* Animated light beams */}
            <motion.div
                className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent"
                animate={{ opacity: [0, 0.5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
                className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-blue-500/10 to-transparent"
                animate={{ opacity: [0, 0.5, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1.5 }}
            />

            {/* Floating particles */}
            {[...Array(10)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-cyan-400/20 rounded-full"
                    style={{
                        left: `${5 + i * 10}%`,
                        top: `${10 + (i % 5) * 18}%`,
                    }}
                    animate={{
                        y: [0, -50, 0],
                        x: [0, Math.sin(i) * 20, 0],
                        opacity: [0.1, 0.6, 0.1],
                    }}
                    transition={{
                        duration: 3 + i * 0.5,
                        repeat: Infinity,
                        delay: i * 0.3,
                    }}
                />
            ))}

            <motion.div style={{ scale }} className="max-w-5xl mx-auto relative z-10">
                {/* Main CTA card */}
                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="relative"
                >
                    {/* Outer glow border */}
                    <div className="absolute -inset-px rounded-[2rem] bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-violet-500/20 blur-sm" />

                    <div className="relative rounded-[2rem] border border-white/[0.08] bg-black/60 backdrop-blur-xl overflow-hidden">
                        {/* Animated top border */}
                        <div className="relative h-1 overflow-hidden">
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500"
                                animate={{ x: ["-100%", "100%"] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                style={{ width: "200%" }}
                            />
                        </div>

                        <div className="p-10 md:p-16 lg:p-20 text-center">
                            {/* Urgency badge */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-cyan-500/30 bg-cyan-500/5 mb-10"
                            >
                                <motion.div
                                    animate={{ scale: [1, 1.3, 1] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                    <Sparkles className="w-4 h-4 text-cyan-400" />
                                </motion.div>
                                <span className="text-sm font-medium text-cyan-400 tracking-wide">
                                    Limited — we only take 5 new clients per month
                                </span>
                            </motion.div>

                            {/* Headline */}
                            <motion.h2
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-tight mb-8"
                            >
                                Get Your Free<br />
                                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                                    Automation Audit
                                </span>
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: 0.5 }}
                                className="text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed mb-14"
                            >
                                We&apos;ll map exactly how to automate your business — the missed revenue,
                                the wasted hours, the systems you need.{" "}
                                <span className="text-white font-semibold">No fluff. Just a clear roadmap.</span>
                            </motion.p>

                            {/* Benefits grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto mb-14">
                                {benefits.map((item, i) => (
                                    <motion.div
                                        key={item.text}
                                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            delay: 0.5 + i * 0.08,
                                            duration: 0.5,
                                            ease: [0.16, 1, 0.3, 1],
                                        }}
                                        whileHover={{ y: -4, transition: { duration: 0.2 } }}
                                        className="group flex items-center gap-3 px-5 py-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-cyan-500/20 hover:bg-cyan-500/[0.03] transition-all duration-300"
                                    >
                                        <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center shrink-0">
                                            <item.icon className="w-4 h-4 text-cyan-400" />
                                        </div>
                                        <div className="text-left">
                                            <span className="text-sm text-white font-medium block">{item.text}</span>
                                            <span className="text-xs text-neutral-500">{item.detail}</span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* CTA Button — premium */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.7, duration: 0.6 }}
                                className="flex flex-col items-center gap-5"
                            >
                                <Link
                                    href="https://calendly.com"
                                    target="_blank"
                                    className="group relative inline-flex items-center gap-3"
                                >
                                    {/* Button glow */}
                                    <motion.div
                                        className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full opacity-30 blur-xl group-hover:opacity-50 transition-opacity duration-500"
                                        animate={{ scale: [1, 1.1, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    />

                                    <div className="relative px-12 py-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg rounded-full hover:shadow-[0_0_60px_rgba(6,182,212,0.4)] transition-all duration-500 hover:scale-105 flex items-center gap-3">
                                        <CalendarCheck className="w-5 h-5" />
                                        Book Your Free Audit Now
                                        <motion.div
                                            animate={{ x: [0, 5, 0] }}
                                            transition={{ duration: 1.5, repeat: Infinity }}
                                        >
                                            <ArrowRight className="w-5 h-5" />
                                        </motion.div>
                                    </div>
                                </Link>

                                <motion.p
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 1 }}
                                    className="text-sm text-neutral-600 flex items-center gap-2"
                                >
                                    <Shield className="w-3.5 h-3.5" />
                                    No payment required. No spam. Just clarity.
                                </motion.p>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                {/* Final FOMO section — separated for impact */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-20 text-center"
                >
                    <div className="relative inline-block">
                        {/* Subtle glow behind text */}
                        <div className="absolute -inset-10 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-transparent rounded-full blur-3xl" />

                        <div className="relative">
                            <motion.p
                                className="text-lg text-neutral-500 mb-4"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                            >
                                Every day you wait, your competitors get further ahead.
                            </motion.p>
                            <motion.p
                                className="text-2xl md:text-3xl font-bold text-white"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.7 }}
                            >
                                The question isn&apos;t <span className="italic">if</span> you&apos;ll automate — it&apos;s{" "}
                                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                                    whether you&apos;ll do it first.
                                </span>
                            </motion.p>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    )
}
