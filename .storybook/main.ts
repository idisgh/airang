import type { StorybookConfig } from '@storybook/vue3-vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import path from 'path'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

const config: StorybookConfig = {
  stories: [
    '../components/**/*.stories.@(js|jsx|ts|tsx)',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  viteFinal(config) {
    config.plugins = [
      ...(config.plugins || []),
      vue(),
      AutoImport({
        imports: [
          'vue',
          'vue-router',
          {
            from: path.resolve(__dirname, './nuxt-stubs'),
            imports: ['navigateTo', 'useRouter', 'useRoute', 'useFetch', 'useAsyncData', 'useHead', 'useSeoMeta', 'useSupabaseClient'],
          },
        ],
        dts: false,
      }),
    ]
    config.resolve = config.resolve || {}
    config.resolve.alias = {
      ...config.resolve.alias,
      '~': path.resolve(__dirname, '..'),
      '@': path.resolve(__dirname, '..'),
    }
    config.css = {
      postcss: {
        plugins: [tailwindcss, autoprefixer],
      },
    }
    return config
  },
}

export default config
