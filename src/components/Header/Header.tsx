import React, { FunctionComponent } from 'react';
import uniqueId from 'lodash/uniqueId';
import Link from 'next/link';
import { useGlobalStore } from 'store';
import SvgLogo from 'svgs/next.svg';

import AnimatedMenuIcon from 'components/AnimatedMenuIcon/AnimatedMenuIcon';

import * as S from './Header.styles';

export interface HeaderProps {}

const defaultProps: Partial<HeaderProps> = {};

const Header: FunctionComponent<HeaderProps> = ({ ...rest }) => {
  const { isMenuOpen, setIsMenuOpen } = useGlobalStore();

  const handleMenuClick = () => setIsMenuOpen(!isMenuOpen);

  return (
    <S.Wrapper {...rest}>
      <S.Logo>
        <SvgLogo />
      </S.Logo>

      <S.MenuButton onClick={handleMenuClick}>
        <AnimatedMenuIcon isMenuOpen={isMenuOpen} />
      </S.MenuButton>

      <S.Nav>
        {[
          { href: '/', label: 'Home' },
          { href: '/', label: 'About' },
          { href: '/', label: 'Ins' },
        ].map(({ href, label }) => (
          <Link key={uniqueId()} href={href}>
            {label}
          </Link>
        ))}
      </S.Nav>
    </S.Wrapper>
  );
};

Header.defaultProps = defaultProps;

export default Header;
