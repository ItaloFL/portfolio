import { RevealOnScroll } from "@/components/revealOnScroll";
import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  PaperPlaneRight,
} from "@phosphor-icons/react";
import { Link, useNavigate } from "react-router-dom";
import { useForm, ValidationError } from "@formspree/react";

export function Contact() {
  const [state, handleSubmit] = useForm("xpwpllaq");
  const navigate = useNavigate();

  if (state.succeeded) {
    navigate("/sucess");
  }

  return (
    <>
      <div className="bg-[#F9F9F9] min-h-screen dark:bg-[#0F0F0F] transition-colors pt-[6rem]">
        <RevealOnScroll>
          <div className="max-w-5xl mx-auto px-10 py-[5rem]">
            <div className="mb-16">
              <p className="text-xs font-mono uppercase tracking-widest text-second-color dark:text-second-color-dark opacity-60 mb-3">
                — vamos conversar
              </p>
              <h1 className="text-4xl font-bold text-title-color dark:text-title-color-dark">
                Contato
              </h1>
            </div>

            <div className="flex flex-col items-center justify-center text-center border-b border-border-color dark:border-border-color-dark pb-[3rem] mb-[3rem]">
              <span className="text-6xl leading-none font-serif text-link-hover-color mb-2 select-none">
                "
              </span>
              <p className="text-base max-w-[500px] text-second-color dark:text-second-color-dark leading-relaxed">
                Os primeiros 90% do código representam os primeiros 10% do tempo
                de desenvolvimento. Os 10% restantes do código é para mostrar
                aos outros os 90% do tempo de desenvolvimento.
              </p>
            </div>

            <ul className="flex items-center justify-center gap-3 mb-[4rem]">
              <li>
                <Link
                  to="https://www.instagram.com/italonfl"
                  target="_blank"
                  className="flex items-center justify-center w-11 h-11 rounded-lg
                    border border-border-color dark:border-border-color-dark
                    text-second-color dark:text-second-color-dark
                    hover:border-link-hover-color hover:text-link-hover-color
                    transition-all duration-200"
                >
                  <InstagramLogo size={20} weight="bold" />
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.linkedin.com/in/italo-ferreira-dev"
                  target="_blank"
                  className="flex items-center justify-center w-11 h-11 rounded-lg
                    border border-border-color dark:border-border-color-dark
                    text-second-color dark:text-second-color-dark
                    hover:border-link-hover-color hover:text-link-hover-color
                    transition-all duration-200"
                >
                  <LinkedinLogo size={20} weight="bold" />
                </Link>
              </li>
              <li>
                <Link
                  to="https://github.com/ItaloFL"
                  target="_blank"
                  className="flex items-center justify-center w-11 h-11 rounded-lg
                    border border-border-color dark:border-border-color-dark
                    text-second-color dark:text-second-color-dark
                    hover:border-link-hover-color hover:text-link-hover-color
                    transition-all duration-200"
                >
                  <GithubLogo size={20} weight="bold" />
                </Link>
              </li>
            </ul>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center"
            >
              <div className="flex flex-col gap-5 w-full max-w-[715px]">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="text-xs font-mono uppercase tracking-widest text-second-color dark:text-second-color-dark opacity-60"
                  >
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Digite seu nome"
                    className="h-[50px] w-full rounded-lg px-4 text-sm
                      bg-contrast-color dark:bg-contrast-color-dark
                      border border-border-color dark:border-border-color-dark
                      text-title-color dark:text-title-color-dark
                      placeholder:text-second-color dark:placeholder:text-second-color-dark placeholder:opacity-40
                      outline-none focus:border-link-hover-color
                      transition-colors duration-150"
                  />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                    className="text-xs text-red-500 mt-1"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-xs font-mono uppercase tracking-widest text-second-color dark:text-second-color-dark opacity-60"
                  >
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Digite seu e-mail"
                    className="h-[50px] w-full rounded-lg px-4 text-sm
                      bg-contrast-color dark:bg-contrast-color-dark
                      border border-border-color dark:border-border-color-dark
                      text-title-color dark:text-title-color-dark
                      placeholder:text-second-color dark:placeholder:text-second-color-dark placeholder:opacity-40
                      outline-none focus:border-link-hover-color
                      transition-colors duration-150"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="text-xs text-red-500 mt-1"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="text-xs font-mono uppercase tracking-widest text-second-color dark:text-second-color-dark opacity-60"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Digite a sua mensagem"
                    className="h-[200px] w-full rounded-lg px-4 py-3 text-sm resize-none
                      bg-contrast-color dark:bg-contrast-color-dark
                      border border-border-color dark:border-border-color-dark
                      text-title-color dark:text-title-color-dark
                      placeholder:text-second-color dark:placeholder:text-second-color-dark placeholder:opacity-40
                      outline-none focus:border-link-hover-color
                      transition-colors duration-150"
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="text-xs text-red-500 mt-1"
                  />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="self-center flex items-center justify-center gap-2
                    h-[50px] w-full md:w-[350px] rounded-lg
                    bg-link-hover-color text-white
                    font-semibold uppercase tracking-wide text-sm
                    hover:brightness-90 disabled:opacity-50
                    transition-all duration-200"
                >
                  Enviar
                  <PaperPlaneRight size={16} weight="bold" />
                </button>
              </div>
            </form>
          </div>
        </RevealOnScroll>
      </div>
    </>
  );
}
