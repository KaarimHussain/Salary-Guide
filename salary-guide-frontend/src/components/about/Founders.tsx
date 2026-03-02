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

export default Founders;
