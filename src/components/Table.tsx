import { ReactNode } from "react"
import clsx from "clsx"

export interface TableProps {
    children?: ReactNode
    className?: string
}

export function Table({ children, className }: TableProps) {
    return (
        <table className={clsx("table rounded overflow-hidden neumorphism-shadow-sm", className)} style={{ backgroundColor: "var(--body-bg-stronger)" }}>
            {children}
        </table>
    )
}