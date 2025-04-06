import { Link } from "react-router-dom";
import FooterIMG from "../assets/img-footer.png";
import {
  GithubLogo,
  LinkedinLogo,
  InstagramLogo,
  SpotifyLogo,
} from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { env } from "@/env";

export function Footer() {
  const [currentTrack, setCurrentTrack] = useState<{
    name: string;
    artist: string;
    isPlaying: boolean;
    album_img: string;
  } | null>(null);

  const client_id = env.VITE_SPOTIFY_CLIENT_ID;
  const client_secret = env.VITE_SPOTIFY_SECRET;
  const refresh_token = env.VITE_SPOTIFY_REFRESH_TOKEN;

  const getAccessToken = async () => {
    try {
      const credentials = `${client_id}:${client_secret}`;
      const encodedCredentials = btoa(credentials);

      const response = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
          Authorization: `Basic ${encodedCredentials}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          grant_type: "refresh_token",
          refresh_token: refresh_token,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch access token");
      }

      const data = await response.json();
      return data.access_token;
    } catch (error) {
      console.error("Error fetching access token:", error);
    }
  };

  const fetchCurrentPlaying = async (token: string) => {
    try {
      const response = await fetch(
        "https://api.spotify.com/v1/me/player/currently-playing",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 204) {
        setCurrentTrack(null);
        return;
      }

      if (!response.ok) {
        throw new Error(
          `Failed to fetch currently playing track: ${response.status}`
        );
      }

      const data = await response.json();

      setCurrentTrack({
        name: data.item.name,
        artist: data.item.artists[0].name,
        isPlaying: data.is_playing,
        album_img: data.item.album.images[0].url,
      });
      return data;
    } catch (error) {
      console.error("Error fetching currently playing track:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const token = await getAccessToken();
      if (token) {
        await fetchCurrentPlaying(token);
      }
    };

    const interval = setInterval(() => {
      fetchData();
    }, 10000);

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
                to="https://github.com/ItaloFL"
                target="_blank"
                className="cursor-pointer rounded-full"
              >
                <InstagramLogo
                  size={25}
                  className="text-primary-color dark:text-primary-color-dark"
                />
              </Link>
              <Link
                to="https://linkedin.com/in/ItaloFL"
                target="_blank"
                className="cursor-pointer rounded-full"
              >
                <LinkedinLogo
                  size={25}
                  className="text-primary-color dark:text-primary-color-dark"
                />
              </Link>
              <Link
                to="https://github.com/ItaloFL"
                target="_blank"
                className="cursor-pointer rounded-full"
              >
                <GithubLogo
                  size={25}
                  className="text-primary-color dark:text-primary-color-dark"
                />
              </Link>
            </ul>
            <p className="mb-8">© 2024 copyright all rights reserved</p>
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
