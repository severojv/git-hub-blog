import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
<<<<<<< HEAD
        
    }
    :focus{
=======
        margin:0;
        padding: 0;
        box-sizing: border-box;
    }
    :focus{
        outline: 0;
        box-shadow: 0 0 0 2px ${props=>props.theme['base-background']};
>>>>>>> 63544e455a620b77e3eb5f0810f5b796570aac69
    }

    body{
        background-color: ${props => props.theme['base-background']};
        color: ${props=>props.theme['base-title']};
<<<<<<< HEAD
=======
        -webkit-font-smoothing:antaliased;
>>>>>>> 63544e455a620b77e3eb5f0810f5b796570aac69

    }
    border-style,input-security,textarea,button{
        font: 400 1rem nuni',sans-serif;
    }
    `

