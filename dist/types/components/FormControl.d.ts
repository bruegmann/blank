import { ElementType, InputHTMLAttributes } from "react";
export interface FormControlProps extends InputHTMLAttributes<HTMLInputElement> {
    [key: string]: any;
    shadow?: boolean | "sm";
    silent?: boolean;
    spacing?: string;
    tag?: ElementType;
}
export declare function FormControl({ tag, shadow, silent, spacing, ...rest }: FormControlProps): JSX.Element;
