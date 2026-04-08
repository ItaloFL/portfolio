import { ArrowSquareOut, GithubLogo } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { RevealOnScroll } from "./revealOnScroll";
import { Project } from "../mock/projects";

interface ProjectCardProps extends Omit<Project, "idProject"> {
  index: number;
}

export function ProjectCard({
  index,
  title,
  tag,
  description,
  imgURL,
  techIcons,
  repoLink,
  sourceLink,
}: ProjectCardProps) {
  const indexLabel = String(index).padStart(2, "0");

  return (
    <RevealOnScroll>
      <article className="group flex flex-col h-full border border-border-color dark:border-border-color-dark rounded-xl overflow-hidden bg-contrast-color dark:bg-contrast-color-dark transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <div className="relative overflow-hidden aspect-video">
          <img
            src={imgURL}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
            {repoLink ? (
              <Link
                to={repoLink}
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium hover:bg-white/20 transition-colors"
              >
                <GithubLogo size={16} />
                Repositório
              </Link>
            ) : (
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white/40 text-sm font-medium cursor-not-allowed select-none">
                <GithubLogo size={16} className="opacity-40" />
                Privado
              </div>
            )}
            <Link
              to={sourceLink}
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary-color dark:bg-primary-color text-white text-sm font-medium hover:opacity-90 transition-opacity"
            >
              <ArrowSquareOut size={16} />
              Ver site
            </Link>
          </div>

          {tag && (
            <span className="absolute top-3 left-3 text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm text-white border border-white/10">
              {tag}
            </span>
          )}
        </div>

        <div className="flex flex-col flex-1 p-5 gap-3">
          <div className="flex items-start justify-between gap-2">
            <h2 className="text-lg font-bold text-title-color dark:text-title-color-dark leading-tight">
              {title}
            </h2>
            <span className="text-xs font-mono text-second-color dark:text-second-color-dark opacity-50 mt-1 shrink-0">
              {indexLabel}
            </span>
          </div>

          <p className="text-sm text-second-color dark:text-second-color-dark leading-relaxed flex-1">
            {description}
          </p>

          <hr className="border-border-color dark:border-border-color-dark" />

          <ul className="flex items-center gap-2 flex-wrap">
            {techIcons.map((icon: string, i: number) => (
              <li
                key={i}
                className="p-1.5 rounded-lg border border-border-color dark:border-border-color-dark bg-[#F9F9F9] dark:bg-[#1a1a1a] transition-colors hover:border-primary-color dark:hover:border-primary-color-dark"
                title={icon}
              >
                <img src={icon} className="w-5 h-5 object-contain" alt="" />
              </li>
            ))}
          </ul>
        </div>
      </article>
    </RevealOnScroll>
  );
}
