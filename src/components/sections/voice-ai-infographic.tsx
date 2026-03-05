'use client'

import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import {
    Phone, MessageSquare, Brain, Zap, Clock, Users,
    ArrowRight, Mic, Volume2, Globe, Shield, BarChart3,
    PhoneCall, MessageCircle, Bot, Headphones, CheckCircle2,
    Timer, TrendingUp, Workflow
} from "lucide-react"

/* ── Voice AI Flow Steps ─────────────────────────────── */
const voiceFlowSteps = [
    {
        icon: PhoneCall,
        title: "Customer Calls",
        desc: "Inbound call received 24/7",
        color: "from-red-500 to-orange-500",
        dotColor: "bg-red-500",
    },
    {
        icon: Mic,
        title: "AI Listens",
        desc: "Real-time speech recognition",
        color: "from-orange-500 to-amber-500",
        dotColor: "bg-orange-500",
    },
    {
        icon: Brain,
        title: "AI Understands",
        desc: "NLP processes intent & context",
        color: "from-amber-500 to-yellow-500",
        dotColor: "bg-amber-500",
    },
    {
        icon: Volume2,
        title: "AI Responds",
        desc: "Natural voice replies instantly",
        color: "from-cyan-500 to-blue-500",
        dotColor: "bg-cyan-500",
    },
    {
        icon: CheckCircle2,
        title: "Action Taken",
        desc: "Books, captures, or routes",
        color: "from-emerald-500 to-green-500",
        dotColor: "bg-emerald-500",
    },
]

/* ── Conversational AI Capabilities ──────────────────── */
const conversationCapabilities = [
    {
        icon: MessageCircle,
        title: "Multi-Channel",
        desc: "Phone, SMS, WhatsApp, webchat, email — one AI brain handles them all seamlessly.",
        stat: "5+",
        statLabel: "Channels",
        color: "from-cyan-400 to-blue-500",
    },
    {
        icon: Globe,
        title: "Multilingual",
        desc: "Understands and replies in 30+ languages. Your customers speak their language, your AI speaks it back.",
        stat: "30+",
        statLabel: "Languages",
        color: "from-violet-400 to-purple-500",
    },
    {
        icon: Brain,
        title: "Context Aware",
        desc: "Remembers past conversations, customer history, and preferences. Every interaction feels personal.",
        stat: "100%",
        statLabel: "Context recall",
        color: "from-emerald-400 to-green-500",
    },
    {
        icon: Workflow,
        title: "Smart Routing",
        desc: "Knows when to handle it, when to escalate to your team, and who to route it to. No dead-ends.",
        stat: "< 2s",
        statLabel: "Decision time",
        color: "from-amber-400 to-orange-500",
    },
]

/* ── Live comparison stats ───────────────────────────── */
const comparisonData = [
    { label: "Response Time", human: "3–5 min", ai: "< 1 sec", humanPct: 15, aiPct: 98 },
    { label: "Availability", human: "9am–5pm", ai: "24/7/365", humanPct: 33, aiPct: 100 },
    { label: "Calls Handled/hr", human: "8–12", ai: "Unlimited", humanPct: 10, aiPct: 95 },
    { label: "Consistency", human: "Variable", ai: "100%", humanPct: 55, aiPct: 100 },
    { label: "Cost per Call", human: "£3–£8", ai: "£0.05", humanPct: 20, aiPct: 95 },
]

/* ── Animated counter ────────────────────────────────── */
function MiniCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
    const [count, setCount] = useState(0)
    const ref = useRef<HTMLSpanElement>(null)
    const started = useRef(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started.current) {
                    started.current = true
                    const duration = 2000
                    const start = performance.now()
                    const step = (now: number) => {
                        const progress = Math.min((now - start) / duration, 1)
                        const eased = 1 - Math.pow(1 - progress, 3)
                        setCount(Math.round(target * eased))
                        if (progress < 1) requestAnimationFrame(step)
                    }
                    requestAnimationFrame(step)
                }
            },
            { threshold: 0.3 }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [target])

    return <span ref={ref} className="tabular-nums">{count}{suffix}</span>
}

/* ── Animated bar for comparison ─────────────────────── */
function AnimatedBar({ percentage, color, delay }: { percentage: number; color: string; delay: number }) {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: true, margin: "-50px" })

    return (
        <div ref={ref} className="h-2 rounded-full bg-white/[0.04] overflow-hidden flex-1">
            <motion.div
                className={`h-full rounded-full ${color}`}
                initial={{ width: 0 }}
                animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
                transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
            />
        </div>
    )
}

