'use client'

import { motion, useScroll, useTransform } from "framer-motion"
import { Phone, Clock, TrendingDown, UserX, AlertTriangle } from "lucide-react"
import { useRef } from "react"

const painPoints = [
    {
        icon: Phone,
        title: "Missed Calls = Lost Revenue",
        description: "Every unanswered call is a customer walking straight to your competitor. Right now. Today.",
        stat: "78%",
        statLabel: "of customers buy from whoever responds first",
        color: "red",
        barWidth: "78%",
    },
    {
        icon: Clock,
        title: "Staff Doing Robot Work",
        description: "You're paying £2k/month for humans to do data entry, chase invoices, and copy‑paste. AI does it for £200.",
        stat: "40hrs",
        statLabel: "per week wasted on repetitive tasks",
        color: "orange",
        barWidth: "85%",
    },
    {
        icon: TrendingDown,
        title: "Feast or Famine Sales",
        description: "No follow-up system means leads go cold. Your pipeline is a leaky bucket. You feel it every quiet week.",
        stat: "80%",
        statLabel: "of sales require 5+ follow-ups",
        color: "yellow",
        barWidth: "80%",
    },
    {
        icon: UserX,
        title: "Customers Leave Silently",
        description: "No retention system. No review requests. No re-engagement. They leave and you never know why.",
        stat: "5x",
        statLabel: "cheaper to retain than acquire",
        color: "red",
        barWidth: "90%",
    },
]

const colorMap: Record<string, { bg: string; border: string; text: string; gradient: string; bar: string }> = {
    red: {
        bg: "bg-red-500/10",
        border: "border-red-500/30",
        text: "text-red-400",
        gradient: "from-red-500 to-rose-600",
        bar: "bg-gradient-to-r from-red-500 to-rose-500",
    },
    orange: {
        bg: "bg-orange-500/10",
        border: "border-orange-500/30",
        text: "text-orange-400",
        gradient: "from-orange-500 to-amber-600",
        bar: "bg-gradient-to-r from-orange-500 to-amber-500",
    },
    yellow: {
        bg: "bg-amber-500/10",
        border: "border-amber-500/30",
        text: "text-amber-400",
        gradient: "from-amber-500 to-yellow-600",
        bar: "bg-gradient-to-r from-amber-500 to-yellow-500",
    },
}

const tickerItems = [
    "£47,000 average revenue lost to missed calls annually",
    "68% of businesses have no automated follow-up",
    "Manual data entry costs UK SMEs £12,000/year on average",
    "91% of unhappy customers simply never come back",
    "Only 2% of sales happen on the first contact",
    "35% of a manager's time is spent on tasks AI can do",
]

