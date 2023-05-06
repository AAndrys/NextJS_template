export enum ColorNames {
  white = 'white',
  black = 'black',
}

export interface Theme {
  colors: Record<ColorNames, string>;
  layout: typeof layout;
}

export const colors: Theme['colors'] = {
  [ColorNames.white]: '#FFFFFF',
  [ColorNames.black]: '#000000',
} as const;

export const layout = {
  zIndex: {
    overContent: 1,
    filter: 10,
    menuModal: 100,
    navbar: 1000,
    overlay: 10000,
    nonFunctionals: 100000,
  },
};

export const light = {
  name: 'light-theme',
  colors: {
    header: 'hsl(0, 0%, 93%)',
    background: 'hsl(0, 0%, 100%)',
    footer: 'hsl(0, 1%, 38%)',
    text: 'hsl(0, 1%, 16%)',
  },
};

export const dark = {
  name: 'dark-theme',
  colors: {
    header: 'hsl(0, 0%, 20%)',
    background: 'hsl(0, 1%, 16%)',
    footer: 'hsl(0, 0%, 93%)',
    text: 'hsl(0, 0%, 100%)',
  },
};

const theme: Theme = {
  colors,
  layout,
} as const;

export default theme;
