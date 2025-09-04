import { ArrowSquareIn, GithubLogo } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { RevealOnScroll } from "./revealOnScroll";

interface ProjectCardProps {
  key: number;
  title: string;
  description: string;
  imgURL: string;
  sourceLink: string;
  repoLink: string;
  techIcons: string[];
}

export function ProjectCard({
  title,
  description,
  imgURL,
  techIcons,
  repoLink,
  sourceLink,
}: ProjectCardProps) {
  return (
    <div>
      <RevealOnScroll>
        <div className="relative w-full h-[250px] rounded-md overflow-hidden group transition-colors">
          <img
            src={imgURL}
            className="w-full object-cover transition-all group-hover:grayscale"
            alt=""
          />
          <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10">
            <Link to={repoLink} target="_blank">
              <GithubLogo className="w-9 h-9 cursor-pointer transition-colors text-primary-color p-1 rounded-full bg-contrast-color border border-border-color hover:dark:bg-black hover:bg-border-color dark:text-primary-color-dark dark:bg-[#303030]" />
            </Link>
            <Link to={sourceLink} target="_blank">
              <ArrowSquareIn className="w-9 h-9 cursor-pointer transition-colors text-primary-color p-1 rounded-full bg-contrast-color border border-border-color hover:dark:bg-black hover:bg-border-color dark:text-primary-color-dark dark:bg-[#303030]" />
            </Link>
          </div>
        </div>
        <h1 className="text-xl text-title-color font-semibold mb-2 mt-4 dark:text-title-color-dark">
          {title}
        </h1>
        <p className=" text-second-color dark:text-second-color-dark">
          {description}
        </p>
        <div className="mt-4">
          <ul className="flex items-center gap-4">
            {techIcons.map((TechIcon: any, index: number) => {
              return (
                <li
                  key={`icon-${index}`}
                  className="border border-teste-border rounded-full p-2"
                >
                  <img src={TechIcon} className="size-7" />
                </li>
              );
            })}
          </ul>
        </div>
      </RevealOnScroll>
    </div>
  );
}
