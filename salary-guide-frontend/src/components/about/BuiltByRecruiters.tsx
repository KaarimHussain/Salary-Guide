import { Briefcase, BarChart2, Target, Wrench } from "lucide-react";

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

export default BuiltByRecruiters;
