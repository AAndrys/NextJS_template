import { motion } from 'framer-motion';
import styled from 'styled-components';
import { setVh } from 'utils/styles/mixins';

interface WrapperProps {}

export const Wrapper = styled.div<WrapperProps>`
  width: 100%;
  height: 100%;
  min-height: ${setVh(100)};
  position: relative;
`;

export const Main = styled(motion.main)``;
