import React, { FunctionComponent, ReactNode } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Text from 'components/Text/Text';

import * as S from './Button.styles';

export interface ButtonProps {
  label: string;
  href?: string;
  target?: string;
  onClick?: () => void;
}

const defaultProps: Partial<ButtonProps> = {
  label: 'Example',
  target: '_self',
};

const Button: FunctionComponent<ButtonProps> = ({
  label,
  href,
  onClick,
  target,
  ...rest
}) => {
  const router = useRouter();

  const LinkElement = ({ children }: { children: ReactNode }) =>
    href ? (
      <Link href={href} passHref>
        <S.Anchor rel="noreferrer" target={target} aria-label={label}>
          {children}
        </S.Anchor>
      </Link>
    ) : (
      <>{children}</>
    );

  return (
    <LinkElement>
      <S.Wrapper
        tabIndex={0}
        aria-label={label}
        role="button"
        onClick={() => (href ? router.push(href) : onClick && onClick())}
        {...rest}
      >
        <Text as="span" size="bodyRegular" text={label} />
      </S.Wrapper>
    </LinkElement>
  );
};

Button.defaultProps = defaultProps;

export default Button;
