'use client'

import { motion, useScroll, useTransform } from "framer-motion"
import { Phone, Bot, TrendingUp, ArrowRight, Sparkles, Check } from "lucide-react"
import { useRef, useState } from "react"

const solutions = [
    {
        icon: Phone,
        title: "AI Voice Concierge",
        subtitle: "Voice + Chat + Booking + CRM",
        description: "Never miss another enquiry again. Our AI answers calls, books appointments, and captures leads 24/7 — like having your best receptionist working around the clock.",
        features: [
            { text: "Voice AI Answering", detail: "Handles calls naturally" },
            { text: "AI Booking System", detail: "Auto-schedules appointments" },
            { text: "Lead Capture", detail: "Every enquiry tracked" },
            { text: "Auto Follow-ups", detail: "No lead falls through" },
        ],
        quote: "\"We went from missing 40% of calls to capturing every single one.\"",
        gradient: "from-cyan-500 to-blue-600",
        glowColor: "rgba(6,182,212,0.15)",
        accentColor: "cyan",
        metric: { value: "24/7", label: "Always on" },
    },
    {
        icon: Bot,
        title: "Digital Workforce",
        subtitle: "AI Employees That Never Sleep",
        description: "Replace repetitive admin tasks with intelligent AI agents that work like your best staff members — at a fraction of the cost.",
        features: [
            { text: "Admin Automation", detail: "Data entry eliminated" },
            { text: "System Updates", detail: "Real-time sync" },
            { text: "Workflow Handling", detail: "Complex processes simplified" },
            { text: "Staff Emulation", detail: "Learns your methods" },
        ],
        quote: "\"Replaced 3 admin roles. Saved £72,000/year.\"",
        gradient: "from-violet-500 to-purple-600",
        glowColor: "rgba(139,92,246,0.15)",
        accentColor: "violet",
        metric: { value: "£200", label: "vs £2k/month staff" },
    },
    {
        icon: TrendingUp,
        title: "Growth Engine",
        subtitle: "Marketing + Retention + Reviews",
        description: "Turn one-time customers into repeat revenue with automated marketing, review collection, and intelligent upselling.",
        features: [
            { text: "SMS/Email Campaigns", detail: "Automated outreach" },
            { text: "Review Automation", detail: "5-star reputation" },
            { text: "Smart Upsells", detail: "Revenue maximised" },
            { text: "Re-engagement", detail: "Win back lost customers" },
        ],
        quote: "\"Our repeat business jumped 340% in 90 days.\"",
        gradient: "from-emerald-500 to-green-600",
        glowColor: "rgba(16,185,129,0.15)",
        accentColor: "emerald",
        metric: { value: "340%", label: "Repeat revenue lift" },
    },
]

const accentMap: Record<string, { ring: string; dot: string; check: string; hoverBg: string }> = {
    cyan: {
        ring: "ring-cyan-500/20",
        dot: "bg-cyan-500",
        check: "text-cyan-400",
        hoverBg: "group-hover:bg-cyan-500/5",
    },
    violet: {
        ring: "ring-violet-500/20",
        dot: "bg-violet-500",
        check: "text-violet-400",
        hoverBg: "group-hover:bg-violet-500/5",
    },
    emerald: {
        ring: "ring-emerald-500/20",
        dot: "bg-emerald-500",
        check: "text-emerald-400",
        hoverBg: "group-hover:bg-emerald-500/5",
    },
}

