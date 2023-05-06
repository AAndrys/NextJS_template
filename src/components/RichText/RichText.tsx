import React, { FunctionComponent } from 'react';
import { compiler } from 'markdown-to-jsx';

import * as S from './RichText.styles';

export interface RichTextProps {
  richText: string;
  defaultSpacing?: boolean;
}

const defaultProps: Partial<RichTextProps> = {
  richText: '',
  defaultSpacing: false,
};

const RichText: FunctionComponent<RichTextProps> = ({
  defaultSpacing,
  richText,
  ...rest
}) => {
  const RTE = compiler(richText || '', {
    wrapper: null,
    overrides: { a: <a target="_blank"></a> },
  });

  const regularRTE = <div {...rest}>{RTE}</div>;
  const spacedRTE = <S.DefaultSpacing {...rest}>{RTE}</S.DefaultSpacing>;

  return <>{defaultSpacing ? spacedRTE : regularRTE}</>;
};

RichText.defaultProps = defaultProps;

export default RichText;
