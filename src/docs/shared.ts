interface IPhrases {
    [key: string]: string[]
}

export const phrases: IPhrases = {
    "HELLO_WORLD": ["Hello World!", "Hallo Welt!"]
}

export function getPhrase(keyword: string, countryCode: string | undefined = undefined, _phrases: IPhrases | undefined = undefined) {
    countryCode = countryCode || (navigator.language).toLowerCase().indexOf("de") > -1 ? "de-DE" : "en-US"
    _phrases = _phrases || phrases

    if (_phrases[keyword]) {
        if (countryCode.indexOf("de-") > -1) {
            return _phrases[keyword][1]
        }
        else {
            return _phrases[keyword][0]
        }
    }
    else {
        return keyword
    }
}

export interface DocumentedComponentTsType {
    name: string
    elements?: DocumentedComponentTsType[]
    raw?: string
}

export interface DocumentedComponentProps {
    description: string
    required: boolean
    tsType: DocumentedComponentTsType
    defaultValue?: {
        computed: boolean
        value: string
    }
}

export interface DocumentedComponent {
    displayName: string
    description: string
    props: { [key: string]: DocumentedComponentProps }
    exampleCode?: string
}