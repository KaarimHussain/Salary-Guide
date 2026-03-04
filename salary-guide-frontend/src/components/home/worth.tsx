export default function ReadyBanner() {
  return (
    <section className="w-full bg-muted/30 px-6 py-20 font-sans">
      <div className="max-w-2xl mx-auto flex flex-col items-center text-center gap-4">

        <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
          Ready to know your true worth?
        </h2>

        <p className="text-muted-foreground text-sm sm:text-base">
          Join 15,000+ marketers using SalaryGuide to transparently share data and negotiate better offers.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
          <button
            className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm transition-all hover:opacity-90 active:scale-95"
          >
            Browse Salaries
          </button>
          <button
            className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm transition-all hover:opacity-90 active:scale-95"
          >
            Contribute for full access
          </button>
        </div>

      </div>
    </section>
  );
}