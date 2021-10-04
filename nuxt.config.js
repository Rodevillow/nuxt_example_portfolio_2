import axios from "axios";
import * as API from "./api/constants.endpoints";

process.env.DEBUG = "nuxt:*";

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Project name",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [{ src: "assets/styles/global.scss", lang: "scss" }],

  // Resources
  styleResources: {
    scss: [
      "assets/styles/_variables.scss",
      "assets/styles/_fonts.scss",
      "bootstrap/scss/_functions.scss",
      "bootstrap/scss/_variables.scss",
      "bootstrap/scss/_mixins.scss",
    ],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "@/plugins/api",
    "@/plugins/validator",
    { src: "plugins/bootstrap-vue-cf7.js" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    // "bootstrap-vue/nuxt",
    [
      "bootstrap-vue/nuxt",
      {
        icons: true,
      },
    ],
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    // https://www.npmjs.com/package/@nuxtjs/style-resources
    "@nuxtjs/style-resources",
    // https://www.npmjs.com/package/@nuxtjs/toast
    "@nuxtjs/toast",
    // https://www.npmjs.com/package/@nuxtjs/sitemap
    "@nuxtjs/sitemap",
  ],

  // @nuxtjs/sitemap - options
  sitemap: {
    hostname: "<hostname>",
    defaults: {
      changefreq: "daily",
      priority: 1,
      lastmod: new Date(),
    },
  },

  // Toast configuration
  toast: {
    position: "top-center",
  },

  // Bootstrap
  bootrstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false,
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: API.BASE_API_URL,
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "de",
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // Set target
  target: "static",

  // Generate routes
  generate: {
    routes(callback) {
      axios
        .get(API.BASE_API_URL + API.ENDPOINT_PROJECTS)
        .then((res) => {
          const routes = res.data.map((project) => {
            return "/projekte/" + project.id;
          });
          callback(null, routes);
        })
        .catch(callback);
    },
  },

  // Ignore
  ignore: [
    "pages/projekte/elements/*.vue",
    "pages/projekte/sections/*.vue",
    "pages/kontakt/sections/*.vue",
    "pages/buero/sections/*.vue",
    "pages/leistungen/sections/*.vue",
    "pages/newsletter/sections/*.vue",
  ],
};