export function SolutionSection() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    })

    const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"])

    const [activeCard, setActiveCard] = useState<number | null>(null)

    return (
        <section id="solutions" ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
            {/* Multi-layered parallax background */}
            <motion.div style={{ y: bgY }} className="absolute inset-0 bg-gradient-to-b from-black via-cyan-950/8 to-black" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.04),transparent_60%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:80px_80px]" />

            {/* Floating accent orbs */}
            <motion.div
                className="absolute top-1/4 left-1/6 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl"
                animate={{ scale: [1, 1.3, 1], x: [0, 50, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-1/4 right-1/6 w-72 h-72 bg-violet-500/5 rounded-full blur-3xl"
                animate={{ scale: [1.3, 1, 1.3], x: [0, -50, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section header */}
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
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-xs font-medium text-cyan-400 tracking-wide uppercase mb-8"
                    >
                        <Sparkles className="w-3.5 h-3.5" />
                        The 3 Pillars of Automation
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
                        We don&apos;t just consult.<br />
                        We <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">install the systems</span> for you.
                    </h2>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="text-center text-xl text-neutral-400 max-w-2xl mx-auto mb-20"
                >
                    Three interlocking systems that transform your business
                    from manual chaos to automated profit machine.
                </motion.p>

                {/* Solution cards — full rewrite */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {solutions.map((solution, i) => {
                        const accent = accentMap[solution.accentColor]
                        return (
                            <motion.div
                                key={solution.title}
                                initial={{ opacity: 0, y: 80, rotateX: 5 }}
                                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{
                                    duration: 0.8,
                                    delay: i * 0.2,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                                whileHover={{
                                    y: -12,
                                    transition: { duration: 0.4, ease: "easeOut" },
                                }}
                                onMouseEnter={() => setActiveCard(i)}
                                onMouseLeave={() => setActiveCard(null)}
                                className="group relative"
                            >
                                {/* Gradient border */}
                                <div className={`absolute -inset-px rounded-3xl bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-30 transition-all duration-700 blur-sm`} />

                                {/* Glow effect */}
                                <motion.div
                                    className={`absolute -inset-4 rounded-3xl`}
                                    style={{ boxShadow: `0 0 0px ${solution.glowColor}` }}
                                    animate={activeCard === i ? {
                                        boxShadow: `0 0 80px ${solution.glowColor}`,
                                    } : {
                                        boxShadow: `0 0 0px ${solution.glowColor}`,
                                    }}
                                    transition={{ duration: 0.5 }}
                                />

                                <div className="relative rounded-3xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm overflow-hidden h-full">
                                    {/* Animated top gradient bar */}
                                    <div className="relative h-1 overflow-hidden">
                                        <motion.div
                                            className={`absolute inset-0 bg-gradient-to-r ${solution.gradient}`}
                                            initial={{ x: "-100%" }}
                                            whileInView={{ x: "0%" }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: 0.5 + i * 0.2, ease: [0.16, 1, 0.3, 1] }}
                                        />
                                    </div>

                                    <div className="p-8 lg:p-10">
                                        {/* Icon + metric row */}
                                        <div className="flex items-start justify-between mb-8">
                                            <motion.div
                                                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center shadow-xl`}
                                                whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                                                transition={{ duration: 0.5 }}
                                            >
                                                <solution.icon className="w-8 h-8 text-white" />
                                            </motion.div>
                                            <div className="text-right">
                                                <div className={`text-2xl font-black bg-gradient-to-r ${solution.gradient} bg-clip-text text-transparent`}>
                                                    {solution.metric.value}
                                                </div>
                                                <div className="text-xs text-neutral-500">{solution.metric.label}</div>
                                            </div>
                                        </div>

                                        <h3 className="text-2xl font-bold text-white mb-1">{solution.title}</h3>
                                        <p className={`text-sm font-medium bg-gradient-to-r ${solution.gradient} bg-clip-text text-transparent mb-5`}>
                                            {solution.subtitle}
                                        </p>
                                        <p className="text-neutral-400 leading-relaxed mb-8">{solution.description}</p>

                                        {/* Features with animated check marks */}
                                        <div className="space-y-3 mb-8">
                                            {solution.features.map((feature, fi) => (
                                                <motion.div
                                                    key={feature.text}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.4, delay: 0.6 + fi * 0.1 + i * 0.15 }}
                                                    className="flex items-center gap-3 group/item"
                                                >
                                                    <div className={`w-5 h-5 rounded-md ${accent.check} bg-white/[0.03] flex items-center justify-center border border-white/5`}>
                                                        <Check className="w-3 h-3" />
                                                    </div>
                                                    <span className="text-sm text-neutral-300 font-medium">{feature.text}</span>
                                                    <span className="text-xs text-neutral-600 hidden sm:inline">— {feature.detail}</span>
                                                </motion.div>
                                            ))}
                                        </div>

                                        {/* Quote with animated border */}
                                        <motion.div
                                            className="relative border-t border-white/5 pt-6"
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.8 + i * 0.2 }}
                                        >
                                            <p className="text-sm font-semibold italic text-neutral-300">
                                                {solution.quote}
                                            </p>
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>

                {/* Bottom connector — visual flow to next section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="flex flex-col items-center mt-20 gap-4"
                >
                    <div className="text-neutral-600 text-sm uppercase tracking-widest">But how does it all come together?</div>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <ArrowRight className="w-5 h-5 text-cyan-500/50 rotate-90" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
