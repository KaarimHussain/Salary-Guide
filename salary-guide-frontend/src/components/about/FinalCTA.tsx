const FinalCTA = () => (
    <section className="py-20 px-6 bg-muted/30 border-t border-border">
        <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Ready to take the next step in your marketing career?
            </h2>
            <p className="text-muted-foreground text-sm mb-8 opacity-80">
                Join thousands of marketers using SalaryGuide to find better opportunities, benchmark their compensation, and advance their careers.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
                <button className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm transition-all hover:opacity-90">
                    Browse Info
                </button>
                <button className="px-6 py-3 rounded-xl text-foreground font-semibold text-sm border border-border bg-background hover:border-primary transition-all">
                    Share the Salary
                </button>
            </div>
        </div>
    </section>
);

export default FinalCTA;
