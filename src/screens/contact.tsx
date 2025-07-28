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
      <div className="bg-[#F9F9F9] min-h-[555px] dark:bg-[#0F0F0F] transition-colors pt-[6rem]">
        <RevealOnScroll>
          <div className="p-6 text-second-color dark:text-second-color-dark">
            <div className="flex flex-col items-center justify-center text-center border-b border-b-contrast-color border-opacity-15 pb-[3rem] dark:border-b-contrast-color-dark">
              <span className="text-8xl">"</span>
              <p className="text-lg max-w-[500px]">
                Os primeiros 90% do código representam os primeiros 10% do tempo
                de desenvolvimento. Os 10% restantes do código é para mostrar
                aos outros os 90% do tempo de desenvolvimento.
              </p>
            </div>

            <ul className="flex items-center justify-center gap-4 mt-[3rem]">
              <Link
                to="https://github.com/ItaloFL"
                target="_blank"
                className="cursor-pointer p-1 rounded-full"
              >
                <InstagramLogo
                  size={35}
                  className="text-primary-color dark:text-primary-color-dark"
                />
              </Link>
              <Link
                to="https://www.linkedin.com/in/italo-ferreira-dev"
                target="_blank"
                className="cursor-pointer p-1 rounded-full"
              >
                <LinkedinLogo
                  size={35}
                  className="text-primary-color dark:text-primary-color-dark"
                />
              </Link>
              <Link
                to="https://github.com/ItaloFL"
                target="_blank"
                className="cursor-pointer p-1 rounded-full"
              >
                <GithubLogo
                  size={35}
                  className="text-primary-color dark:text-primary-color-dark"
                />
              </Link>
            </ul>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center py-[5rem] "
            >
              <div className="flex flex-col gap-4 max-w-[90vw]">
                <div className="flex flex-col gap-3">
                  <label
                    htmlFor="name"
                    className="text-lg text-primary-color font-semibold dark:text-primary-color-dark"
                  >
                    Nome
                  </label>
                  <input
                    type="text"
                    className="h-[50px] w-[85vw] rounded bg-contrast-color p-2 outline-none focus:border-[2px] focus:border-[#FFA726] dark:bg-contrast-color-dark dark:text-primary-color-dark transition-colors md:w-[450px] xl:w-[715px]"
                    placeholder="Digite seu nome"
                    id="name"
                    name="name"
                  />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label
                    htmlFor="email"
                    className="text-lg text-primary-color font-semibold dark:text-primary-color-dark"
                  >
                    E-mail
                  </label>
                  <input
                    type="email"
                    className="h-[50px] w-[85vw] rounded bg-contrast-color p-2 outline-none focus:border-[2px] focus:border-[#FFA726] dark:bg-contrast-color-dark dark:text-primary-color-dark transition-colors md:w-[450px] xl:w-[715px]"
                    placeholder="Digite seu e-mail"
                    id="email"
                    name="email"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>

                <div className="flex flex-col gap-3">
                  <label
                    htmlFor="message"
                    className="text-lg text-primary-color font-semibold dark:text-primary-color-dark"
                  >
                    Messagem
                  </label>
                  <textarea
                    className="h-[200px] w-[85vw] rounded bg-contrast-color resize-none p-2 outline-none focus:border-[2px] focus:border-[#FFA726] dark:bg-contrast-color-dark dark:text-primary-color-dark transition-colors md:w-[450px] xl:w-[715px]"
                    placeholder="Digite a sua mensagem"
                    id="message"
                    name="message"
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>
              </div>

              <button
                disabled={state.submitting}
                className="flex mt-5 text-primary-color dark:text-primary-color-dark bg-[#F57C00] h-[50px] w-[85vw] rounded items-center justify-center uppercase font-bold outline-none gap-2 transition-colors hover:bg-[#FF8A00] md:w-[450px] xl:w-[350px]"
              >
                Enviar
                <PaperPlaneRight />
              </button>
            </form>
          </div>
        </RevealOnScroll>
      </div>
    </>
  );
}
