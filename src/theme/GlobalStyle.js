import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    *{
        transition: background 0.3s;
    }

    body{
        background: ${({ theme })=> theme.bgColor};
        color: ${({ theme })=> theme.textColor};
        position: relative;
        display: block;
        width: 100%;
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
        font-weight: 350;
        word-break: keep-all;
        work-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        transition: background 0.3s;
        text-align: justify;
        word-break: break-all;
        // work-wrap: break-word;

        @media screen and (max-width:768px) {
            font-size: 12px;
        }
    }

    .logo {
        font-size: 1.5rem !important;

        @media screen and (max-width:768px) {
            font-size: 1.2rem !important;
        }
    }

    img.profile {
        margin: auto;
        display: block;
        object-fit: cover;
        
        @media screen and (max-width:768px) {
            width: 70%;
        }

    }

    .hello {
        font-size: 2rem;

        @media screen and (max-width:768px) {
            font-size: 1.3rem;
        }
    }
    
    .introtext {
        font-size: 1.2rem;
        @media screen and (max-width: 768px) {
            font-size: 0.7rem;
        }
    }

    
    .center-content {
        right: 0;
        left: 0;
        margin-left: auto;
        margin-right: auto;
        width: 60%;

        @media screen and (max-width:768px) {
            width: 80%;
        }
    }

    .MuiImageListItemBar-title {
        padding: 0;
        font-size: 1.2rem !important;
        @media screen and (max-width:768px) {
            font-size: 0.8rem !important;
        }
    }

    .MuiImageListItemBar-subtitle {
        padding: 0;
        @media screen and (max-width:768px) {
            font-size: 0.2rem !important;
        }
    }

    .MuiImageListItemBar-titleWrap {
        padding: 1rem !important;
        @media screen and (max-width:768px){
            padding: 0.5rem !important;
        }
    }

`