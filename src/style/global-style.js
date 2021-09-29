import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset};
    * {margin:0; padding:0; -webkit-box-sizing:border-box; -moz-box-sizing:border-box; box-sizing:border-box;}
    html,body {
        height: 100%;
        font-size:16px;
        color:#000;
        /* font-family: 'Noto Sans KR', sans-serif; */
    }
    body {
        font-weight:400;
    }
    img { max-width:100%; max-height:100%; }
    a {text-decoration:none; color:inherit; }
    button{border:0;background:transparent; cursor:pointer;}
`;

export default GlobalStyle;
