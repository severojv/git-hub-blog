import {HeaderContainer, HeaderContent} from "./style";
import Logo from "../../assets/Logo (2).svg";    

export function Cover (){

    return(

        <HeaderContainer>
            <HeaderContent>
                <img src={Logo} alt="Logo-git" />
               


            </HeaderContent>
        </HeaderContainer>
    )
}