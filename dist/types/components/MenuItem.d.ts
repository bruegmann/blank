import { AnchorHTMLAttributes, ElementType } from "react";
export interface MenuItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    [key: string]: any;
    tag?: ElementType;
    spacing?: string;
}
export declare function MenuItem({ tag, spacing, ...rest }: MenuItemProps): JSX.Element;
