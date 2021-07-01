import { X } from "react-bootstrap-icons"
import clsx from "clsx"
import { ReactNode, useEffect, useState } from "react"

export interface ModalProps {
    children: ReactNode
    modalBodyClassName?: string
    modalBodySpacing?: string
    onFinishAnimation?: () => void
    show: boolean
    title?: string
    toggle: () => void
}

export function Modal(props: ModalProps) {
    const { children, toggle, title, modalBodyClassName, modalBodySpacing = "p-3", onFinishAnimation } = props

    const [show, setShow] = useState<boolean>()
    const [fadeOut, setFadeOut] = useState<boolean>(false)

    useEffect(() => {
        // If change `show` from false to true, run animation first
        if (show === true && props.show === false) {
            setFadeOut(true)
            setTimeout(() => {
                setFadeOut(false)
                setShow(props.show)
                if (onFinishAnimation) onFinishAnimation()
            }, 200)
        }
        else {
            setShow(props.show)
        }
    }, [props.show])

    return (
        <div className={clsx("modal", { show, fadeOut })} role="dialog" tabIndex={-1}>
            <div className="modal-backdrop" onClick={toggle} />

            <div className="modal-content" role="document">
                <div className="modal-header d-flex justify-content-between mt-3 mb-2">
                    <h2 className="m-0">{title}</h2>

                    <button className="btn-close" onClick={toggle} aria-label="Close"><X /></button>
                </div>
                <div className={clsx(`modal-body body-bg-stronger ${modalBodySpacing} rounded`, modalBodyClassName)}>
                    {children}
                </div>
            </div>
        </div>
    )
}