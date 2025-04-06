import { ProjectCard } from "../components/projectCard";
import { PROJECTS } from "../mock/projects";

export function Projects() {
  return (
    <>
      <div className="bg-[#F9F9F9] dark:bg-[#0F0F0F] transition-colors pt-[6rem]">
        <ul className="grid grid-cols-1 gap-14 py-[7rem] max-w-5xl mx-auto px-10 md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-2">
          {PROJECTS.map((project) => { 
            return (
              <ProjectCard
                key={project.idProject}
                title={project.title}
                description={project.description}
                imgURL={project.imgURL}
                techIcons={project.techIcons}
                repoLink={project.repoLink}
                sourceLink={project.sourceLink}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
}
