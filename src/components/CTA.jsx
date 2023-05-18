import React from "react"
import { smoothScroll } from "./Nav"

const CTA = () => {
  return (
    <div className="flex items-center justify-center gap-2 m-2">
      <a href="/cv.pdf" download className="btn-tertiary">
        Download my Resume
      </a>
      <a
        onClick={(e) => smoothScroll(e, "#contact")}
        href="#contact"
        className="btn-secondary"
      >
        Contact Me
      </a>
    </div>
  )
}

export default CTA
