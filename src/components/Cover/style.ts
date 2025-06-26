import 'styled-components'
import styled from 'styled-components'


export const HeaderContainer = styled.header`


    background-color: ${props => props.theme['base-post']};
    top: 0;
    left: 0;
    width: 100%;
    height: 18.5rem; /* ou o tamanho que quiser */

`

export const HeaderContent = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 2.875rem;
    img{
        margin-top: 4rem;
    
    }

`