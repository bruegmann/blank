import { AnchorHTMLAttributes, ElementType } from "react";
export interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    [key: string]: any;
    /** Disables hover effect, e.g. when button should marked as active. */
    noHover?: boolean;
    primary?: boolean;
    shadow?: boolean | "sm";
    silent?: boolean;
    spacing?: string;
    tag?: ElementType;
}
export declare function Button({ tag, primary, shadow, silent, noHover, spacing, ...rest }: ButtonProps): JSX.Element;
