'use client'

import { motion } from "framer-motion"
import { Phone, Bot, TrendingUp, MessageSquare, Calendar, Users, Mail, Star } from "lucide-react"

const solutions = [
    {
        icon: Phone,
        title: "AI Voice Concierge & Sales Engine",
        subtitle: "Voice + Chat + Booking + CRM",
        description: "Never miss another enquiry again. Our AI answers calls, books appointments, and captures leads 24/7.",
        features: ["Voice AI Answering", "AI Booking System", "Lead Capture", "Auto Follow-ups"],
        quote: "\"Never miss another enquiry again.\"",
        gradient: "from-cyan-500 to-blue-600",
        glowColor: "rgba(6,182,212,0.15)",
    },
    {
        icon: Bot,
        title: "Digital Workforce",
        subtitle: "AI Employees",
        description: "Replace repetitive admin tasks with intelligent AI agents that work like your best staff members.",
        features: ["Admin Automation", "System Updates", "Workflow Handling", "Staff Emulation"],
        quote: "\"Replace £2k/month staff with AI.\"",
        gradient: "from-violet-500 to-purple-600",
        glowColor: "rgba(139,92,246,0.15)",
    },
    {
        icon: TrendingUp,
        title: "Growth Automation System",
        subtitle: "Marketing + Retention + Reviews",
        description: "Turn one-time customers into repeat revenue with automated marketing and reputation management.",
        features: ["SMS/Email Marketing", "Review Automation", "Campaign Management", "Smart Upsells"],
        quote: "\"Turn customers into repeat revenue.\"",
        gradient: "from-emerald-500 to-green-600",
        glowColor: "rgba(16,185,129,0.15)",
    },
]

export function SolutionSection() {
    return (
        <section id="solutions" className="relative py-28 px-6">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-950/5 to-black" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-xs font-medium text-cyan-400 tracking-wide uppercase mb-6">
                        The 3 Pillars of Automation
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
                        We don&apos;t just consult.<br />
                        We <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">install the systems</span> for you.
                    </h2>
                    <p className="mt-6 text-xl text-neutral-400 max-w-2xl mx-auto">
                        Three interlocking systems that transform your business operation
                        from manual chaos to automated profit machine.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {solutions.map((solution, i) => (
                        <motion.div
                            key={solution.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                            className="group relative rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden hover:border-white/10 transition-all duration-500"
                            style={{
                                boxShadow: `0 0 0px ${solution.glowColor}`,
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.boxShadow = `0 0 60px ${solution.glowColor}`
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.boxShadow = `0 0 0px ${solution.glowColor}`
                            }}
                        >
                            {/* Top gradient line */}
                            <div className={`h-1 bg-gradient-to-r ${solution.gradient}`} />

                            <div className="p-8">
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                                    <solution.icon className="w-7 h-7 text-white" />
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-1">{solution.title}</h3>
                                <p className={`text-sm font-medium bg-gradient-to-r ${solution.gradient} bg-clip-text text-transparent mb-4`}>
                                    {solution.subtitle}
                                </p>
                                <p className="text-neutral-400 leading-relaxed mb-6">{solution.description}</p>

                                <div className="space-y-3 mb-8">
                                    {solution.features.map((feature) => (
                                        <div key={feature} className="flex items-center gap-3">
                                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${solution.gradient}`} />
                                            <span className="text-sm text-neutral-300">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="border-t border-white/5 pt-5">
                                    <p className={`text-sm font-semibold italic bg-gradient-to-r ${solution.gradient} bg-clip-text text-transparent`}>
                                        {solution.quote}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
