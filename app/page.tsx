import AboutMeSection from "@/components/LandingPage.tsx/AboutMeSection";
import MainSection from "@/components/LandingPage.tsx/MainSection";

export default function Home() {
  return (
    <main>
      <div className="w-full max-w-7xl mx-auto flex flex-col">
        <MainSection />
        <AboutMeSection />
      </div>
    </main>
  );
}
