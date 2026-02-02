import MainPage from "@/components/layout/Pages/MainPage"
import ProjectCard from "@/components/Projects/ProjectCard"
import ProjectsIntro from "@/components/Projects/ProjectsIntro"
import { projects } from "@/const/projects"

export const metadata = {
  title: "Projekty",
  description:
    "Projekty, které jsem vytvořil během posledních pár týdnů, ve kterých jsem chtěl vyzkoušet co nejvíce ze světa Next.js.",
}

const Projects = () => {

    return (
        <MainPage>
            <ProjectsIntro />
            <section className="relative px-4">
                {projects.map((project, index) => (
                    <ProjectCard key={project.id} index={index} project={project} />
                ))}
                <div className="h-[400px]" />
            </section>
        </MainPage>
    )
}

export default Projects