// Fix Safari mobile fix, where vh values are wrongly calculated

import { EnumToKey } from '../../types/global';

import { fonts, TypographyNames } from './fonts';

// https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
export const setVh = (value: number) => `calc(var(--vh, 1vh) * ${value})`;

export const typography = (name: EnumToKey<typeof TypographyNames>) =>
  fonts[name];
