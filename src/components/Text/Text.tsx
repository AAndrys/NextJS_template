import React, { FunctionComponent } from 'react';
import { FontNames, TypographyNames } from 'utils/styles/fonts';
import { ColorNames } from 'utils/styles/theme';

import { EnumToKey } from '../../../types/global';

import * as S from './Text.styles';

export interface TextProps {
  text: string;
  size: EnumToKey<typeof TypographyNames>;
  color?: EnumToKey<typeof ColorNames>;
  as?: any;
  transform?: 'uppercase' | 'capitalize' | 'lowercase';
  fontFamily?: EnumToKey<typeof FontNames>;
  [x: string]: any;
}

const defaultProps: Partial<TextProps> = {
  color: ColorNames.white,
  size: 'bodyLight',
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
