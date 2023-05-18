import { useState } from "react"

export function smoothScroll(event, link) {
  event.preventDefault()
  const target = document.querySelector(link)
  target.scrollIntoView({ behavior: "smooth" })
}

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#")

  function navClick(event, link) {
    smoothScroll(event, link)
    setActiveNav(link)
  }

  return (
    <nav className="fixed bottom-0 z-40 flex w-full justify-around p-4">
      <ul className="flex w-fit justify-between gap-2 p-4 dark:text-white text-black dark:bg-redDark bg-quinary bg-opacity-70 dark:bg-opacity-70 rounded-2xl shadow-2xl transition-all duration-2000 ease-in-out">
        <li
          onClick={(e) => navClick(e, "#header")}
          className={activeNav === "#header" ? "active" : ""}
        >
          <a href="#header">
            <div className="text-4xl i-mdi-house-outline hover:scale-110 hover:shadow-2xl hover:drop-shadow transition-transform duration-500 ease-in-out" />
          </a>
        </li>
        <li
          onClick={(e) => navClick(e, "#about")}
          className={activeNav === "#about" ? "active" : ""}
        >
          <a href="#about">
            <div className="text-4xl i-mdi-account-outline hover:scale-110 hover:shadow-2xl hover:drop-shadow transition-transform duration-500 ease-in-out" />
          </a>
        </li>
        <li
          onClick={(e) => navClick(e, "#experience")}
          className={activeNav === "#experience" ? "active" : ""}
        >
          <a href="#experience">
            <div className="text-4xl i-mdi-briefcase-outline hover:scale-110 hover:shadow-2xl hover:drop-shadow transition-transform duration-500 ease-in-out" />
          </a>
        </li>
        <li
          onClick={(e) => navClick(e, "#portfolio")}
          className={activeNav === "#portfolio" ? "active" : ""}
        >
          <a href="#portfolio">
            <div className="text-4xl i-mdi-palette-outline hover:scale-110 hover:shadow-2xl hover:drop-shadow transition-transform duration-500 ease-in-out nav-observed" />
          </a>
        </li>
        <li
          onClick={(e) => navClick(e, "#contact")}
          className={activeNav === "#contact" ? "active" : ""}
        >
          <a href="#contact">
            <div className="text-4xl i-mdi-email-outline hover:scale-110 hover:shadow-2xl hover:drop-shadow transition-transform duration-500 ease-in-out" />
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
