import { createGlobalStyle } from "styled-components";

export const theme = {
  color: {
    black: "#000000",
    smokeyBlack: "#111111",
    eerieBlack: "#222222",
    jet: "#333333",
    blackOlive: "#444444",
    graniteGray: "#666666",
    spanishGray: "#999999",
    white: "#FFFFFF",
    spaceCadetDark: "#28284F",
    spaceCadet: "#2D2B56",
    hanPurple: "#5E36F4",
    lightestGrey: "#F8F8F8",
    cultured: "#E1EFFF",
    violetWeb: "#F894FC",
    brinkPink: "#F5628D",
    celeste: "#9EFEFE"
  },
  screens: {
    mobile: "320px",
    tablet: "767px",
    laptop: "1025px",
    desktop: "1280px"
  },
  height: {
    eight: "8px",
    twelve: "12px",
    sixteen: "16px",
    twentyFour: "24px",
    thirtyTwo: "32px",
    fourtyEight: "48px"
  },
  space: {
    one: "8px",
    two: "12px",
    three: "16px",
    four: "24px",
    five: "32px",
    six: "48px"
  },
  font: {
    primary: "freight-sans-pro",
    secondary: "arial, sans-serif"
  }
};

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${theme.font.primary},${theme.font.secondary};
    text-align: center;
    background: ${theme.color.lightestGrey};
    color: ${theme.color.black};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: ubuntu-mono, monospace;
  }

  .app-header {
    border-bottom: 3px solid ${theme.color.black};
    text-align: left;
    line-height: ${theme.height.fourtyEight};
  }

  .article-header {
    border-bottom: 3px solid ${theme.color.black};
    text-align: left;
  }


  h1, h2, h3, h4, h5, h6 {
    font-weight: 800
  }

  h1 {
    font-size: 2rem;
  }

  p {
    font-size: 18px;
    padding-bottom: 16px;
    line-height: 24px;
  }

  .app-footer {
    background: ${theme.color.spaceCadetDark};
    color: ${theme.color.lightestGrey};

    & a {
      color: ${theme.color.lightestGrey}
    }
  }

  .wp-block-image {
    padding-bottom: ${theme.height.sixteen}
  }
`;
