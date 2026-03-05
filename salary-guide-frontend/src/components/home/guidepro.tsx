import { CheckCircle2 } from "lucide-react";

const features = [
  "Lorem ipsum dolor sit amet",
  "Consectetur adipiscing elit",
  "Sed do eiusmod tempor",
  "Incididunt ut labore et",
  "Dolore magna aliqua",
  "Ut enim ad minim veniam",
];

export default function SalaryGuidePro() {
  return (
    <section className="relative w-full py-24 bg-background px-6 font-sans overflow-hidden">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, var(--color-primary) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto w-full flex flex-col items-center">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center gap-4">
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 text-primary bg-primary/10 text-sm font-semibold tracking-wide">
            SalaryGuide Pro
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">
            Lorem Ipsum Dolor Sit Amet
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna.
          </p>
        </div>

        {/* Single Pricing Card */}
        <div className="w-full max-w-lg relative flex flex-col p-8 sm:p-10 rounded-3xl border transition-all duration-300 bg-card border-primary shadow-2xl z-10">
          <div className="absolute -top-4 w-full left-0 flex justify-center">
            <span className="px-5 py-1.5 text-xs font-bold uppercase tracking-wider text-primary-foreground bg-primary rounded-full shadow-md">
              Most Popular
            </span>
          </div>

          <div className="mb-6 text-center">
            <h3 className="text-3xl font-bold text-foreground mb-3">Pro</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.
            </p>
          </div>

          <div className="mb-8 flex flex-col items-center gap-1 mt-2">
            <span className="text-sm font-bold text-muted-foreground uppercase tracking-widest">
              Starting from
            </span>
            <div className="flex items-baseline gap-1 mt-2">
              <span className="text-6xl font-extrabold text-foreground">$1500</span>
            </div>
          </div>

          <div className=" rounded-2xl p-6 mb-8 border border-border/50">
            <ul className="space-y-4">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2
                    className="w-5 h-5 shrink-0 mt-0.5 text-primary"
                  />
                  <span className="text-sm font-medium text-foreground leading-relaxed">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <button
            className="w-full py-4 rounded-xl font-bold text-lg transition-all duration-200 mt-auto bg-primary text-primary-foreground hover:opacity-90 shadow-lg hover:shadow-xl active:scale-95"
          >
            Upgrade to Pro
          </button>
        </div>
      </div>
    </section>
  );
}