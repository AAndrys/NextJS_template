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
    locales: ['en', 'pl'],
    defaultLocale: 'en',
    localeDetection: false,
  },
  images: {
    path: '/_next/image',
    loader: 'default',
    disableStaticImages: true,
  },
  webpack: (config, options) => {
    return config;
  },
};

module.exports = withPWA(withImages(withVideos(nextConfig)));
