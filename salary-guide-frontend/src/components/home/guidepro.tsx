import { CheckCircle2 } from "lucide-react";

const features = [
  {
    id: 1,
    text: "Step-by-step systems for pre-offer, offer, and raise negotiations.",
  },
  {
    id: 2,
    text: "Exact language recruiters respond to, from first ask to final counter.",
  },
  {
    id: 3,
    text: "Deep marketing salary benchmarks to strengthen your negotiation case.",
  },
  {
    id: 4,
    text: "Marketers sharing real negotiation stories, questions, and wins.",
  },
  {
    id: 5,
    text: "Offer reviews, hot-seat coaching, and Q&A calls with experts.",
  },
  {
    id: 6,
    text: "Storytelling techniques that tie your impact directly to business outcomes.",
  },
];

export default function SalaryGuidePro() {
  return (
    <section
      className="relative w-full min-h-screen flex items-center px-6 py-20 overflow-hidden font-sans"
      style={{ backgroundColor: "#0a2e1e" }}
    >
      {/* Dot texture */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle, #1a4a30 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left — Copy */}
        <div className="flex flex-col gap-6">
          {/* Badge */}
          <span
            className="inline-block w-fit px-4 py-1.5 rounded-full border text-xs font-medium"
            style={{
              borderColor: "#2d7a4f",
              color: "#4ade80",
              backgroundColor: "rgba(45,122,79,0.15)",
            }}
          >
            SalaryGuide Pro
          </span>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            It's Time Your Paycheck Matched Your Impact
          </h2>

          {/* Subtext */}
          <p className="text-gray-400 text-base leading-relaxed max-w-lg">
            You've spent years driving ROI for others. Now it's time to get paid for it.
            SalaryGuide Pro helps marketers earn what they deserve.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mt-2">
            {features.map((feature) => (
              <div key={feature.id} className="flex items-start gap-3">
                <CheckCircle2
                  className="w-5 h-5 flex-shrink-0 mt-0.5"
                  style={{ color: "#4ade80" }}
                />
                <p className="text-gray-300 text-sm leading-relaxed">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Pricing Card */}
        <div className="flex justify-center lg:justify-end">
          <div
            className="w-full max-w-sm rounded-2xl p-8 flex flex-col items-center gap-4"
            style={{
              backgroundColor: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            {/* Price */}
            <div className="text-center">
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-5xl font-bold text-white">$99</span>
                <span className="text-gray-400 text-base">/ month</span>
              </div>
              <p className="text-gray-500 text-sm mt-1">Founding rate • Cancel anytime</p>
            </div>

            {/* CTA Button */}
            <button className="w-full py-4 rounded-xl bg-white text-gray-900 font-semibold text-base hover:bg-gray-100 active:scale-95 transition-all mt-2">
              Join the Waitlist
            </button>

            {/* Fine print */}
            <p className="text-gray-500 text-xs text-center">
              Limited spots available for beta access.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}