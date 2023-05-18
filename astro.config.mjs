import { defineConfig } from "astro/config"
import UnoCSS from "@unocss/astro"
import react from "@astrojs/react"

export default defineConfig({
  integrations: [
    UnoCSS({
      injectReset: true,
    }),
    react(),
  ],
  markdown: {
    shikiConfig: {
      wrap: true,
      theme: "min-light",
    },
  },
})
