import { ReactNode } from "react";
export interface ModalProps {
    children: ReactNode;
    show: boolean;
    toggle: () => void;
    title?: string;
    classNames?: {
        modalBody?: string;
    };
}
export default function Modal(props: ModalProps): JSX.Element;
