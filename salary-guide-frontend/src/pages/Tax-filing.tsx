export default function TaxFiling() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-background font-sans">
            {/* Tax Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
                {/* Clean geometric background elements */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] border-40 border-emerald-500/5 rounded-full z-0" />
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[300px] h-[300px] border-30 border-blue-500/5 rounded-full z-0" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        <div className="text-center lg:text-left">
                            <div className="inline-flex items-center rounded-md bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-700 dark:text-emerald-400 mb-6 border border-emerald-500/20">
                                <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                                Secure Salary Insights
                            </div>
                            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-foreground tracking-tight mb-6 leading-[1.15]">
                                Compensation Data for <br />
                                <span className="text-emerald-600 dark:text-emerald-500">Finance & Tax Pros.</span>
                            </h1>
                            <p className="text-lg text-slate-600 dark:text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
                                Accurate, compliant, and verified salary benchmarks for CPAs, Tax Directors, Auditors, and Corporate Finance specialists.
                            </p>

                            {/* Trust Indicators */}
                            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8">
                                <div className="flex flex-col">
                                    <span className="text-3xl font-bold text-slate-900 dark:text-foreground">100%</span>
                                    <span className="text-xs text-slate-500 uppercase font-semibold">Verified Data</span>
                                </div>
                                <div className="w-px h-12 bg-slate-200 dark:bg-border hidden sm:block"></div>
                                <div className="flex flex-col">
                                    <span className="text-3xl font-bold text-slate-900 dark:text-foreground">SOC 2</span>
                                    <span className="text-xs text-slate-500 uppercase font-semibold">Compliant System</span>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <button className="h-14 px-8 rounded-lg bg-emerald-600 text-white font-medium text-lg hover:bg-emerald-700 transition-colors shadow-md hover:shadow-lg">
                                    Access Finance Data
                                </button>
                            </div>
                        </div>

                        {/* Document / Tax Form Graphic */}
                        <div className="relative mx-auto w-full max-w-md">
                            <div className="absolute inset-0 bg-emerald-500/10 blur-3xl rounded-full transform -skew-y-12"></div>

                            {/* Main Document Card */}
                            <div className="relative bg-white dark:bg-card border border-slate-200 dark:border-border rounded-xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                                <div className="flex justify-between items-center border-b border-slate-100 dark:border-border pb-4 mb-6">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                                            <svg className="w-4 h-4 text-emerald-600 dark:text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className="font-semibold text-slate-900 dark:text-foreground">Tax Director - Form C</span>
                                    </div>
                                    <div className="px-2 py-1 rounded bg-slate-100 dark:bg-muted text-xs font-mono text-slate-500">CONFIDENTIAL</div>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex justify-between items-end border-b border-slate-50 dark:border-slate-800/50 pb-2">
                                        <div>
                                            <p className="text-xs text-slate-500 mb-1">1. Base Compensation</p>
                                            <div className="h-4 w-32 bg-slate-100 dark:bg-muted rounded"></div>
                                        </div>
                                        <span className="font-mono font-medium text-slate-900 dark:text-foreground">$185,000</span>
                                    </div>
                                    <div className="flex justify-between items-end border-b border-slate-50 dark:border-slate-800/50 pb-2">
                                        <div>
                                            <p className="text-xs text-slate-500 mb-1">2. Annual Bonus target</p>
                                            <div className="h-4 w-24 bg-slate-100 dark:bg-muted rounded"></div>
                                        </div>
                                        <span className="font-mono font-medium text-slate-900 dark:text-foreground">$45,000</span>
                                    </div>
                                    <div className="flex justify-between items-end pb-2">
                                        <div>
                                            <p className="text-xs font-semibold text-slate-900 dark:text-foreground mb-1">3. Total Earnings (Lines 1+2)</p>
                                        </div>
                                        <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">$230,000</span>
                                    </div>
                                </div>

                                {/* Stamp */}
                                <div className="absolute bottom-4 right-4 w-16 h-16 border-4 border-emerald-500/20 rounded-full flex items-center justify-center transform -rotate-12">
                                    <span className="text-[10px] font-bold text-emerald-600/40 uppercase tracking-widest">Verified</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Expertise Section */}
            <section className="py-20 bg-white dark:bg-card border-t border-slate-200 dark:border-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-foreground mb-4">Granular Financial Roles</h2>
                        <p className="text-slate-600 dark:text-muted-foreground">We understand that a Corporate Tax Manager differs vastly from a Wealth Management Advisor. Our data reflects that reality.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { role: 'Certified Public Accountant', growth: '+8%' },
                            { role: 'Corporate Tax Director', growth: '+14%' },
                            { role: 'Financial Auditor', growth: '+11%' },
                            { role: 'Compliance Officer', growth: '+9%' }
                        ].map((item, idx) => (
                            <div key={idx} className="p-6 rounded-xl border border-slate-200 dark:border-border bg-slate-50 dark:bg-background/50 hover:border-emerald-500/50 transition-colors cursor-pointer group">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="w-10 h-10 rounded bg-emerald-100 dark:bg-emerald-900/20 flex items-center justify-center text-emerald-600 dark:text-emerald-500 font-bold">
                                        {item.role.charAt(0)}
                                    </div>
                                    <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/10 px-2 py-1 rounded">
                                        {item.growth}
                                    </span>
                                </div>
                                <h3 className="font-semibold text-slate-900 dark:text-foreground mb-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">{item.role}</h3>
                                <p className="text-sm text-slate-500 dark:text-muted-foreground">View detailed compensation bands &rarr;</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}