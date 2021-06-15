import clsx from "clsx";
import { ElementType, InputHTMLAttributes } from "react";

export interface FormControlProps extends InputHTMLAttributes<HTMLInputElement> {
    [key: string]: any
    tag?: ElementType
    shadow?: boolean | "sm"
    silent?: boolean
}

export function FormControl({ tag, shadow, silent, ...rest }: FormControlProps) {
    let Tag = tag || "input"
    return (
        <Tag {...rest} className={clsx("form-control p-2 rounded", {
            "neumorphism-shadow-sm": shadow === "sm" || shadow === undefined,
            "neumorphism-shadow": shadow === true,
            silent
        }, rest.className)} />
    )
}