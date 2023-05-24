import React, { FunctionComponent } from 'react';
import { AnimatePresence } from 'framer-motion';
import { svgMotionProps } from 'utils/styles/animations';

import * as S from './AnimatedMenuIcon.styles';

export interface AnimatedMenuIconProps {
  isMenuOpen: boolean;
}

const defaultProps: Partial<AnimatedMenuIconProps> = {
  isMenuOpen: false,
};

const AnimatedMenuIcon: FunctionComponent<AnimatedMenuIconProps> = ({
  isMenuOpen,
}) => {
  const closeIcon = (
    <S.Svg
      key="close-icon"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <S.Path
        key="line-1"
        fill="none"
        strokeLinecap="round"
        stroke="#ffffff"
        strokeWidth="2"
        d="M18 6L6 18"
        {...svgMotionProps}
      />
      <S.Path
        key="line-2"
        fill="none"
        strokeLinecap="round"
        stroke="#ffffff"
        strokeWidth="2"
        d="M6 6L18 18"
        {...svgMotionProps}
      />
    </S.Svg>
  );

  const menuIcon = (
    <S.Svg
      key="menu-icon"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <S.Line
        key="line-1"
        x1="3"
        y1="12"
        x2="21"
        y2="12"
        strokeLinecap="round"
        stroke="#ffffff"
        strokeWidth="2"
        {...svgMotionProps}
      />
      <S.Line
        key="line-2"
        x1="3"
        y1="6"
        x2="21"
        y2="6"
        strokeLinecap="round"
        stroke="#ffffff"
        strokeWidth="2"
        {...svgMotionProps}
      />
      <S.Line
        key="line-3"
        x1="3"
        y1="18"
        x2="21"
        y2="18"
        strokeLinecap="round"
        stroke="#ffffff"
        strokeWidth="2"
        {...svgMotionProps}
      />
    </S.Svg>
  );

  return (
    <AnimatePresence mode="wait">
      {isMenuOpen ? closeIcon : menuIcon}
    </AnimatePresence>
  );
};

AnimatedMenuIcon.defaultProps = defaultProps;

export default AnimatedMenuIcon;
