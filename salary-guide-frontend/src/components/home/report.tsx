import { User, TrendingUp, MessageSquare } from "lucide-react";

const features = [
  {
    id: 1,
    icon: User,
    title: "Personal Benchmarks",
    description: "Compare vs specific role & location",
  },
  {
    id: 2,
    icon: TrendingUp,
    title: "Market Positioning",
    description: "See percentile ranking data",
  },
  {
    id: 3,
    icon: MessageSquare,
    title: "Negotiation Insights",
    description: "Leverage data to earn more",
  },
];

export default function SalaryReportCTA() {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden bg-background"
    >
      {/* Subtle dot/noise texture overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle, var(--color-primary) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      {/* Radial glow in center */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, var(--color-primary) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center gap-8">

        {/* Badge */}
        <span
          className="inline-block px-4 py-1.5 rounded-full border border-primary text-primary bg-primary/10 text-sm font-medium"
        >
          Free Report
        </span>

        {/* Heading */}
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Get Your Custom Salary Report
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Share your salary anonymously and unlock a personalized report showing exactly where
            you stand in the market compared to peers with your experience.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mt-2">
          {features.map(({ id, icon: Icon, title, description }) => (
            <div
              key={id}
              className="flex flex-col gap-3 rounded-2xl p-5 text-left bg-card border border-border"
            >
              <Icon className="w-6 h-6 text-primary" />
              <div>
                <p className="font-semibold text-foreground text-sm mb-1">{title}</p>
                <p className="text-muted-foreground text-sm leading-snug">{description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button
          className="mt-2 px-8 py-3.5 rounded-full font-semibold text-primary-foreground bg-primary transition-all hover:opacity-90 active:scale-95"
        >
          Contribute &amp; Unlock Report
        </button>

      </div>
    </section>
  );
}