<<<<<<< HEAD
import { ProfileBio, ProfileContainer, ProfileDescription, ProfileImg, ProfileInfo, ProfileName } from "./style";
import Foto from "../../assets/avatar.svg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons/faUserGroup";
=======
import { ProfileBio, ProfileContainer, ProfileImg, ProfileName } from "./style";
import Foto from "../../assets/avatar.svg";

>>>>>>> 63544e455a620b77e3eb5f0810f5b796570aac69
export function Profile() {
    return (
        <ProfileContainer>
            <ProfileImg>
                <img src={Foto} alt="" />
            </ProfileImg>
<<<<<<< HEAD
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
=======
            <ProfileName>
                <strong>Nome</strong>

            </ProfileName>
            <ProfileBio>
                <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>
            </ProfileBio>
>>>>>>> 63544e455a620b77e3eb5f0810f5b796570aac69


        </ProfileContainer>

    )
}