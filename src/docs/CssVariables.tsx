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

            <div><code>:root {`{`}</code></div>
            {cssVariables.map((cssVar: string) =>
                <div key={cssVar} className="ms-3">
                    <code><strong>{cssVar}</strong>: {getComputedStyle(document.documentElement).getPropertyValue(cssVar)}</code>
                </div>
            )}
            <div><code>{`}`}</code></div>
        </>
    )
}