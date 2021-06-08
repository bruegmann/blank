import { X } from "react-bootstrap-icons"
import clsx from "clsx"

import "../styles/Modal.scss"
import { ReactNode, useState } from "react"

export interface ModalProps {
    children: ReactNode
    show: boolean
    toggle: () => void
    title?: string
}

export default function Modal({ children, show, toggle, title }: ModalProps) {
    const [fadeOut, setFadeOut] = useState<boolean>(false)

    const doToggle = () => {
        setFadeOut(true)
        setTimeout(() => {
            setFadeOut(false)
            toggle()
        }, 200)
    }

    return (
        <div className={clsx("modal", { show, fadeOut })} role="dialog" tabIndex={-1}>
            <div className={clsx("modal-backdrop", { show })} onClick={doToggle} />

            <div className="modal-content" role="document">
                <div className="modal-header d-flex justify-content-between mt-3 mb-1">
                    <h2 className="m-0">{title}</h2>

                    <button className="btn-close" onClick={doToggle}><X /></button>
                </div>
                <div className="modal-body body-bg p-3 rounded">
                    {children}
                </div>
            </div>
        </div>
    )
}