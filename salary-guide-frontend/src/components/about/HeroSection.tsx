import { ArrowRight } from "lucide-react";

const HeroSection = () => (
    <section className="min-h-screen relative bg-white pt-25 pb-20 px-6 text-center overflow-hidden flex items-center justify-center">
        {/* Subtle green tint top bar */}
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

export default HeroSection;
