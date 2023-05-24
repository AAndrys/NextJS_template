import Image from 'next/image';
import styled from 'styled-components';
import media from 'utils/styles/media.styles';
import { setVh } from 'utils/styles/mixins';
import { layout } from 'utils/styles/theme';

export const Wrapper = styled.div`
  min-height: ${setVh(100)};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 6rem 6rem 10rem;

  ${media.desktop} {
    padding: 4rem;
  }
`;

export const Description = styled.div`
  width: 100%;
  max-width: 1500px;

  display: inherit;
  justify-content: inherit;
  align-items: inherit;

  z-index: ${layout.zIndex.overContent};

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }

  & p,
  & div {
    display: flex;
    justify-content: center;
    position: fixed;
  }

  p {
    align-items: center;
    inset: 0 0 auto;
    padding: 3rem 1rem 1.4rem;
    border-bottom: 1px solid rgba(108, 108, 108, 0.25);
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 1),
      rgba(20, 20, 20, 0.5)
    );
    background-clip: padding-box;
    backdrop-filter: blur(24px);
  }

  div {
    height: 200px;

    align-items: flex-end;
    pointer-events: none;
    inset: auto 0 0;
    padding: 2rem;
    background: linear-gradient(to bottom, transparent 0%, rgb(0, 0, 0) 40%);
    z-index: ${layout.zIndex.overContent};
  }

  ${media.desktop} {
    & p,
    & div {
      position: relative;
    }

    p {
      padding: 1rem;

      background-color: rgba(20, 20, 20, 0.5);
      border: 1px solid rgba(108, 108, 108, 0.3);
      border-radius: 12px;
    }

    div {
      height: max-content;

      padding: 2rem;

      align-items: center;
      inset: unset;

      pointer-events: all;
    }
  }
`;

export const Code = styled.code`
  font-weight: 700;
`;

export const Grid = styled.div`
  max-width: 320px;

  display: grid;
  grid-template-columns: 1fr;

  margin-bottom: 120px;
  text-align: center;

  ${media.tablet} {
    grid-template-columns: repeat(2, 50%);
  }

  ${media.desktop} {
    max-width: 100%;

    grid-template-columns: repeat(4, minmax(25%, auto));

    margin: 0;
    text-align: left;
  }
`;

export const Card = styled.a`
  padding: 1rem 1.2rem;

  border-radius: 12px;
  background: rgba(100, 100, 100, 0);
  border: 1px solid rgba(108, 108, 108, 0);

  transition: background 200ms, border 200ms;

  span {
    display: inline-block;
    transition: transform 200ms;
  }

  h4 {
    margin-bottom: 1rem;
  }

  p {
    max-width: 30ch;
    opacity: 0.6;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background: rgba(100, 100, 100, 0.1);
      border: 1px solid rgba(108, 108, 108, 0.15);
    }

    &:hover span {
      transform: translateX(4px);
    }
  }
`;

export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  padding: 4rem 0;

  &::before,
  &::after {
    content: '';
    position: absolute;

    left: 50%;

    filter: blur(45px);
    transform: translateZ(0);
  }

  &::before {
    width: 480px;
    height: 360px;
    background: linear-gradient(
      to bottom right,
      rgba(1, 65, 255, 0),
      rgba(1, 65, 255, 0),
      rgba(1, 65, 255, 0.3)
    );

    border-radius: 50%;
    margin-left: -400px;
  }

  &::after {
    width: 240px;
    height: 180px;
    background: radial-gradient(rgba(1, 65, 255, 0.4), rgba(1, 65, 255, 0));

    z-index: -1;
  }
`;

export const VercelLogo = styled(Image)`
  filter: invert(1);
`;

export const Logo = styled(Image)`
  position: relative;
  filter: invert(1) drop-shadow(0 0 0.3rem #ffffff70);
`;
