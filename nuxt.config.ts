/*
 * @Author: YONG
 * @LastEditors: YONG
 * @Date: 2023-06-13 16:34:17
 * @LastEditTime: 2023-06-14 17:37:18
 * @Description:
 */
export default defineNuxtConfig({
  ssr: false,
  app: {
    // head
    head: {
      title: '快乐招商',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: '快乐招商',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
  postcss: {
    plugins: {
      'postcss-import': {},
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {}
    }
  },


  // css
  css: [
    '~/assets/scss/index.scss',
    '~/assets/scss/elementui.scss',
  ],

  typescript: {
    strict: true,
    shim: false,
  },

  // build modules
  modules: ['@vueuse/nuxt', '@unocss/nuxt', '@pinia/nuxt', '@element-plus/nuxt', '@nuxtjs/color-mode'],

  // vueuse
  vueuse: {
    ssrHandlers: true,
  },

  // colorMode
  colorMode: {
    classSuffix: '',
  },

  unocss: {
    uno: true,
    attributify: true,
    icons: {
      scale: 1.2,
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/scss/element/index.scss" as element;`,
        },
      },
    },
  },
  elementPlus: {
    icon: 'ElIcon',
    importStyle: 'scss',
    themes: ['dark']
  },
  build: {
    loaders: {
      file: {
        esModule: false,
      },
    },
  }
})
