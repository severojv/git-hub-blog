import styled from "styled-components";
import 'styled-components';

export const IssuesContainer=styled.div`
    background-color: ${props=>props.theme['base-post']};
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
export const IssuesTitle=styled.div`
    display: flex;
    justify-content:space-between;
    margin-left: 32px;
    margin-right: 32px; 
    margin-top: 32px;

`
