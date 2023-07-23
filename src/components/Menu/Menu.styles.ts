import { motion } from 'framer-motion';
import styled from 'styled-components';
import { setVh, typography } from 'utils/styles/mixins';
import { colors, layout } from 'utils/styles/theme';

interface WrapperProps {}

export const Wrapper = styled(motion.div)<WrapperProps>`
  width: 100%;
  height: ${setVh(100)};

  display: flex;
  justify-content: space-between;
  flex-direction: column;

  padding: 60px 20px;

  position: fixed;
  inset: 0;
  z-index: ${layout.zIndex.menuModal};

  background-color: ${colors.black};
`;

export const Container = styled.div`
  height: 100%;

  position: relative;

  display: grid;
  place-items: center;
`;

export const MenuContent = styled.div`
  position: relative;

  display: grid;
  grid-row-gap: 56px;
`;

export const NavList = styled.ul`
  display: grid;

  & li {
    margin: 15px 0;
    a {
      ${typography('h2')}
    }

    @media (hover: hover) {
      &:hover {
        transform: scale(1.05);
      }
    }
  }
`;

export const Nav = styled.nav`
  position: relative;
  height: max-content;
`;
