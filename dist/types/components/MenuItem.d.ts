import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { NavLinkProps } from "react-router-dom";
declare type AllAttrs = {
    a: AnchorHTMLAttributes<HTMLAnchorElement>;
    button: ButtonHTMLAttributes<HTMLButtonElement>;
    NavLink: NavLinkProps | any;
};
export declare function MenuItem<T extends keyof AllAttrs>({ Component, ...rest }: {
    Component: T;
} & AllAttrs[T]): JSX.Element;
export {};
