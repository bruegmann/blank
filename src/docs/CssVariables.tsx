import { useEffect, useState } from "react"

export interface CssVariablesProps {

}

export default function CssVariables({ }: CssVariablesProps) {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)")
    const [cssVariables, setCssVariables] = useState<string[]>([])

    const initCssVariables = () => {
        const list = Array.from(document.styleSheets)
            .filter(
                sheet =>
                    sheet.href === null || sheet.href.startsWith(window.location.origin)
            )
            .reduce(
                (acc: any, sheet: any) =>
                (acc = [
                    ...acc,
                    ...Array.from<any>(sheet.cssRules).reduce(
                        (def: any, rule: any) =>
                        (def =
                            rule.selectorText === ":root"
                                ? [
                                    ...def,
                                    ...Array.from(rule.style).filter((name: any) =>
                                        name.startsWith("--")
                                    )
                                ]
                                : def),
                        []
                    )
                ]),
                []
            )
        setCssVariables([...list])
    }

    useEffect(() => {
        initCssVariables()
        prefersDarkScheme.addEventListener("change", initCssVariables)
        const mutationObserver = new MutationObserver(initCssVariables)

        // Listens if className on :root changes (.light or .dark)
        mutationObserver.observe(document.documentElement, { attributes: true })

        return () => {
            prefersDarkScheme.removeEventListener("change", initCssVariables)
            mutationObserver.disconnect()
        }
    }, [])

    return (
        <>
            <h2 className="mt-3">CSS variables</h2>

            <p>
                All <code>*-tone</code> color variables only include the HSL values (e.g. <code>0deg, 0%, 100%</code>). This way you can easily handle
                the alpha value yourself like this: <code>hsla(var(--body-color-tone), .5)</code>
            </p>

            <div><code>:root {`{`}</code></div>
            {cssVariables.map((cssVar: string) =>
                <div key={cssVar} className="ms-3">
                    <code><strong>{cssVar}</strong>: {getComputedStyle(document.documentElement).getPropertyValue(cssVar)}</code>
                    <div
                        className="d-inline-block border ms-1 rounded"
                        style={{ width: ".8em", height: ".8em", backgroundColor: cssVar.includes("-tone") ? `hsl(var(${cssVar}))` : `var(${cssVar})` }}
                    />
                </div>
            )}
            <div><code>{`}`}</code></div>
        </>
    )
}