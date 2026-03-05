'use client'

import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { TrendingUp, Users, Clock, Star, Quote } from "lucide-react"

function AnimatedCounter({ target, suffix = "", prefix = "" }: { target: number; suffix?: string; prefix?: string }) {
    const [count, setCount] = useState(0)
    const ref = useRef<HTMLDivElement>(null)
    const hasAnimated = useRef(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true
                    const duration = 2500
                    const startTime = performance.now()

                    const step = (currentTime: number) => {
                        const elapsed = currentTime - startTime
                        const progress = Math.min(elapsed / duration, 1)
                        // Custom ease-out with overshoot
                        const eased = progress < 0.8
                            ? 1 - Math.pow(1 - progress / 0.8, 3)
                            : 1
                        setCount(Math.round(target * eased))

                        if (progress < 1) {
                            requestAnimationFrame(step)
                        }
                    }

                    requestAnimationFrame(step)
                }
            },
            { threshold: 0.3 }
        )

        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [target])

    return (
        <div ref={ref} className="tabular-nums">
            {prefix}{count}{suffix}
        </div>
    )
}

const stats = [
    {
        value: 2,
        suffix: "M+",
        prefix: "£",
        label: "Revenue generated for clients",
        icon: TrendingUp,
        color: "from-emerald-400 to-green-500",
        glowColor: "rgba(16,185,129,0.1)",
    },
    {
        value: 10,
        suffix: "k+",
        prefix: "",
        label: "Hours of manual work eliminated",
        icon: Clock,
        color: "from-cyan-400 to-blue-500",
        glowColor: "rgba(6,182,212,0.1)",
    },
    {
        value: 97,
        suffix: "%",
        prefix: "",
        label: "Client satisfaction rate",
        icon: Star,
        color: "from-violet-400 to-purple-500",
        glowColor: "rgba(139,92,246,0.1)",
    },
    {
        value: 14,
        suffix: "",
        prefix: "",
        label: "Average days to full deployment",
        icon: Users,
        color: "from-amber-400 to-orange-500",
        glowColor: "rgba(245,158,11,0.1)",
    },
]

const testimonials = [
    {
        quote: "The only way to scale is to remove yourself from the operations. That's exactly what Time Consulting did for us.",
        name: "James W.",
        role: "Service Industry Owner",
        initials: "JW",
        gradient: "from-cyan-500 to-blue-600",
    },
    {
        quote: "We saved over £6,000 a month by automating our follow-ups and booking system. The ROI was immediate.",
        name: "Sarah K.",
        role: "Dental Practice Owner",
        initials: "SK",
        gradient: "from-violet-500 to-purple-600",
    },
    {
        quote: "I was sceptical about AI replacing my admin team. Now I can't imagine going back. It's like having 10 employees.",
        name: "David R.",
        role: "Estate Agent",
        initials: "DR",
        gradient: "from-emerald-500 to-green-600",
    },
]

export function ResultsSection() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    })

    const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
    const [activeTestimonial, setActiveTestimonial] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    return (
        <section id="results" ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
            {/* Parallax background */}
            <motion.div style={{ y: bgY }} className="absolute inset-0 bg-gradient-to-b from-black via-emerald-950/8 to-black" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.04),transparent_50%)]" />

            {/* Ambient particles */}
            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-emerald-500/20 rounded-full"
                    style={{
                        left: `${10 + i * 12}%`,
                        top: `${15 + (i % 4) * 20}%`,
                    }}
                    animate={{
                        y: [0, -40, 0],
                        opacity: [0.1, 0.5, 0.1],
                    }}
                    transition={{
                        duration: 4 + i * 0.7,
                        repeat: Infinity,
                        delay: i * 0.6,
                    }}
                />
            ))}

            <div className="max-w-7xl mx-auto relative z-10">
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
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-xs font-medium text-emerald-400 tracking-wide uppercase mb-8"
                    >
                        <TrendingUp className="w-3.5 h-3.5" />
                        Real results
                    </motion.span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-tight">
                        Numbers that{" "}
                        <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                            speak for themselves
                        </span>
                    </h2>
                </motion.div>

                {/* Stats grid — enhanced */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 60, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.7,
                                delay: i * 0.12,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            className="group relative"
                        >
                            {/* Glow */}
                            <div className={`absolute -inset-px rounded-2xl bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm`} />

                            <div className="relative text-center p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm overflow-hidden h-full">
                                {/* Background glow */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                                    style={{ background: `radial-gradient(circle at 50% 50%, ${stat.glowColor}, transparent 70%)` }}
                                />

                                <div className="relative z-10">
                                    {/* Icon */}
                                    <motion.div
                                        className={`w-12 h-12 mx-auto mb-5 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}
                                        whileHover={{ rotate: [0, -10, 10, 0] }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <stat.icon className="w-6 h-6 text-white" />
                                    </motion.div>

                                    {/* Counter */}
                                    <div className={`text-4xl md:text-5xl font-black bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`}>
                                        <AnimatedCounter target={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                                    </div>
                                    <p className="text-sm text-neutral-500 mt-3 leading-snug">{stat.label}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Testimonial carousel */}
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="relative"
                >
                    {/* Outer glow */}
                    <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-cyan-500/10 via-violet-500/10 to-emerald-500/10 blur-sm" />

                    <div className="relative rounded-3xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-12 md:p-16 overflow-hidden">
                        {/* Background effect */}
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.04),transparent_60%)]" />
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:60px_60px]" />

                        <div className="relative z-10">
                            {/* Quote icon */}
                            <motion.div
                                animate={{ rotate: [0, 5, -5, 0] }}
                                transition={{ duration: 6, repeat: Infinity }}
                            >
                                <Quote className="w-14 h-14 text-cyan-500/20 mx-auto mb-8" />
                            </motion.div>

                            {/* Testimonial text — animated swap */}
                            <div className="relative h-[180px] md:h-[140px] flex items-center justify-center">
                                {testimonials.map((testimonial, i) => (
                                    <motion.blockquote
                                        key={i}
                                        className="absolute inset-0 flex items-center justify-center"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{
                                            opacity: activeTestimonial === i ? 1 : 0,
                                            y: activeTestimonial === i ? 0 : 20,
                                        }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <p className="text-2xl md:text-3xl font-bold text-white leading-relaxed max-w-3xl text-center">
                                            {testimonial.quote}
                                        </p>
                                    </motion.blockquote>
                                ))}
                            </div>

                            {/* Author — animated swap */}
                            <div className="mt-10 flex items-center justify-center gap-4">
                                {testimonials.map((testimonial, i) => (
                                    <motion.div
                                        key={i}
                                        className="absolute flex items-center gap-4"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{
                                            opacity: activeTestimonial === i ? 1 : 0,
                                            y: activeTestimonial === i ? 0 : 10,
                                        }}
                                        transition={{ duration: 0.6, delay: 0.1 }}
                                    >
                                        <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                                            {testimonial.initials}
                                        </div>
                                        <div className="text-left">
                                            <div className="text-white font-semibold">{testimonial.name}</div>
                                            <div className="text-sm text-neutral-500">{testimonial.role}</div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Dots indicator */}
                            <div className="flex justify-center gap-2 mt-16">
                                {testimonials.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setActiveTestimonial(i)}
                                        className="relative w-2 h-2 rounded-full transition-all duration-300"
                                    >
                                        <div className={`w-full h-full rounded-full transition-all duration-300 ${activeTestimonial === i
                                                ? "bg-cyan-400 scale-150"
                                                : "bg-white/20 hover:bg-white/40"
                                            }`} />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
