import ScrollDown from "@/components/common/ScrollDown"
import SectionDescription from "../layout/Texts/SectionDescription"
import SectionHeader from "../layout/Texts/SectionHeader"
import Section from "../layout/Pages/Section"


const MainSection = () => {
    return (
        <Section className="flex flex-col justify-center min-h-dvh">
            <div className="text-center flex flex-col">
                <SectionHeader text="Web plný (WOW), a nebo spíš (WTF)? 👀" animateOnMount />
                <SectionDescription text="Pojďme to zjistit" animateOnMount />
                <ScrollDown />
            </div>
        </Section>
    )
}

export default MainSection