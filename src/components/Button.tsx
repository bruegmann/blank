import clsx from "clsx";
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

export interface ButtonBaseProps {
    className?: string
    primary?: boolean
    shadow?: boolean | "sm"
}

const buttonAttrShadow = { primary: undefined, shadow: undefined }

function getButtonClassName(props: ButtonBaseProps) {
    const { primary, shadow } = props

    return clsx("btn px-3 py-2 rounded", {
        primary: primary,
        "neumorphism-shadow-sm": shadow === "sm" || shadow === undefined,
        "neumorphism-shadow": shadow === true
    }, props.className)
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, ButtonBaseProps { }
export function Button(props: ButtonProps) {
    return (
        <button {...Object.assign({}, props, buttonAttrShadow) as unknown as ButtonHTMLAttributes<HTMLButtonElement>}
            className={getButtonClassName(props)}
        >
            {props.children}
        </button>
    )
}


export interface AnchorButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement>, ButtonBaseProps { }
export function AnchorButton(props: AnchorButtonProps) {
    return (
        <a {...Object.assign({}, props, buttonAttrShadow) as unknown as AnchorHTMLAttributes<HTMLAnchorElement>}
            className={getButtonClassName(props)}
        >
            {props.children}
        </a>
    )
}