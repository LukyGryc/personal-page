import MainPage from "@/components/layout/Pages/MainPage"
import ProjectCard from "@/components/Projects/ProjectCard"
import ProjectsIntro from "@/components/Projects/ProjectsIntro"
import { projects } from "@/const/projects"


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