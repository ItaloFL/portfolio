import { RevealOnScroll } from "@/components/revealOnScroll";
import { GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <main className="bg-[#F9F9F9]  dark:bg-[#0F0F0F] transition-colors pt-[6.3rem]">
      <RevealOnScroll>
        <div className="py-[7rem] flex flex-col text-center px-10">
          <p className="text-2xl text-title-color font-semibold animate-slideUp duration-75 dark:text-title-color-dark lg:text-3xl xl:text-4xl 2xl:text-5xl">
            Olá.
          </p>
          <p className="text-2xl text-title-color font-semibold animate-slideUp duration-100 dark:text-title-color-dark lg:text-3xl xl:text-4xl 2xl:text-5xl">
            Me chamo Italo Ferreira Lopes
          </p>
          <p className="text-2xl text-title-color font-semibold animate-slideUp duration-150 dark:text-title-color-dark lg:text-3xl xl:text-4xl 2xl:text-5xl">
            Bem vindo ao meu pedaço na web!
          </p>

          <p className="text-[#818181] mt-8 text-md lg:text-lg 2xl:text-lg">
            Sou um desenvolvedor Full-Stack, amante das inovações que o
            desenvolvimento de software pode proporcionar.
          </p>

          <ul className="flex items-center justify-center mt-8 gap-4">
            <Link
              to="https://github.com/ItaloFL"
              target="_blank"
              className="p-2 cursor-pointer transition-colors"
            >
              <InstagramLogo
                size={35}
                className="text-primary-color dark:text-primary-color-dark"
              />
            </Link>
            <Link
              to="https://github.com/ItaloFL"
              target="_blank"
              className="p-2 cursor-pointer transition-colors"
            >
              <GithubLogo
                size={35}
                className="text-primary-color dark:text-primary-color-dark"
              />
            </Link>
            <Link
              to="https://www.linkedin.com/in/italo-ferreira-dev"
              target="_blank"
              className="p-2 cursor-pointer transition-colors"
            >
              <LinkedinLogo
                size={35}
                className="text-primary-color dark:text-primary-color-dark"
              />
            </Link>
          </ul>
        </div>
      </RevealOnScroll>
    </main>
  );
}
