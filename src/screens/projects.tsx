import { ProjectCard } from "../components/projectCard";
import { PROJECTS } from "../mock/projects";

export function Projects() {
  return (
    <div className="bg-[#F9F9F9] dark:bg-[#0F0F0F] transition-colors min-h-screen pt-[6rem]">
      <div className="max-w-5xl mx-auto px-10 py-[5rem]">
        <div className="mb-14">
          <p className="text-xs font-mono uppercase tracking-widest text-second-color dark:text-second-color-dark opacity-60 mb-3">
            — seleção de trabalhos
          </p>
          <h1 className="text-4xl font-bold text-title-color dark:text-title-color-dark">
            Projetos
          </h1>
        </div>

        <ul className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <li key={project.idProject}>
              <ProjectCard
                index={index + 1}
                title={project.title}
                tag={project.tag}
                description={project.description}
                imgURL={project.imgURL}
                techIcons={project.techIcons}
                repoLink={project.repoLink}
                sourceLink={project.sourceLink}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