export function PainSection() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    })

    const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

    return (
        <section id="problem" ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
            {/* Animated background layers */}
            <motion.div
                style={{ y: bgY }}
                className="absolute inset-0 bg-gradient-to-b from-black via-red-950/8 to-black"
            />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(239,68,68,0.06),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(249,115,22,0.04),transparent_50%)]" />

            {/* Floating warning particles */}
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-red-500/30 rounded-full"
                    style={{
                        left: `${15 + i * 15}%`,
                        top: `${20 + (i % 3) * 25}%`,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        opacity: [0.2, 0.6, 0.2],
                        scale: [1, 1.5, 1],
                    }}
                    transition={{
                        duration: 3 + i * 0.5,
                        repeat: Infinity,
                        delay: i * 0.4,
                    }}
                />
            ))}

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section header with dramatic reveal */}
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
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-red-500/20 bg-red-500/5 text-xs font-medium text-red-400 tracking-wide uppercase mb-8"
                    >
                        <AlertTriangle className="w-3.5 h-3.5" />
                        The brutal truth
                    </motion.span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-8"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-tight">
                        Running a business shouldn&apos;t<br />
                        feel like{" "}
                        <motion.span
                            className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent inline-block"
                            animate={{ scale: [1, 1.02, 1] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                            chaos.
                        </motion.span>
                    </h2>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="text-center text-xl text-neutral-400 max-w-2xl mx-auto mb-20"
                >
                    You started a business to gain freedom, but now you&apos;re trapped in the
                    day-to-day operations. Sound familiar?
                </motion.p>

                {/* Scrolling ticker banner */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="relative mb-16 overflow-hidden py-4 border-y border-red-500/10"
                >
                    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10" />
                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10" />
                    <motion.div
                        className="flex gap-12 whitespace-nowrap"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    >
                        {[...tickerItems, ...tickerItems].map((item, i) => (
                            <span key={i} className="text-sm text-red-400/60 font-medium flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-500/50" />
                                {item}
                            </span>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Pain cards with staggered reveal */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {painPoints.map((pain, i) => {
                        const colors = colorMap[pain.color]
                        return (
                            <motion.div
                                key={pain.title}
                                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{
                                    duration: 0.7,
                                    delay: i * 0.15,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                                className="group relative"
                            >
                                {/* Gradient border glow */}
                                <div className={`absolute -inset-px rounded-2xl bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm`} />

                                <div className="relative rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-8 overflow-hidden h-full">
                                    {/* Inner glow on hover */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700`} />

                                    {/* Animated corner accent */}
                                    <motion.div
                                        className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${colors.gradient} opacity-[0.03] rounded-bl-full`}
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
                                    />

                                    <div className="relative z-10">
                                        {/* Icon with pulse ring */}
                                        <div className="relative mb-6">
                                            <div className={`w-14 h-14 rounded-2xl ${colors.bg} ${colors.border} border flex items-center justify-center`}>
                                                <pain.icon className={`w-7 h-7 ${colors.text}`} />
                                            </div>
                                            <motion.div
                                                className={`absolute inset-0 w-14 h-14 rounded-2xl ${colors.border} border`}
                                                animate={{ scale: [1, 1.4], opacity: [0.5, 0] }}
                                                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                                            />
                                        </div>

                                        <h3 className="text-xl font-bold text-white mb-3">{pain.title}</h3>
                                        <p className="text-neutral-400 leading-relaxed mb-8">{pain.description}</p>

                                        {/* Animated stat bar */}
                                        <div className="border-t border-white/5 pt-6">
                                            <div className="flex items-end gap-3 mb-3">
                                                <span className={`text-4xl font-black ${colors.text}`}>{pain.stat}</span>
                                                <span className="text-xs text-neutral-500 pb-1.5">{pain.statLabel}</span>
                                            </div>
                                            <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                                                <motion.div
                                                    className={`h-full rounded-full ${colors.bar}`}
                                                    initial={{ width: "0%" }}
                                                    whileInView={{ width: pain.barWidth }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 1.5, delay: 0.5 + i * 0.2, ease: [0.16, 1, 0.3, 1] }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>

                {/* Dramatic divider / cost calculator tease */}
                <motion.div
                    initial={{ opacity: 0, y: 40, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-20 relative"
                >
                    <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-red-500/20 via-orange-500/20 to-amber-500/20 blur-sm" />
                    <div className="relative rounded-3xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm p-12 text-center overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(239,68,68,0.05),transparent_60%)]" />
                        <div className="relative z-10">
                            <motion.p
                                className="text-3xl md:text-4xl font-black text-white"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                How much is this{" "}
                                <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                                    already costing you?
                                </span>
                            </motion.p>
                            <motion.p
                                className="mt-4 text-neutral-500 text-lg"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                            >
                                Every day without automation is money walking out the door.
                            </motion.p>

                            {/* Animated cost ticker */}
                            <motion.div
                                className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-red-500/10 border border-red-500/20"
                                animate={{ scale: [1, 1.03, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <span className="text-red-400 font-bold text-lg">
                                    Estimated cost of inaction:
                                </span>
                                <motion.span
                                    className="text-white font-black text-2xl"
                                    key="cost"
                                >
                                    £4,200/month
                                </motion.span>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
