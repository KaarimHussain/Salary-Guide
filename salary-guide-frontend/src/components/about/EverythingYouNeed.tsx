import { Briefcase, TrendingUp } from "lucide-react";

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

export default EverythingYouNeed;
