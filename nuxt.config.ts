// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/content',
  ],

  app: {
    head: {
      title: 'AIrang - 한국어 AI 도구 검색 & 비교',
      htmlAttrs: { lang: 'ko' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '4,000+ AI 도구를 한국어로 검색하고 비교하세요. 가격, 기능, 한국어 지원 여부를 한눈에.' },
        { property: 'og:title', content: 'AIrang - 한국어 AI 도구 검색 & 비교' },
        { property: 'og:description', content: 'AI 도구를 한국어로 찾고, 비교하고, 리뷰하세요.' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;600;700&display=swap' },
      ],
    },
  },

  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'light',
  },

  content: {
    highlight: {
      theme: 'github-dark',
    },
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/sitemap.xml'],
    },
  },

  compatibilityDate: '2025-01-01',
})
