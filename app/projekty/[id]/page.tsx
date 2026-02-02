import MainPage from "@/components/layout/Pages/MainPage";
import SectionDescription from "@/components/layout/Texts/SectionDescription";
import SectionHeader from "@/components/layout/Texts/SectionHeader";
import ProjectInfoBox from "@/components/Projects/ProjectInfoBox";
import { Highlighter } from "@/components/ui/highlighter";
import { projects } from "@/const/projects";
import { GitHubIcon } from "@/icons/devIcons";
import { LinkIcon } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";

const ProjectDetail = async ({ params }: { params: { id: string } }) => {
    const { id } = await params;
    const project = projects.find((project) => project.id === id);
    if (!project) {
        notFound();
    }

    const { name, description, challenges, todos, image, linkWebsite, linkGithub } = project;

    return (
        <MainPage>
            <section className="relative flex flex-col gap-4 items-center justify-center min-h-dvh">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col justify-between gap-4">
                        <div className="flex flex-col gap-4 w-fit">
                            <div className="w-fit mx-auto">
                                <Highlighter action="underline" isView={true}>
                                    <SectionHeader text={name} animateOnMount />
                                </Highlighter>
                            </div>
                            <SectionDescription text={description} className="text-justify" animateOnMount />
                        </div>
                        <div className="flex gap-4 items-center">
                            <a
                                href={linkWebsite}
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Website"
                                aria-label="Website"
                                className="hover:scale-120 transition-all duration-300"
                            >
                                <LinkIcon width={36} />
                            </a>
                            <a
                                href={linkGithub}
                                target="_blank"
                                rel="noopener noreferrer"
                                title="GitHub"
                                aria-label="GitHub"
                                className="hover:scale-120 transition-all duration-300"
                            >
                                <GitHubIcon width={36} />
                            </a>
                        </div>
                    </div>
                    <Image
                        src={image}
                        alt={name}
                        width={500}
                        height={500}
                        className="hover:scale-105 transition-all duration-300 border rounded-md justify-self-end"
                    />
                </div>
                <div className="w-full flex gap-6 flex-col md:flex-row">
                    <ProjectInfoBox title="Challenges" items={challenges} variant="challenges" />
                    <ProjectInfoBox title="To Do" items={todos} variant="todos" />
                </div>
            </section>
        </MainPage>
    )
}

export default ProjectDetail