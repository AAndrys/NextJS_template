import styled from 'styled-components';
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

export const MenuButton = styled.div``;
