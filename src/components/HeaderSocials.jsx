import React from "react"

const HeaderSocials = () => {
  return (
    <div className="flex flex-row justify-between m-2 gap-2 p-2 bg-redDark bg-opacity-50 rounded-lg">
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/jpence1989/"
      >
        <div className="i-mdi-linkedin h-12 w-12 text-blue-500 bg-gradient-to-r from-blue-500 to-blue-700 transform hover:scale-125 transition-transform duration-500 ease-in-out" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/jazzypants1989/"
      >
        <div className="i-mdi-github h-12 w-12 text-gray-300 bg-gradient-to-r from-gray-300 to-gray-500 transform hover:scale-125 transition-transform duration-500 ease-in-out" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.twitter.com/JessePence5/"
      >
        <div className="i-mdi-twitter h-12 w-12 text-blue-400 bg-gradient-to-r from-blue-400 to-blue-600 transform hover:scale-125 transition-transform duration-500 ease-in-out" />
      </a>
      {/* <a
        target="_blank"
        rel="noreferrer"
        href="https://www.instagram.com/jazzypants420/"
      >
        <div className="i-mdi-instagram h-12 w-12 text-pink-500 bg-gradient-to-r from-pink-500 to-yellow-500 transform hover:scale-125 transition-transform duration-500 ease-in-out" />
      </a> */}
      <a
        target="_blank"
        rel="noreferrer"
        href="https://jessepence.bandcamp.com"
      >
        <div className="i-mdi-bandcamp h-12 w-12 text-green-500 bg-gradient-to-r from-green-500 to-blue-500 transform hover:scale-125 transition-transform duration-500 ease-in-out" />
      </a>
    </div>
  )
}

export default HeaderSocials
