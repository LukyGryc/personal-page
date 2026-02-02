"use client";
import ProfileCard from "../ui/ProfileCard"
import Section from "../layout/Pages/Section"
import SectionHeader from "../layout/Texts/SectionHeader";
import SectionDescription from "../layout/Texts/SectionDescription";
import Timeline from "../ui/TimelineCards";
import Statistic from "../ui/Statistic";

const timelineItems = [
    {
        title: "SŠINFIS, Plzeň",
        description: "Studium se zaměřením na informační technologie, především sítě.",
        date: "2012 – 2016",
    },
    {
        title: "FIT ČVUT",
        description: "Krátká zkušenost s vysokoškolským studiem informatiky.",
        date: "2016 - 2017",
    },
    {
        title: "Korn Ferry",
        description: "Postupně jsem prošel několika rolemi, dnes pracuji na interní webové aplikaci v Reactu a TypeScriptu.",
        date: "2017 – dnes",
    },
]

const informationItems = [
    "Jmenuji se Lukáš Gryč, pocházím ze Sokolova a momentálně žiju v Plzni.",
    "Po studiu se zaměřením na informační technologie jsem se vydal spíš praktickou cestou.",
    "Dnes pracuju v Korn Ferry, kde se poslední 2 roky podílím na vývoji interní webové aplikace postavené na Reactu a TypeScriptu."
];

const AboutMeSection = () => {

    return (
        <Section className="flex flex-col gap-10 text-start justify-center py-16">
            <SectionHeader text="O mně" className="justify-start" />
            <div className=" flex justify-between relative flex-col lg:flex-row gap-8">
                <ProfileCard
                    className="hidden lg:block"
                    name="Lukáš Gryč"
                    title=""
                    showUserInfo={false}
                />
                <div className="w-full lg:w-1/2 flex flex-col gap-6 text-justify">
                    {informationItems.map((item, index) => (
                        //Index is used as key because the items are static and not changing
                        <SectionDescription key={index} text={item} />
                    ))}
                    <Timeline items={timelineItems} className="flex flex-col gap-4 md:flex-row"/>
                    {/*<div className="grid grid-cols-2 gap-4">
                        <Statistic title="Věk" value={28} />
                        <Statistic title="IQ" value={90} addPlus={true} description="(snad)" />
                    </div>*/}
                </div>

            </div>
        </Section>
    )
}

export default AboutMeSection