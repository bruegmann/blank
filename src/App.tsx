import "./docs/docs.scss"

import { Github, House, Newspaper, Puzzle } from "react-bootstrap-icons"
import { getPhrase } from "./docs/shared"
import { MenuItem } from "./components/MenuItem"
import { CSSProperties, useState } from "react"
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom"
import DemosPage from "./docs/pages/DemosPage"
import PostsPage from "./docs/pages/PostsPage"
import { Logo } from "./docs/Logo"
import { ThemeSwitch } from "./docs/ThemeSwitch"
import ComponentsPage from "./docs/pages/ComponentsPage"

function App() {
    const [customFont, setCustomFont] = useState<boolean>(false)
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

                    <nav className="d-sm-flex align-items-center gap-1">
                        <MenuItem tag={NavLink} exact to="/" className="align-items-center"><House className="me-1" /> {getPhrase("Home")}</MenuItem>
                        <MenuItem tag={NavLink} to="/components" className="align-items-center"><Puzzle className="me-1" /> {getPhrase("Components")}</MenuItem>
                        <MenuItem tag={NavLink} to="/posts" className="align-items-center"><Newspaper className="me-1" /> {getPhrase("Posts")}</MenuItem>

                        <ThemeSwitch />
                    </nav>
                </header>

                <div className="mx-3 mb-3 border-top" />

                <Switch>
                    <Route path="/posts">
                        <PostsPage />
                    </Route>
                    <Route path="/components">
                        <ComponentsPage />
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
