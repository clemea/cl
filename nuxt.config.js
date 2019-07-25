module.exports = {
  css: [
    //'assets/animation.css',
    //'swiper/dist/css/swiper.css',
    'normalize.css/normalize.css'
  ],
  /*
   ** Headers of the page
   */
  head: {
    title: 'portfolio',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#262626' },
      { hid: 'description', name: 'description', content: 'portfolio' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    __dangerouslyDisableSanitizers: ['script']
  },
  mode: 'spa',
  router: {
    mode: 'hash'
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: '#3B8070' },
  /*
   ** Build configuration
   */
  build: {
    postcss: [
      require('postcss-nested')(),
      require('postcss-pxtorem')()
      // require('postcss-responsive-type')(),
      // require('postcss-hexrgba')(),
    ],
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  plugins: [
    { src: '~plugins/ga.js', ssr: false }
    // { src: '~/plugins/swiper.js', ssr: false },
  ],
  modules: [
    [
      'storyblok-nuxt',
      {
        accessToken: '5rttiUCBkzeR9pXQy71kHwtt',
        cacheProvider: 'memory'
      }
    ]
  ],
  env: {}
}

