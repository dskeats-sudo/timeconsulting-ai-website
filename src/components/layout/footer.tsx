import Link from "next/link"

export function Footer() {
    return (
        <footer className="border-t border-white/5 bg-black">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-2">
                        <span className="text-lg font-bold tracking-wider text-white">TIME CONSULTING</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    </div>

                    <div className="flex items-center gap-8">
                        <Link href="#problem" className="text-sm text-neutral-500 hover:text-white transition-colors">
                            The Problem
                        </Link>
                        <Link href="#solutions" className="text-sm text-neutral-500 hover:text-white transition-colors">
                            Solutions
                        </Link>
                        <Link href="#results" className="text-sm text-neutral-500 hover:text-white transition-colors">
                            Results
                        </Link>
                        <Link href="#audit" className="text-sm text-neutral-500 hover:text-white transition-colors">
                            Free Audit
                        </Link>
                    </div>

                    <p className="text-xs text-neutral-600">
                        © {new Date().getFullYear()} Time Consulting. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
