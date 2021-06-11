import clsx from "clsx";
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { NavLinkProps } from "react-router-dom";

type AllAttrs = {
    a: AnchorHTMLAttributes<HTMLAnchorElement>,
    button: ButtonHTMLAttributes<HTMLButtonElement>,
    NavLink: NavLinkProps | any
}

export function MenuItem<T extends keyof AllAttrs>({ Component, ...rest }: { Component: T } & AllAttrs[T]) {
    const TheComponent = Component || (rest.href ? "a" : "button")
    return (
        <TheComponent {...rest as any} className={clsx("menu-item py-2 px-3 rounded d-flex d-md-inline-flex", rest.className)} />
    )

}