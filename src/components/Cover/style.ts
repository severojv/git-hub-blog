<<<<<<< HEAD
import 'styled-components'
import styled from 'styled-components'


export const HeaderContainer = styled.header`


    background-color: ${props=>props.theme['base-post']};
position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 18.5rem; /* ou o tamanho que quiser */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  z-index: 999; /* importante para ficar acima de outros elementos */
`

export const HeaderContent = styled.div`
    display: flex;
    


=======
import styled from "styled-components";

export const HeaderContainer = styled.header`

    padding: 2.5rem 0 7.5rem;
    background-color: ${props => props.theme['base-profile']};

    position: fixed;       
    top: 0;                
    left: 0;
    width: 100%;          
    height: 18.5rem;  

    display: flex;
    align-items: center;
    justify-content: center;

`
export const HeaderContent = styled.div`
   
>>>>>>> 63544e455a620b77e3eb5f0810f5b796570aac69
`