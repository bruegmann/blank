import { ReactNode } from "react"
import clsx from "clsx"
import { NavLink } from "react-router-dom"

export interface MenuItemProps {
    children: ReactNode
    href?: string
    to?: string
}

export function MenuItem({ children, href, to }: MenuItemProps) {
    if (to) {
        return (
            <NavLink to={to} className={clsx("py-1 px-2")}>{children}</NavLink>
        )
    }
    return (
        <a href={href} className={clsx("py-1 px-2")}>{children}</a>
    )
}