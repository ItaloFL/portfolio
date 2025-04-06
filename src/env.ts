import { z } from "zod";

const envSchema = z.object({
  VITE_SPOTIFY_CLIENT_ID: z.string(),
  VITE_SPOTIFY_SECRET: z.string(),
  VITE_SPOTIFY_REFRESH_TOKEN: z.string(),
  VITE_REACT_APP_REDIRECT_URI: z.string()
});

export const env = envSchema.parse(import.meta.env);
