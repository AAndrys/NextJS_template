import React, { FunctionComponent } from 'react';
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
    </S.Wrapper>
  );
};

Header.defaultProps = defaultProps;

export default Header;
