import { env } from "@/env";
import { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const client_id = env.SPOTIFY_CLIENT_ID;
  const client_secret = env.SPOTIFY_SECRET;
  const refresh_token = env.SPOTIFY_REFRESH_TOKEN;

  // URLs oficiais do Spotify
  const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
  const NOW_PLAYING_ENDPOINT =
    "https://api.spotify.com/v1/me/player/currently-playing";

  try {
    const basic = Buffer.from(`${client_id}:${client_secret}`).toString(
      "base64",
    );

    const tokenResponse = await fetch(TOKEN_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Basic ${basic}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: refresh_token || "",
      }),
    });

    const tokenData = await tokenResponse.json();

    if (!tokenResponse.ok) {
      return res
        .status(tokenResponse.status)
        .json({ isPlaying: false, error: "Token error" });
    }

    const spotifyResponse = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${tokenData.access_token}`,
      },
    });

    if (spotifyResponse.status === 204 || spotifyResponse.status > 400) {
      return res.status(200).json({ isPlaying: false });
    }

    const song = await spotifyResponse.json();

    if (!song.item) {
      return res.status(200).json({ isPlaying: false });
    }

    return res.status(200).json({
      isPlaying: song.is_playing,
      name: song.item.name,
      artist: song.item.artists.map((_artist: any) => _artist.name).join(", "),
      album_img: song.item.album.images[0].url,
    });
  } catch (error) {
    console.error("Erro na função:", error);
    return res
      .status(500)
      .json({ isPlaying: false, message: "Internal Server Error" });
  }
}
