import styled from 'styled-components';
import media from 'utils/styles/media.styles';
import { typography } from 'utils/styles/mixins';
import { layout } from 'utils/styles/theme';

interface WrapperProps {}

export const Wrapper = styled.header<WrapperProps>`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${layout.zIndex.header};

  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

export const Logo = styled.div`
  cursor: pointer;

  svg {
    height: 25px;
  }
`;

export const MenuButton = styled.div`
  ${media.tablet} {
    display: none;
  }
`;

export const Nav = styled.nav`
  display: none;

  ${media.tablet} {
    & a {
      display: inline-block;

      ${typography('h5')};
      margin: 0 0 0 30px;

      @media (hover: hover) {
        &:hover {
          transform: scale(1.05);
        }
      }
    }
  }
`;
