import React, { useMemo, useState } from 'react';
import NextHead from 'next/head';
import { useRouter } from 'next/router';
import { useEffectOnce } from 'usehooks-ts';
import { colors } from 'utils/styles/theme';

export interface HeadProps {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  ogType: string;
  ogImage: {
    url: string;
  };
}

const Head: React.FunctionComponent<HeadProps> = ({
  title,
  description,
  ogTitle,
  ogDescription,
  ogType,
  ogImage,
}) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const router = useRouter();

  useEffectOnce(() => setIsMounted(true));

  const fullPath = useMemo(
    () => (isMounted && window.location.href) || '',
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isMounted, router?.asPath]
  );

  const domain = useMemo(
    () => (isMounted && window.location.host) || '',
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isMounted, router?.asPath]
  );

  return (
    <NextHead>
      <title>{title || ''}</title>
      <meta name="robots" content="index,follow" />
      <meta name="theme-color" content={colors.black} />
      <meta name="description" content={description || ''} />

      <meta property="og:url" content={fullPath} />
      <meta property="og:type" content={ogType || ''} />
      <meta property="og:title" content={ogTitle || ''} />
      <meta property="og:description" content={ogDescription || ''} />
      {ogImage?.url && <meta property="og:image" content={ogImage.url} />}

      <meta name="msapplication-TileColor" content={colors.black} />
      <link rel="icon" href={'/favicon.ico?v=2'} />
      <link
        rel="manifest"
        href={'/manifest.json'}
        crossOrigin="use-credentials"
      />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={'/favicon-32x32.png?v=2'}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={'/favicon-16x16.png?v=2'}
      />
      <link
        rel="mask-icon"
        href={'/safari-pinned-tab.svg?v=2'}
        color={colors.black}
      />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />

      <meta property="twitter:domain" content={domain} />
      <meta property="twitter:url" content={fullPath} />
      <meta property="twitter:title" content={title || ''} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:description" content={description || ''} />
      {ogImage?.url && <meta name="twitter:image" content={ogImage.url} />}

      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
      />
    </NextHead>
  );
};

export default Head;
