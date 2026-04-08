import AboutIMG from "../assets/img-about.jpg";
import Figma from "../assets/knowlege-logo/Figma.svg";
import VScode from "../assets/knowlege-logo/Vscode.svg";
import Notion from "../assets/knowlege-logo/Notion.svg";
import Insomnia from "../assets/knowlege-logo/Insomnia.svg";
import Docker from "../assets/knowlege-logo/Docker.svg";
import Nodejs from "../assets/knowlege-logo/NodeJS.svg";
import Git from "../assets/knowlege-logo/Git.svg";
import PrismaORM from "../assets/knowlege-logo/PrismaORM.svg";
import TailwindCSS from "../assets/knowlege-logo/TailwindCSS.svg";
import ReactLogo from "../assets/knowlege-logo/React.svg"; // ✅ renomeado para não conflitar com React do framework
import Typescript from "../assets/knowlege-logo/TypeScript.svg";
import Zod from "../assets/knowlege-logo/Zod.svg";
import Redis from "../assets/knowlege-logo/Redis.svg";
import ReactQuery from "../assets/knowlege-logo/ReactQuery.svg";
import curriculum from "../assets/curriculo.pdf";
import { RevealOnScroll } from "@/components/revealOnScroll";
import { FileDown, ArrowRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const tools = [
  { src: Figma, name: "Figma", category: "Design" },
  { src: VScode, name: "VSCode", category: "Desenvolvimento" },
  { src: Notion, name: "Notion", category: "Documentação" },
  { src: Insomnia, name: "Insomnia", category: "Desenvolvimento" },
];

const knowledgeGroups = [
  {
    label: "Sólido",
    description: "Uso no dia a dia, me sinto confortável em produção",
    items: [
      { src: ReactLogo, name: "ReactJS", category: "Front-end" },
      { src: Nodejs, name: "NodeJS", category: "Back-end" },
      { src: Typescript, name: "TypeScript", category: "Desenvolvimento" },
      { src: TailwindCSS, name: "TailwindCSS", category: "Front-end" },
      { src: Git, name: "Git", category: "Controle de versão" },
    ],
  },
  {
    label: "Experiência",
    description: "Projetos reais, conhecimento aplicado",
    items: [
      { src: PrismaORM, name: "PrismaORM", category: "Back-end" },
      {
        src: ReactQuery,
        name: "React Query Tanstack",
        category: "Desenvolvimento",
      },
      { src: Zod, name: "Zod", category: "Desenvolvimento" },
      { src: Docker, name: "Docker", category: "Back-end" },
    ],
  },
  {
    label: "Explorando",
    description: "Estudando e aplicando em projetos pessoais",
    items: [{ src: Redis, name: "Redis", category: "Cache" }],
  },
];

export function About() {
  return (
    <div className="bg-[#F9F9F9] min-h-screen dark:bg-[#0F0F0F] pt-[10rem]">
      <div className="flex flex-col justify-center max-w-5xl mx-auto px-10">
        <RevealOnScroll>
          <div className="mb-16">
            <p className="text-xs font-mono uppercase tracking-widest text-second-color dark:text-second-color-dark opacity-60 mb-3">
              — quem sou eu
            </p>
            <h1 className="text-4xl font-bold text-title-color dark:text-title-color-dark">
              Sobre mim
            </h1>
          </div>

          <div className="flex flex-col-reverse gap-10 md:flex-row md:items-start md:gap-16">
            <div className="flex flex-col gap-5 flex-1 text-md leading-relaxed text-second-color dark:text-second-color-dark">
              <div className="inline-flex items-center gap-2 w-fit px-3 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-500 text-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                Disponível para novas oportunidades
              </div>

              <p>
                Meu nome é Italo Ferreira, desenvolvedor full-stack com{" "}
                <span className="font-semibold text-title-color dark:text-title-color-dark">
                  2+ anos de experiência
                </span>
                , especialista em{" "}
                <span className="font-semibold text-title-color dark:text-title-color-dark">
                  React
                </span>{" "}
                e{" "}
                <span className="font-semibold text-title-color dark:text-title-color-dark">
                  Node.js
                </span>
                . Minha paixão é criar aplicações web escaláveis e de alto
                desempenho, garantindo uma experiência de usuário fluida em
                diferentes dispositivos.
              </p>
              <p>
                Estou sempre buscando novos aprendizados na minha área. Novos
                desafios é o que faz minha paixão pelo desenvolvimento web
                crescer cada vez mais — tenho sempre curiosidade em como
                funcionam certas coisas, então sempre procuro aprender mais.
              </p>
              <p>
                Já colaborei com projetos em grupo visando melhorar a
                comunicação durante a criação de um produto. Acredito fielmente
                que uma boa comunicação agrega em muito — e sempre tento
                transformar ideias em realidade com qualidade e cuidado.
              </p>

              <div className="flex items-center gap-1.5 text-xs text-second-color dark:text-second-color-dark opacity-60">
                <MapPin size={12} />
                Brasil · Remoto ou híbrido
              </div>

              <div className="flex items-center gap-3 mt-4 flex-wrap">
                <a
                  href={curriculum}
                  download
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm
                  border border-link-hover-color text-link-hover-color
                  hover:bg-link-hover-color hover:text-white
                  transition-all duration-200"
                >
                  <FileDown size={16} />
                  Baixar Currículo
                </a>

                <Link
                  to='/projects'
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-second-color dark:text-second-color-dark opacity-70 hover:opacity-100 transition-opacity"
                >
                  Ver o que já construí
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            <div className="shrink-0 md:w-[280px] xl:w-[320px]">
              <img
                src={AboutIMG}
                className="w-full rounded-xl object-cover aspect-[4/5]"
                alt="Italo Ferreira"
              />
            </div>
          </div>
        </RevealOnScroll>

        <div className="my-8 2xl:my-28">
          <RevealOnScroll>
            <p className="text-xs font-mono uppercase tracking-widest text-second-color dark:text-second-color-dark opacity-60 mb-3">
              — dia a dia
            </p>
            <h2 className="text-3xl text-title-color font-semibold dark:text-title-color-dark 2xl:text-5xl">
              Ferramentas
            </h2>

            <ul className="grid grid-cols-1 gap-[3rem] mt-[4rem] md:grid-cols-2">
              {tools.map((tool) => (
                <li
                  key={tool.name}
                  className="flex gap-4 pb-[30px] justify-start border-b border-b-divider-color border-opacity-15 dark:border-b-divider-color-dark"
                >
                  <img src={tool.src} className="p-1 size-12" alt={tool.name} />
                  <div className="flex flex-col gap-2">
                    <p className="text-base text-title-color font-semibold dark:text-title-color-dark">
                      {tool.name}
                    </p>
                    <span className="text-second-color dark:text-second-color-dark">
                      {tool.category}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </RevealOnScroll>
        </div>

        <div className="my-10 2xl:my-28">
          <RevealOnScroll>
            <p className="text-xs font-mono uppercase tracking-widest text-second-color dark:text-second-color-dark opacity-60 mb-3">
              — stack técnica
            </p>
            <h2 className="text-3xl text-title-color font-semibold dark:text-title-color-dark 2xl:text-5xl">
              Conhecimentos
            </h2>

            <div className="flex flex-col gap-12 mt-[4rem]">
              {knowledgeGroups.map((group) => (
                <div key={group.label}>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-xs font-mono uppercase tracking-widest text-link-hover-color font-semibold">
                      {group.label}
                    </span>
                    <div className="flex-1 h-px bg-divider-color dark:bg-divider-color-dark opacity-20" />
                    <span className="text-xs text-second-color dark:text-second-color-dark opacity-40 hidden md:block">
                      {group.description}
                    </span>
                  </div>

                  <ul className="grid grid-cols-1 gap-[2rem] md:grid-cols-2">
                    {group.items.map((item) => (
                      <li
                        key={item.name}
                        className="flex gap-4 pb-[24px] justify-start border-b border-b-divider-color border-opacity-15 dark:border-b-divider-color-dark"
                      >
                        <img
                          src={item.src}
                          className="p-1 size-12"
                          alt={item.name}
                        />
                        <div className="flex flex-col gap-2">
                          <p className="text-base text-title-color font-semibold dark:text-title-color-dark">
                            {item.name}
                          </p>
                          <span className="text-second-color dark:text-second-color-dark">
                            {item.category}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </div>
  );
}
