import colors from 'vuetify/es5/util/colors'
export default {
  server: {
    // port: 8000, // default: 3000
    host: 'localhost', // default: localhost
  },
  target: 'static',
  head: {
    // Global page headers: https://go.nuxtjs.dev/config-head
    // titleTemplate: '%s - wexprobi',
    // title: 'wexprobi',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],

    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: [], // Global CSS: https://go.nuxtjs.dev/config-css
  plugins: [
    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    { src: '~/plugins/fontawesome.js', ssr: false },
    // '~/plugins/notifier.js',
    // '~/plugins/vee-validate.js',
    // { src: '~/plugins/vuetify-datetime-picker.js', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // '@nuxtjs/composition-api/module',
    '@nuxt/typescript-build', // https://go.nuxtjs.dev/typescript
    '@nuxtjs/vuetify', // https://go.nuxtjs.dev/vuetify
  ],
  modules: [
    // Modules: https://go.nuxtjs.dev/config-modules
    // '@nuxtjs/auth'
    '@nuxtjs/axios', // https://go.nuxtjs.dev/axios
  ],
  // auth: {
  //   cookie: {
  //     prefix: 'auth.',
  //     options: {
  //       sameSite: true,
  //     },
  //   },
  //   strategies: {
  //     local: {
  //       endpoints: {
  //         login: {
  //           url: 'login',
  //           baseURL: process.env.DB_HOST + 'api/',
  //           method: 'post',
  //           propertyName: 'token',
  //         },
  //         logout: false,
  //         user: {
  //           url: 'user',
  //           baseURL: process.env.DB_HOST + 'api/',
  //           method: 'get',
  //           propertyName: false,
  //         },
  //       },
  //     },
  //   },
  //   redirect: {
  //     login: '/login',
  //     logout: '/login',
  //     // user: '/profile',
  //     callback: '/login',
  //     home: '/',
  //   },
  // },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.DB_HOST + 'data/',
    browserBaseURL: process.env.DB_HOST + 'data/',
  },
  // router: { middleware: ['auth'] },
  vuetify: {
    // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
    customVariables: ['~/assets/variables.scss'],
    options: {
      customProperties: true,
    },
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.cyan.lighten3,
          secondary: colors.lightGreen.lighten2,
          info: colors.pink.lighten3,
          accent: colors.purple.accent3,
          success: colors.green.darken1,
          warning: colors.orange.darken1,
          error: colors.red.darken1,
        },
        light: {
          primary: colors.cyan.darken1,
          secondary: colors.lightGreen.darken2,
          info: colors.pink.darken1,
          accent: colors.purple.accent4,
          success: colors.green,
          warning: colors.orange,
          error: colors.red,
        },
      },
    },
  },
  build: {
    // Build Configuration: https://go.nuxtjs.dev/config-build
    // babel: {
    //   plugins: [
    //     ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
    //     ['@babel/plugin-proposal-private-methods', { loose: true }],
    //   ],
    // },
    // transpile: ['claygl', 'echarts', 'vee-validate/dist/rules', 'zrender'],
  },
}
