import styled from "styled-components";

export const ProfileContainer = styled.div`

    background-color: ${props => props.theme['base-profile']};
    width: 54rem;
    height: 13.25rem;
    border-radius: 8px;
    display: flex;
`
export const ProfileImg = styled.div`
    margin: 2.5rem;
    img{
        max-width: 148px;
    }
`
export const ProfileName = styled.div`
    margin-right: 2rem;
    display: flex;
    justify-content: space-between;
    a{
        color: ${props=>props.theme.blue};
        
    }

`
export const ProfileBio = styled.div`
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
export const ProfileInfo = styled.div`
    flex-direction: column;
    margin-top: 2.5rem;
    width: 44rem;
`
export const ProfileDescription = styled.div`
  color: ${props => props.theme['base-text']};
  line-height: 1.6;
  margin: 0;
`