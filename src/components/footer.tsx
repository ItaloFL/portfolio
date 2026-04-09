import { Link } from "react-router-dom";
import FooterIMG from "../assets/img-footer.png";
import {
  GithubLogo,
  LinkedinLogo,
  InstagramLogo,
  SpotifyLogo,
} from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import axios from "axios";

export function Footer() {
  const [currentTrack, setCurrentTrack] = useState<{
    name: string;
    artist: string;
    isPlaying: boolean;
    album_img: string;
  } | null>(null);
  const getCurrentYear = new Date().getFullYear();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("/api/now-playing");

        if (data && data.isPlaying) {
          setCurrentTrack({
            name: data.name,
            artist: data.artist,
            isPlaying: true,
            album_img: data.album_img,
          });
        } else {
          setCurrentTrack(null);
        }
      } catch (error) {
        console.error("Erro ao buscar música:", error);
        setCurrentTrack(null);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <footer className="bg-[#F9F9F9] dark:bg-[#0F0F0F] transition-colors text-second-color dark:text-second-color-dark py-[28.5px]">
        <div className="flex flex-col px-10  justify-center gap-8 py-6 md:flex-row md:items-center xl:flex-row 2xl:flex-row 2xl:gap-20 2xl: 2xl:justify-center">
          <div className="flex flex-col gap-4 max-w-[350px]">
            <img
              src={FooterIMG}
              className="w-[40px] h-[40px] object-cover rounded-full"
              alt=""
            />
            <p className="text-md">
              Olá, me chamo{" "}
              <span className="text-primary-color dark:text-primary-color-dark">
                Italo Ferreira
              </span>
              . Sou desenvolvedor Full-Stack. Obrigado por checar meu site!
            </p>
            <ul className="flex gap-4 items-center">
              <Link
                to="https://www.instagram.com/italonfl"
                target="_blank"
                className="cursor-pointer rounded-full transition-colors"
              >
                <InstagramLogo
                  size={25}
                  className="hover:text-link-hover-color"
                />
              </Link>
              <Link
                to="https://www.linkedin.com/in/italo-ferreira-dev"
                target="_blank"
                className="cursor-pointer rounded-full transition-colors"
              >
                <LinkedinLogo
                  size={25}
                  className="hover:text-link-hover-color"
                />
              </Link>
              <Link
                to="https://github.com/ItaloFL"
                target="_blank"
                className="cursor-pointer rounded-full transition-colors"
              >
                <GithubLogo size={25} className="hover:text-link-hover-color" />
              </Link>
            </ul>
            <p className="mb-8">
              © {getCurrentYear} copyright all rights reserved
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:gap-10 xl:gap-20 2xl:gap-14">
            <div className="flex gap-14 mb-8">
              <div>
                <h3 className="text-base font-bold mb-2">Geral</h3>
                <ul className="flex flex-col gap-2">
                  <Link to="/" className="hover:text-link-hover-color">
                    Home
                  </Link>
                  <Link to="/about" className="hover:text-link-hover-color">
                    Sobre mim
                  </Link>
                  <Link
                    to="/experience"
                    className="hover:text-link-hover-color"
                  >
                    Experiências
                  </Link>
                </ul>
              </div>
              <div>
                <h3 className="text-base font-bold mb-2">Trabalhos</h3>
                <ul className="flex flex-col gap-2">
                  <Link to="/projects" className="hover:text-link-hover-color">
                    Projetos
                  </Link>
                  <Link to="/contact" className="hover:text-link-hover-color">
                    Contato
                  </Link>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-base font-bold mb-2">
                O que estou escutando
              </h3>
              <div className="transition-colors min-w-[250px] max-w-[420px] bg-contrast-color border border-border-color rounded-md flex items-center gap-4 p-4 dark:bg-contrast-color-dark dark:border-border-color-dark">
                {currentTrack?.isPlaying ? (
                  <>
                    <img
                      src={currentTrack.album_img}
                      className="w-[45px] h-[45px] rounded-md"
                      alt=""
                    />
                    <div>
                      <p className="font-bold">{currentTrack.name}</p>
                      <span>{currentTrack.artist}</span>
                    </div>
                  </>
                ) : (
                  <>
                    <SpotifyLogo size={40} weight="fill" />
                    <div>
                      <p className="font-bold">Nada tocando</p>
                      <span>Spotify</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
