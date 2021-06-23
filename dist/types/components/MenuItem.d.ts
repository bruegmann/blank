import { AnchorHTMLAttributes, ElementType } from "react";
export interface MenuItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    [key: string]: any;
    tag?: ElementType;
}
export declare function MenuItem({ tag, ...rest }: MenuItemProps): JSX.Element;
