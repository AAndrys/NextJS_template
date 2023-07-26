import { useEffect } from 'react';

export default function useDisableScroll(disable = true) {
  useEffect(() => {
    disable
      ? (document.documentElement.style.overflow = 'hidden')
      : (document.documentElement.style.overflow = '');

    return () => {
      document.documentElement.style.overflow = '';
    };
  }, [disable]);
}
