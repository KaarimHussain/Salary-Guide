import { Link } from "react-router-dom";
import { Brain } from "lucide-react";
import BgImage from "@/assets/images/Hero-Landing.png";

import AmazonLogo from "@/assets/images/logos/Amazon.svg";
import TiktokShopLogo from "@/assets/images/logos/Tiktok-Shop.svg";
import GoogleLogo from "@/assets/images/logos/google-wordmark.svg";
import MetaLogo from "@/assets/images/logos/meta.svg";
import ShopifyLogo from "@/assets/images/logos/Shopify.svg";
import { Button } from "../ui/button";

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
                        <Button className="cursor-pointer px-8 h-10 bg-primary hover:bg-secondary text-white text-[15px] font-semibold rounded-[8px] transition-all shadow-lg hover:-translate-y-0.5 w-full sm:w-auto">
                            Free Audit
                        </Button>

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

                    <div className="flex flex-wrap justify-center items-center gap-10 md:gap-14">
                        <img src={GoogleLogo} alt="Google" className="h-8 md:h-10 object-contain transition-all duration-500 hover:rotate-360" />
                        <img src={AmazonLogo} alt="Amazon" className="h-8 md:h-10 object-contain transition-all duration-500 hover:rotate-360" />
                        <img src={MetaLogo} alt="Meta" className="h-7 md:h-9 object-contain transition-all duration-500 hover:rotate-360" />
                        <img src={TiktokShopLogo} alt="TikTok Shop" className="h-8 md:h-10 object-contain transition-all duration-500 hover:rotate-360" />
                        <img src={ShopifyLogo} alt="Shopify" className="h-8 md:h-10 object-contain transition-all duration-500 hover:rotate-360" />

                        {/* AI Service Logo */}
                        <div className="flex items-center gap-2 text-white font-bold text-xl md:text-2xl tracking-tight transition-all duration-500 hover:rotate-360">
                            <Brain className="w-8 h-8 md:w-9 md:h-9" />
                            <span>AI Service</span>
                        </div>
                    </div>
                </div>


            </div>
            {/* Stats Count */}
            <div className="bg-background border-t border-border w-full py-15 px-4">
                <div className="max-w-[1000px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-8 sm:gap-4">
                    <div className="flex flex-col items-center text-center">
                        <span className="text-foreground font-bold text-4xl sm:text-[42px] tracking-tight mb-1">15,000+</span>
                        <span className="text-muted-foreground text-[13px] font-medium tracking-wide">Salary Submissions</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <span className="text-foreground font-bold text-4xl sm:text-[42px] tracking-tight mb-1">100,000+</span>
                        <span className="text-muted-foreground text-[13px] font-medium tracking-wide">Marketing Jobs</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <span className="text-foreground font-bold text-4xl sm:text-[42px] tracking-tight mb-1">75,000+</span>
                        <span className="text-muted-foreground text-[13px] font-medium tracking-wide">Companies Tracked</span>
                    </div>
                </div>
            </div>
        </>
    )
}