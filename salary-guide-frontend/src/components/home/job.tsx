import { Search, ArrowRight } from "lucide-react";
import React from "react";

const companies = [
  { name: "Meta", bg: "#1877F2", text: "white", label: "Meta" },
  { name: "Salesforce", bg: "#00A1E0", text: "white", label: "SF" },
  { name: "Adobe", bg: "#FF0000", text: "white", label: "Ai" },
  { name: "Spotify", bg: "#1DB954", text: "white", label: "♪" },
  { name: "Google", bg: "#4285F4", text: "white", label: "G" },
];

const companies2 = [
  { name: "TikTok", bg: "#000000", text: "white", label: "TT" },
  { name: "Amazon", bg: "#FF9900", text: "white", label: "a" },
  { name: "Netflix", bg: "#E50914", text: "white", label: "N" },
  { name: "Airbnb", bg: "#FF5A5F", text: "white", label: "⌂" },
  { name: "LinkedIn", bg: "#0A66C2", text: "white", label: "in" },
];

const CompanyLogo = ({ company }: { company: typeof companies[0] }) => (
  <div
    className="w-12 h-12 rounded-xl flex items-center justify-center text-sm font-bold shadow-sm"
    style={{ backgroundColor: company.bg, color: company.text }}
  >
    {company.label}
  </div>
);

const GridBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
          <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#e2e8f0" strokeWidth="0.8" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  </div>
);

const Card = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden relative flex flex-col ${className}`}>
    {children}
  </div>
);

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-16 font-sans">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12 tracking-tight max-w-3xl leading-tight">
        Know Your Worth. Find Your Role. Plan Your Path.
      </h1>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">

        {/* Salary Data Card */}
        <Card>
          <div className="relative h-52 p-6 bg-gray-50">
            <GridBackground />
            <div className="relative z-10 mt-6 mx-auto max-w-xs">
              <div className="bg-white border border-gray-200 rounded-xl px-4 py-3 flex items-center gap-3 shadow-sm">
                <Search className="w-4 h-4 text-gray-400 shrink-0" />
                <span className="text-gray-600 text-sm">SEO Manager Salaries</span>
              </div>
            </div>
          </div>
          <div className="p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-2">Salary Data</h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              Real pay data from real marketers. Search by role or company and explore trends by location, experience, and work setting.
            </p>
            <a href="#" className="text-emerald-600 text-sm font-medium hover:text-emerald-700 flex items-center gap-1 mt-auto">
              Explore Salaries <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </Card>

        {/* Job Board Card */}
        <Card>
          <div className="relative h-52 p-6 bg-gray-50 flex items-center justify-center">
            <GridBackground />
            <div className="relative z-10 bg-white border border-gray-200 rounded-2xl p-4 shadow-sm w-64">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 bg-black rounded-lg flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">SEO Manager</p>
                  <p className="text-xs text-gray-500">Apple</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">Remote</span>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">Full-time</span>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">$110k–$150k</span>
              </div>
            </div>
          </div>
          <div className="p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-2">Job Board</h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              Fresh marketing jobs added every day. Filter by agency vs. in-house, remote, experience level, and more to find the right fit.
            </p>
            <a href="#" className="text-emerald-600 text-sm font-medium hover:text-emerald-700 flex items-center gap-1 mt-auto">
              Browse Jobs <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </Card>

        {/* Company Intel Card */}
        <Card>
          <div className="relative h-52 p-6 bg-gray-50">
            <GridBackground />
            <div className="relative z-10 flex flex-col gap-3 mt-4">
              <div className="flex items-center gap-3 justify-center">
                {companies.map((c) => (
                  <CompanyLogo key={c.name} company={c} />
                ))}
                <div className="w-12 h-12 rounded-xl bg-gray-200 flex items-center justify-center text-gray-400 text-lg">›</div>
              </div>
              <div className="flex items-center gap-3 justify-center">
                {companies2.map((c) => (
                  <CompanyLogo key={c.name} company={c} />
                ))}
                <div className="w-12 h-12 rounded-xl bg-gray-200 flex items-center justify-center text-gray-400 text-lg">›</div>
              </div>
            </div>
          </div>
          <div className="p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-2">Company Intel</h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              Get the essentials on any company: team size, salary ranges, current openings, and how actively they're hiring.
            </p>
            <a href="#" className="text-emerald-600 text-sm font-medium hover:text-emerald-700 flex items-center gap-1 mt-auto">
              View Companies <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </Card>

      </div>
    </section>
  );
}