import clsx from "clsx";
import { AnchorHTMLAttributes, ElementType } from "react";

export interface MenuItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    [key: string]: any
    tag?: ElementType
}

export function MenuItem({ tag, ...rest }: MenuItemProps) {
    let Tag = tag || (rest.href ? "a" : "button")
    return (
        <Tag {...rest} className={clsx("menu-item py-2 px-3 rounded d-flex d-md-inline-flex", rest.className)} />
    )
}