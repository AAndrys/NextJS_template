import styled from 'styled-components';
import { colors } from 'utils/styles/theme';

interface WrapperProps {}

export const Wrapper = styled.button<WrapperProps>`
  display: flex;
  align-items: flex-start;

  padding: 12px 20px;
  border-radius: 76px;

  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${colors.black}C7;
  }

  span {
    font-weight: 600;
  }
`;

export const Anchor = styled.a`
  width: fit-content;
`;
