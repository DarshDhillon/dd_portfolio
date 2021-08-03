import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

html {
    scroll-behavior: smooth;
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
