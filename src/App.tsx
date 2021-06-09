import "./styles/docs.scss"
import "./styles/bootstrap.scss"

import { App as AppIcon, Github } from "react-bootstrap-icons"
import { getPhrase } from "./docs/shared"
import { MenuItem } from "./docs/MenuItem"
import { Button } from "./components/Button"
import { CSSProperties, useState } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import DemosPage from "./docs/pages/DemosPage"
import PostsPage from "./docs/pages/PostsPage"

function App() {
    const [customFont, setCustomFont] = useState<boolean>(true)
    const toggleCustomFont = () => setCustomFont(!customFont)

    return (
        <Router>
            <div className="App" style={{
                "--font-family-base": `${customFont ? '"Inter", ' : ""}-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`
            } as CSSProperties}>
                <header className="container mx-3 d-flex align-items-center justify-content-between py-4">
                    <a href="/" className="d-inline-flex align-items-center" style={{ fontSize: "48px" }}>
                        <AppIcon /> <h2 className="ms-1 mb-0">Blank</h2>
                    </a>

                    <nav>
                        <MenuItem to="/">{getPhrase("Home")}</MenuItem>
                        <MenuItem to="/posts">{getPhrase("Posts demo page")}</MenuItem>
                        <Button onClick={toggleCustomFont}>Toggle font</Button>
                    </nav>
                </header>

                <Switch>
                    <Route path="/posts">
                        <PostsPage />
                    </Route>
                    <Route exact path="/">
                        <DemosPage />
                    </Route>
                </Switch>

                <footer className="text-center">
                    <a href="https://github.com/bruegmann/blank" target="_blank" rel="noopener noreferrer" className="d-inline-flex align-items-center">
                        <Github className="me-1" /> Code on GitHub
                    </a>
                </footer>
            </div>
        </Router>
    )
}

export default App
