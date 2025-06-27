import { createContext, useEffect, useState, type ReactNode } from "react";
import { api } from "../lib/axios";


interface GitType {
    profileGit: GitProfileProps,
    fetchTransactions: () => Promise<void>
    IssuesGit: GitIssuesProps,
    SearchIssues: (query: string) => Promise<void>
}

interface GitProfileProps {
    avatar_url: string;
    html_url: string;
    followers: number;
    login: string;
    bio: string;
    company?: string;
}
interface GitProvaiderProps {
    children: ReactNode
}

interface Issue {
    id: number;
    title: string;
    body: string;
    created_at: string;
    html_url: string;
    user: {
        login: string;
    };
}

interface GitIssuesProps {
    total_count: number;
    items: Issue[];
}


// eslint-disable-next-line react-refresh/only-export-components
export const GitContext = createContext({} as GitType);

export function GitContextProvaider({ children }: GitProvaiderProps) {


    const [profileGit, SetProfileInfo] = useState<GitProfileProps>({} as GitProfileProps);

    async function fetchTransactions() {
        const response = await api.get('users/severojv');
        SetProfileInfo(response.data);
    }

    const [IssuesGit, setIssuesGit] = useState<GitIssuesProps>({
        total_count: 0,
        items: [],
    });

    async function fetchIssuesGit() {
        const reponse = await api.get('search/issues?q=repo:severojv/git-hub-blog');
        setIssuesGit(reponse.data);
    }

    async function SearchIssues(query?: string) {
        const response = await api.get('search/issues', {
            params: {
                q: `repo:severojv/git-hub-blog ${query}`

            }
        })


        setIssuesGit(response.data);
    }
    useEffect(() => {
        fetchTransactions();
        fetchIssuesGit();
    }, [])
    return (
        <GitContext.Provider value={{ profileGit, fetchTransactions, IssuesGit, SearchIssues }}>
            {children}
        </GitContext.Provider>
    );
}