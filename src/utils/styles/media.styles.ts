enum Breakpoints {
  mobile = 'mobile',
  tablet = 'tablet',
  desktop = 'desktop',
  desktopLarge = 'desktopLarge',
}

interface MediaQueries {
  breakpoints: Record<Breakpoints, number>;
}

export const breakpoints: MediaQueries['breakpoints'] = {
  mobile: 375,
  tablet: 712,
  desktop: 1025,
  desktopLarge: 1280,
};

const customMediaQuery = (minWidth: number) =>
  `@media (min-width: ${minWidth}px)`;
const customMediaQueryHeight = (maxHeight: number) =>
  `@media (max-height: ${maxHeight}px)`;
const customMediaQueryPixelRatio = (pixelRatio: number) =>
  `@media screen and (-webkit-min-device-pixel-ratio: ${pixelRatio})`;

const media = {
  custom: customMediaQuery,
  customHeight: customMediaQueryHeight,
  customPixelRatio: customMediaQueryPixelRatio,

  mobile: customMediaQuery(breakpoints.mobile),
  tablet: customMediaQuery(breakpoints.tablet),
  desktop: customMediaQuery(breakpoints.desktop),
  desktopLarge: customMediaQuery(breakpoints.desktopLarge),
};

export default media;
