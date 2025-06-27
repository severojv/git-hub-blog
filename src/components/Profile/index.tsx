import { ProfileBio, ProfileContainer, ProfileDescription, ProfileImg, ProfileInfo, ProfileName } from "./style";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons/faUserGroup";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons/faArrowUpRightFromSquare";
import { useContext } from "react";
import { GitContext } from "../../contextApiGit";



export function Profile() {

    const { profileGit } = useContext(GitContext);
    

    return (


        <ProfileContainer>


            <ProfileImg>
                <img src={profileGit.avatar_url} alt="" />
            </ProfileImg>
            <ProfileInfo>

                <ProfileName>
                    <strong>{profileGit.login}</strong>
                    <a href={profileGit.html_url}>GIT-HUB  <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> </a>
                </ProfileName>
                <ProfileDescription>
                    <p>{profileGit.bio}</p>

                </ProfileDescription>
                <ProfileBio>
                    <span>
                        <FontAwesomeIcon icon={faGithub} />
                        <p>{profileGit.login}</p>
                    </span>
                    <span>
                        <FontAwesomeIcon icon={faBuilding} />
                        <p>{profileGit.company}</p>
                    </span>
                    <span>
                        <FontAwesomeIcon icon={faUserGroup} />
                        <p>{profileGit.followers}</p>
                    </span>
                </ProfileBio>
            </ProfileInfo>



        </ProfileContainer>

    )
}