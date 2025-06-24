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
    


`