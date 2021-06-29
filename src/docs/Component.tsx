import { DocumentedComponent } from "./shared";

export interface ComponentProps {
    comp: DocumentedComponent
}

export default function Component({ comp }: ComponentProps) {
    return (
        <article className="mb-5">
            <h2 className="mt-2">{comp.displayName}</h2>

            <h3>Props</h3>

            <table className="table table-bordered" style={{ backgroundColor: "var(--control-bg)" }}>
                <thead>
                    <tr>
                        <th>Component</th>
                        <th>Description</th>
                        <th>Type</th>
                        <th>Default value</th>
                    </tr>
                </thead>

                <tbody>
                    {comp.props && Object.keys(comp.props).map((prop: string) =>
                        <tr key={prop}>
                            <td>
                                <code style={{ fontWeight: comp.props[prop].required ? "bold" : undefined }}>{prop}</code>
                                {comp.props[prop].required && " (required)"}
                            </td>
                            <td>{comp.props[prop].description}</td>
                            <td>{comp.props[prop].tsType.raw || comp.props[prop].tsType.name}</td>
                            <td><code>{comp.props[prop].defaultValue?.value}</code></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </article>
    )
}