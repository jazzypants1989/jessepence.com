import React from "react"
import pengy from "../assets/peng40.jpeg"
import { smoothScroll } from "./Nav"

const About = () => {
  return (
    <section
      className="sidekick w-full md:max-w-3/4 observed sleeping"
      id="about"
    >
      <h2
        font="bold"
        text="4xl center white dark:black"
        transition="all duration-2000 ease-in-out"
        bg="tertiary opacity-50"
        rounded="lg"
        p="4"
      >
        About Me
      </h2>
      <h5 text="2xl">I want to help your company grow!</h5>
      {/* <img
        rounded="2xl"
        height="200"
        width="200"
        src={pengy}
        alt="About Image"
      /> */}
      <div>
        <div className="flex flex-col md:flex-row justify-between m-2 gap-2 p-2">
          <article className="card flex flex-col items-center justify-center">
            <div className="i-mdi-account-multiple" />
            <h5>Dedicated</h5>
            <small>
              I've only been coding for a little over a year now, but I have
              absolutely fallen in love with it. I'm always looking for new
              challenges or something new to learn. Programming is a puzzle, and
              I love solving puzzles! One look at my{" "}
              <a
                href="https://github.com/jazzypants1989/"
                className="text-secondary hover:text-quaternary transition-all duration-500 ease-in-out"
              >
                GitHub
              </a>{" "}
              should be enough to convince you that I'm dedicated to my craft.
            </small>
          </article>
          <article className="card flex flex-col items-center justify-center">
            <div className="i-mdi-code-tags-check" />
            <h5>Resourceful</h5>
            <small>
              While I won't back down from a challenge, I'm also not afraid to
              ask for help when I need it. No one knows everything. In this
              industry, we're all constantly learning from each other. That's
              why I'm looking for a company where I can grow by working with
              experienced developers.
            </small>
          </article>
          <article className="card flex flex-col items-center justify-center">
            <div className="i-mdi-terminal" />
            <h5>Prolific</h5>
            <small>
              While I only know JavaScript for now, I can build a website using
              over eight different front-end frameworks, and I can build a
              back-end using Node, Deno, Bun, or even using only serverless
              functions. I'm always working on something new. Check out my{" "}
              <a
                className="text-secondary hover:text-quaternary transition-all duration-500 ease-in-out"
                onClick={(e) => smoothScroll(e, "#portfolio")}
                href="#portfolio"
              >
                portfolio
              </a>{" "}
              to see what I've been up to lately.
            </small>
          </article>
        </div>
        <article className="text-left p-2 m-2">
          <p className="md:text-lg p-2 m-2">
            I spent the first 15 years of my career in the service industry. I
            worked my way up from dishwasher to bartender to manager, and I
            learned a lot along the way. Valuable lessons such as the importance
            of humility, the value of hard work, and the courage to ask for help
            when you need it-- all of these things have helped me become the
            person I am today. I'm a firm believer that you can learn something
            from everyone you meet, and I try to keep an open mind when it comes
            to new ideas.
          </p>

          <p className="md:text-lg p-2 m-2">
            Communication is key, and I pride myself on my ability to
            effectively encapsulate my ideas into words. Whether it be in person
            or in{" "}
            <a
              className="text-quaternary hover:text-quinary transition-all duration-500 ease-in-out"
              href="https://jesseddit.com/blog"
            >
              my tech articles
            </a>
            , I try my best to break down complex ideas into simple terms that
            anyone can understand. I like to think that I bring a unique
            perspective to the table, and I'm always looking for ways to
            improve.
          </p>

          <p className="md:text-lg p-2 m-2">
            I've always been a creative person. I've been a musician for 20
            years, and I've been writing for even longer. To me, programming is
            just another creative outlet. There are a million different ways to
            solve every problem, and I love trying to find the most elegant
            solution. I'm looking for a company that will allow me to use this
            creativity to help them grow.
          </p>
        </article>
      </div>
      <a
        onClick={(e) => smoothScroll(e, "#contact")}
        href="#contact"
        className="btn-primary"
      >
        Let's Talk!
      </a>
    </section>
  )
}

export default About
