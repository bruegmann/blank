import { useState } from "react";
import { Button } from "../components/Button";
import Modal from "../components/Modal";
import { ThemeSwitch } from "./ThemeSwitch";

export interface ExampleModalProps {

}

export default function ExampleModal({ }: ExampleModalProps) {
    const [show, setShow] = useState<boolean>(false)
    const toggle = () => setShow(!show)

    return (
        <>
            <Button onClick={toggle} className="mb-3 neumorphism-shadow-sm">Open modal</Button>
            <Modal show={show} toggle={toggle} title="Modal title" classNames={{ modalBody: "p-4" }}>
                <h1>Modal content</h1>

                <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>

                <div className="d-flex justify-content-between">
                    <ThemeSwitch />

                    <div>
                        <Button primary className="me-3" onClick={toggle}>Okay</Button>
                        <Button silent shadow={false} onClick={toggle}>Cancel</Button>
                    </div>
                </div>
            </Modal>
        </>
    )
}