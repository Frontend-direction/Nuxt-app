
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'WD Block',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'My cooll web development blog' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: "https://fonts.googleapis.com/css?family=Open+Sans&display=swap" }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff', height: '4px', duration: 5000 },
  /*
  ** Global CSS
  */
  css: [
    // '~assets/styles/main.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios'
  ],
  axios: {
    baseURL: process.env.BASE_URL || 'https://nuxt-blog-dc733.firebaseio.com',
    credentials: false,
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },
  env:{
    baseUrl: process.env.BASE_URL || 'https://nuxt-blog-dc733.firebaseio.com',
    fbAPIKey:'AIzaSyCTu27Haz8J9lvj0qsxaulvYE_nB9gcT0k'
  },
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        path: '*',
        component:resolve(__dirname, 'pages/index.vue')
      })
    }
  }
}
