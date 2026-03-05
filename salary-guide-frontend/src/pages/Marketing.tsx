export default function Marketing() {
    return (
        <div className="min-h-screen bg-background font-sans">
            {/* Marketing Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                {/* Background Gradients */}
                <div className="absolute top-0 inset-x-0 h-full w-full bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-primary/15 via-background to-background -z-10" />
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 blur-[100px] rounded-full -z-10" />
                <div className="absolute top-40 -left-40 w-96 h-96 bg-secondary/20 blur-[100px] rounded-full -z-10" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-8">
                        <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                        Salary Insights for Marketers
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-foreground tracking-tight mb-8">
                        Uncover the True Value of <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-rose-600">Marketing Talent</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
                        From Growth Hackers to Brand Strategists, explore real-time compensation data driven by the industry's top professionals.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="h-14 px-8 rounded-xl bg-primary text-primary-foreground font-semibold text-lg hover:bg-primary/90 hover:scale-105 hover:shadow-[0_0_30px_-5px_var(--color-primary)] transition-all duration-300">
                            Explore Marketing Roles
                        </button>
                        <button className="h-14 px-8 rounded-xl bg-secondary/10 text-foreground border border-border font-semibold text-lg hover:bg-secondary/20 hover:border-primary/50 transition-all duration-300">
                            View Latest Reports
                        </button>
                    </div>
                </div>
            </section>

            {/* Stats Grid */}
            <section className="py-16 bg-card border-y border-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-border">
                        {[
                            { label: 'Data Points', value: '45K+' },
                            { label: 'Avg. ROI', value: '185%' },
                            { label: 'Top Titles', value: '320' },
                            { label: 'Companies', value: '2.5K' },
                        ].map((stat, i) => (
                            <div key={i} className="text-center px-4">
                                <div className="text-4xl lg:text-5xl font-bold text-foreground mb-2">{stat.value}</div>
                                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Feature Showcase */}
            <section className="py-24 lg:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="flex-1">
                            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Campaigns & Compensation</h2>
                            <p className="text-lg text-muted-foreground mb-8">
                                Marketing roles are evolving rapidly. See how performance marketing, SEO expertise, and brand management directly influence salary bands across different markets.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    'Real-time salary benchmarking',
                                    'Skill-based compensation breakdowns',
                                    'Agency vs. In-house comparisons'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center text-foreground">
                                        <svg className="w-6 h-6 text-primary mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex-1 w-full relative">
                            <div className="absolute -inset-4 bg-linear-to-r from-primary/30 to-rose-600/30 blur-2xl opacity-50 rounded-3xl -z-10" />
                            <div className="bg-card border border-border rounded-2xl p-6 shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-primary to-rose-600" />
                                <div className="flex justify-between items-center mb-8">
                                    <div className="h-8 w-32 bg-secondary/20 rounded animate-pulse" />
                                    <div className="h-8 w-8 bg-primary/20 rounded-full animate-pulse" />
                                </div>
                                <div className="space-y-4">
                                    {[...Array(4)].map((_, i) => (
                                        <div key={i} className="flex items-center gap-4">
                                            <div className="h-12 w-12 bg-secondary/10 rounded-full shrink-0" />
                                            <div className="flex-1 space-y-2">
                                                <div className={`h-3 bg-secondary/20 rounded w-${['3/4', '1/2', '5/6', '2/3'][i]}`} />
                                                <div className="h-2 bg-secondary/10 rounded w-1/3" />
                                            </div>
                                            <div className="h-6 w-16 bg-primary/10 rounded-full" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}