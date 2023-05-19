import { css, FlattenSimpleInterpolation } from 'styled-components';

import { EnumToKey } from '../../../types/global';

export enum TypographyNames {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6',
  bodyLight = 'bodyLight',
  bodyRegular = 'bodyRegular',
  smallLight = 'smallLight',
  smallRegular = 'smallRegular',
  label = 'label',
  code = 'code',
}

type FontsTypes = Record<TypographyNames, FlattenSimpleInterpolation>;

export enum FontNames {
  roboto = 'roboto',
  mono = 'mono',
}

export const fontNames = {
  [FontNames.roboto]:
    // eslint-disable-next-line quotes
    "'Roboto', 'Helvetica Neue', Helvetica, Arial, Droid Sans, -apple-system, sans-serif",
  [FontNames.mono]:
    // eslint-disable-next-line quotes
    "ui-monospace, Menlo, Monaco, 'Cascadia Mono', 'Segoe UI Mono', 'Roboto Mono', 'Oxygen Mono', 'Ubuntu Monospace', 'Source Code Pro', 'Fira Mono', 'Droid Sans Mono', 'Courier New', monospace",
} as const;

export const fonts: FontsTypes = {
  h1: css`
    font-family: ${fontNames[FontNames.roboto]};
    font-weight: 400;
    font-size: clamp(40px, 2.3rem, 80px);
    line-height: 1.2;
  `,

  h2: css`
    font-family: ${fontNames[FontNames.roboto]};
    font-weight: 400;
    font-size: clamp(36px, 1.6rem, 56px);
    line-height: 1.1;
  `,

  h3: css`
    font-family: ${fontNames[FontNames.roboto]};
    font-weight: 400;
    font-size: clamp(32px, 1.3rem, 42px);
    line-height: 1;
  `,

  h4: css`
    font-family: ${fontNames[FontNames.roboto]};
    font-weight: 400;
    font-size: clamp(28px, 1rem, 32px);
    line-height: 1.2;
  `,

  h5: css`
    font-family: ${fontNames[FontNames.roboto]};
    font-weight: 400;
    font-size: clamp(18px, 0.681817rem, 24px);
    line-height: 1.05;
    letter-spacing: -0.6px;
  `,

  h6: css`
    font-family: ${fontNames[FontNames.roboto]};
    font-weight: 400;
    font-size: clamp(14px, 0.55rem, 18px);
    line-height: 1.4;
    letter-spacing: -0.4px;
  `,

  bodyLight: css`
    font-family: ${fontNames[FontNames.roboto]};
    font-weight: 300;
    font-size: clamp(12px, 0.55rem, 18px);
    line-height: 1.2;
    letter-spacing: -0.4px;
  `,

  bodyRegular: css`
    font-family: ${fontNames[FontNames.roboto]};
    font-weight: 400;
    font-size: clamp(12px, 0.55rem, 18px);
    line-height: 1.2;
    letter-spacing: -0.4px;
  `,

  smallLight: css`
    font-family: ${fontNames[FontNames.roboto]};
    font-weight: 300;
    font-size: clamp(12px, 0.4rem, 14px);
    line-height: 1.1;
  `,

  smallRegular: css`
    font-family: ${fontNames[FontNames.roboto]};
    font-weight: 400;
    font-size: clamp(12px, 0.4rem, 14px);
    line-height: 1.1;
  `,

  label: css`
    font-family: ${fontNames[FontNames.roboto]};
    font-weight: 400;
    font-size: clamp(14px, 0.5rem, 16px);
    line-height: 1;
    letter-spacing: -0.1px;
  `,

  code: css`
    font-family: ${fontNames[FontNames.mono]};
    font-weight: 400;
    font-size: clamp(15px, 0.5rem, 16px);
    line-height: 1;
  `,
} as const;

export const validFontCategories = Object.keys(fonts);

export const typography = (name: EnumToKey<typeof TypographyNames>) =>
  fonts[name];
