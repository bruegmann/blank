import { container } from "../../recipes"
import Component from "../Component"
import docs from "../data/docs.json"
import { DocumentedComponent } from "../shared"

export interface ComponentsPageProps {

}

export default function ComponentsPage({ }: ComponentsPageProps) {
    return (
        <div className={container}>
            {docs && Object.values(docs).map((comp: DocumentedComponent, index: number) =>
                <Component key={index} comp={comp} />
            )}
        </div>
    )
}