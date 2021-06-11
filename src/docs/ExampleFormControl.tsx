import { useState } from "react"
import { Button } from "../components/Button"
import { FormControl, TextareaFormControl } from "../components/FormControl"

export interface ExampleFormControlProps {

}

export default function ExampleFormControl({ }: ExampleFormControlProps) {
    const [text, setText] = useState<string>("")

    return (
        <>
            <div className="mb-3">
                <FormControl type="text" value={text} onChange={({ target }) => setText(target.value)} />
                <Button className="ms-2 me-3">Now click me</Button>
                {`You typed: ${text}`}
            </div>

            <label className="d-block mb-5">
                <div className="mb-1 position-relative"><strong>Write something</strong></div>
                <TextareaFormControl value={text} onChange={({ target }) => setText(target.value)} className="d-block w-100" />
            </label>

            <label className="d-block mb-5 form-control p-0 neumorphism-shadow-sm rounded">
                <div className="mb-1 mx-2 mt-2"><strong>Write something</strong></div>
                <textarea className="form-control-input p-2 border-0 d-block w-100" />
            </label>
        </>
    )
}