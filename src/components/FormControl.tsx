import clsx from "clsx";
import { ElementType, InputHTMLAttributes } from "react";

export interface FormControlProps extends InputHTMLAttributes<HTMLInputElement> {
    [key: string]: any
    shadow?: boolean | "sm"
    silent?: boolean
    spacing?: string
    tag?: ElementType
}

export function FormControl({ tag, shadow, silent, spacing = "p-2", ...rest }: FormControlProps) {
    let Tag = tag || "input"
    return (
        <Tag {...rest} className={clsx(`form-control ${spacing} rounded`, {
            "neumorphism-shadow-sm": shadow === "sm" || shadow === undefined,
            "neumorphism-shadow": shadow === true,
            silent
        }, rest.className)} />
    )
}