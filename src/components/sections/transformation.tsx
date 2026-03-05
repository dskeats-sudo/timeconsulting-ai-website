'use client'

import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { useRef } from "react"

const stages = [
    {
        number: "01",
        title: "CHAOS",
        headline: "Where you are now.",
        description: "Missed calls. Overflowing inbox. Manual processes eating your time. You're the bottleneck in your own business.",
        lineColor: "from-red-500 to-orange-500",
        dotColor: "bg-red-500",
        glowColor: "rgba(239,68,68,0.15)",
        icon: "🔴",
    },
    {
        number: "02",
        title: "DISCOVERY",
        headline: "We map the gaps.",
        description: "Our free audit reveals exactly where time and money are leaking. You'll see the hidden cost of 'doing it yourself'.",
        lineColor: "from-orange-500 to-amber-500",
        dotColor: "bg-orange-500",
        glowColor: "rgba(249,115,22,0.15)",
        icon: "🔍",
    },
    {
        number: "03",
        title: "INSTALLATION",
        headline: "We build your AI systems.",
        description: "AI voice agents connecting. Funnels building. CRM syncing. Automations deploying. We install everything — you just watch.",
        lineColor: "from-amber-500 to-cyan-500",
        dotColor: "bg-amber-500",
        glowColor: "rgba(245,158,11,0.15)",
        icon: "⚡",
    },
    {
        number: "04",
        title: "CONTROL",
        headline: "One dashboard. Full visibility.",
        description: "Clean interface. Real-time data. Every lead, every call, every task — tracked and optimised automatically.",
        lineColor: "from-cyan-500 to-blue-500",
        dotColor: "bg-cyan-500",
        glowColor: "rgba(6,182,212,0.15)",
        icon: "📊",
    },
    {
        number: "05",
        title: "FREEDOM",
        headline: "More profit. Less stress.",
        description: "Your business runs without you. Scale without hiring. Grow without burnout. This is what you built the business for.",
        lineColor: "from-blue-500 to-emerald-500",
        dotColor: "bg-emerald-500",
        glowColor: "rgba(16,185,129,0.15)",
        icon: "🚀",
    },
]

function StageCard({ stage, index }: { stage: typeof stages[0]; index: number }) {
    const cardRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(cardRef, { once: true, margin: "-100px" })
    const isLeft = index % 2 === 0

    return (
        <div ref={cardRef} className="relative flex items-center mb-0">
            {/* Desktop layout */}
            <div className={`hidden md:flex items-center w-full gap-0 ${isLeft ? "flex-row" : "flex-row-reverse"}`}>
                {/* Content side */}
                <div className="w-[46%]">
                    <motion.div
                        initial={{ opacity: 0, x: isLeft ? -80 : 80, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
                        transition={{
                            duration: 0.8,
                            delay: 0.2,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                        className="group relative"
                    >
                        {/* Hover glow */}
                        <div className={`absolute -inset-2 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl`}
                            style={{ background: `radial-gradient(circle, ${stage.glowColor}, transparent 70%)` }}
                        />

                        <div className="relative rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-md p-8 overflow-hidden">
                            {/* Animated inner gradient */}
                            <motion.div
                                className={`absolute inset-0 bg-gradient-to-br ${stage.lineColor} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-700`}
                            />
                            {/* Subtle grid */}
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-5">
                                    <motion.span
                                        className="text-3xl"
                                        animate={{ rotate: [0, 5, -5, 0] }}
                                        transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                                    >
                                        {stage.icon}
                                    </motion.span>
                                    <div>
                                        <span className={`text-xs font-black bg-gradient-to-r ${stage.lineColor} bg-clip-text text-transparent tracking-[0.2em]`}>
                                            STAGE {stage.number}
                                        </span>
                                        <span className="text-xs text-neutral-600 mx-2">—</span>
                                        <span className={`text-xs font-black bg-gradient-to-r ${stage.lineColor} bg-clip-text text-transparent tracking-[0.2em]`}>
                                            {stage.title}
                                        </span>
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3">{stage.headline}</h3>
                                <p className="text-neutral-400 leading-relaxed">{stage.description}</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Center dot / line */}
                <div className="w-[8%] flex justify-center relative">
                    <motion.div
                        className={`w-5 h-5 rounded-full ${stage.dotColor} z-20 relative`}
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.3, type: "spring", stiffness: 200 }}
                    >
                        {/* Pulse ring */}
                        <motion.div
                            className={`absolute inset-0 rounded-full ${stage.dotColor}`}
                            animate={{ scale: [1, 2.5], opacity: [0.4, 0] }}
                            transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                        />
                    </motion.div>
                </div>

                {/* Empty side */}
                <div className="w-[46%]" />
            </div>

            {/* Mobile layout */}
            <div className="flex md:hidden items-start gap-6 w-full">
                <div className="flex flex-col items-center pt-2">
                    <motion.div
                        className={`w-4 h-4 rounded-full ${stage.dotColor} z-20 relative shrink-0`}
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <motion.div
                            className={`absolute inset-0 rounded-full ${stage.dotColor}`}
                            animate={{ scale: [1, 2], opacity: [0.4, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                    </motion.div>
                </div>
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex-1 pb-12"
                >
                    <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-md p-6 overflow-hidden">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-2xl">{stage.icon}</span>
                            <span className={`text-xs font-black bg-gradient-to-r ${stage.lineColor} bg-clip-text text-transparent tracking-[0.2em]`}>
                                STAGE {stage.number} — {stage.title}
                            </span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{stage.headline}</h3>
                        <p className="text-neutral-400 leading-relaxed text-sm">{stage.description}</p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export function TransformationSection() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    })

    const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"])
    const lineProgress = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"])

    return (
        <section ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
            {/* Parallax background */}
            <motion.div style={{ y: bgY }} className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/5 to-black" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.04),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(16,185,129,0.04),transparent_50%)]" />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-6"
                >
                    <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="inline-block px-5 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 text-xs font-medium text-blue-400 tracking-wide uppercase mb-8"
                    >
                        The journey
                    </motion.span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-8"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-tight">
                        From chaos to{" "}
                        <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                            complete freedom
                        </span>
                    </h2>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="text-center text-xl text-neutral-400 max-w-2xl mx-auto mb-24"
                >
                    The 5-stage transformation that takes your business from
                    drowning in operations to running on autopilot.
                </motion.p>

                {/* Timeline */}
                <div className="relative">
                    {/* Static background line */}
                    <div className="absolute left-8 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-white/[0.04]" />

                    {/* Animated progress line */}
                    <motion.div
                        className="absolute left-8 md:left-1/2 md:-translate-x-px top-0 w-0.5 bg-gradient-to-b from-red-500 via-cyan-500 to-emerald-500"
                        style={{ height: lineProgress }}
                    />

                    {stages.map((stage, i) => (
                        <StageCard key={stage.number} stage={stage} index={i} />
                    ))}
                </div>

                {/* Bottom CTA teaser */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-center mt-20"
                >
                    <p className="text-2xl font-bold text-white">
                        Ready to start your journey to{" "}
                        <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                            freedom
                        </span>
                        ?
                    </p>
                    <p className="text-neutral-500 mt-3">See the results our clients are getting ↓</p>
                </motion.div>
            </div>
        </section>
    )
}
