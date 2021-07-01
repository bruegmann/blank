import { ReactNode } from "react";
export interface ModalProps {
    children: ReactNode;
    modalBodyClassName?: string;
    modalBodySpacing?: string;
    onFinishAnimation?: () => void;
    show: boolean;
    title?: string;
    toggle: () => void;
}
export declare function Modal(props: ModalProps): JSX.Element;
