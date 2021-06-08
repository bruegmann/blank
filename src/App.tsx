import "./styles/docs.scss"
import "./styles/bootstrap.scss"
import { Logo } from "./docs/Logo"
import { ThemeSwitch } from "./docs/ThemeSwitch"
import { getPhrase } from "./docs/shared"
import { MenuItem } from "./docs/MenuItem"
import { AnchorButton, Button } from "./components/Button"
import ExampleModal from "./docs/ExampleModal"
import { CSSProperties, useState } from "react"

function App() {
    const [workSans, setWorkSans] = useState<boolean>(true)
    const toggleWorkSans = () => setWorkSans(!workSans)

    return (
        <div className="App" style={{
            "--font-family-base": `${workSans ? '"Work Sans", ' : ""}-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`
        } as CSSProperties}>
            <header className="container mx-3 d-flex align-items-center justify-content-between">
                <a href="/" className="d-inline-flex align-items-center" style={{ fontSize: "48px" }}>
                    <Logo /> <h2 className="ms-1">Design</h2>
                </a>

                <nav>
                    <MenuItem href="#/fonts">{getPhrase("Fonts and colors")}</MenuItem>
                    <MenuItem href="#/logos">{getPhrase("Product logos")}</MenuItem>
                    <MenuItem href="#/icons">{getPhrase("Icons")}</MenuItem>
                </nav>
            </header>

            <div className="container mx-3">
                <h1>Blank</h1>

                <div className="mb-3">
                    <Button onClick={toggleWorkSans}>Toggle font</Button>
                </div>

                <a href="#">Normal link</a>

                <div className="link-area mb-3">
                    <a href="#">Link in link area</a> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                </div>

                <div className="mb-3">
                    <Button className="me-3">Click me!</Button>
                    <AnchorButton primary className="me-3" href="https://google.com" target="_blank" rel="noopener noreferrer">Open link</AnchorButton>
                    <Button silent className="me-3">Silent button</Button>
                    <Button silent shadow={false} className="me-3">Silent button without shadow</Button>
                    <Button shadow={false}>Button without shadow</Button>
                </div>

                <div className="p-3 my-3 body-bg-stronger neumorphism-shadow rounded-3">
                    <h2>My card content</h2>

                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                    </p>

                    <ThemeSwitch />
                </div>

                <ExampleModal />
            </div>
        </div>
    )
}

export default App
