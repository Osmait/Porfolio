import { defineConfig, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import detector from "./src/lib/shiki-detector.mjs";

// Fonts are downloaded at build time and self-hosted from /_astro.
export default defineConfig({
  site: "https://saulburgos.com",
  integrations: [mdx(), sitemap()],
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Archivo",
      cssVariable: "--font-label",
      weights: ["400 700"],
      styles: ["normal"],
      fallbacks: ["Arial Narrow", "sans-serif"],
      options: { experimental: { variableAxis: { wdth: [["62", "125"]] } } },
    },
    {
      provider: fontProviders.google(),
      name: "Hanken Grotesk",
      cssVariable: "--font-body",
      weights: ["400 600"],
      styles: ["normal", "italic"],
      fallbacks: ["system-ui", "sans-serif"],
    },
    {
      provider: fontProviders.google(),
      name: "Source Serif 4",
      cssVariable: "--font-read",
      weights: ["400 600"],
      styles: ["normal", "italic"],
      fallbacks: ["Georgia", "serif"],
    },
    {
      provider: fontProviders.google(),
      name: "JetBrains Mono",
      cssVariable: "--font-mono",
      weights: ["400 500"],
      styles: ["normal", "italic"],
      fallbacks: ["ui-monospace", "monospace"],
    },
  ],
  markdown: {
    shikiConfig: { theme: detector, wrap: false },
  },
});
