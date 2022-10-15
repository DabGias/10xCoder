import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Arial';
    }

    body {
        background-color: #3d3d3d;
    }
` 

export default GlobalStyle