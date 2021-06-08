import { X } from "react-bootstrap-icons"
import clsx from "clsx"

import "../styles/Modal.scss"
import { ReactNode } from "react"

export interface ModalProps {
    children: ReactNode
    show: boolean
    toggle: () => void
    title?: string
}

export default function Modal({ children, show, toggle, title }: ModalProps) {
    return (
        <div className={clsx("modal", { show })} role="dialog" tabIndex={-1}>
            <div className={clsx("modal-backdrop", { show })} onClick={toggle} />

            <div className="modal-content" role="document">
                <div className="modal-header d-flex justify-content-between mt-3 mb-1">
                    <h2 className="m-0">{title}</h2>

                    <button className="btn-close" onClick={toggle}><X /></button>
                </div>
                <div className="modal-body body-bg p-3 rounded">
                    {children}
                </div>
            </div>
        </div>
    )
}