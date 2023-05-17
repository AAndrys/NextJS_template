import React, { FunctionComponent, ReactNode } from 'react';

// import { pageMotionProps } from 'utils/styles/animations';
import * as S from './Layout.styles';

export interface LayoutProps {
  children: ReactNode | ReactNode[];
}

const defaultProps: Partial<LayoutProps> = {};

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <>
      {/* <CookieBar /> */}
      {/* <Header /> */}
      {/* <Menu /> */}

      <S.Main id="layout">{children}</S.Main>

      {/* <Footer  /> */}
    </>
  );
};

Layout.defaultProps = defaultProps;

export default Layout;
