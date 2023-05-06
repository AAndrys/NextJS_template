import styled from 'styled-components';
import { setVh } from 'utils/styles/mixins';

export const Main = styled.main`
  min-height: ${setVh(100)};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 6rem;
`;

export const Description = styled.div`
  min-height: ${setVh(100)};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 6rem;
`;
