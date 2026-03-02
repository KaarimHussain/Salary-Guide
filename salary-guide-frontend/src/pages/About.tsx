import { ArrowRight, Briefcase, BarChart2, Target, Wrench, CheckCircle2, Users, TrendingUp, MessageSquare } from "lucide-react";

// ─── Hero Section ────────────────────────────────────────────────────────────
const HeroSection = () => (
  <section className="relative bg-white pt-16 pb-20 px-6 text-center overflow-hidden">
    {/* Subtle green tint top bar */}
    <div className="absolute top-0 left-0 right-0 h-1" style={{ background: "linear-gradient(90deg, #16a34a, #4ade80, #16a34a)" }} />
    <div className="max-w-3xl mx-auto">
      <p className="text-xs font-semibold tracking-widest text-emerald-600 uppercase mb-4">About SalaryGuide</p>
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-4">
        About SalaryGuide.com: The Career Intelligence Platform for Marketers
      </h1>
      <p className="text-xs text-gray-400 mb-5">Last Updated: January 2, 2025</p>
      <p className="text-gray-600 text-base leading-relaxed mb-3">
        <strong>SalaryGuide.com is a career intelligence platform providing real-time compensation analytics and labor market insights.</strong> It has been featured as an expert commentary on workforce trends like "Job Hopping" and "Stealth Taxes" by publications including Forbes, HR Roots, and The Irish Independent.
      </p>
      <div className="flex items-center justify-center gap-3 mt-6">
        <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-white text-sm font-semibold transition-all hover:opacity-90" style={{ backgroundColor: "#16a34a" }}>
          Browse Info <ArrowRight className="w-4 h-4" />
        </button>
        <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold border border-gray-200 bg-white text-gray-700 hover:border-gray-300 transition-all">
          Share a Salary
        </button>
      </div>
    </div>
  </section>
);

// ─── Media Coverage ───────────────────────────────────────────────────────────
const mediaCoverage = [
  { date: "Feb 2024", publication: "Forbes", focus: "Job Hopping & Retention", impact: "Productivity Market Analysis" },
  { date: "Oct 2023", publication: "Workplace Journal", focus: "Career role & movement", impact: "Data Integrity & Transparency" },
  { date: "Sep 2023", publication: "HR Roots", focus: "Growth for All Trial Wins", impact: "Measurement Authenticity" },
  { date: "Nov 2023", publication: "Irish Independent", focus: "Cost of living & PAYE", impact: "Consumer Advocacy" },
  { date: "Jul 2024", publication: "Irish Independent", focus: "Salary Range reform", impact: "Career Advocacy" },
];

