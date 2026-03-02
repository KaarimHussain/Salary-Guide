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

export default MediaSection;
