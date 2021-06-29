import clsx from "clsx";
import { AnchorHTMLAttributes, ElementType } from "react";

export interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    [key: string]: any
    /** Disables hover effect, e.g. when button should marked as active. */
    noHover?: boolean
    primary?: boolean

    shadow?: boolean | "sm"
    silent?: boolean
    spacing?: string
    tag?: ElementType
}

export function Button({ tag, primary, shadow, silent, noHover, spacing = "px-3 py-2", ...rest }: ButtonProps) {
    let Tag = tag || (rest.href ? "a" : "button")
    return (
        <Tag {...rest} className={clsx(`btn ${spacing} rounded`, {
            primary,
            "neumorphism-shadow-sm": shadow === "sm" || shadow === undefined,
            "neumorphism-shadow": shadow === true,
            silent,
            "no-hover": noHover
        }, rest.className)} />
    )
}