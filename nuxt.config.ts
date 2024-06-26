// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/image"],
  image: {
    dir:'static/images',
    format:['avif']
  }
})