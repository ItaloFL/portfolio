import { RevealOnScroll } from "@/components/revealOnScroll";
import { GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { ArrowRight, FileDown } from "lucide-react";
import curriculum from "../assets/curriculo.pdf";

export function Home() {
  return (
    <main className="bg-[#F9F9F9] dark:bg-[#0F0F0F] transition-colors pt-[6.3rem]">
      <RevealOnScroll>
        <div className="py-[7rem] flex flex-col text-center px-10">
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-500 text-xs font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Disponível para novas oportunidades
            </div>
          </div>

          <p className="text-2xl text-title-color font-semibold animate-slideUp duration-75 dark:text-title-color-dark lg:text-3xl xl:text-4xl 2xl:text-5xl">
            Olá.
          </p>
          <p className="text-2xl text-title-color font-semibold animate-slideUp duration-100 dark:text-title-color-dark lg:text-3xl xl:text-4xl 2xl:text-5xl">
            Me chamo Italo Ferreira Lopes
          </p>
          <p className="text-2xl text-title-color font-semibold animate-slideUp duration-150 dark:text-title-color-dark lg:text-3xl xl:text-4xl 2xl:text-5xl">
            Desenvolvedor Full-Stack
          </p>

          <p className="text-[#818181] mt-8 text-md lg:text-lg 2xl:text-lg max-w-xl mx-auto">
            Especialista em{" "}
            <span className="font-semibold text-title-color dark:text-title-color-dark">
              React
            </span>{" "}
            e{" "}
            <span className="font-semibold text-title-color dark:text-title-color-dark">
              Node.js
            </span>
            , criando aplicações web escaláveis e de alto desempenho com 2+ anos
            de experiência.
          </p>

          <div className="flex items-center justify-center gap-3 mt-10 flex-wrap">
            <Link
              to="projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm
                bg-link-hover-color text-white hover:brightness-90 transition-all duration-200"
            >
              Ver projetos
              <ArrowRight size={16} />
            </Link>

            <a
              href={curriculum}
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm
                border border-link-hover-color text-link-hover-color
                hover:bg-link-hover-color hover:text-white transition-all duration-200"
            >
              <FileDown size={16} />
              Currículo
            </a>
          </div>

          <ul className="flex items-center justify-center mt-10 gap-4">
            <Link
              to="https://www.instagram.com/italonfl"
              target="_blank"
              className="p-2 cursor-pointer transition-colors"
            >
              <InstagramLogo
                size={28}
                className="text-primary-color dark:text-primary-color-dark opacity-60 hover:opacity-100 transition-opacity"
              />
            </Link>
            <Link
              to="https://github.com/ItaloFL"
              target="_blank"
              className="p-2 cursor-pointer transition-colors"
            >
              <GithubLogo
                size={28}
                className="text-primary-color dark:text-primary-color-dark opacity-60 hover:opacity-100 transition-opacity"
              />
            </Link>
            <Link
              to="https://www.linkedin.com/in/italo-ferreira-dev"
              target="_blank"
              className="p-2 cursor-pointer transition-colors"
            >
              <LinkedinLogo
                size={28}
                className="text-primary-color dark:text-primary-color-dark opacity-60 hover:opacity-100 transition-opacity"
              />
            </Link>
          </ul>
        </div>
      </RevealOnScroll>
    </main>
  );
}
