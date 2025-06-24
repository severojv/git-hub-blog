import styled from "styled-components";

export const ProfileContainer=styled.div`

    background-color: ${props=>props.theme['base-profile']};
    width: 54rem;
    height: 13.25rem;
    border-radius: 8px;
    display: flex;
`
export const ProfileImg=styled.div`
    margin: 2.5rem;
`
export const ProfileName=styled.div`
    margin-right: 2rem;
    display: flex;
    justify-content: space-between;

`
export const ProfileBio=styled.div`
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
export const ProfileInfo=styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2.5rem;
`
export const ProfileDescription = styled.p`
  font-size: 1rem;
  color: ${props => props.theme['base-text']};
  line-height: 1.6;
  margin: 0;
`