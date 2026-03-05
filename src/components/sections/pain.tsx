'use client'

import { motion } from "framer-motion"
import { Phone, Clock, TrendingDown, UserX } from "lucide-react"

const painPoints = [
    {
        icon: Phone,
        title: "Missed Calls = Lost Revenue",
        description: "Every unanswered call is a customer walking straight to your competitor. Right now. Today.",
        stat: "78%",
        statLabel: "of customers buy from whoever responds first",
        color: "red",
    },
    {
        icon: Clock,
        title: "Staff Doing Robot Work",
        description: "You're paying £2k/month for humans to do data entry, chase invoices, and copy-paste. AI does it for £200.",
        stat: "40hrs",
        statLabel: "per week wasted on repetitive tasks",
        color: "orange",
    },
    {
        icon: TrendingDown,
        title: "Feast or Famine Sales",
        description: "No follow-up system means leads go cold. Your pipeline is a leaky bucket. You feel it every quiet week.",
        stat: "80%",
        statLabel: "of sales require 5+ follow-ups",
        color: "yellow",
    },
    {
        icon: UserX,
        title: "Customers Leave Silently",
        description: "No retention system. No review requests. No re-engagement. They leave and you never know why.",
        stat: "5x",
        statLabel: "cheaper to retain than acquire",
        color: "red",
    },
]

const colorMap: Record<string, { bg: string; border: string; text: string; glow: string }> = {
    red: {
        bg: "bg-red-500/10",
        border: "border-red-500/20",
        text: "text-red-400",
        glow: "group-hover:shadow-[0_0_40px_rgba(239,68,68,0.1)]",
    },
    orange: {
        bg: "bg-orange-500/10",
        border: "border-orange-500/20",
        text: "text-orange-400",
        glow: "group-hover:shadow-[0_0_40px_rgba(249,115,22,0.1)]",
    },
    yellow: {
        bg: "bg-amber-500/10",
        border: "border-amber-500/20",
        text: "text-amber-400",
        glow: "group-hover:shadow-[0_0_40px_rgba(245,158,11,0.1)]",
    },
}

export function PainSection() {
    return (
        <section id="problem" className="relative py-28 px-6">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/5 to-black" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full border border-red-500/20 bg-red-500/5 text-xs font-medium text-red-400 tracking-wide uppercase mb-6">
                        The brutal truth
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
                        Running a business shouldn&apos;t<br />
                        feel like <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">chaos.</span>
                    </h2>
                    <p className="mt-6 text-xl text-neutral-400 max-w-2xl mx-auto">
                        You started a business to gain freedom, but now you&apos;re trapped in the
                        day-to-day operations. Sound familiar?
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {painPoints.map((pain, i) => {
                        const colors = colorMap[pain.color]
                        return (
                            <motion.div
                                key={pain.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className={`group relative rounded-2xl border border-white/5 bg-white/[0.02] p-8 hover:border-white/10 transition-all duration-500 ${colors.glow}`}
                            >
                                <div className={`w-12 h-12 rounded-xl ${colors.bg} ${colors.border} border flex items-center justify-center mb-5`}>
                                    <pain.icon className={`w-6 h-6 ${colors.text}`} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{pain.title}</h3>
                                <p className="text-neutral-400 leading-relaxed mb-6">{pain.description}</p>
                                <div className="flex items-end gap-3 border-t border-white/5 pt-5">
                                    <span className={`text-3xl font-black ${colors.text}`}>{pain.stat}</span>
                                    <span className="text-xs text-neutral-500 pb-1">{pain.statLabel}</span>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>

                {/* Divider question */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-center mt-20"
                >
                    <p className="text-2xl md:text-3xl font-bold text-white">
                        How much is this <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">already costing you?</span>
                    </p>
                    <p className="mt-3 text-neutral-500">Every day without automation is money walking out the door.</p>
                </motion.div>
            </div>
        </section>
    )
}
