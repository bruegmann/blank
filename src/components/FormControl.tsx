import clsx from "clsx";
import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

export interface FormControlBaseProps {
    className?: string
    shadow?: boolean | "sm"
    silent?: boolean
}


const attrShadow = {}

function getClassName(props: FormControlBaseProps) {
    const { shadow, silent } = props

    return clsx("form-control p-2 rounded", {
        "neumorphism-shadow-sm": shadow === "sm" || shadow === undefined,
        "neumorphism-shadow": shadow === true,
        silent
    }, props.className)
}

export interface FormControlProps extends InputHTMLAttributes<HTMLInputElement>, FormControlBaseProps { }
export function FormControl(props: FormControlProps) {
    return (
        <input
            {...Object.assign({}, props, attrShadow) as unknown as InputHTMLAttributes<HTMLInputElement>}
            className={getClassName(props)}
        />
    )
}

export interface TextareaFormControlProps extends TextareaHTMLAttributes<HTMLTextAreaElement>, FormControlBaseProps { }
export default function TextareaFormControl(props: TextareaFormControlProps) {
    return (
        <textarea
            {...Object.assign({}, props, attrShadow) as unknown as TextareaHTMLAttributes<HTMLTextAreaElement>}
            className={getClassName(props)}
        />
    )
}