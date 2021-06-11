import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
export interface FormControlBaseProps {
    className?: string;
    shadow?: boolean | "sm";
    silent?: boolean;
}
export interface FormControlProps extends InputHTMLAttributes<HTMLInputElement>, FormControlBaseProps {
}
export declare function FormControl(props: FormControlProps): JSX.Element;
export interface TextareaFormControlProps extends TextareaHTMLAttributes<HTMLTextAreaElement>, FormControlBaseProps {
}
export declare function TextareaFormControl(props: TextareaFormControlProps): JSX.Element;
