// https://nuxt.com/docs/api/configuration/nuxt-config

import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

export default defineNuxtConfig({
  build: {
    transpile: ["vuetify"],
  },
  typescript: { shim: false },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ["vue3-toastify/dist/index.css", "~/assets/css/main.css"],
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    "@nuxtjs/google-fonts",
  ],

  runtimeConfig: {
    public: {
      API: process.env.API,
    },
  },

  // configure fonts
  googleFonts: {
    families: {
      Inter: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
  },

  app: {
    head: {
      title: "Nuxt Chat",
    },
  },

  // auto import toast
  imports: {
    imports: [{ as: "useToast", from: "vue3-toastify", name: "toast" }],
  },

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
});
