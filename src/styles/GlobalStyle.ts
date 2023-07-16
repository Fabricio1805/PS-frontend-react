import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  button  {
    cursor: pointer;
  }

  body{
    background-color: #27374D;
  }
  
  body, input, button{
    font: 400 1rem sans-serif;
  }

  @media(max-width: 720px) {
    html{
      font-size: 87.4%;
    }
  }

    @media(max-width: 1080px) {
    html{
      font-size: 93.75%;
    }
  }
`;

export default GlobalStyle;
