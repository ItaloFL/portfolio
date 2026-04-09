import { RevealOnScroll } from "@/components/revealOnScroll";
import { EXPERIENCES } from "@/mock/experience";
import { CheckCircle } from "@phosphor-icons/react";

export interface Experience {
  id: number;
  company: string;
  type: string;
  role: string;
  duration: string;
  period: string;
  description: string;
  highlights: string[];
  techs: string[];
}

function DateBlock({
  period,
  duration,
  align,
}: {
  period: string;
  duration: string;
  align: "start" | "end";
}) {
  return (
    <div
      className={`pt-4 flex flex-col gap-1 ${
        align === "end" ? "md:items-end md:text-right" : "md:items-start"
      }`}
    >
      <p className="text-sm font-mono text-second-color dark:text-second-color-dark opacity-70">
        {period}
      </p>
      <span className="text-xs font-semibold uppercase tracking-widest text-link-hover-color">
        {duration}
      </span>
    </div>
  );
}

function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <div className="border border-border-color dark:border-border-color-dark rounded-xl p-6 bg-contrast-color dark:bg-contrast-color-dark transition-all hover:shadow-md">
      <div className="flex items-start justify-between gap-3 mb-4">
        <div>
          <h3 className="text-xl font-bold text-title-color dark:text-title-color-dark leading-tight">
            {experience.company}
            <span className="ml-2 text-sm font-normal text-second-color dark:text-second-color-dark opacity-60">
              ({experience.type})
            </span>
          </h3>
          <div className="flex items-center gap-3 mt-2">
            <span className="text-xs font-semibold px-3 py-1 rounded-full border border-link-hover-color text-link-hover-color">
              {experience.role}
            </span>
          </div>
        </div>
      </div>

      <p className="text-sm text-second-color dark:text-second-color-dark leading-relaxed mb-5">
        {experience.description}
      </p>

      <ul className="flex flex-col gap-3 mb-5">
        {experience.highlights.map((h, i) => (
          <li
            key={i}
            className="flex items-start gap-2.5 text-sm text-second-color dark:text-second-color-dark"
          >
            <CheckCircle
              size={16}
              weight="fill"
              className="text-link-hover-color mt-0.5 shrink-0"
            />
            <span className="leading-relaxed">{h}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2">
        {experience.techs.map((tech) => (
          <span
            key={tech}
            className="text-xs px-2.5 py-1 rounded-md bg-[#F0F0F0] dark:bg-[#1a1a1a] text-second-color dark:text-second-color-dark border border-border-color dark:border-border-color-dark"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

function TimelineItem({
  experience,
  index,
}: {
  experience: Experience;
  index: number;
}) {
  const isLeft = index % 2 === 0;

  return (
    <RevealOnScroll>
      <div className="md:hidden relative pl-8 mb-12">
        <div className="absolute left-0 top-1 w-3 h-3 rounded-full bg-link-hover-color border-2 border-[#F9F9F9] dark:border-[#0F0F0F] z-10" />

        <div className="mb-3">
          <p className="text-sm font-mono text-second-color dark:text-second-color-dark opacity-70">
            {experience.period}
          </p>
          <span className="text-xs font-semibold uppercase tracking-widest text-link-hover-color">
            {experience.duration}
          </span>
        </div>

        <ExperienceCard experience={experience} />
      </div>

      <div className="hidden md:grid grid-cols-[1fr_auto_1fr] gap-8 mb-16">
        <div
          className={`flex flex-col ${isLeft ? "order-1 items-end" : "order-3 items-start"}`}
        >
          <ExperienceCard experience={experience} />
        </div>

        <div className="flex flex-col items-center order-2 relative">
          <div className="w-4 h-4 rounded-full bg-link-hover-color border-4 border-[#F9F9F9] dark:border-[#0F0F0F] z-10 mt-6 shrink-0" />
          <div className="w-px flex-1 bg-border-color dark:bg-border-color-dark mt-1" />
        </div>

        <div
          className={`flex flex-col justify-start ${isLeft ? "order-3 items-start" : "order-1 items-end"}`}
        >
          <DateBlock
            period={experience.period}
            duration={experience.duration}
            align={isLeft ? "start" : "end"}
          />
        </div>
      </div>
    </RevealOnScroll>
  );
}

export function Experience() {
  return (
    <div className="bg-[#F9F9F9] dark:bg-[#0F0F0F] transition-colors min-h-screen pt-[4rem] md:pt-[6rem]">
      <div className="max-w-5xl mx-auto px-10 py-[3rem] md:py-[5rem]">
        <RevealOnScroll>
          <div className="mb-10 md:mb-20">
            <p className="text-xs font-mono uppercase tracking-widest text-second-color dark:text-second-color-dark opacity-60 mb-3">
              — trajetória profissional
            </p>
            <h1 className="text-4xl font-bold text-title-color dark:text-title-color-dark">
              Experiência
            </h1>
          </div>
        </RevealOnScroll>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-border-color dark:bg-border-color-dark" />

          <div className="md:hidden absolute left-[5px] top-0 bottom-0 w-px bg-border-color dark:bg-border-color-dark" />

          {EXPERIENCES.map((exp, index) => (
            <TimelineItem key={exp.id} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
