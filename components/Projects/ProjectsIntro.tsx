"use client";
import ScrollDown from "../common/ScrollDown"
import Section from "../layout/Pages/Section"
import SectionDescription from "../layout/Texts/SectionDescription"
import SectionHeader from "../layout/Texts/SectionHeader"
const ProjectsIntro = () => {

    return (
        <Section className="flex flex-col items-center justify-center min-h-[50vh]">
            <SectionHeader text="Projekty" animateOnMount />
            <SectionDescription text="Projekty, které jsem vytvořil během posledních pár týdnů, ve kterých jsem chtěl vyzkoušet co nejvíce ze světa Next.js" animateOnMount />
            <ScrollDown />
        </Section>
    )
}

export default ProjectsIntro