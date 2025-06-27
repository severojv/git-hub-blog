import { createContext, useEffect, useState, type ReactNode } from "react";
import { api } from "../lib/axios";


interface GitType {
    profileGit: GitProfileProps,
    fetchTransactions: () => Promise<void>

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

// eslint-disable-next-line react-refresh/only-export-components
export const GitContext = createContext({} as GitType);

export function GitContextProvaider({ children }: GitProvaiderProps) {


    const [profileGit, SetProfileInfo] = useState<GitProfileProps>({} as GitProfileProps);

    async function fetchTransactions() {
        const response = await api.get('users/severojv');
        SetProfileInfo(response.data);
    }
    useEffect(() => {
        fetchTransactions();
    }, [])




    return (
        <GitContext.Provider value={{ profileGit, fetchTransactions }}>
            {children}
        </GitContext.Provider>
    );
}