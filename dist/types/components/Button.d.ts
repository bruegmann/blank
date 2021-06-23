import { AnchorHTMLAttributes, ElementType } from "react";
export interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    [key: string]: any;
    tag?: ElementType;
    primary?: boolean;
    shadow?: boolean | "sm";
    silent?: boolean;
}
export declare function Button({ tag, primary, shadow, silent, ...rest }: ButtonProps): JSX.Element;
