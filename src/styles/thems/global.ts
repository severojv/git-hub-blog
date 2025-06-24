import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        
    }
    :focus{
    }

    body{
        background-color: ${props => props.theme['base-background']};
        color: ${props=>props.theme['base-title']};

    }
    border-style,input-security,textarea,button{
        font: 400 1rem nuni',sans-serif;
    }
    `

