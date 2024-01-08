import { ProjectsCards } from "./ProjectsCards"

export const ProjectsList = () => {
    return(
        <div>
            <h3> Meus Projetos</h3>
            <ul>
                <ProjectsCards />
                <ProjectsCards />
                <ProjectsCards />
            </ul>
        </div>
    )
}