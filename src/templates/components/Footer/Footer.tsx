import React, { FunctionComponent } from 'react';
import Link from 'next/link';

import * as S from './Footer.styles';

export interface FooterProps {}

const defaultProps: Partial<FooterProps> = {};

const Footer: FunctionComponent<FooterProps> = () => {
  return (
    <S.Wrapper>
      <S.VercelLogo
        src="/vercel.svg"
        alt="Vercel Logo"
        width={100}
        height={24}
        priority
      />

      <S.LinkContainer>
        <li>
          <Link href="/">Link</Link>
        </li>
        <li>
          <Link href="/">Link2</Link>
        </li>
        <li>
          <Link href="/">Link3</Link>
        </li>
      </S.LinkContainer>

      <small>Modified by AA &copy;</small>
    </S.Wrapper>
  );
};

Footer.defaultProps = defaultProps;

export default Footer;