/* ══════════════════════════════════════════════════════ */
export function VoiceAIInfoGraphic() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    })
    const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])

    /* Animated waveform values */
    const [waveHeights, setWaveHeights] = useState<number[]>(Array(24).fill(4))
    useEffect(() => {
        const interval = setInterval(() => {
            setWaveHeights(Array(24).fill(0).map(() => 4 + Math.random() * 28))
        }, 150)
        return () => clearInterval(interval)
    }, [])

    return (
        <section ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
            {/* Background layers */}
            <motion.div style={{ y: bgY }} className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/10 to-black" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.05),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(139,92,246,0.04),transparent_50%)]" />

            {/* Ambient particles */}
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-cyan-500/20 rounded-full"
                    style={{ left: `${15 + i * 14}%`, top: `${10 + (i % 3) * 30}%` }}
                    animate={{ y: [0, -30, 0], opacity: [0.1, 0.5, 0.1] }}
                    transition={{ duration: 4 + i * 0.8, repeat: Infinity, delay: i * 0.5 }}
                />
            ))}

            <div className="max-w-7xl mx-auto relative z-10">

                {/* ─── HEADER ───────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-6"
                >
                    <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 text-xs font-medium text-blue-400 tracking-wide uppercase mb-8"
                    >
                        <Mic className="w-3.5 h-3.5" />
                        How it works
                    </motion.span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-center text-4xl md:text-5xl lg:text-7xl font-black text-white leading-tight mb-6"
                >
                    Voice AI &{" "}
                    <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                        Conversational AI
                    </span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="text-center text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto mb-24 leading-relaxed"
                >
                    Your AI receptionist answers every call, understands every question,
                    and takes action — in a natural human voice. Here&apos;s how it works under the hood.
                </motion.p>

                {/* ─── LIVE WAVEFORM VISUALIZER ──────────────── */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative max-w-2xl mx-auto mb-28"
                >
                    <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-violet-500/10 blur-sm" />
                    <div className="relative rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-8">
                        {/* Waveform header */}
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-3">
                                <motion.div
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                    className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.5)]"
                                />
                                <span className="text-sm font-medium text-emerald-400">AI Voice Active</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-neutral-500">
                                <Headphones className="w-3.5 h-3.5" />
                                Live processing
                            </div>
                        </div>

                        {/* Waveform bars */}
                        <div className="flex items-center justify-center gap-[3px] h-16">
                            {waveHeights.map((h, i) => (
                                <motion.div
                                    key={i}
                                    className="w-[6px] rounded-full bg-gradient-to-t from-cyan-500 to-blue-400"
                                    animate={{ height: h }}
                                    transition={{ duration: 0.12, ease: "easeOut" }}
                                />
                            ))}
                        </div>

                        {/* Simulated transcript */}
                        <div className="mt-6 space-y-3">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                                className="flex items-start gap-3"
                            >
                                <div className="w-7 h-7 rounded-full bg-neutral-800 flex items-center justify-center shrink-0 mt-0.5">
                                    <Phone className="w-3.5 h-3.5 text-neutral-400" />
                                </div>
                                <div className="rounded-2xl rounded-tl-sm bg-white/[0.04] px-4 py-2.5 text-sm text-neutral-300">
                                    &quot;Hi, I&apos;d like to book an appointment for next Tuesday please.&quot;
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.8 }}
                                className="flex items-start gap-3 justify-end"
                            >
                                <div className="rounded-2xl rounded-tr-sm bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/10 px-4 py-2.5 text-sm text-cyan-100">
                                    &quot;Of course! I have a 10am and a 2pm slot available on Tuesday. Which works best for you?&quot;
                                </div>
                                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                                    <Bot className="w-3.5 h-3.5 text-white" />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                {/* ─── TRY IT LIVE CTA ─────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="relative max-w-xl mx-auto mb-28"
                >
                    <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-violet-500/20 blur-md" />
                    <div className="relative rounded-2xl border border-cyan-500/20 bg-white/[0.03] backdrop-blur-sm p-8 md:p-10 text-center">
                        {/* Pulsing phone icon */}
                        <div className="flex justify-center mb-6">
                            <div className="relative">
                                <motion.div
                                    animate={{ scale: [1, 1.6, 1.6], opacity: [0.4, 0, 0] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                                    className="absolute inset-0 rounded-full bg-cyan-500/30"
                                />
                                <motion.div
                                    animate={{ scale: [1, 1.4, 1.4], opacity: [0.3, 0, 0] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.3 }}
                                    className="absolute inset-0 rounded-full bg-cyan-500/20"
                                />
                                <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.4)]">
                                    <Phone className="w-7 h-7 text-white" />
                                </div>
                            </div>
                        </div>

                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                            Try Our Voice AI —{" "}
                            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Live</span>
                        </h3>
                        <p className="text-neutral-400 text-sm md:text-base mb-8 max-w-md mx-auto leading-relaxed">
                            Don&apos;t just read about it — experience it yourself. Click below
                            to have a real conversation with our AI voice agent right now.
                        </p>

                        {/* Glow CTA button */}
                        <motion.button
                            onClick={() => {
                                // Trigger the LeadConnector Voice AI widget
                                const chatWidget = document.querySelector('chat-widget') as HTMLElement | null;
                                if (chatWidget?.shadowRoot) {
                                    // Primary: target the phone icon button directly
                                    const phoneIcon = chatWidget.shadowRoot.querySelector('.lc_text-widget--phone-icon') as HTMLElement | null;
                                    if (phoneIcon) {
                                        phoneIcon.click();
                                        return;
                                    }
                                    // Fallback: try the widget container or any clickable phone element
                                    const phoneBtn = chatWidget.shadowRoot.querySelector(
                                        '.lc_text-widget--btn, [class*="phone-icon"], [class*="call"], button'
                                    ) as HTMLElement | null;
                                    if (phoneBtn) {
                                        phoneBtn.click();
                                        return;
                                    }
                                }
                                // Final fallback: scroll to bottom where widget lives
                                window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                            }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                            className="relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-base shadow-[0_0_40px_rgba(6,182,212,0.35)] hover:shadow-[0_0_60px_rgba(6,182,212,0.5)] transition-shadow duration-300 group"
                        >
                            <Phone className="w-5 h-5 group-hover:animate-bounce" />
                            Talk to Our AI Now
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </motion.button>

                        <p className="text-neutral-600 text-xs mt-5">
                            No signup required · Takes 30 seconds · Completely free
                        </p>

                        {/* Decorative corner accents */}
                        <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-cyan-500/30 rounded-tl-2xl" />
                        <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-cyan-500/30 rounded-tr-2xl" />
                        <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-cyan-500/30 rounded-bl-2xl" />
                        <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-cyan-500/30 rounded-br-2xl" />
                    </div>
                </motion.div>

                {/* ─── VOICE AI FLOW ─────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-28"
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
                        How a call is handled in{" "}
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">under 1 second</span>
                    </h3>
                    <p className="text-neutral-500 text-center mb-14 text-sm">Every call flows through five intelligent stages — fully automated.</p>

                    {/* Horizontal flow — desktop */}
                    <div className="hidden lg:flex items-stretch justify-between gap-0 relative">
                        {/* Connector line */}
                        <div className="absolute top-12 left-[8%] right-[8%] h-px bg-gradient-to-r from-red-500/30 via-cyan-500/30 to-emerald-500/30" />
                        <motion.div
                            className="absolute top-[47px] left-[8%] h-[3px] bg-gradient-to-r from-red-500 via-cyan-500 to-emerald-500 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: "84%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        />

                        {voiceFlowSteps.map((step, i) => (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + i * 0.15, duration: 0.6 }}
                                className="flex-1 flex flex-col items-center text-center relative z-10 px-2"
                            >
                                {/* Step circle */}
                                <motion.div
                                    whileHover={{ scale: 1.15 }}
                                    className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-5 shadow-xl relative`}
                                >
                                    <step.icon className="w-10 h-10 text-white" />
                                    {/* Step number */}
                                    <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-black border-2 border-white/10 flex items-center justify-center text-[10px] font-bold text-white">
                                        {i + 1}
                                    </div>
                                </motion.div>
                                <h4 className="text-white font-bold text-sm mb-1">{step.title}</h4>
                                <p className="text-neutral-500 text-xs">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Vertical flow — mobile */}
                    <div className="lg:hidden space-y-6 max-w-md mx-auto">
                        {voiceFlowSteps.map((step, i) => (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className="flex items-center gap-5"
                            >
                                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shrink-0 shadow-lg relative`}>
                                    <step.icon className="w-7 h-7 text-white" />
                                    <div className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-black border border-white/10 flex items-center justify-center text-[9px] font-bold text-white">
                                        {i + 1}
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-sm">{step.title}</h4>
                                    <p className="text-neutral-500 text-xs">{step.desc}</p>
                                </div>
                                {i < voiceFlowSteps.length - 1 && (
                                    <ArrowRight className="w-4 h-4 text-neutral-700 rotate-90 absolute right-1/2 -bottom-5 hidden" />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* ─── CONVERSATIONAL AI CAPABILITIES ────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-28"
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
                        Conversational AI{" "}
                        <span className="bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent">capabilities</span>
                    </h3>
                    <p className="text-neutral-500 text-center mb-14 text-sm">Not just a chatbot. A fully intelligent digital employee.</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {conversationCapabilities.map((cap, i) => (
                            <motion.div
                                key={cap.title}
                                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                                className="group relative"
                            >
                                {/* Hover glow */}
                                <div className={`absolute -inset-px rounded-2xl bg-gradient-to-br ${cap.color} opacity-0 group-hover:opacity-15 transition-opacity duration-500 blur-sm`} />

                                <div className="relative rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-8 h-full">
                                    <div className="flex items-start justify-between mb-6">
                                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cap.color} flex items-center justify-center shadow-lg`}>
                                            <cap.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="text-right">
                                            <div className={`text-3xl font-black bg-gradient-to-r ${cap.color} bg-clip-text text-transparent`}>
                                                {cap.stat}
                                            </div>
                                            <div className="text-[10px] text-neutral-500 uppercase tracking-wider">{cap.statLabel}</div>
                                        </div>
                                    </div>
                                    <h4 className="text-lg font-bold text-white mb-2">{cap.title}</h4>
                                    <p className="text-neutral-400 text-sm leading-relaxed">{cap.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* ─── HUMAN vs AI COMPARISON ────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
                        Traditional receptionist vs{" "}
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">AI Voice Agent</span>
                    </h3>
                    <p className="text-neutral-500 text-center mb-14 text-sm">The numbers don&apos;t lie. Here&apos;s what you&apos;re missing.</p>

                    <div className="relative max-w-3xl mx-auto">
                        <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-500/10 blur-sm" />

                        <div className="relative rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm overflow-hidden">
                            {/* Header row */}
                            <div className="grid grid-cols-[1fr_1fr_1fr] gap-4 px-8 py-5 border-b border-white/[0.04]">
                                <div className="text-sm font-medium text-neutral-500 uppercase tracking-wider">Metric</div>
                                <div className="text-sm font-medium text-neutral-500 text-center flex items-center justify-center gap-2">
                                    <Users className="w-3.5 h-3.5" /> Human
                                </div>
                                <div className="text-sm font-medium text-cyan-400 text-center flex items-center justify-center gap-2">
                                    <Bot className="w-3.5 h-3.5" /> AI Voice
                                </div>
                            </div>

                            {/* Data rows */}
                            {comparisonData.map((row, i) => (
                                <motion.div
                                    key={row.label}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                                    className={`grid grid-cols-[1fr_1fr_1fr] gap-4 px-8 py-5 ${i < comparisonData.length - 1 ? "border-b border-white/[0.03]" : ""
                                        } hover:bg-white/[0.01] transition-colors`}
                                >
                                    <div className="text-sm text-white font-medium flex items-center">{row.label}</div>

                                    {/* Human side */}
                                    <div className="flex flex-col items-center gap-2">
                                        <span className="text-sm text-neutral-400">{row.human}</span>
                                        <AnimatedBar percentage={row.humanPct} color="bg-neutral-600" delay={0.2 + i * 0.1} />
                                    </div>

                                    {/* AI side */}
                                    <div className="flex flex-col items-center gap-2">
                                        <span className="text-sm text-cyan-300 font-medium">{row.ai}</span>
                                        <AnimatedBar percentage={row.aiPct} color="bg-gradient-to-r from-cyan-500 to-blue-500" delay={0.3 + i * 0.1} />
                                    </div>
                                </motion.div>
                            ))}

                            {/* Bottom summary */}
                            <div className="px-8 py-6 bg-gradient-to-r from-cyan-500/[0.03] to-blue-500/[0.03] border-t border-white/[0.04]">
                                <div className="flex items-center justify-between flex-wrap gap-4">
                                    <div className="flex items-center gap-6">
                                        <div>
                                            <div className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                                                <MiniCounter target={98} suffix="%" />
                                            </div>
                                            <div className="text-[10px] text-neutral-500 uppercase tracking-wider">Cost savings</div>
                                        </div>
                                        <div className="w-px h-10 bg-white/[0.06]" />
                                        <div>
                                            <div className="text-3xl font-black bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent">
                                                <MiniCounter target={60} suffix="x" />
                                            </div>
                                            <div className="text-[10px] text-neutral-500 uppercase tracking-wider">Faster response</div>
                                        </div>
                                        <div className="w-px h-10 bg-white/[0.06]" />
                                        <div>
                                            <div className="text-3xl font-black bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
                                                0
                                            </div>
                                            <div className="text-[10px] text-neutral-500 uppercase tracking-wider">Missed calls</div>
                                        </div>
                                    </div>
                                    <motion.div
                                        animate={{ scale: [1, 1.05, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20"
                                    >
                                        <Shield className="w-3.5 h-3.5 text-cyan-400" />
                                        <span className="text-xs font-medium text-cyan-400">Enterprise-grade security</span>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
