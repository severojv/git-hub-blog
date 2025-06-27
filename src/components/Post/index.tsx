import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faCalendarDay, faChevronLeft, faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate, useParams } from 'react-router-dom';
import { CodeIssues, InfoUser, PostContainer, PostInfo, PostLinks, TextIssues } from "./style";
import { GitContext } from "../../contextApiGit";
import { useContext } from "react";



export function Post() {
    const { id } = useParams();
    const { IssuesGit ,profileGit} = useContext(GitContext);
    const navegate = useNavigate();

    const issue = IssuesGit.items.find((issue) => issue.id === Number(id));

    if (!issue) return <p>Issue não encontrada</p>;


    return (
        <PostContainer>
            <PostInfo>

                <PostLinks>
                    <a href="" onClick={() => navegate("/")}><FontAwesomeIcon icon={faChevronLeft} /> Voltar</a>
                    <a href={issue.html_url}>ver no github<FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                </PostLinks>
                <h1>{issue.title}</h1>
                <InfoUser>
                    <span>
                        <FontAwesomeIcon icon={faGithub} />
                        <p>{profileGit.login}</p>
                    </span>
                    <span>
                        <FontAwesomeIcon icon={faCalendarDay} />
                        <p>{profileGit.company}</p>
                    </span>
                    <span>
                        <FontAwesomeIcon icon={faComment} />
                        <p>{profileGit.followers} seguidores</p>
                    </span>
                </InfoUser>
            </PostInfo>
            <div>
                <TextIssues>
                    <p>{issue.body}</p>



                </TextIssues>
                <CodeIssues>
                    <code>
                        let foo = 42;   // foo is now a number
                        foo = ‘bar’;    // foo is now a string
                        foo = true;     // foo is now a boolean
                    </code>
                </CodeIssues>
            </div>

        </PostContainer>
    )
}