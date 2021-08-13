// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withPlaiceholder } = require('@plaiceholder/next');
module.exports = withPlaiceholder({
  images: {
    deviceSizes: [640, 768, 1024, 1280, 1600],
    imageSizes: [16, 32, 48, 68, 96],
    domains: [process.env.IMAGES_DOMAIN],
    path: '/_next/image',
    loader: 'default',
  },
  trailingSlash: true,
  webpack: function (config) {
    config.externals = config.externals || {};
    config.externals['styletron-server'] = 'styletron-server';
    return config;
  },
});
