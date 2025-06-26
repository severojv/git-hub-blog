import styled from "styled-components";
import 'styled-components'

export const SearchBarContainer = styled.div`
    flex-direction: column;
    width: 54rem;
    margin-top: 2rem;
    
    span{
        display: flex;
        justify-content: space-between;

    }

`
export const SearchBarInput = styled.form`
    margin-top: 2rem;
    display: flex;
    input{
        flex: 1;
        border-radius: 6px;
        border: 0;
        background-color: ${props => props.theme['base-input']};
        color:${props => props.theme['base-text']};
        padding: 1rem;

        

        &::placeholder{
            color: ${props => props.theme['base-label']};

        }
    }

`