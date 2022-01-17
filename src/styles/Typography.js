import { createGlobalStyle } from "styled-components";

import font from "../assets/fonts/FrenteH1-Regular-webfont.woff";

const Typography = createGlobalStyle`
  @font-face {
    font-family: Frente;
    src: url(${font});
  }

  html {
    font-family: Frente, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: gray;
  }
`;

export default Typography;
