'use client'

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Check, Clock, Zap, Shield } from "lucide-react"

export function AuditCTA() {
    return (
        <section id="audit" className="relative py-28 px-6">
            {/* Dramatic background */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-950/10 to-black" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.1),transparent_50%)]" />

            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    {/* Urgency */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/5 mb-8">
                        <Zap className="w-3.5 h-3.5 text-cyan-400" />
                        <span className="text-xs font-medium text-cyan-400 tracking-wide uppercase">
                            Limited availability — we only take 5 new clients per month
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
                        Get Your Free<br />
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            Automation Audit
                        </span>
                    </h2>

                    <p className="mt-6 text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
                        We&apos;ll map exactly how to automate your business — the missed revenue,
                        the wasted hours, the systems you need. <span className="text-white font-medium">No fluff. Just a clear roadmap.</span>
                    </p>

                    {/* What you get */}
                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left max-w-2xl mx-auto">
                        {[
                            { icon: Check, text: "Custom automation roadmap" },
                            { icon: Check, text: "ROI projection for your business" },
                            { icon: Check, text: "Priority areas identified" },
                            { icon: Clock, text: "Takes just 15 minutes" },
                            { icon: Shield, text: "100% free, no obligation" },
                            { icon: Zap, text: "Results within 48 hours" },
                        ].map((item, i) => (
                            <motion.div
                                key={item.text}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 * i }}
                                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.03] border border-white/5"
                            >
                                <item.icon className="w-4 h-4 text-cyan-400 shrink-0" />
                                <span className="text-sm text-neutral-300">{item.text}</span>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="mt-12 flex flex-col items-center gap-4"
                    >
                        <Link
                            href="https://calendly.com"
                            target="_blank"
                            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg rounded-full hover:shadow-[0_0_60px_rgba(6,182,212,0.3)] transition-all duration-500 hover:scale-105"
                        >
                            Book Your Free Audit Now
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <p className="text-sm text-neutral-600">
                            No payment required. No spam. Just clarity.
                        </p>
                    </motion.div>

                    {/* Final FOMO line */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8 }}
                        className="mt-16 pt-10 border-t border-white/5"
                    >
                        <p className="text-lg text-neutral-500">
                            Every day you wait, your competitors get further ahead.
                        </p>
                        <p className="text-2xl font-bold text-white mt-2">
                            The question isn&apos;t <span className="italic">if</span> you&apos;ll automate — it&apos;s <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">whether you&apos;ll do it first.</span>
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
