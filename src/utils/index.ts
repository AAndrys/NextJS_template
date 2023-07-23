import debounce from 'lodash/debounce';

import { breakpointTablet } from './styles/vars';

interface OnResizeTypes {
  setIsMobile: (state: boolean) => void;
}

export const onResize = debounce(
  (setIsMobile: OnResizeTypes['setIsMobile']) => {
    const vh = window.innerHeight * 0.01;
    const vw = window.innerWidth;

    setIsMobile(vw < breakpointTablet);
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    document.documentElement.style.setProperty('--vw', `${vw}px`);
  },
  200
);
