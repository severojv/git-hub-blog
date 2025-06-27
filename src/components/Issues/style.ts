import styled from "styled-components";
import 'styled-components';

export const IssuesContainer = styled.div`
    background-color: ${props => props.theme['base-post']};
    height: 13.5rem;
    width: 26rem;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    span{
       margin-left: 32px;
       margin-right: 32px;  
       margin-top: 20px;
    }

`
export const IssuesTitle = styled.div`
justify-content:space-between;
    display: flex;
    margin-left: 32px;
    margin-right: 32px; 
    margin-top: 32px;

`
export const IssuesBody = styled.div`
    display: flex;
    margin-left: 32px;
    margin-right: 32px; 
    margin-top: 32px;
`