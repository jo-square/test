// @ts-check
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tinaDirective from "./astro-tina-directive/register";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://tina-astro.netlify.app",
  integrations: [mdx(), sitemap(), react(), tinaDirective()],
  redirects: {
    "/admin": "/admin/index.html",
  },
  vite: { plugins: [tailwindcss()] },
});
