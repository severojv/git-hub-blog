import { useContext } from "react";
import { Issues } from "../../components/Issues";
import { Profile } from "../../components/Profile";
import { SearchBar } from "../../components/SearchBar";
import { HomeContainer, PostsContainer } from "./style";
import { GitContext } from "../../contextApiGit";

export function Home() {

    const { IssuesGit } = useContext(GitContext)

    return (
        <HomeContainer>

            <Profile></Profile>
            <SearchBar></SearchBar>
            <PostsContainer>
                {IssuesGit.items.map((issue) => (
                    <Issues
                        key={issue.id}
                        id={issue.id}
                        title={issue.title}
                        body={issue.body}
                        created_at={issue.created_at}
                    />
                ))}
            </PostsContainer>
        </HomeContainer>
    )
}