import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: ['@wxt-dev/module-react'],
  manifest: {
    name: 'Background Color Addon',
    description: 'Change the background color of web pages',
    version: '0.0.2',
    author: { email: 'pr53sjy@eduvaud.ch' },

    permissions: ['scripting', 'activeTab'],
    host_permissions: [
      '<all_urls>',           // simplest option
      // or more restrictive:
      // 'https://*/*',
      // 'http://*/*',
    ],

    // Icons for the extension
    icons: {
      16: '/icon/16x16.png',
      32: '/icon/32x32.png',
    },

    // Firefox-specific settings
    browser_specific_settings: {
      gecko: {
        id: '{10c0e426-a54a-403e-b5e1-03bb12fa9949}',
        strict_min_version: '109.0',
      },
    },
  },
});