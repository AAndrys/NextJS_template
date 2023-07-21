import Image from 'next/image';
import styled from 'styled-components';
import { colors } from 'utils/styles/theme';

interface WrapperProps {}

export const Wrapper = styled.footer<WrapperProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${colors.white + '0f'};
  border-top: 1px solid ${colors.gray};

  padding: 120px 80px;
`;

export const LinkContainer = styled.ul`
  display: flex;

  & li {
    font-weight: bold;
    margin: 0 10px;
  }
`;

export const VercelLogo = styled(Image)`
  filter: invert(1);
`;
