// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",

  devServer: {
    host: "0.0.0.0",
    port: 3000,
  },

  devtools: { enabled: true },

  typescript: {
    typeCheck: true,
  },

  imports: {
    autoImport: false,
  },

  srcDir: "./src",
  css: ["@/assets/styles/global.scss"],

  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
        },
      ],
      title: "Бени",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },

  modules: ["nuxt-directus", "@nuxt/icon", "dayjs-nuxt"],

  dayjs: {
    locales: ["ru"],
    defaultLocale: "ru",
  },

  runtimeConfig: { public: { directus: { url: "beny-cms-backend:8055" } } },
});
