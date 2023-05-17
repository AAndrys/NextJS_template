/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  scope: '/',
  buildExcludes: [/chunks\/images\/.*$/],
});

const withImages = require('next-images');
const withVideos = require('next-videos');

const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  compiler: {
    styledComponents: true,
  },
  compress: true,
  i18n: {
    locales: ['en', 'pl', 'zh-CN', 'de', 'es', 'nl-NL', 'pt-BR'],
    defaultLocale: 'en',
    localeDetection: false,
  },
  images: {
    path: '/_next/image',
    loader: 'default',
    disableStaticImages: true,
  },
  webpack(config) {
    const fileLoaderRule = config.module.rules.find(rule =>
      rule.test?.test?.('.svg')
    );

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: /url/ }, // exclude if *.svg?url
        use: ['@svgr/webpack'],
      }
    );

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};

module.exports = withPWA(withImages(withVideos(nextConfig)));
