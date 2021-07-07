import { ReactNode } from "react";
export interface TableProps {
    children?: ReactNode;
    className?: string;
}
export declare function Table({ children, className }: TableProps): JSX.Element;
