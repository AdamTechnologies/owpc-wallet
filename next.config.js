const withPWA = require('next-pwa');

module.exports = withPWA({
  pwa: {
    dest: 'public', // The directory where the service worker and manifest will be output.
    register: true,
  },
  reactStrictMode: true,
  webpack(config) {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };

    return config;
  },
});
