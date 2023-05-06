import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';

import { colors } from './theme';

const styles = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    user-select: text;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ::selection {
    background: ${colors.black};
    color: ${colors.white};
    text-shadow: none;
  }

  ::-moz-selection {
    background: ${colors.black};
    color: ${colors.white};
    text-shadow: none;
  }

  html,
  body {
    width: 100%;
    height: min-content;
  }

  html {
    overflow-x: hidden;
    scrollbar-width: none;
    -ms-overflow-style: -ms-autohiding-scrollbar;
  }

  body {
    height: 100vh; /* Fallback for browsers that do not support Custom Properties */
    height: calc(var(--vh, 1vh) * 100);
    background: ${colors.black};
    color: ${colors.white};
  }

  button,
  input,
  textarea,
  select {
    -webkit-appearance: none;
    background: none;
    font-family: inherit;
    border: none;
    color: inherit;
    font-size: inherit;
    font-weight: inherit;
    text-transform: inherit;
    border-radius: 0;
  }

  input,
  textarea,
  select {
    outline: none;
  }

  svg {
    outline: none;
    display: block;
  }

  button,
  div,
  a,
  span {
    -webkit-tap-highlight-color: transparent;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  .accessibility-focus :focus,
  .accessibility-focus button:focus {
    outline: auto 5px Highlight; /* for non-webkit browsers */
    outline: auto 5px -webkit-focus-ring-color; /* for webkit browsers */
  }

  @media (prefers-color-scheme: dark) {
    html {
      color-scheme: dark;
    }
  }
`;

export default createGlobalStyle`
  ${reset}
  ${styles}
`;
