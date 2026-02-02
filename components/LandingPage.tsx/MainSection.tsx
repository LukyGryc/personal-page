import ScrollDown from "@/components/common/ScrollDown"
import SectionDescription from "../layout/Texts/SectionDescription"
import SectionHeader from "../layout/Texts/SectionHeader"
import Section from "../layout/Pages/Section"


const MainSection = () => {
    return (
        <Section className="flex flex-col justify-center min-h-dvh">
            <div className="text-center flex flex-col gap-4">
                <SectionHeader text="Jsem (WOW), a nebo spíš (WTF)? 👀" animateOnMount level={1} />
                <SectionDescription text="Pojďme to zjistit" animateOnMount />
                <ScrollDown />
            </div>
        </Section>
    )
}

export default MainSection