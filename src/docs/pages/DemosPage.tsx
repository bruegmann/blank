import { ThemeSwitch } from "../ThemeSwitch"
import { Button } from "../../components/Button"
import ExampleModal from "../ExampleModal"
import ExampleFormControl from "../ExampleFormControl"

export interface DemosPageProps {

}

export default function DemosPage({ }: DemosPageProps) {
    return (
        <div className="container mx-3">
            <h1>Blank</h1>

            <a href="#">Normal link</a>

            <div className="link-area mb-3">
                <a href="#">Link in link area</a> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </div>

            <div className="mb-3">
                <Button className="me-3">Click me!</Button>
                <Button primary className="me-3" href="https://google.com" target="_blank" rel="noopener noreferrer">Open link</Button>
                <Button silent className="me-3">Silent button</Button>
                <Button silent shadow={false} className="me-3">Silent button without shadow</Button>
                <Button shadow={false}>Button without shadow</Button>
            </div>

            <ExampleFormControl />

            <div className="p-3 my-3 body-bg-stronger neumorphism-shadow rounded-3">
                <h2>My card content</h2>

                <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>

                <ThemeSwitch />
            </div>

            <ExampleModal />
        </div>
    )
}