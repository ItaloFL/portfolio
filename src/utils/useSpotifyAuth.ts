import { useEffect } from "react";

const useSpotifyAuth = () => {
  const getTokenFromUrl = () => {
    const hash = window.location.hash;
    if (!hash) return null;

    const token = hash
      .substring(1)
      .split("&")
      .find((param) => param.startsWith("access_token"))
      ?.split("=")[1];

    return token || null;
  };

  useEffect(() => {
    const token = getTokenFromUrl();
    if (token) {
      localStorage.setItem("spotifyAccessToken", token);
      window.location.hash = ""; 
    }
  }, []);

  return localStorage.getItem("spotifyAccessToken");
};

export default useSpotifyAuth;