import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
    ${reset}
    body{
        background: ${({ theme })=> theme.bgColor};
        color: ${({ theme })=> theme.textColor};
        position: relative;
        display: block;
        width: 90%;
        height: 100%;
        line-height: 1.5;
        margin: 0 auto;
        font-family: 
            "Montserrat",
            "Helvetica Neue",
            "NanumSquare",
            "Noto Sans",
            "Noto Sans CJK KR",
            sans-serif;
        word-break: keep-all;
        work-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;

        @media screen and (max-width:768px) {
            font-size: 12px
        }
    }
`