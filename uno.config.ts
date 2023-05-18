import {
  defineConfig,
  presetWind,
  presetAttributify,
  presetIcons,
  presetWebFonts,
} from "unocss"

export default defineConfig({
  presets: [
    presetWind(),
    presetAttributify(),
    presetIcons(),
    presetWebFonts({
      provider: "google",
      fonts: {
        sans: ["Pathway Gothic One", "Signika Negative", "IBM Plex Sans"],
        serif: ["JetBrains Mono"],
      },
    }),
  ],
  theme: {
    colors: {
      primary: "#BE5A83",
      secondary: "#E06469",
      tertiary: "#F2B6A0",
      quaternary: "#DEDEA7",
      quinary: "#A3C4BC",
      lightDark: "#5C5C5C",
      redDark: "#511111",
      background: "#F2F2F2",
    },
  },
  shortcuts: {
    "observed": "min-h-screen",
    "btn-primary":
      "rounded-lg bg-primary text-white px-4 py-2 shadow-lg hover:shadow-inner hover:drop-shadow hover:bg-opacity-40 hover:text-black transition-all duration-500",
    "btn-secondary":
      "rounded-lg bg-secondary text-white px-4 py-2 shadow-lg hover:shadow-inner hover:drop-shadow hover:bg-opacity-40 hover:text-black transition-all duration-500",
    "btn-tertiary":
      "rounded-lg bg-tertiary text-black px-4 py-2 shadow-lg hover:shadow-inner hover:drop-shadow hover:bg-opacity-40 hover:text-white transition-all duration-500",
    "card":
      "rounded-lg bg-quinary  text-black shadow-lg p-4 hover:shadow-xl transition duration-300",
    "hero":
      "bg-primary text-white p-4 rounded-lg shadow-2xl text-center mb-4 flex flex-col justify-center items-center shadow-primary gap-2 bg-opacity-90",
    "sidekick":
      "bg-secondary text-white p-4 rounded-lg shadow-2xl text-center mb-4 flex flex-col justify-center items-center shadow-secondary gap-2 bg-opacity-90",
    "section":
      "bg-white p-4 rounded-lg shadow-lg text-center mb-4 flex flex-col justify-center items-center gap-2",
    "active":
      "bg-secondary text-black rounded-lg shadow-2xl text-center shadow-primary transform hover:scale-110 hover:shadow-2xl",
    "sleeping": "opacity-0",
  },
})
