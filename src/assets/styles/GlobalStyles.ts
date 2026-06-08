import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: ${theme.fonts.body};
    background-color: ${theme.colors.primary.pageBg};
    /* Subtle dot grid — signature crypto/trading look */
    background-image: radial-gradient(
      rgba(57, 255, 20, 0.045) 1px,
      transparent 1px
    );
    background-size: 24px 24px;
    color: ${theme.colors.primary.text};
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.fonts.heading};
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    font-family: ${theme.fonts.heading};
  }

  img {
    max-width: 100%;
    display: block;
  }

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: ${theme.colors.primary.pageBg};
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(57, 255, 20, 0.4);
    border-radius: 3px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${theme.colors.primary.accent};
  }

  ::selection {
    background: rgba(57, 255, 20, 0.25);
    color: ${theme.colors.primary.text};
  }
`;
