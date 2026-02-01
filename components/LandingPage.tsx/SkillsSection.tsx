"use client"
import { DevIcons } from "@/icons/devIcons";
import SectionHeader from "../layout/Texts/SectionHeader";
import SkillsCard from "../ui/SkillsCard";
import Section from "../layout/Pages/Section";
import { Highlighter } from "../ui/highlighter";

const workedWithItems = [
    { name: "React", Icon: DevIcons.React },
    { name: "TypeScript", Icon: DevIcons.Typescript },
    { name: "Ant Design", Icon: DevIcons.Ant },
    { name: "Echarts", Icon: DevIcons.Echarts },
    { name: "GitHub", Icon: DevIcons.Github },
]

const learningItems = [
    { name: "Next.js", Icon: DevIcons.Next },
    { name: "Tailwind CSS", Icon: DevIcons.Tailwind },
    { name: "Drizzle", Icon: DevIcons.Drizzle },
    { name: "React Hook Form", Icon: DevIcons.ReactHookForm },
    { name: "Zod", Icon: DevIcons.Zod },
    { name: "Motion", Icon: DevIcons.Motion }
]

const toLearn = [
    { name: "Docker", Icon: DevIcons.Docker },
    { name: "Payload CMS", Icon: DevIcons.Payload },
    { name: "Testing", Icon: DevIcons.Testing },
    { name: "UI/UX", Icon: DevIcons.UIUX },
]

const SkillsSection = () => {
    return (
        <Section className="flex flex-col gap-10 text-start justify-center py-16">
            <SectionHeader text="Skills" className="justify-start" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <SkillsCard title="Pracuji s" items={workedWithItems} />
                <SkillsCard title="Učím se" items={learningItems} />
                <SkillsCard title="Další v pořadí" items={toLearn} />
            </div>
            <div className="text-center">
                <span className="w-fit opacity-5 hover:opacity-100 transition-all duration-300">
                    <Highlighter
                        action="underline"
                        isView={true}
                    >
                        A taky prej umím dobrý kakaíčko
                    </Highlighter>
                </span>
            </div>
        </Section>
    )
}

export default SkillsSection;