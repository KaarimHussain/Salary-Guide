const articles = [
    {
        tag: "Job Hopping",
        title: "Job Hopping",
        desc: "For workers, \"Job Hopping\" is often the fastest way to a meaningful salary increase, enabling professionals to reset their compensation at a much higher rate than regular raises.",
        cta: "Read Forbes coverage →",
    },
    {
        tag: "Stealth Taxes",
        title: "Stealth Taxes",
        desc: "The term 'Stealth Taxes' has been widely used to describe the phenomenon of high inflation eroding purchasing power beyond what official statistics reveal, making salary benchmarking more critical.",
        cta: "Read IR Times coverage →",
    },
    {
        tag: "Ghost Jobs",
        title: "Ghost Jobs",
        desc: "We coined the phrase 'ghost jobs' to capture the growing trend of companies posting jobs with no intention of filling them, distorting labor market signals and wasting candidate time and energy.",
        cta: "Read Workplace Journal coverage →",
    },
];

const ThoughtLeadership = () => (
    <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-5xl mx-auto">
            <p className="text-center text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-3">Thought Leadership</p>
            <h2 className="text-center text-3xl sm:text-4xl font-bold text-foreground mb-3">Market Research & Thought Leadership</h2>
            <p className="text-center text-muted-foreground text-sm mb-12 max-w-xl mx-auto">
                Our proprietary research identifies emerging workforce trends before they become mainstream, providing actionable intelligence to professionals and businesses worldwide.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {articles.map((a) => (
                    <div key={a.tag} className="bg-card rounded-2xl border border-border p-6 flex flex-col gap-3 shadow-sm">
                        <span className="inline-block text-xs font-semibold text-primary bg-primary/10 rounded-full px-3 py-1 w-fit">{a.tag}</span>
                        <h3 className="font-bold text-foreground text-base">{a.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed flex-1">{a.desc}</p>
                        <a href="#" className="text-primary text-sm font-medium hover:opacity-80 transition-colors mt-auto">{a.cta}</a>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default ThoughtLeadership;
