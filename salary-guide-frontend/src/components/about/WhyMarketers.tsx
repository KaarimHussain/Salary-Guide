const WhyMarketers = () => (
    <section className="py-20 px-6" style={{ backgroundColor: "#0a2e1e" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-6">
                    Why marketers need their own career platform
                </h2>
                <button className="px-6 py-3 rounded-xl text-white font-semibold text-sm transition-all hover:opacity-90" style={{ backgroundColor: "#16a34a" }}>
                    Learn more
                </button>
            </div>
            <div className="text-green-200 text-sm leading-relaxed space-y-4 opacity-90">
                <p>
                    Generic job boards show all marketing data in the same category. But a Performance Marketing Manager and a Brand Strategist have completely different compensation structures and career paths.
                </p>
                <p>
                    SalaryGuide is built exclusively for marketing professionals, with specialized salary data, curated job listings from top companies, and AI tools designed to help you maximize your marketing career.
                </p>
            </div>
        </div>
    </section>
);

export default WhyMarketers;