const MediaSection = () => (
  <section className="py-16 px-6 bg-gray-50">
    <div className="max-w-5xl mx-auto">
      <p className="text-center text-xs font-semibold tracking-widest text-gray-400 uppercase mb-8">Media Coverage & Authority</p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-2 pr-8 font-semibold text-gray-500 text-xs uppercase tracking-wide">Date</th>
              <th className="text-left py-2 pr-8 font-semibold text-gray-500 text-xs uppercase tracking-wide">Publication</th>
              <th className="text-left py-2 pr-8 font-semibold text-gray-500 text-xs uppercase tracking-wide">Focus Area</th>
              <th className="text-left py-2 font-semibold text-gray-500 text-xs uppercase tracking-wide">Impact Signal</th>
            </tr>
          </thead>
          <tbody>
            {mediaCoverage.map((row, i) => (
              <tr key={i} className="border-b border-gray-100">
                <td className="py-3 pr-8 text-gray-500 text-xs">{row.date}</td>
                <td className="py-3 pr-8">
                  <span className="text-emerald-600 font-medium text-xs hover:underline cursor-pointer">{row.publication}</span>
                </td>
                <td className="py-3 pr-8 text-gray-600 text-xs">{row.focus}</td>
                <td className="py-3 text-gray-600 text-xs">{row.impact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

// ─── Built By Recruiters ──────────────────────────────────────────────────────
const questions = [
  "Is this salary competitive?",
  "Is this a good place to work?",
  "How do I stand out in a crowded market?",
];

const features = [
  { icon: Briefcase, label: "Salary Data", sub: "curated insights", color: "bg-purple-100 text-purple-600" },
  { icon: Target, label: "Job Board", sub: "fresh listings", color: "bg-pink-100 text-pink-600" },
  { icon: BarChart2, label: "Marketing Focus", sub: "built for marketers", color: "bg-yellow-100 text-yellow-600" },
  { icon: Wrench, label: "Career Tools", sub: "for serious roles", color: "bg-emerald-100 text-emerald-600" },
];

const BuiltByRecruiters = () => (
  <section className="py-20 px-6 bg-white">
    <div className="max-w-3xl mx-auto text-center">
      <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">Our Story</p>
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Built by recruiters who understand what marketers need</h2>
      <p className="text-gray-500 text-sm mb-10">After years of placing marketing talent, our team kept hearing the same questions:</p>
      <div className="flex flex-col gap-4 mb-10">
        {questions.map((q, i) => (
          <div key={i} className="flex items-center justify-center gap-3 bg-gray-50 rounded-2xl px-6 py-4 border border-gray-100">
            <span className="text-2xl">{["💰", "🏢", "✨"][i]}</span>
            <p className="text-gray-700 font-medium text-sm italic">"{q}"</p>
          </div>
        ))}
      </div>
      <p className="text-gray-500 text-sm leading-relaxed mb-10">
        So we built SalaryGuide, a career intelligence platform that combines real salary data, curated job listings, and AI-powered tools to help marketers make smarter career moves.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {features.map(({ icon: Icon, label, sub, color }) => (
          <div key={label} className="flex flex-col items-center gap-2 p-4 rounded-2xl border border-gray-100 bg-gray-50">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${color}`}>
              <Icon className="w-5 h-5" />
            </div>
            <p className="font-semibold text-gray-800 text-sm">{label}</p>
            <p className="text-gray-400 text-xs text-center">{sub}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─── Thought Leadership ───────────────────────────────────────────────────────
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
  <section className="py-20 px-6 bg-gray-50">
    <div className="max-w-5xl mx-auto">
      <p className="text-center text-xs font-semibold tracking-widest text-gray-400 uppercase mb-3">Thought Leadership</p>
      <h2 className="text-center text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Market Research & Thought Leadership</h2>
      <p className="text-center text-gray-500 text-sm mb-12 max-w-xl mx-auto">
        Our proprietary research identifies emerging workforce trends before they become mainstream, providing actionable intelligence to professionals and businesses worldwide.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {articles.map((a) => (
          <div key={a.tag} className="bg-white rounded-2xl border border-gray-100 p-6 flex flex-col gap-3 shadow-sm">
            <span className="inline-block text-xs font-semibold text-emerald-600 bg-emerald-50 rounded-full px-3 py-1 w-fit">{a.tag}</span>
            <h3 className="font-bold text-gray-900 text-base">{a.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed flex-1">{a.desc}</p>
            <a href="#" className="text-emerald-600 text-sm font-medium hover:text-emerald-700 transition-colors mt-auto">{a.cta}</a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─── Why Marketers ────────────────────────────────────────────────────────────
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

// ─── Meet the Founders ────────────────────────────────────────────────────────
const founders = [
  {
    name: "Josh Peacock",
    role: "Co-Founder",
    bio: "Josh created SalaryGuide to be the tool he never had as a marketer in talent acquisition and performance marketing. He has spent his career building and leading high-performance marketing teams and believes every marketer deserves transparency and fair compensation.",
    initial: "J",
    bg: "bg-amber-100",
  },
  {
    name: "Dimitri Jordan",
    role: "Co-Founder & Performance Director",
    bio: "The inspiration behind SalaryGuide came from Dimitri's frustration with the opacity of marketing compensation. Having led marketing departments at multiple organisations, he saw first-hand how information asymmetry hurt both marketers and employers. Dimitri leads our data team.",
    initial: "D",
    bg: "bg-blue-100",
  },
];

const Founders = () => (
  <section className="py-20 px-6 bg-white">
    <div className="max-w-4xl mx-auto">
      <p className="text-center text-xs font-semibold tracking-widest text-gray-400 uppercase mb-3">Our Team</p>
      <h2 className="text-center text-3xl sm:text-4xl font-bold text-gray-900 mb-12">Meet the Founders</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {founders.map((f) => (
          <div key={f.name} className="flex flex-col gap-4 bg-gray-50 rounded-2xl p-6 border border-gray-100">
            <div className="flex items-center gap-4">
              <div className={`w-14 h-14 rounded-2xl ${f.bg} flex items-center justify-center text-xl font-bold text-gray-700`}>
                {f.initial}
              </div>
              <div>
                <p className="font-bold text-gray-900">{f.name}</p>
                <p className="text-emerald-600 text-xs font-medium">{f.role}</p>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">{f.bio}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─── Everything You Need ──────────────────────────────────────────────────────
const needs = [
  {
    tag: "For job seekers",
    title: "For job seekers",
    desc: "Access current marketing jobs, see salary ranges, explore options and get a dedicated marketer profile to optimize your career profile.",
    icon: Briefcase,
    color: "bg-purple-100 text-purple-600",
  },
  {
    tag: "For career growth",
    title: "For career growth",
    desc: "Benchmark your salary against the market. Map your career path, project future earnings and get AI insights to negotiate better career moves.",
    icon: TrendingUp,
    color: "bg-emerald-100 text-emerald-600",
  },
];

const EverythingYouNeed = () => (
  <section className="py-20 px-6 bg-gray-50">
    <div className="max-w-4xl mx-auto text-center">
      <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-3">For Marketers</p>
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Everything you need to advance your marketing career</h2>
      <p className="text-gray-500 text-sm mb-12 max-w-xl mx-auto">
        From salary benchmarks to job search to career tools, we've built a complete platform to help marketers at every stage.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {needs.map(({ tag, title, desc, icon: Icon, color }) => (
          <div key={tag} className="bg-white rounded-2xl border border-gray-100 p-6 text-left flex flex-col gap-4">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${color}`}>
              <Icon className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">{tag}</p>
              <h3 className="font-bold text-gray-900 text-base mb-2">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─── How We Build The Guide ───────────────────────────────────────────────────
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
  <section className="py-20 px-6 bg-white">
    <div className="max-w-3xl mx-auto">
      <p className="text-center text-xs font-semibold tracking-widest text-gray-400 uppercase mb-3">Our Methodology</p>
      <h2 className="text-center text-3xl sm:text-4xl font-bold text-gray-900 mb-3">How We Build the Guide</h2>
      <p className="text-center text-gray-500 text-sm mb-12 max-w-lg mx-auto">
        We combine trends in recruiting experience with data sources to create benchmarks that are thoroughly understood from a practitioner's lens.
      </p>
      <div className="flex flex-col gap-6">
        {steps.map((s) => (
          <div key={s.num} className="flex items-start gap-5 p-6 rounded-2xl bg-gray-50 border border-gray-100">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm flex-shrink-0 ${s.color}`}>
              {s.num}
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-center text-gray-400 text-sm mt-10">
        Have a question? Reach us at{" "}
        <a href="mailto:support@salaryguide.com" className="text-emerald-600 hover:underline">
          support@salaryguide.com
        </a>
      </p>
    </div>
  </section>
);

// ─── Final CTA ────────────────────────────────────────────────────────────────
const FinalCTA = () => (
  <section className="py-20 px-6" style={{ backgroundColor: "#0a2e1e" }}>
    <div className="max-w-2xl mx-auto text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
        Ready to take the next step in your marketing career?
      </h2>
      <p className="text-green-200 text-sm mb-8 opacity-80">
        Join thousands of marketers using SalaryGuide to find better opportunities, benchmark their compensation, and advance their careers.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <button className="px-6 py-3 rounded-xl text-white font-semibold text-sm transition-all hover:opacity-90" style={{ backgroundColor: "#16a34a" }}>
          Browse Info
        </button>
        <button className="px-6 py-3 rounded-xl text-white font-semibold text-sm border border-white border-opacity-30 hover:bg-white hover:text-gray-900 transition-all">
          Share the Salary
        </button>
      </div>
    </div>
  </section>
);

// ─── Main Export ──────────────────────────────────────────────────────────────
export default function AboutPage() {
  return (
    <main className="font-sans">
      <HeroSection />
      <MediaSection />
      <BuiltByRecruiters />
      <ThoughtLeadership />
      <WhyMarketers />
      <Founders />
      <EverythingYouNeed />
      <HowWeBuild />
      <FinalCTA />
    </main>
  );
}