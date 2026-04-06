import { z } from "zod";

const envSchema = z.object({
  SPOTIFY_CLIENT_ID: z.string(),
  SPOTIFY_SECRET: z.string(),
  SPOTIFY_REFRESH_TOKEN: z.string(),
  REACT_APP_REDIRECT_URI: z.string()
});

export const env = envSchema.parse(import.meta.env);
