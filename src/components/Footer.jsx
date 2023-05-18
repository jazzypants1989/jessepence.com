const Footer = () => {
  return (
    <footer className="text-center">
      <a href="#" className="">
        Jovial Penguin, LLC.
      </a>

      <div className="flex items-center justify-center bg-redDark bg-opacity-80 rounded-t-lg shadow-2xl p-2 gap-2">
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
          <div className="i-mdi-github h-12 w-12 text-gray bg-gradient-to-r from-gray-300 to-gray-500 transform hover:scale-125 transition-transform duration-500 ease-in-out" />
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
        ></a> */}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://jessepence.bandcamp.com"
        >
          <div className="i-mdi-bandcamp h-12 w-12 text-green-500 bg-gradient-to-r from-green-500 to-blue-500 transform hover:scale-125 transition-transform duration-500 ease-in-out" />
        </a>
      </div>

      <ul className="card text-lg font-bold mb-12">
        <li className="hover:text-primary transition-all duration-500 ease-in-out">
          <a href="#">Home</a>
        </li>
        <li className="hover:text-primary transition-all duration-500 ease-in-out">
          <a href="#about">About</a>
        </li>
        <li className="hover:text-primary transition-all duration-500 ease-in-out">
          <a href="#experience">Experience</a>
        </li>
        <li className="hover:text-primary transition-all duration-500 ease-in-out">
          <a href="#portfolio">Portfolio</a>
        </li>
        <li className="hover:text-primary transition-all duration-500 ease-in-out">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <small className="z-50 relative text-xs bg-quinary bg-opacity-50 dark:bg-redDark dark:bg-opacity-50 dark:text-white rounded-lg shadow-2xl p-2 transition-all duration-2000 ease-in-out">
        &copy; {new Date().getFullYear()} Jovial Penguin, LLC. All rights
        reserved. You are nice, and I like you.
      </small>
    </footer>
  )
}

export default Footer
