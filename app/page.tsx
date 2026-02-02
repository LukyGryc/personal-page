import AboutMeSection from "@/components/LandingPage.tsx/AboutMeSection";
import MainSection from "@/components/LandingPage.tsx/MainSection";
import SkillsSection from "@/components/LandingPage.tsx/SkillsSection";
import TestimonialSection from "@/components/LandingPage.tsx/TestimonialSection";
import MainPage from "@/components/layout/Pages/MainPage";

export default function Home() {
  return (
    <MainPage>
      <MainSection />
      <AboutMeSection />
      <SkillsSection />
      <TestimonialSection />
    </MainPage>
  );
}
