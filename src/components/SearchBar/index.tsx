import { SearchBarContainer, SearchBarInput } from "./style";


export function SearchBar() {
    return (
        <SearchBarContainer>

            <span>
                <h3>Publicações</h3>
                <p>6 publicações</p>
            </span>
            <SearchBarInput>

                <input type="text" placeholder="Buscar conteudo" />
            </SearchBarInput>

        </SearchBarContainer>
    )
}