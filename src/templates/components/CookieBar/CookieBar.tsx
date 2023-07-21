import React, { FunctionComponent, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Cookies from 'js-cookie';
import Button from 'templates/components/Button/Button';
import { useEffectOnce } from 'usehooks-ts';
import { pageMotionProps } from 'utils/styles/animations';
import { ColorNames } from 'utils/styles/theme';

import Text from 'components/Text/Text';

import * as S from './CookieBar.styles';

export interface CookieBarProps {}

const defaultProps: Partial<CookieBarProps> = {};

const CookieBar: FunctionComponent<CookieBarProps> = ({ ...rest }) => {
  const [isVisible, setIsVisible] = useState(false);

  const checkCookies = () => {
    const cookies = Cookies.get('nextTemplate.cookiesConsent');
    setIsVisible(!cookies);
  };

  const acceptCookies = () => {
    Cookies.set('nextTemplate.cookiesConsent', 'true', { expires: 365 });
    setIsVisible(false);
  };

  useEffectOnce(checkCookies);

  return (
    <AnimatePresence initial>
      {isVisible && (
        <S.CookieBarWrapper {...pageMotionProps} {...rest}>
          <S.TextWrapper>
            <Text
              text="Cookie bar example"
              size="bodyLight"
              color={ColorNames.black}
            />
          </S.TextWrapper>

          <S.BottomContentWrapper>
            <Button label="Accept" onClick={acceptCookies} />
          </S.BottomContentWrapper>
        </S.CookieBarWrapper>
      )}
    </AnimatePresence>
  );
};

CookieBar.defaultProps = defaultProps;

export default CookieBar;
