import { motion } from 'framer-motion';
import styled from 'styled-components';
import { setVh } from 'utils/styles/mixins';

export const Main = styled(motion.main)`
  width: 100%;
  height: 100%;
  min-height: ${setVh(100)};

  position: relative;

  opacity: 1;
`;
