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

export default FinalCTA;
