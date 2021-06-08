import clsx from "clsx";
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

export interface ButtonBaseProps {
    className?: string
    primary?: boolean
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, ButtonBaseProps { }
export function Button(props: ButtonProps) {
    const { primary } = props

    return (
        <button {...Object.assign({}, props, { primary: undefined }) as unknown as ButtonHTMLAttributes<HTMLButtonElement>}
            className={clsx("btn px-3 py-2 rounded", { primary: primary }, props.className)}
        >
            {props.children}
        </button>
    )
}


export interface AnchorButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement>, ButtonBaseProps { }
export function AnchorButton(props: AnchorButtonProps) {
    const { primary } = props

    return (
        <a {...Object.assign({}, props, { primary: undefined }) as unknown as AnchorHTMLAttributes<HTMLAnchorElement>}
            className={clsx("btn px-3 py-2 rounded", { primary: primary }, props.className)}
        >
            {props.children}
        </a>
    )
}