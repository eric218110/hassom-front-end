import { createGlobalStyle } from "styled-components";

export const GlobaStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    p {
        font-size: ${(props) => props.theme.size.text};
    }
    body{
        background-color: ${(props) => props.theme.color.background.default};
        overflow-x: hidden;
    }
    a {
        text-decoration: none;
    }
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif
`;
