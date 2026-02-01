import AboutMeSection from "@/components/LandingPage.tsx/AboutMeSection";
import MainSection from "@/components/LandingPage.tsx/MainSection";
import SkillsSection from "@/components/LandingPage.tsx/SkillsSection";
import TestimonialSection from "@/components/LandingPage.tsx/TestimonialSection";

export default function Home() {
  return (
    <main>
      <div className="w-full max-w-7xl mx-auto flex flex-col">
        <MainSection />
        <AboutMeSection />
        <SkillsSection />
        <TestimonialSection />
      </div>
    </main>
  );
}
