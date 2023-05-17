import React from 'react';
import { AnimatePresence, MotionConfig } from 'framer-motion';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { useEffectOnce } from 'usehooks-ts';
import { onResize } from 'utils';
import { HEAD_TEMP_DATA } from 'utils/data';
import theme from 'utils/styles/theme';

import Head from 'components/Head/Head';
import Layout from 'components/Layout/Layout';

const App = ({ Component, pageProps, router }: AppProps) => {
  useEffectOnce(() => {
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  });

  return (
    <React.StrictMode>
      <ThemeProvider theme={{ ...theme, locale: router.locale }}>
        <MotionConfig>
          <Head {...HEAD_TEMP_DATA} />
          <Layout>
            <AnimatePresence
              mode="wait"
              onExitComplete={() =>
                typeof window !== 'undefined' && window.scrollTo({ top: 0 })
              }
            >
              <Component router={router} {...pageProps} />
            </AnimatePresence>
          </Layout>
        </MotionConfig>
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default App;
