import React from "react"

const Experience = () => {
  return (
    <section
      id="experience"
      className="hero observed sleeping md:text-lg w-full md:max-w-3/4"
    >
      <h2
        font="bold"
        text="4xl center white dark:black"
        transition="all duration-2000 ease-in-out"
        bg="tertiary opacity-50"
        rounded="lg"
        p="4"
      >
        Experience
      </h2>
      <div className="flex flex-col justify-center items-center gap-2 p-2">
        <article className="card flex flex-col items-center justify-center">
          <h5>Web Developer</h5>
          <a
            className="text-secondary hover:text-quaternary transition-all duration-500 ease-in-out"
            href="https://jovialpenguin.com"
          >
            Jovial Penguin
          </a>
          <small>2022 - Present</small>
          <p className="text-left p-2">
            I'm currently working as a freelance web developer. I've built a few
            websites used in production by small businesses. My biggest project
            to date is a{" "}
            <a
              href="https://www.electriclarrys.com/"
              className="text-secondary hover:text-quaternary transition-all duration-500 ease-in-out"
            >
              complete CMS for a small thrift store
            </a>{" "}
            built using React Server Components.
          </p>
          <p className="text-left p-2">
            I'm also constantly working on open source projects-- both on my own
            and with other developers. My most popular project has been my{" "}
            <a
              href="https://github.com/jazzypants1989/astro-docs-template"
              className="text-secondary hover:text-quaternary transition-all duration-500 ease-in-out"
            >
              Astro Docs Template
            </a>
            . I've also contributed to the{" "}
            <a
              href="https://docs.astro.build/"
              className="text-secondary hover:text-quaternary transition-all duration-500 ease-in-out"
            >
              Astro Docs
            </a>{" "}
            themselves. You can check out my{" "}
            <a
              href="#portfolio"
              className="text-secondary hover:text-quaternary transition-all duration-500 ease-in-out"
            >
              Portfolio
            </a>{" "}
            to see some of my other work.
          </p>
        </article>
        <article className="card flex flex-col items-center justify-center">
          <h5>Bar Manager</h5>
          <a
            className="text-secondary hover:text-quaternary transition-all duration-500 ease-in-out"
            href="https://buckslou.com"
          >
            Buck's Restaurant
          </a>
          <small>2018 - 2020</small>
          <p className="text-left p-2">
            My last restaurant job was bar manager of a fine-dining steakhouse
            in the heart of Old Louisville, Kentucky. I was responsible for
            training new employees, managing the bar, ordering inventory, and
            ensuring that the restaurant ran smoothly when the general manager
            was not present. I also curated multiple cocktail menus which gave
            me the opportunity to flex my creative muscles.
          </p>
          <p className="text-left p-2">
            Covid-19 and my step-father's death forced me to move here to
            Portland, Oregon. During this time, I quit drinking and decided to
            pursue a career in web development. Sometimes, I miss the restaurant
            industry, but I'm grateful that this disruption in my life allowed
            me to discover my true passion.
          </p>
        </article>
      </div>
    </section>
  )
}

export default Experience
