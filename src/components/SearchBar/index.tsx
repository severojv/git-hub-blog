import { useContext } from "react";
import { SearchBarContainer, SearchBarInput } from "./style";
import { GitContext } from "../../contextApiGit";
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from 'zod'
import { useForm } from "react-hook-form";


const SearchFormSchema = z.object({
    query: z.string(),
})
type SearchFormInputs = z.infer<typeof SearchFormSchema>

export function SearchBar() {
    const { IssuesGit, SearchIssues } = useContext(GitContext)

    const { register, handleSubmit } = useForm<SearchFormInputs>({
        resolver: zodResolver(SearchFormSchema),
    });

    async function handleSearchForm(data: SearchFormInputs) {
        await SearchIssues(data.query);
    }


    return (
        <SearchBarContainer>

            <span>
                <h3>Publicações</h3>
                <p>{IssuesGit.total_count} publicações</p>
            </span>
            <SearchBarInput onSubmit={handleSubmit(handleSearchForm)}>

                <input
                    type="text"
                    placeholder="Buscar conteudo"
                    {...register('query')} />
            </SearchBarInput>

        </SearchBarContainer>
    )
}