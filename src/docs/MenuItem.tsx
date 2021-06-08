import { ReactNode } from "react"
import clsx from "clsx"

export interface MenuItemProps {
    children: ReactNode
    href: string
}

export function MenuItem({ children, href }: MenuItemProps) {
    return (
        <a href={href} className={clsx("py-1 px-2")}>{children}</a>
    )
}