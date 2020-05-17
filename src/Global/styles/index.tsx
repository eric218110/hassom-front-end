import { createGlobalStyle } from "styled-components";

export const GlobaStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        position: relative;
        font-family: "Roboto", "Helvetica", "Arial", sans-serif;
        color: ${(prpos) => prpos.theme.color.text.default};
        font-weight: ${(props) => props.theme.size.weight};
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
`;
