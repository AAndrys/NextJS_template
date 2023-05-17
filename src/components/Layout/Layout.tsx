import React, { FunctionComponent, ReactNode } from 'react';
import { pageMotionProps } from 'utils/styles/animations';

import * as S from './Layout.styles';

export interface LayoutProps {
  children: ReactNode | ReactNode[];
}

const defaultProps: Partial<LayoutProps> = {};

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <S.Wrapper>
      {/* <CookieBar /> */}
      {/* <Header /> */}
      {/* <Menu /> */}

      <S.Main id="layout" {...pageMotionProps}>
        {children}
      </S.Main>

      {/* <Footer  /> */}
    </S.Wrapper>
  );
};

Layout.defaultProps = defaultProps;

export default Layout;
