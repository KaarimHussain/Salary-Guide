import Hero from "@/components/home/Hero";
import HeroSection from "@/components/home/job";
import SalaryExplorer from "@/components/home/salary";
import SalaryReportCTA from "@/components/home/report";
import LatestMarketingJobs from "@/components/home/marketing";
import ChromeExtensionPromo from "@/components/home/applying";
import SalaryGuidePro from "@/components/home/guidepro";
import Blog from "@/components/home/blog";
import Worth from "@/components/home/worth";

export default function Home() {
    return (
        <>
            <Hero  />
            <HeroSection />
            <SalaryExplorer />
            <SalaryReportCTA />
            <LatestMarketingJobs />
            <ChromeExtensionPromo />
            <SalaryGuidePro />
            <Blog />
            <Worth />
        </>
    )
}