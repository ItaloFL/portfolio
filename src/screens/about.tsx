import AboutIMG from "../assets/img-about.png";
import Figma from "../assets/knowlege-logo/Figma.svg";
import VScode from "../assets/knowlege-logo/Vscode.svg";
import Notion from "../assets/knowlege-logo/Notion.svg";
import Insomnia from "../assets/knowlege-logo/Insomnia.svg";

import Docker from "../assets/knowlege-logo/Docker.svg";
import Nodejs from "../assets/knowlege-logo/NodeJS.svg"
import Git from "../assets/knowlege-logo/Git.svg";
import PrismaORM from "../assets/knowlege-logo/PrismaORM.svg"
import TailwindCSS from "../assets/knowlege-logo/TailwindCSS.svg";
import React from "../assets/knowlege-logo/React.svg";
import Typescript from "../assets/knowlege-logo/Typescript.svg";
import Zod from "../assets/knowlege-logo/Zod.svg";

import curriculum from "../assets/curriculum.pdf";

import { RevealOnScroll } from "@/components/revealOnScroll";

export function About() {
  return (
    <>
      <div className="bg-[#F9F9F9] min-h-screen dark:bg-[#0F0F0F] pt-[10rem]">
        <div className="flex flex-col justify-center  max-w-5xl mx-auto px-10">
          <RevealOnScroll>
            <h1 className="text-3xl font-semibold text-title-color dark:text-title-color-dark 2xl:text-5xl">
              Sobre mim
            </h1>
            <div className="flex flex-col-reverse justify-between gap-8 md:flex-row xl:flex-row 2xl:flex-row my-10 2xl:my-12 ">
              <div className="max-w-[600px] md:text-lg md:max-w-[480px] 2xl:max-w-[600px]">
                <div className="flex flex-col gap-6">
                  <p className="leading-relaxed text-second-color dark:text-second-color-dark">
                    Meu nome é Italo Ferreira, sou desenvolvedor full-stack, sou
                    especialista em{" "}
                    <span className="text-title-color font-bold dark:text-title-color-dark">
                      React
                    </span>{" "}
                    e{" "}
                    <span className="text-title-color font-bold dark:text-title-color-dark">
                      Node.js
                    </span>
                    . Minha paixão é criar aplicações web escaláveis e de alto
                    desempenho, garantindo uma experiência de usuário fluida em
                    diferentes dispositivos.
                  </p>
                  <p className="leading-relaxed text-second-color dark:text-second-color-dark">
                    Estou sempre buscando novos aprendizados na minha área,
                    novos desafios é o que faz minha paixão pelo desenvolvimento
                    web crescer cada vez mais. Tenho sempre curiosidade em como
                    funcionam certas coisas, então sempre procuro aprender mais.
                  </p>
                  <p className="leading-relaxed text-second-color dark:text-second-color-dark">
                    Apesar de ainda não ter experiências em empresas
                    profissionais, já colaborei com projetos e realizei projetos
                    em grupo visando melhorar a comunicação durante a criação de
                    um produto. Acredito fielmente que uma boa comunicação
                    agrega em muito.
                  </p>
                  <p className="leading-relaxed text-second-color dark:text-second-color-dark">
                    Então sempre tento melhorar minhas habilidades sociais e,
                    com isso, me ajudar a transformar ideias em realidade com
                    muita qualidade e cuidado.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-end gap-5">
                <img
                  src={AboutIMG}
                  className="h-[420px] w-full rounded-md object-cover mt-3 2xl:mt-0 md:w-[350px] xl:w-[400px] 2xl:w-[450px]"
                  alt="Sobre mim"
                />

                <button className="w-[200px] h-[40px] bg-red-400 transition-colors duration-300 rounded-md border-[2px] border-link-hover-color bg-transparent text-primary-color dark:text-primary-color-dark hover:bg-link-hover-color">
                  <a href={curriculum} download>
                    Dowload CV
                  </a>
                </button>
              </div>
            </div>
          </RevealOnScroll>

          <div className="my-14 2xl:my-28">
            <RevealOnScroll>
              <h2 className="text-3xl text-title-color font-semibold dark:text-title-color-dark 2xl:text-5xl">
                Ferramentas
              </h2>

              <ul className="grid grid-cols-1 gap-[3rem] mt-[4rem] md:grid-cols-2">
                <li className="flex gap-4 pb-[30px] justify-start border-b border-b-divider-color border-opacity-15 dark:border-b-divider-color-dark">
                  <img src={Figma} className="p-1 size-12" />
                  <div className="flex flex-col gap-2 ">
                    <p className="text-base text-title-color font-semibold dark:text-title-color-dark">
                      Figma
                    </p>
                    <span className="text-second-color dark:text-second-color-dark">
                      Design
                    </span>
                  </div>
                </li>
                <li className="flex gap-4 pb-[30px] justify-start border-b border-b-divider-color border-opacity-15 dark:border-b-divider-color-dark">
                  <img src={VScode} className="p-1 size-12" />
                  <div className="flex flex-col gap-2 ">
                    <p className="text-base text-title-color font-semibold dark:text-title-color-dark">
                      VSCode
                    </p>
                    <span className="text-second-color dark:text-second-color-dark">
                      Desenvolvimento
                    </span>
                  </div>
                </li>
                <li className="flex gap-4 pb-[30px] justify-start border-b border-b-divider-color border-opacity-15 dark:border-b-divider-color-dark">
                  <img src={Notion} className=" p-1 size-12" />
                  <div className="flex flex-col gap-2 ">
                    <p className="text-base text-title-color font-semibold dark:text-title-color-dark">
                      Notion
                    </p>
                    <span className="text-second-color dark:text-second-color-dark">
                      Documentação
                    </span>
                  </div>
                </li>
                <li className="flex gap-4 pb-[30px] justify-start border-b border-b-divider-color border-opacity-15 dark:border-b-divider-color-dark">
                  <img src={Insomnia} className=" p-1 size-12" />
                  <div className="flex flex-col gap-2 ">
                    <p className="text-base text-title-color font-semibold dark:text-title-color-dark">
                      Insomnia
                    </p>
                    <span className="text-second-color dark:text-second-color-dark">
                      Desenvolvimento
                    </span>
                  </div>
                </li>
              </ul>
            </RevealOnScroll>
          </div>

          <div className="my-10 2xl:my-28">
            <RevealOnScroll>
              <h2 className="text-3xl text-title-color font-semibold dark:text-title-color-dark 2xl:text-5xl">
                Conhecimentos
              </h2>

              <ul className="grid grid-cols-1 gap-[3rem] mt-[4rem] md:grid-cols-2">
                <li className="flex gap-4 pb-[30px] justify-start border-b border-b-divider-color border-opacity-15 dark:border-b-divider-color-dark">
                  <img src={Nodejs} className="p-1 size-12" />
                  <div className="flex flex-col gap-2 ">
                    <p className="text-base text-title-color font-semibold dark:text-title-color-dark">
                      NodeJS
                    </p>
                    <span className="text-second-color dark:text-second-color-dark">
                      Back-end
                    </span>
                  </div>
                </li>
                <li className="flex gap-4 pb-[30px] justify-start border-b border-b-divider-color border-opacity-15 dark:border-b-divider-color-dark">
                  <img src={React} className="p-1 size-12" />
                  <div className="flex flex-col gap-2 ">
                    <p className="text-base text-title-color font-semibold dark:text-title-color-dark">
                      ReactJS
                    </p>
                    <span className="text-second-color dark:text-second-color-dark">
                      Front-end
                    </span>
                  </div>
                </li>
                <li className="flex gap-4 pb-[30px] justify-start border-b border-b-divider-color border-opacity-15 dark:border-b-divider-color-dark">
                  <img src={Git} className="p-1 size-12" />
                  <div className="flex flex-col gap-2 ">
                    <p className="text-base text-title-color font-semibold dark:text-title-color-dark">
                      Git
                    </p>
                    <span className="text-second-color dark:text-second-color-dark">
                      Controle de versão
                    </span>
                  </div>
                </li>
                <li className="flex gap-4 pb-[30px] justify-start border-b border-b-divider-color border-opacity-15 dark:border-b-divider-color-dark">
                  <img src={PrismaORM} className="p-1 size-12" />
                  <div className="flex flex-col gap-2 ">
                    <p className="text-base text-title-color font-semibold dark:text-title-color-dark">
                      PrismaORM
                    </p>
                    <span className="text-second-color dark:text-second-color-dark">
                      Back-end
                    </span>
                  </div>
                </li>
                <li className="flex gap-4 pb-[30px] justify-start border-b border-b-divider-color border-opacity-15 dark:border-b-divider-color-dark">
                  <img src={Typescript} className="p-1 size-12" />
                  <div className="flex flex-col gap-2 ">
                    <p className="text-base text-title-color font-semibold dark:text-title-color-dark">
                      Typescript
                    </p>
                    <span className="text-second-color dark:text-second-color-dark">
                      Desenvolvimento
                    </span>
                  </div>
                </li>
                <li className="flex gap-4 pb-[30px] justify-start border-b border-b-divider-color border-opacity-15 dark:border-b-divider-color-dark">
                  <img src={Docker} className="p-1 size-12" />
                  <div className="flex flex-col gap-2 ">
                    <p className="text-base text-title-color font-semibold dark:text-title-color-dark">
                      Docker
                    </p>
                    <span className="text-second-color dark:text-second-color-dark">
                      Back-end
                    </span>
                  </div>
                </li>
                <li className="flex gap-4 pb-[30px] justify-start border-b border-b-divider-color border-opacity-15 dark:border-b-divider-color-dark">
                  <img src={TailwindCSS} className="p-1 size-12" />
                  <div className="flex flex-col gap-2 ">
                    <p className="text-base text-title-color font-semibold dark:text-title-color-dark">
                      TailwindCSS
                    </p>
                    <span className="text-second-color dark:text-second-color-dark">
                      Front-end
                    </span>
                  </div>
                </li>
                <li className="flex gap-4 pb-[30px] justify-start border-b border-b-divider-color border-opacity-15 dark:border-b-divider-color-dark">
                  <img src={Zod} className="p-1 size-12" />
                  <div className="flex flex-col gap-2 ">
                    <p className="text-base text-title-color font-semibold dark:text-title-color-dark">
                      Zod
                    </p>
                    <span className="text-second-color dark:text-second-color-dark">
                      Desenvolvimento
                    </span>
                  </div>
                </li>
              </ul>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </>
  );
}
