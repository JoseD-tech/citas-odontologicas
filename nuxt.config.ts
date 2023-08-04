// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    tailwindcss: {
        cssPath: '@/assets/css/main.css',
        configPath: '@/tailwind.config.js',
        exposeConfig: false,
        injectPosition: 0,
        viewer: true,
    },
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-icon',
        '@pinia/nuxt',
        'nuxt-swiper',
        '@vueuse/nuxt',
        '@formkit/nuxt',
        '@nuxtjs/axios'
    ],
    axios: {
        baseURL: 'https://endpointsco-production.up.railway.app/api'
    }
})
