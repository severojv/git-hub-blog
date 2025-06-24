import {HeaderContainer, HeaderContent} from "./style";
import Logo from "../../assets/Logo (2).svg";    
import { Profile } from "../Profile";

export function Cover (){

    return(

        <HeaderContainer>
                <img src={Logo} alt="Logo-git" />
            <HeaderContent>
                <Profile></Profile>
            </HeaderContent>
        </HeaderContainer>
    )
}