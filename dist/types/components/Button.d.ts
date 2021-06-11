import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
export interface ButtonBaseProps {
    className?: string;
    primary?: boolean;
    shadow?: boolean | "sm";
    silent?: boolean;
}
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, ButtonBaseProps {
}
export declare function Button(props: ButtonProps): JSX.Element;
export interface AnchorButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement>, ButtonBaseProps {
}
export declare function AnchorButton(props: AnchorButtonProps): JSX.Element;
