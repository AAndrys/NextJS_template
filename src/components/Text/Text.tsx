import React, { FunctionComponent } from 'react';
import { ColorNames, FontNames, validFontCategories } from 'utils/styles/theme';

import * as S from './Text.styles';

export interface TextProps {
  text: string;
  size: (typeof validFontCategories)[number];
  color?: ColorNames;
  as?: any;
  transform?: 'uppercase' | 'capitalize' | 'lowercase';
  fontFamily?: FontNames;
  [x: string]: any;
}

const defaultProps: Partial<TextProps> = {
  color: ColorNames.white,
  size: 'body',
};

const Text: FunctionComponent<TextProps> = ({
  text,
  size,
  as,
  color,
  transform,
  fontFamily,
  ...rest
}) => {
  return (
    <S.Element
      as={as}
      size={size}
      color={color}
      transform={transform}
      fontFamily={fontFamily}
      {...rest}
    >
      {text}
    </S.Element>
  );
};

Text.defaultProps = defaultProps;

export default Text;
