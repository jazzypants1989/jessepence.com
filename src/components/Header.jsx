import React, { useEffect } from "react"
import ME from "../assets/me.png"
import HeaderSocials from "./HeaderSocials"

const Header = ({ children }) => {
  return (
    <header id="header" className="hero sleeping observed w-full md:max-w-3/4">
      <h5
        transition="all duration-2000 ease-in-out"
        text="2xl 
        redDark
        dark:quinary"
      >
        Hello, I'm
      </h5>
      <h1
        transition="all duration-2000 ease-in-out"
        text="4xl md:8xl white dark:black"
        font="bold"
        bg="tertiary opacity-50"
        rounded="lg"
        p="4"
      >
        Jesse Pence
      </h1>
      <h5
        transition="all duration-2000 ease-in-out"
        text="2xl redDark dark:quinary"
      >
        I'm a web developer
      </h5>
      <img
        className="rounded-full shadow-2xl w-1/2 md:w-1/4 mx-auto"
        src={ME}
        alt="Look at this handsome guy!"
      />
      <HeaderSocials />
      {children}
    </header>
  )
}

export default Header
