import { ReactNode } from "react";
export interface ModalProps {
    children: ReactNode;
    /** Set className of inner elements */
    classNames?: {
        modalBody?: string;
    };
    show: boolean;
    title?: string;
    toggle: () => void;
}
export declare function Modal(props: ModalProps): JSX.Element;
