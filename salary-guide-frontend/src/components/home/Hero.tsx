import { Link } from "react-router-dom";
import BgImage from "@/assets/images/Hero-Landing.png";

export default function Hero() {
    return (
        <>
            <div
                className="min-h-screen w-full flex flex-col items-center justify-center pt-25  relative overflow-hidden"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.35)), url(${BgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="flex flex-col items-center text-center max-w-[900px] mx-auto z-10 mt-[-5vh] px-4">
                    <h1 className="text-4xl md:text-5xl lg:text-[60px] font-bold text-white tracking-tight leading-[1.1] mb-5 drop-shadow-md">
                        The Career Intelligence Platform<br />for Marketers
                    </h1>

                    <p className="text-[17px] md:text-[19px] text-white/95 font-medium max-w-2xl drop-shadow-md mb-9">
                        Find jobs, benchmark salaries, and evaluate companies with real market data.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 mb-5">
                        <button className="px-8 py-3 bg-[#00b87c] hover:bg-[#00a36e] text-white text-[15px] font-semibold rounded-[8px] transition-all shadow-lg hover:-translate-y-0.5 w-full sm:w-auto">
                            Find Jobs
                        </button>
                        <button className="px-8 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white text-[15px] font-semibold rounded-[8px] transition-all shadow-lg hover:-translate-y-0.5 w-full sm:w-auto">
                            See Salary Benchmarks
                        </button>
                    </div>

                    <Link to="/companies" className="text-white/90 hover:text-white font-medium text-[14px] underline underline-offset-4 decoration-white/40 hover:decoration-white transition-colors drop-shadow-md">
                        Explore Companies
                    </Link>
                </div>

                {/* Trusted Companies Section */}
                <div className=" flex flex-col items-center w-full z-10 px-4">
                    <p className="text-white/80 text-[13px] font-medium mb-7 tracking-wide drop-shadow-md">
                        Trusted data from marketers at
                    </p>

                    <div className="flex flex-wrap justify-center items-center gap-10 md:gap-14 opacity-90">
                        {/* Google */}
                        <div className="text-white font-medium text-2xl tracking-tight font-sans">
                            Google
                        </div>

                        {/* Amazon */}
                        <div className="text-white font-bold text-2xl tracking-tighter lowercase">
                            amazon
                        </div>

                        {/* Netflix */}
                        <div className="text-[#E50914] font-bold text-2xl tracking-wider uppercase scale-y-110 drop-shadow-sm">
                            NETFLIX
                        </div>

                        {/* Airbnb */}
                        <div className="flex items-center gap-2 text-white font-bold text-[22px] tracking-tight lowercase">
                            <svg viewBox="0 0 32 32" fill="currentColor" className="w-[30px] h-[30px]"><path d="M16 1.43c-1.12 0-2.31.5-3.75 1.54C6.51 7.14 1.7 13.92 1.7 19.34c0 4.8 3.65 8.7 8.35 8.7 2.45 0 4.7-1.14 6-2.91 1.29 1.77 3.55 2.91 6 2.91 4.7 0 8.35-3.9 8.35-8.7 0-5.42-4.81-12.2-10.55-16.37C18.31 1.93 17.12 1.43 16 1.43zm0 3.2c.79 0 1.68.39 2.82 1.2C23.63 9.32 27.6 15.1 27.6 19.34c0 3.39-2.36 6.13-5.55 6.13-1.92 0-3.6-1.1-4.48-2.73l-.68-1.2h4.52l-.46-1.16H14.1l-.46 1.16h4.52l-.68 1.2c-.88 1.63-2.56 2.73-4.48 2.73-3.19 0-5.55-2.74-5.55-6.13 0-4.24 3.97-10.02 8.78-13.511.14-.81 2.03-1.2 2.82-1.2zm0 13l2.25 4.31a6.62 6.62 0 01-4.5 0L16 17.63z" /></svg>
                            airbnb
                        </div>

                        {/* IBM */}
                        <div className="text-white font-bold text-[28px] tracking-widest uppercase">
                            IBM
                        </div>

                        {/* Shopify */}
                        <div className="flex items-center gap-2 text-white font-bold text-[22px] tracking-tight lowercase">
                            <svg viewBox="0 0 24 24" fill="#95BF47" className="w-8 h-8"><path d="M21.2 6.6C21.1 6.3 20.8 6.1 20.5 6L14.7 4.1C14.7 4.1 14.7 4.1 14.6 4.1L8.9 2.2C8.6 2.1 8.2 2.1 7.9 2.3L2.3 5.4C2.1 5.5 2 5.8 2 6L2 14.4C2 14.6 2.1 14.9 2.3 15L8 18.2C8.1 18.3 8.3 18.3 8.5 18.2L14.2 15C14.4 14.9 14.5 14.6 14.5 14.4L14.5 6.1L20.2 8C20.5 8.1 20.9 8.1 21.2 7.9C21.4 7.7 21.5 7.4 21.5 7.2L21.5 7C21.5 6.8 21.4 6.7 21.2 6.6Z" /></svg>
                            shopify
                        </div>
                    </div>
                </div>


            </div>
            {/* Stats Count */}
            <div className="bg-linear-to-b from-[#06180F] to-[#06180F] w-full py-15 px-4">
                <div className="max-w-[1000px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-8 sm:gap-4">
                    <div className="flex flex-col items-center text-center">
                        <span className="text-white font-bold text-4xl sm:text-[42px] tracking-tight mb-1">15,000+</span>
                        <span className="text-white/60 text-[13px] font-medium tracking-wide">Salary Submissions</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <span className="text-white font-bold text-4xl sm:text-[42px] tracking-tight mb-1">100,000+</span>
                        <span className="text-white/60 text-[13px] font-medium tracking-wide">Marketing Jobs</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <span className="text-white font-bold text-4xl sm:text-[42px] tracking-tight mb-1">75,000+</span>
                        <span className="text-white/60 text-[13px] font-medium tracking-wide">Companies Tracked</span>
                    </div>
                </div>
            </div>
        </>
    )
}