import styled from "styled-components";
import 'styled-components'

export const PostContainer = styled.div`
    max-width: 54rem;
`

export const PostInfo = styled.div`
    background-color: ${props => props.theme['base-profile']};
    height: 10.5rem;
    border-radius: 8px;
    h1{
        margin-left: 2rem;
        margin-right: 2rem;
        margin-top: 1rem;
    }
`
export const PostLinks = styled.div`
    display: flex;
    justify-content: space-between;
    margin-right: 2rem;
    margin-left: 2rem;
`

export const InfoUser = styled.div`
        margin-left: 2rem;
        margin-top: 1.5rem;
        display: flex;
        align-items: center;
        gap: 1rem;
    span{
        display: flex;
        align-items: center;
        gap: 1rem;
    }
    p{
        margin: 0;
    }
`
export const TextIssues = styled.div`
    margin-left: 2rem;
    margin-right: 2rem;
    margin-top: 2.5rem;
`

export const CodeIssues =styled.div`
    margin-top: 2rem;
    margin-left: 2rem;
    margin-right: 2rem;
    background-color: ${props=>props.theme['base-boder']};
`