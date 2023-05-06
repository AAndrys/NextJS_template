import React from 'react';
import { AnimatePresence, MotionConfig } from 'framer-motion';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { useEffectOnce } from 'usehooks-ts';
import { onResize } from 'utils';
import GlobalStyles from 'utils/styles/globalStyles';
import theme from 'utils/styles/theme';

import Head from 'components/Head/Head';
import Layout from 'components/Layout/Layout';

import 'styles/globals.css';

const App = ({ Component, pageProps, router }: AppProps) => {
  useEffectOnce(() => {
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  });

  return (
    <React.StrictMode>
      <ThemeProvider theme={{ ...theme, locale: router.locale }}>
        <MotionConfig>
          <GlobalStyles />
          <Head
            title={''}
            description={''}
            ogTitle={''}
            ogDescription={''}
            ogType={''}
            ogImage={{
              url: '',
            }}
          />
          <Layout>
            <AnimatePresence
              mode="wait"
              onExitComplete={() =>
                typeof window !== 'undefined' && window.scrollTo({ top: 0 })
              }
            >
              <Component {...pageProps} />
            </AnimatePresence>
          </Layout>
        </MotionConfig>
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default App;
