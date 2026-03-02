import { useState } from "react";
import { Link } from "react-router-dom";
import { Gem, Menu, X } from "lucide-react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div className="fixed top-6 left-0 right-0 z-50 flex flex-col items-center px-4">
            <nav className="flex items-center justify-between w-full max-w-[1000px] px-3 py-2.5 bg-[#143B2A]/90 backdrop-blur-md rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/10">

                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 pl-3">
                    {/* Logo icon (green bars) */}
                    <div className="flex items-end gap-[3px] h-[20px] pb-px">
                        <div className="w-[4px] h-[10px] bg-[#00b87c] rounded-[1px]" />
                        <div className="w-[4px] h-[15px] bg-[#00b87c] rounded-[1px]" />
                        <div className="w-[4px] h-[20px] bg-[#00b87c] rounded-[1px]" />
                    </div>
                    <span className="text-white font-semibold text-[17px] tracking-tight">SalaryGuide</span>
                </Link>

                {/* Links */}
                <div className="hidden md:flex items-center gap-7">
                    <Link to="/companies" className="text-white/80 hover:text-white transition-colors text-[14px] font-medium">Companies</Link>
                    <Link to="/salaries" className="text-white/80 hover:text-white transition-colors text-[14px] font-medium">Salaries</Link>
                    <Link to="/jobs" className="text-white/80 hover:text-white transition-colors text-[14px] font-medium">Jobs</Link>
                    <Link to="/tools" className="text-white/80 hover:text-white transition-colors text-[14px] font-medium">Tools</Link>
                    <Link to="/about" className="text-white/80 hover:text-white transition-colors text-[14px] font-medium">About</Link>

                    <Link to="/pro" className="flex items-center gap-1.5 text-white/80 hover:text-white transition-colors text-[14px] font-medium ml-1">
                        <Gem className="w-[14px] h-[14px] text-[#FBBF24] fill-[#FBBF24]" />
                        SalaryGuide Pro
                    </Link>
                </div>

                {/* Actions */}
                <div className="hidden md:flex items-center gap-3 pr-1">
                    <Link to="/signin" className="px-5 py-2 text-[14px] font-medium text-white bg-white/10 hover:bg-white/15 border border-white/10 hover:border-white/20 rounded-[8px] transition-all">
                        Sign in
                    </Link>
                    <Link to="/signup" className="px-5 py-2 text-[14px] font-medium text-white bg-[#00b87c] hover:bg-[#00a36e] rounded-[8px] transition-all border border-transparent shadow-sm shadow-[#00b87c]/20">
                        Sign up
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-white/80 hover:text-white transition-colors"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile Drawer */}
            {isMenuOpen && (
                <div className="md:hidden w-full max-w-[1000px] mt-4 bg-[#143B2A]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-5 flex flex-col gap-4 shadow-2xl animate-in slide-in-from-top-4 fade-in-20 duration-200">
                    <div className="flex flex-col gap-1">
                        <Link to="/companies" onClick={() => setIsMenuOpen(false)} className="text-white/90 hover:text-white text-[16px] font-medium py-3 px-2 border-b border-white/5">Companies</Link>
                        <Link to="/salaries" onClick={() => setIsMenuOpen(false)} className="text-white/90 hover:text-white text-[16px] font-medium py-3 px-2 border-b border-white/5">Salaries</Link>
                        <Link to="/jobs" onClick={() => setIsMenuOpen(false)} className="text-white/90 hover:text-white text-[16px] font-medium py-3 px-2 border-b border-white/5">Jobs</Link>
                        <Link to="/tools" onClick={() => setIsMenuOpen(false)} className="text-white/90 hover:text-white text-[16px] font-medium py-3 px-2 border-b border-white/5">Tools</Link>
                        <Link to="/about" onClick={() => setIsMenuOpen(false)} className="text-white/90 hover:text-white text-[16px] font-medium py-3 px-2 border-b border-white/5">About</Link>
                        <Link to="/pro" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2 text-white/90 hover:text-white text-[16px] font-medium py-3 px-2 border-b border-white/5">
                            <Gem className="w-[16px] h-[16px] text-[#FBBF24] fill-[#FBBF24]" />
                            SalaryGuide Pro
                        </Link>
                    </div>

                    <div className="flex flex-col gap-3 mt-2">
                        <Link to="/signin" onClick={() => setIsMenuOpen(false)} className="w-full text-center px-5 py-3 text-[15px] font-medium text-white bg-white/10 hover:bg-white/15 border border-white/10 rounded-[8px] transition-all">
                            Sign in
                        </Link>
                        <Link to="/signup" onClick={() => setIsMenuOpen(false)} className="w-full text-center px-5 py-3 text-[15px] font-medium text-white bg-[#00b87c] hover:bg-[#00a36e] rounded-[8px] transition-all">
                            Sign up
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}