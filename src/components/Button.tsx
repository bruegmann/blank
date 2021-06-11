import clsx from "clsx";
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

export interface ButtonBaseProps {
    className?: string
    primary?: boolean
    shadow?: boolean | "sm"
    silent?: boolean
}

const attrShadow = { primary: undefined, shadow: undefined, silent: undefined }

function getClassName(props: ButtonBaseProps) {
    const { primary, shadow, silent } = props

    return clsx("btn px-3 py-2 rounded", {
        primary,
        "neumorphism-shadow-sm": shadow === "sm" || shadow === undefined,
        "neumorphism-shadow": shadow === true,
        silent
    }, props.className)
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, ButtonBaseProps { }
export function Button(props: ButtonProps) {
    return (
        <button {...Object.assign({}, props, attrShadow) as unknown as ButtonHTMLAttributes<HTMLButtonElement>}
            className={getClassName(props)}
        >
            {props.children}
        </button>
    )
}


export interface AnchorButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement>, ButtonBaseProps { }
export function AnchorButton(props: AnchorButtonProps) {
    return (
        <a {...Object.assign({}, props, attrShadow) as unknown as AnchorHTMLAttributes<HTMLAnchorElement>}
            className={getClassName(props)}
        >
            {props.children}
        </a>
    )
}