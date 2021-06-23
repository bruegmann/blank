import { ElementType, InputHTMLAttributes } from "react";
export interface FormControlProps extends InputHTMLAttributes<HTMLInputElement> {
    [key: string]: any;
    tag?: ElementType;
    shadow?: boolean | "sm";
    silent?: boolean;
}
export declare function FormControl({ tag, shadow, silent, ...rest }: FormControlProps): JSX.Element;
