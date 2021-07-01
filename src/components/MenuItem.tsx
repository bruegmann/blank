import clsx from "clsx";
import { AnchorHTMLAttributes, ElementType } from "react";

export interface MenuItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    [key: string]: any
    tag?: ElementType
    spacing?: string
}

export function MenuItem({ tag, spacing = "py-2 px-3", ...rest }: MenuItemProps) {
    let Tag = tag || (rest.href ? "a" : "button")
    return (
        <Tag {...rest} className={clsx(`menu-item ${spacing} rounded d-flex d-md-inline-flex`, rest.className)} />
    )
}