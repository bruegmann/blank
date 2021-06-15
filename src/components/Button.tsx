import clsx from "clsx";
import { AnchorHTMLAttributes, ElementType } from "react";

export interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    [key: string]: any
    tag?: ElementType
    primary?: boolean
    shadow?: boolean | "sm"
    silent?: boolean
}

export function Button({ tag, primary, shadow, silent, ...rest }: ButtonProps) {
    let Tag = tag || (rest.href ? "a" : "button")
    return (
        <Tag {...rest} className={clsx("btn px-3 py-2 rounded", {
            primary,
            "neumorphism-shadow-sm": shadow === "sm" || shadow === undefined,
            "neumorphism-shadow": shadow === true,
            silent
        }, rest.className)} />
    )
}