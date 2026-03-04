const steps = [
    {
        num: "01",
        title: "Recruiting Experience",
        color: "bg-purple-100 text-purple-600",
        desc: "Our founders have spent years in talent acquisition and performance marketing, giving them firsthand experience with compensation data, job listings, and the metrics that matter most to hiring teams. Our founding team gives us the ability to understand and model salaries more accurately.",
    },
    {
        num: "02",
        title: "Data Collection",
        color: "bg-yellow-100 text-yellow-600",
        desc: "We aggregate salary information from job postings, our community, and specific queries. This has our methodology more focused on benchmarks specific to the industry, rather than looking at professional titles across many different categories.",
    },
    {
        num: "03",
        title: "Trend Analysis",
        color: "bg-emerald-100 text-emerald-600",
        desc: "We track economic trends and macroeconomic factors that affect marketing salaries by staying close to the data and identifying NPIs patterns, our data platform has identified trends that are more than just a percentage increase.",
    },
];

const HowWeBuild = () => (
    <section className="py-20 px-6 bg-background">
        <div className="max-w-3xl mx-auto">
            <p className="text-center text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-3">Our Methodology</p>
            <h2 className="text-center text-3xl sm:text-4xl font-bold text-foreground mb-3">How We Build the Guide</h2>
            <p className="text-center text-muted-foreground text-sm mb-12 max-w-lg mx-auto">
                We combine trends in recruiting experience with data sources to create benchmarks that are thoroughly understood from a practitioner's lens.
            </p>
            <div className="flex flex-col gap-6">
                {steps.map((s) => (
                    <div key={s.num} className="flex items-start gap-5 p-6 rounded-2xl bg-card border border-border">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 ${s.color}`}>
                            {s.num}
                        </div>
                        <div>
                            <h3 className="font-bold text-foreground mb-2">{s.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
            <p className="text-center text-muted-foreground text-sm mt-10">
                Have a question? Reach us at{" "}
                <a href="mailto:support@salaryguide.com" className="text-primary hover:underline">
                    support@salaryguide.com
                </a>
            </p>
        </div>
    </section>
);

export default HowWeBuild;
