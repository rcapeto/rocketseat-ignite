import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
   :root {
      --bg: #f0f2f5;
      --red: #e52e4d;
      --blue: #5429cc;
      --blue-light: #6933ff;
      --text-title: #363f5f;
      --text-body: #969cb3;
      --shape: #fff;
      --green: #33cc95;
   }

   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }

   body {
      background-color: var(--bg);
      -webkit-font-smoothing: antialiased !important;
   }

   body,
   input,
   button,
   textarea {
      font-family: 'Poppins', sans-serif;
      font-weight: 400;
   }

   h1, h2, h3, h4, h5, h6, strong {
      font-weight: 600;
   }

   html {
      @media(max-width: 1080px) {
         font-size: 93.75%;
      }
      @media(max-width: 1080px) {
         font-size: 87.5%;
      }
   }

   button {
      cursor: pointer;
   }

   .content-container {
      max-width: 1120px;
      margin: 0 auto;
      width: 100%;
   }

   .hightlight {
      background: var(--green) !important;
      color: var(--shape);

      p,
      strong {
         color: var(--shape) !important;
      }
   }

   [disabled] {
      opacity: .6;
      cursor: not-allowed;
   }
`;

export default GlobalStyle;