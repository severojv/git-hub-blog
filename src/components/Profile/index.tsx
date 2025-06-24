import { ProfileBio, ProfileContainer, ProfileDescription, ProfileImg, ProfileInfo, ProfileName } from "./style";
import Foto from "../../assets/avatar.svg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons/faUserGroup";
export function Profile() {
    return (
        <ProfileContainer>
            <ProfileImg>
                <img src={Foto} alt="" />
            </ProfileImg>
            <ProfileInfo>

                <ProfileName>
                    <strong>Nome</strong>
                    <a href="https://github.com/severojv">Git-Hub</a>
                </ProfileName>
                <ProfileDescription>
                    <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>

                </ProfileDescription>
                <ProfileBio>
                    <span>
                        <FontAwesomeIcon icon={faGithub} />
                        <p>Severojv</p>
                    </span>
                    <span>
                        <FontAwesomeIcon icon={faBuilding} />
                        <p>Rocketseat</p>
                    </span>
                    <span>
                        <FontAwesomeIcon icon={faUserGroup} />
                        <p>32 seguidores</p>
                    </span>
                </ProfileBio>
            </ProfileInfo>


        </ProfileContainer>

    )
}