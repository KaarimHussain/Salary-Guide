import Hero from "@/components/home/Hero";
import HeroSection from "@/components/home/job";
import SalaryGuidePro from "@/components/home/guidepro";
import Blog from "@/components/home/blog";
import Worth from "@/components/home/worth";

export default function Home() {
    return (
        <>
            <Hero />
            <HeroSection />
            <SalaryGuidePro />
            <Blog />
            <Worth />
        </>
    )
}