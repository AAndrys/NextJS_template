import { motion } from 'framer-motion';
import styled from 'styled-components';
import { fontNames } from 'utils/styles/fonts';
import { typography } from 'utils/styles/mixins';
import { ColorNames, colors } from 'utils/styles/theme';

import { TextProps } from './Text';

interface ElementProps {
  color: ColorNames;
  size: TextProps['size'];
  withUnderline?: boolean;
  transform?: TextProps['transform'];
  fontFamily?: TextProps['fontFamily'];
}

export const Element = styled(motion.p)<ElementProps>`
  ${({ size }) => typography(size)};
  ${({ fontFamily }) => fontFamily && `font-family: ${fontNames[fontFamily]}`};
  ${({ transform }) => transform && `text-transform: ${transform}`};
  color: ${({ color }) => colors[color]};
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
