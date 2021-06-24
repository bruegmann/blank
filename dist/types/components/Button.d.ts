import { AnchorHTMLAttributes, ElementType } from "react";
export interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    [key: string]: any;
    tag?: ElementType;
    primary?: boolean;
    shadow?: boolean | "sm";
    silent?: boolean;
    noHover?: boolean;
}
export declare function Button({ tag, primary, shadow, silent, noHover, ...rest }: ButtonProps): JSX.Element;
