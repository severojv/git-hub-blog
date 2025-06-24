import { ProfileBio, ProfileContainer, ProfileImg, ProfileName } from "./style";
import Foto from "../../assets/avatar.svg";

export function Profile() {
    return (
        <ProfileContainer>
            <ProfileImg>
                <img src={Foto} alt="" />
            </ProfileImg>
            <ProfileName>
                <strong>Nome</strong>

            </ProfileName>
            <ProfileBio>
                <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>
            </ProfileBio>


        </ProfileContainer>

    )
}