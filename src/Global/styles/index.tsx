import { createGlobalStyle } from "styled-components";

export const GlobaStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        font-family: "Roboto", "Helvetica", "Arial", sans-serif;
        font-weight: ${(props) => props.theme.size.weight};
    }
    p {
        font-size: ${(props) => props.theme.size.text};
        
    }
    p, label, h1, h2, h3, h4, h5, h6{
        color: ${(prpos) => prpos.theme.color.text.default};
    }
    body{
        background-color: ${(props) => props.theme.color.background.default};
        overflow-x: hidden;
    }
    a {
        text-decoration: none;
    }
`;
