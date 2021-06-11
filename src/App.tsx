import "./styles/docs.scss"
import "./styles/bootstrap.scss"

import { Github } from "react-bootstrap-icons"
import { getPhrase } from "./docs/shared"
import { MenuItem } from "./docs/MenuItem"
import { Button } from "./components/Button"
import { CSSProperties, useState } from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import DemosPage from "./docs/pages/DemosPage"
import PostsPage from "./docs/pages/PostsPage"
import { Logo } from "./docs/Logo"
import { ThemeSwitch } from "./docs/ThemeSwitch"

function App() {
    const [customFont, setCustomFont] = useState<boolean>(true)
    const toggleCustomFont = () => setCustomFont(!customFont)

    return (
        <Router basename={process.env.PUBLIC_URL}>
            <div className="App" style={{
                "--font-family-base": `${customFont ? '"Inter", ' : ""}-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`
            } as CSSProperties}>
                <header className="container mx-3 d-md-flex align-items-center justify-content-between py-4">
                    <Link to="/" className="d-inline-flex align-items-center" style={{ fontSize: "48px" }}>
                        <Logo /> <h6 className="ms-2 mb-0">Blank</h6>
                    </Link>

                    <nav className="d-sm-flex align-items-center">
                        <MenuItem to="/">{getPhrase("Home")}</MenuItem>
                        <MenuItem to="/posts">{getPhrase("Posts demo page")}</MenuItem>
                        <Button onClick={toggleCustomFont} className="mx-3">Toggle font</Button>
                        <ThemeSwitch />
                    </nav>
                </header>

                <div className="mx-3 mb-3 border-top" />

                <Switch>
                    <Route path="/posts">
                        <PostsPage />
                    </Route>
                    <Route exact path="/">
                        <DemosPage />
                    </Route>
                </Switch>

                <footer className="text-center py-3">
                    <a href="https://github.com/bruegmann/blank" target="_blank" rel="noopener noreferrer" className="d-inline-flex align-items-center">
                        <Github className="me-1" /> Code on GitHub
                    </a>
                </footer>
            </div>
        </Router>
    )
}

export default App
