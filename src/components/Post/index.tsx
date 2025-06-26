import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faCalendarDay, faChevronLeft, faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from 'react-router-dom';
import { CodeIssues, InfoUser, PostContainer, PostInfo, PostLinks, TextIssues } from "./style";


export function Post() {
    const navegate = useNavigate();

    return (
        <PostContainer>
            <PostInfo>

                <PostLinks>
                    <a href="" onClick={() => navegate("/")}><FontAwesomeIcon icon={faChevronLeft} /> Voltar</a>
                    <a href="">ver no github<FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                </PostLinks>
                <h1>JavaScript data types and data structures</h1>
                <InfoUser>
                    <span>
                        <FontAwesomeIcon icon={faGithub} />
                        <p>Severojv</p>
                    </span>
                    <span>
                        <FontAwesomeIcon icon={faCalendarDay} />
                        <p>Rocketseat</p>
                    </span>
                    <span>
                        <FontAwesomeIcon icon={faComment} />
                        <p>32 seguidores</p>
                    </span>
                </InfoUser>
            </PostInfo>
            <div>
                <TextIssues>
                    <p>Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.

                        Dynamic typing
                        JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:
                    </p>

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