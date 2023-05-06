import { motion } from 'framer-motion';
import styled from 'styled-components';
import {
  ColorNames,
  colors,
  // FontNames,
  // fonts,
  // validFontCategories,
} from 'utils/styles/theme';

import { TextProps } from './Text';

interface ElementProps {
  color: ColorNames;
  size: any;
  withUnderline?: boolean;
  transform?: TextProps['transform'];
  // fontFamily?: FontNames;
}

export const Element = styled(motion.p)<ElementProps>`
  ${({ transform }) => transform && `text-transform: ${transform}`};
  color: ${({ color }) => colors[color]};
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
