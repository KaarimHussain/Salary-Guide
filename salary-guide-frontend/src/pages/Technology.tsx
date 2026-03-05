export default function Technology() {
    return (
        <div className="min-h-screen bg-background font-sans selection:bg-secondary selection:text-white">
            {/* Tech Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-950 text-white border-b border-border/10">
                {/* Subtle glowing grid background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>
                <div className="absolute inset-0 bg-slate-950 mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

                {/* Neon Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-blue-500/20 blur-[120px] rounded-full pointer-events-none" />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                    <div className="inline-flex items-center rounded-md border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm font-mono text-blue-400 mb-8 backdrop-blur-sm">
                        <span className="mr-2">~/salary-data/tech</span>
                        <span className="animate-pulse">_</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-white">
                        Engineering <span className="text-blue-500 line-through decoration-blue-900/50">Guesswork</span><br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-300">Precision.</span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Data for SWEs, DevOps, Data Scientists, and IT pros. See how modern tech stacks and specific skills index against the market.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="h-14 px-8 rounded-md bg-blue-600 text-white font-medium text-lg hover:bg-blue-500 transition-colors shadow-[0_0_20px_-5px_rgba(37,99,235,0.5)]">
                            Query Salaries
                        </button>
                        <button className="h-14 px-8 rounded-md bg-transparent text-white border border-slate-700 font-medium text-lg hover:bg-slate-800 transition-colors">
                            Read Docs
                        </button>
                    </div>
                </div>
            </section>

            {/* Tech Stack Marquee (Static representation) */}
            <section className="py-12 bg-slate-900 border-b border-slate-800 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
                    <p className="text-slate-500 text-sm font-mono mb-6 uppercase tracking-widest">Stack impact on compensation</p>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        {['React', 'Node.js', 'Python', 'Go', 'AWS', 'Docker', 'Kubernetes'].map((tech, i) => (
                            <div key={i} className="text-xl md:text-3xl font-bold text-white tracking-tighter">{tech}</div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Code Editor Feature */}
            <section className="py-24 lg:py-32 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                        <div className="flex-1 w-full order-2 lg:order-1">
                            <div className="rounded-xl overflow-hidden bg-[#0d1117] border border-slate-800 shadow-2xl">
                                <div className="flex items-center px-4 py-3 bg-[#161b22] border-b border-slate-800">
                                    <div className="flex space-x-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                    </div>
                                    <div className="mx-auto text-xs text-slate-500 font-mono">salary_query.ts</div>
                                </div>
                                <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto">
                                    <div className="text-slate-400">
                                        <span className="text-pink-400">const</span> <span className="text-blue-400">getSalaryData</span> = <span className="text-pink-400">await</span> <span className="text-yellow-200">db</span>.<span className="text-blue-300">salaries</span>.<span className="text-yellow-200">find</span>({`{`}
                                    </div>
                                    <div className="text-slate-400 pl-4">
                                        role: <span className="text-green-400">'Senior Frontend Engineer'</span>,
                                    </div>
                                    <div className="text-slate-400 pl-4">
                                        location: <span className="text-green-400">'Remote'</span>,
                                    </div>
                                    <div className="text-slate-400 pl-4">
                                        skills: [<span className="text-green-400">'React'</span>, <span className="text-green-400">'TypeScript'</span>]
                                    </div>
                                    <div className="text-slate-400">
                                        {`}`});
                                    </div>
                                    <br />
                                    <div className="text-slate-500 italic">// Returns 95th percentile compensation package</div>
                                    <div className="text-slate-400">
                                        <span className="text-cyan-400">console</span>.<span className="text-yellow-200">log</span>(getSalaryData);
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 order-1 lg:order-2">
                            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground tracking-tight">Granular Data. <br />Zero Noise.</h2>
                            <p className="text-lg text-muted-foreground mb-8">
                                Tech compensation is complex. We break down base pay, RSUs, sign-on bonuses, and options so you understand the total architectural value of an offer.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[
                                    { title: 'Total Comp', desc: 'Base + Equity + Bonus' },
                                    { title: 'Level Mapping', desc: 'Normalize L4s and E5s' },
                                    { title: 'Remote vs Local', desc: 'Geo-adjusted bands' },
                                    { title: 'Refreshers', desc: 'Annual equity data' }
                                ].map((feature, idx) => (
                                    <div key={idx} className="p-4 rounded-lg bg-card border border-border">
                                        <h3 className="font-bold text-foreground mb-1">{feature.title}</h3>
                                        <p className="text-sm text-muted-foreground">{feature.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}