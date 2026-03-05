export default function ECommerce() {
    return (
        <div className="min-h-screen bg-[#fafafa] dark:bg-background font-sans">
            {/* E-Commerce Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden border-b border-border">
                {/* Subtle patterned background */}
                <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        <div className="flex-1 text-center lg:text-left z-10">
                            <div className="inline-flex items-center rounded-full bg-orange-500/10 dark:bg-orange-500/20 px-4 py-1.5 text-sm font-semibold text-orange-600 dark:text-orange-400 mb-6">
                                <span> Retail & D2C Compensation</span>
                            </div>
                            <h1 className="text-5xl md:text-6xl font-extrabold text-foreground tracking-tight mb-6">
                                Maximizing Returns on <br className="hidden lg:block" />
                                <span className="text-transparent bg-clip-text bg-linear-to-br from-orange-500 to-red-600">E-Commerce Talent.</span>
                            </h1>
                            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
                                Data-driven salary bands for e-commerce managers, retention specialists, supply chain analysts, and conversion rate optimizers.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <button className="h-14 px-8 rounded-xl bg-orange-500 text-white font-semibold text-lg hover:bg-orange-600 shadow-[0_8px_30px_-4px_rgba(249,115,22,0.4)] transition-all">
                                    Browse Retail Roles
                                </button>
                            </div>
                        </div>

                        {/* E-Commerce Dashboard Metric Graphic */}
                        <div className="flex-1 w-full relative z-10">
                            <div className="h-[400px] w-full bg-white dark:bg-card rounded-2xl shadow-2xl border border-border p-6 flex flex-col justify-between relative overflow-hidden">
                                {/* Decorative background curve */}
                                <svg className="absolute bottom-0 left-0 w-full h-1/2 text-orange-500/5" viewBox="0 0 100 100" preserveAspectRatio="none">
                                    <path d="M0,100 C20,20 80,80 100,0 L100,100 Z" fill="currentColor" />
                                </svg>

                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="text-sm font-semibold text-muted-foreground mb-1 uppercase tracking-wider">Avg. E-Commerce Director</p>
                                        <p className="text-4xl font-bold text-foreground">$145,000 <span className="text-lg text-green-500 font-medium">+12% YoY</span></p>
                                    </div>
                                    <div className="h-10 w-10 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                                        <svg className="w-5 h-5 text-orange-600 dark:text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                        </svg>
                                    </div>
                                </div>

                                <div className="space-y-4 relative z-10 w-full">
                                    {/* Fake UI bars representing data */}
                                    <div className="w-full">
                                        <div className="flex justify-between text-xs mb-1 font-medium">
                                            <span>Base Salary</span>
                                            <span className="text-muted-foreground">75%</span>
                                        </div>
                                        <div className="h-2 w-full bg-secondary/20 rounded-full overflow-hidden">
                                            <div className="h-full bg-orange-500 w-3/4 rounded-full"></div>
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <div className="flex justify-between text-xs mb-1 font-medium">
                                            <span>Performance Bonus</span>
                                            <span className="text-muted-foreground">15%</span>
                                        </div>
                                        <div className="h-2 w-full bg-secondary/20 rounded-full overflow-hidden">
                                            <div className="h-full bg-rose-500 w-[15%] rounded-full"></div>
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <div className="flex justify-between text-xs mb-1 font-medium">
                                            <span>Profit Sharing</span>
                                            <span className="text-muted-foreground">10%</span>
                                        </div>
                                        <div className="h-2 w-full bg-secondary/20 rounded-full overflow-hidden">
                                            <div className="h-full bg-yellow-500 w-[10%] rounded-full"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Card */}
                            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-card border border-border shadow-xl rounded-xl p-4 animate-bounce hover:animate-none transition-all" style={{ animationDuration: '3s' }}>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                                        <span className="text-green-600 dark:text-green-400 font-bold">$</span>
                                    </div>
                                    <div>
                                        <p className="text-xs text-muted-foreground font-semibold">Conversion Rate Expert</p>
                                        <p className="text-sm font-bold text-foreground">Highest Demand Role</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Value Props */}
            <section className="py-20 lg:py-28 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-16 text-foreground">Why Top Brands Trust Our Data</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: '🛒', title: 'GMV Correlated', desc: 'See how candidate compensation scales directly with the Gross Merchandise Value they manage.' },
                            { icon: '📦', title: 'Supply Chain Insights', desc: 'Unique salary bands for logistics and fulfillment operators who keep your physical products moving.' },
                            { icon: '📈', title: 'Retention Specialists', desc: 'Detailed compensation structures for the talent driving LTV and reducing subscriber churn.' }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-card border border-border rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300 shadow-lg hover:shadow-xl">
                                <div className="w-16 h-16 rounded-2xl bg-orange-50 dark:bg-orange-900/10 flex items-center justify-center text-3xl mx-auto mb-6">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}