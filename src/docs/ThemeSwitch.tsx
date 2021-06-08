import { useEffect, useState } from "react"
import { MoonStars, Sun } from "react-bootstrap-icons"
import { Button } from "../components/Button"
import { getPhrase } from "./shared"

export function ThemeSwitch() {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)")
    const themeFromStorage = localStorage.getItem("theme")

    const [theme, setTheme] = useState(themeFromStorage && ["dark", "light"].includes(themeFromStorage) ? themeFromStorage : prefersDarkScheme.matches ? "dark" : "light") // "dark" | "light" | null

    const initTheme = (_theme = theme) => {
        setTheme(_theme)
        document.body.classList.remove("light")
        document.body.classList.remove("dark")

        document.body.classList.add(_theme)
    }

    const toggleTheme = () => {
        const _theme = theme === "dark" ? "light" : "dark"
        localStorage.setItem("theme", _theme)
        initTheme(_theme)
    }

    const matchMediaCallback = () => {
        initTheme(prefersDarkScheme.matches ? "dark" : "light")
        localStorage.removeItem("theme")
    }

    useEffect(() => {
        initTheme()
        prefersDarkScheme.addEventListener("change", matchMediaCallback)

        return () => {
            prefersDarkScheme.removeEventListener("change", matchMediaCallback)
        }
    }, [])

    return (
        <Button onClick={toggleTheme} className="d-inline-flex align-items-center">
            {theme === "light" ?
                <>
                    <MoonStars className="me-1" /> {getPhrase("Switch to dark theme")}
                </>
                :
                <>
                    <Sun className="me-1" /> {getPhrase("Switch to light theme")}
                </>
            }
        </Button>
    )
}