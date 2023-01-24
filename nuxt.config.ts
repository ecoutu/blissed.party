// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from 'vite-plugin-vuetify';
export default defineNuxtConfig({
  // css: ['~/assets/styles.css'], // vuetify ships precompiled css, no need to import sass
  // build: {
  //   transpile: ['vuetify'],
  // },

  typescript: {
    strict: true,
    typeCheck: true,
  },
  // vite: {
  //   server: {
  //     hmr: {
  //       protocol: 'ws',
  //       host: '0.0.0.0',
  //       path: '.',
  //     },
  //   },
  // },
  vite: {
    server: {
      hmr: {
        protocol: 'ws',
        host: 'localhost',
      },
    },
    // define: {
    //   ssr: {
    //     noExternal: ['vuetify'], // add the vuetify vite plugin
    //   },
    // },
  },
  modules: [
    async (options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) =>
        // @ts-expect-error
        config.plugins.push(vuetify())
      );
    },
  ],
});
