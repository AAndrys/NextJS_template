import React, { FunctionComponent, useMemo } from 'react';
import { AnimatePresence } from 'framer-motion';
import uniqueId from 'lodash/uniqueId';
import Link from 'next/link';

import { useGlobalStore } from '../../store';

import * as A from './Menu.animations';
import * as S from './Menu.styles';

export interface MenuProps {}

const Menu: FunctionComponent<MenuProps> = ({ ...rest }) => {
  const { isMobile, isMenuOpen, setIsMenuOpen } = useGlobalStore();

  const mainNavigation = useMemo(
    () => (
      <S.NavList>
        {[
          { href: '/', label: 'Home' },
          { href: '/', label: 'About' },
          { href: '/', label: 'Ins' },
        ].map(({ href, label }) => (
          <li key={uniqueId()} onClick={() => setIsMenuOpen(false)}>
            <Link href={href}>{label}</Link>
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

  if (!isMobile) return null;

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
