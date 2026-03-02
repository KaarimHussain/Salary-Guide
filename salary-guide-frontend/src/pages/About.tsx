import HeroSection from "../components/about/HeroSection";
import MediaSection from "../components/about/MediaSection";
import BuiltByRecruiters from "../components/about/BuiltByRecruiters";
import ThoughtLeadership from "../components/about/ThoughtLeadership";
import WhyMarketers from "../components/about/WhyMarketers";
import Founders from "../components/about/Founders";
import EverythingYouNeed from "../components/about/EverythingYouNeed";
import HowWeBuild from "../components/about/HowWeBuild";
import FinalCTA from "../components/about/FinalCTA";

export default function AboutPage() {
  return (
    <main className="font-sans">
      <HeroSection />
      <MediaSection />
      <BuiltByRecruiters />
      <ThoughtLeadership />
      <WhyMarketers />
      <Founders />
      <EverythingYouNeed />
      <HowWeBuild />
      <FinalCTA />
    </main>
  );
}