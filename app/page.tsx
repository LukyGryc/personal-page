import AboutMeSection from "@/components/LandingPage.tsx/AboutMeSection";
import MainSection from "@/components/LandingPage.tsx/MainSection";
import SkillsSection from "@/components/LandingPage.tsx/SkillsSection";
import MainPage from "@/components/layout/Pages/MainPage";
import PersonalInfo from "@/components/LandingPage.tsx/PersonalInfo";

export default function Home() {
  return (
    <MainPage>
      <MainSection />
      <AboutMeSection />
      <SkillsSection />
      <PersonalInfo />
      {/* <TestimonialSection /> */}
    </MainPage>
  );
}
