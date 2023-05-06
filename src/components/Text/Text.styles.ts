import { motion } from 'framer-motion';
import styled from 'styled-components';
import { setTypography } from 'utils/styles/mixins';
import {
  ColorNames,
  colors,
  FontNames,
  fonts,
  validFontCategories,
} from 'utils/styles/theme';

import { TextProps } from './Text';

interface ElementProps {
  color: ColorNames;
  size: (typeof validFontCategories)[number];
  withUnderline?: boolean;
  transform?: TextProps['transform'];
  fontFamily?: FontNames;
}

export const Element = styled(motion.p)<ElementProps>`
  ${({ size }) => setTypography(size)};
  ${({ transform }) => transform && `text-transform: ${transform}`};
  color: ${({ color }) => colors[color]};
  ${({ fontFamily }) => fontFamily && `font-family: ${fonts.face[fontFamily]}`};
  user-select: none;
  text-decoration: none;
  position: relative;

  ${({ withUnderline, color }) =>
    withUnderline &&
    `
    cursor: pointer;

    &:after {
      content: '';
      width: 100%;
      height: 3px;
      position: absolute;
      left: 0;
      bottom: -30px;
      background: ${colors[color]};
    }
  `}
`;
