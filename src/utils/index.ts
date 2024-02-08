import debounce from 'lodash/debounce';

import { breakpointDesktop } from './styles/vars';

interface OnResizeTypes {
  setIsMobile: (state: boolean) => void;
}

export const onResize = debounce(
  (setIsMobile: OnResizeTypes['setIsMobile']) => {
    const vh = window.innerHeight * 0.01;
    const vw = window.innerWidth;

    setIsMobile(vw < breakpointDesktop);
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    document.documentElement.style.setProperty('--vw', `${vw}px`);
  },
  200
);
