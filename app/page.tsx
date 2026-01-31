import ScrollDown from "@/components/common/ScrollDown";
import SectionDescription from "@/components/layout/Texts/SectionDescription";
import SectionHeader from "@/components/layout/Texts/SectionHeader";

export default function Home() {
  return (
    <main>
      <div className="w-full h-dvh max-w-7xl mx-auto flex">
        <section className="w-full flex flex-col justify-center">
          <div className="text-center flex flex-col">
            <SectionHeader text="Web plný (WOW), a nebo spíš (WTF)?" />
            <SectionDescription text="Pojďme to zjistit" />
            <ScrollDown />
          </div>
        </section>
      </div>
    </main>
  );
}
