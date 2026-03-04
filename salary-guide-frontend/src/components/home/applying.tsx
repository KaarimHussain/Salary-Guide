import { BarChart2, X, Check, AlertCircle, Sparkles } from "lucide-react";

const ExtensionMockup = () => (
  <div className="relative w-full h-full min-h-96 rounded-3xl overflow-hidden"
    style={{
      background: "radial-gradient(ellipse at 30% 20%, #86efac 0%, #22c55e 30%, #16a34a 55%, #4ade80 75%, #86efac 100%)",
    }}
  >
    {/* Blobs */}
    <div className="absolute top-8 left-8 w-48 h-48 rounded-full opacity-40"
      style={{ background: "radial-gradient(circle, #bbf7d0, transparent 70%)" }} />
    <div className="absolute bottom-12 right-8 w-56 h-56 rounded-full opacity-30"
      style={{ background: "radial-gradient(circle, #a7f3d0, transparent 70%)" }} />

    {/* Chrome Extension Popup Card */}
    <div className="absolute bottom-8 right-6 w-72 bg-white rounded-2xl shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <BarChart2 className="w-4 h-4 text-emerald-600" />
          <span className="text-sm font-semibold text-gray-800">SalaryGuide</span>
        </div>
        <button className="text-gray-400 hover:text-gray-600 transition-colors">
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Success Banner */}
      <div className="mx-3 mt-3 rounded-xl px-4 py-3" style={{ backgroundColor: "#16a34a" }}>
        <div className="flex items-center gap-2 mb-1">
          <Sparkles className="w-4 h-4 text-yellow-300 shrink-0" />
          <span className="text-white font-semibold text-sm">Autofill Complete!</span>
        </div>
        <p className="text-green-100 text-xs leading-relaxed">
          We've filled <span className="text-white font-semibold">13 of 14 fields</span>. Review any remaining questions below.
        </p>
      </div>

      {/* Form Sections */}
      <div className="px-4 pt-4 pb-4">
        <p className="text-gray-400 text-[10px] font-semibold tracking-widest uppercase mb-3">
          Form Sections
        </p>
        <div className="flex flex-col gap-2">
          {/* Common Questions - complete */}
          <div className="flex items-center justify-between py-2.5 px-3 rounded-xl bg-gray-50">
            <div className="flex items-center gap-2.5">
              <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                <Check className="w-3 h-3 text-emerald-600" strokeWidth={3} />
              </div>
              <span className="text-sm text-gray-700 font-medium">Common Questions</span>
            </div>
            <span className="text-xs font-semibold text-emerald-600">13/13 filled</span>
          </div>

          {/* Unique Questions - incomplete */}
          <div className="flex items-center justify-between py-2.5 px-3 rounded-xl bg-gray-50">
            <div className="flex items-center gap-2.5">
              <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                <AlertCircle className="w-3 h-3 text-amber-500" />
              </div>
              <span className="text-sm text-gray-700 font-medium">Unique Questions</span>
            </div>
            <span className="text-xs font-semibold text-amber-500">1 remaining</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default function ChromeExtensionPromo() {
  return (
    <section className="min-h-screen bg-muted/30 flex items-center px-6 py-16 font-sans">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left — Copy */}
        <div className="flex flex-col gap-6 max-w-lg">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight tracking-tight">
            Stop Typing. Start Applying.
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            Our Chrome extension auto-fills job applications on LinkedIn, Indeed,
            and more using your saved profile. Save hours every week and land your
            dream job faster.
          </p>
          <div className="flex items-center gap-3">
            <button
              className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm transition-all hover:opacity-90 active:scale-95"
            >
              Add to Chrome
            </button>
            <button className="px-6 py-3 rounded-xl text-foreground font-semibold text-sm border border-border bg-background hover:border-primary hover:shadow-sm transition-all">
              Learn more
            </button>
          </div>
        </div>

        {/* Right — Mockup */}
        <div className="w-full h-96 lg:h-[420px]">
          <ExtensionMockup />
        </div>

      </div>
    </section>
  );
}