import React, { FunctionComponent, ReactNode } from 'react';
import { pageMotionProps } from 'utils/styles/animations';

import Header from 'components/Header/Header';
import Menu from 'components/Menu/Menu';

import * as S from './Layout.styles';

export interface LayoutProps {
  children: ReactNode | ReactNode[];
}

const defaultProps: Partial<LayoutProps> = {};

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <S.Wrapper>
      <Header />
      <Menu />

      <S.Main id="layout" {...pageMotionProps}>
        {children}
      </S.Main>
    </S.Wrapper>
  );
};

Layout.defaultProps = defaultProps;

export default Layout;
