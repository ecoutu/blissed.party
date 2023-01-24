import vuetify from 'vite-plugin-vuetify';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    strict: true,
    typeCheck: true,
  },
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    server: {
      hmr: {
        protocol: 'ws',
      },
    },
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
