import { Issues } from "../../components/Issues";
import { Profile } from "../../components/Profile";
import { SearchBar } from "../../components/SearchBar";
import { HomeContainer, PostsContainer } from "./style";

export function Home() {
    return (
        <HomeContainer>

            <Profile></Profile>
            <SearchBar></SearchBar>
            <PostsContainer>
                <Issues />
                <Issues />


            </PostsContainer>
        </HomeContainer>
    )
}