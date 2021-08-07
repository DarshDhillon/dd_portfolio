import { createGlobalStyle } from 'styled-components';
import backgroundImage from '../assets/images/dd_port_background2.jpg';

const GlobalStyle = createGlobalStyle`

:root {
    --mainGreen: #289c6c;
    --mainCharcoal: #202529;
    --glassCharcoal: rgba(32, 37, 41, 0.4);
    --glassWhite: rgba(255, 255, 255, 0.7);
}

html {
    scroll-behavior: smooth;
}

body {
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}

*, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    border: none;
    padding: 0;
    font-family: 'Prompt', sans-serif;
}

`;

export default GlobalStyle;
