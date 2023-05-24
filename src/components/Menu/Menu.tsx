import React, { FunctionComponent, useMemo } from 'react';
import { AnimatePresence } from 'framer-motion';

import { useGlobalStore } from '../../store';

import * as A from './Menu.animations';
import * as S from './Menu.styles';

export interface MenuProps {}

const Menu: FunctionComponent<MenuProps> = ({ ...rest }) => {
  const { isMenuOpen, setIsMenuOpen } = useGlobalStore();

  const mainNavigation = useMemo(
    () => (
      <S.NavList>
        {[].map(({ href, label }) => (
          <li key={href + label} onClick={() => setIsMenuOpen(false)}>
            {/* <LinkComp href={href}>{label}</LinkComp> */}
          </li>
        ))}
      </S.NavList>
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const mainMenu = (
    <S.MenuContent>
      <S.Nav>{mainNavigation}</S.Nav>
    </S.MenuContent>
  );

  return (
    <AnimatePresence>
      {isMenuOpen && (
        <S.Wrapper
          role="modal"
          initial="closed"
          animate="open"
          exit="closed"
          variants={A.sidebarAnimation}
          {...rest}
        >
          <S.Container>{mainMenu}</S.Container>
        </S.Wrapper>
      )}
    </AnimatePresence>
  );
};

export default Menu;
