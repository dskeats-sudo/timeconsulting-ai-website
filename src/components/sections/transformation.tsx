'use client'

import { motion } from "framer-motion"

const stages = [
    {
        number: "01",
        title: "CHAOS",
        headline: "Where you are now.",
        description: "Missed calls. Overflowing inbox. Manual processes eating your time. You're the bottleneck in your own business.",
        visual: "🔴",
        lineColor: "from-red-500 to-orange-500",
        bgGlow: "radial-gradient(circle at 50% 50%, rgba(239,68,68,0.08) 0%, transparent 60%)",
    },
    {
        number: "02",
        title: "DISCOVERY",
        headline: "We map the gaps.",
        description: "Our free audit reveals exactly where time and money are leaking. You'll see the hidden cost of 'doing it yourself'.",
        visual: "🔍",
        lineColor: "from-orange-500 to-amber-500",
        bgGlow: "radial-gradient(circle at 50% 50%, rgba(249,115,22,0.08) 0%, transparent 60%)",
    },
    {
        number: "03",
        title: "INSTALLATION",
        headline: "We build your AI systems.",
        description: "AI voice agents connecting. Funnels building. CRM syncing. Automations deploying. We install everything — you just watch.",
        visual: "⚡",
        lineColor: "from-amber-500 to-cyan-500",
        bgGlow: "radial-gradient(circle at 50% 50%, rgba(6,182,212,0.08) 0%, transparent 60%)",
    },
    {
        number: "04",
        title: "CONTROL",
        headline: "One dashboard. Full visibility.",
        description: "Clean interface. Real-time data. Every lead, every call, every task — tracked and optimised automatically.",
        visual: "📊",
        lineColor: "from-cyan-500 to-blue-500",
        bgGlow: "radial-gradient(circle at 50% 50%, rgba(59,130,246,0.08) 0%, transparent 60%)",
    },
    {
        number: "05",
        title: "FREEDOM",
        headline: "More profit. Less stress.",
        description: "Your business runs without you. Scale without hiring. Grow without burnout. This is what you built the business for.",
        visual: "🚀",
        lineColor: "from-blue-500 to-emerald-500",
        bgGlow: "radial-gradient(circle at 50% 50%, rgba(16,185,129,0.08) 0%, transparent 60%)",
    },
]

export function TransformationSection() {
    return (
        <section className="relative py-28 px-6">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/5 to-black" />

            <div className="max-w-5xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 text-xs font-medium text-blue-400 tracking-wide uppercase mb-6">
                        The journey
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
                        From chaos to <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">complete freedom</span>
                    </h2>
                    <p className="mt-6 text-xl text-neutral-400 max-w-2xl mx-auto">
                        The 5-stage transformation that takes your business from
                        drowning in operations to running on autopilot.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-8 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500 via-cyan-500 to-emerald-500 opacity-20" />

                    {stages.map((stage, i) => (
                        <motion.div
                            key={stage.number}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className={`relative flex items-center gap-8 mb-16 last:mb-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                }`}
                        >
                            {/* Stage number dot */}
                            <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                                <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${stage.lineColor} shadow-lg`} />
                            </div>

                            {/* Content card */}
                            <div className={`ml-20 md:ml-0 md:w-[45%] ${i % 2 === 0 ? "" : "md:ml-auto"}`}>
                                <div
                                    className="rounded-2xl border border-white/5 bg-white/[0.02] p-8 hover:border-white/10 transition-all duration-500"
                                    style={{ background: stage.bgGlow }}
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className={`text-xs font-bold bg-gradient-to-r ${stage.lineColor} bg-clip-text text-transparent tracking-widest`}>
                                            STAGE {stage.number}
                                        </span>
                                        <span className="text-xs text-neutral-600">—</span>
                                        <span className={`text-xs font-bold bg-gradient-to-r ${stage.lineColor} bg-clip-text text-transparent tracking-widest`}>
                                            {stage.title}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-3">{stage.headline}</h3>
                                    <p className="text-neutral-400 leading-relaxed">{stage.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
