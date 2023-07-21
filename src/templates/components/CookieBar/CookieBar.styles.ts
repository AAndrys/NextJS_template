import { motion } from 'framer-motion';
import styled from 'styled-components';
import { colors, layout } from 'utils/styles/theme';

interface CookieBarWrapperProps {}

export const TextWrapper = styled.div``;

export const CookieBarWrapper = styled(motion.div)<CookieBarWrapperProps>`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;

  background: ${colors.white};

  z-index: ${layout.zIndex.overlay};
`;

export const BottomContentWrapper = styled.div`
  & button {
    height: min-content;
    border-radius: 76px;
    background-color: ${colors.black};
  }
`;
