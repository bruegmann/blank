import { ReactNode } from "react"
import clsx from "clsx"
import { NavLink } from "react-router-dom"

export interface MenuItemProps {
    children: ReactNode
    href?: string
    to?: string
}

const className = "menu-item py-2 px-2 d-flex d-md-inline-flex me-1"

export function MenuItem({ children, href, to }: MenuItemProps) {
    if (to) {
        return (
            <NavLink to={to} exact className={clsx(className)}>{children}</NavLink>
        )
    }
    return (
        <a href={href} className={clsx(className)}>{children}</a>
    )
}