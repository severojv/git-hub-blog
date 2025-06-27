import { IssuesBody, IssuesContainer, IssuesTitle } from "./style";
import { Link } from "react-router-dom";
interface IssueProps {
    id: number
    title: string
    body: string
    created_at: string
}
export function Issues({ id, title, body, created_at }: IssueProps) {


    return (
        <IssuesContainer >

            <div key={id}>

                <Link to={`/issue/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <IssuesTitle >
                        <h4>{title}</h4>
                        <p>{new Date(created_at).toLocaleDateString("pt-BR")}</p>

                    </IssuesTitle>
                </Link>
                <IssuesBody>
                    <p>{body.slice(0, 150)}...</p>

                </IssuesBody>
            </div>

        </IssuesContainer>
    );
}
