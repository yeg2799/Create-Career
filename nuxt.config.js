import routers from './config/routes';
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Create Career',
    htmlAttrs: {
      lang: 'tr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/global.scss',
    '@/assets/variables/_breakpoints.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/swiper', ssr: false, defer: true },
    { src: '~/plugins/toggle', ssr: false, defer: true },
    { src: '~/plugins/vue-tel-input', ssr: false, defer: true },
  ],
  server: {
    port: 3000, // default: 3000
    host: '0.0.0.0',
  },
  render: {
    http2: {
      push: true,
    },
    static: {
      maxAge: '1y',
      setHeaders(res, path) {
        if (path.includes('sw.js')) {
          res.setHeader('Cache-Control', `public, max-age=${15 * 60}`);
        }
      },
    },
  },
  lazySizes: {
    extendAssetUrls: {
      img: 'data-src',
      source: 'data-srcset',
      AppImage: ['source-md-url', 'image-url'],
    },
  },
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/svg',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    ['bootstrap-vue/nuxt',
    '@nuxtjs/svg-sprite']
  ],
  svgSprite: {
    input: '~/assets/icons/',
  },
  build: {
    // analyze: true,
    extend(config) {
      config.performance = config.performance || {};
      config.performance.maxEntrypointSize = 263168;
      config.performance.maxAssetSize = 263168;
    },
    transpile: ['vee-validate/dist/rules'],

    postcss: {
      preset: {
        stage: 4,
        browsers: ['> 1%', 'last 2 versions', 'not ie <= 8'],
        autoprefixer: {},
      },
    },

    filenames: {
      app: ({ isDev }) => (isDev ? '[name].js' : 'app.[contenthash].js'),
      chunk: ({ isDev }) => (isDev ? '[name].js' : 'chunk.[contenthash].js'),
      css: ({ isDev }) => (isDev ? '[name].css' : 'main.[contenthash].css'),
      img: ({ isDev }) => (isDev ? '[path][name].[ext]' : 'img/[hash:7].[ext]'),
      font: ({ isDev }) => isDev ? '[path][name].[ext]' : 'fonts/[hash:7].[ext]',
      video: ({ isDev }) => isDev ? '[path][name].[ext]' : 'videos/[hash:7].[ext]',
    },

    performance: {
      hints: false,
    },
    optimization: {
      splitChunks: {
        chunks: 'async',
        maxSize: 263168,
      },
    },
    splitChunks: {
      pages: true,
      vendor: true,
      commons: true,
      runtime: true,
      layouts: true,
    },
    
  },
  router: {
    trailingSlash: true,
    extendRoutes(routes) {
      routes.splice(0, routes.length);
      routes.push(...routers);
    },
  },
}
