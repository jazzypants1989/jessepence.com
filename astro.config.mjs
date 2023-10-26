import { defineConfig } from "astro/config"
import UnoCSS from "@unocss/astro"

export default defineConfig({
  integrations: [
    UnoCSS({
      injectReset: true,
    }),
  ],
  markdown: {
    shikiConfig: {
      wrap: true,
      theme: "min-light",
    },
  },
})
