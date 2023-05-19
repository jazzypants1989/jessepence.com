import { useRef } from "react"
import emailjs from "@emailjs/browser"

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        "wowzers_zowzers",
        "wowzers-zowzers",
        form.current,
        "CXZrqHT47-logCo_7"
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )

    e.target.reset()
  }

  return (
    <section
      className="observed hero sleeping w-full md:w-3/4 mx-auto p-4"
      id="contact"
    >
      <h2
        text="4xl center white dark:black"
        transition="all duration-2000 ease-in-out"
        font="bold"
        bg="tertiary opacity-50"
        rounded="lg"
        p="4"
      >
        Contact Me
      </h2>

      <div className="flex flex-col lg:flex-row text-center items-center justify-center gap-2">
        <div className="card m-2">
          <div className="i-mdi-twitter text-2xl text-center w-full" />
          <h5 className="mb-2">@JessePence5</h5>
          <a
            className="btn-secondary"
            href="https://twitter.com/JessePence5"
            target="_blank"
          >
            Send a Twitter DM!
          </a>
        </div>
        <div className="card">
          <div className="i-mdi-phone text-2xl text-center w-full" />
          <h5 className="mb-2">1(502)416-4155</h5>
          <a className="btn-secondary" href="tel:1(502)416-4155">
            Give me a call!
          </a>
        </div>
        <div className="card">
          <div className="i-mdi-email text-2xl text-center w-full" />
          <h5 className="mb-2">jessepence@gmail.com</h5>
          <a
            className="btn-secondary"
            href="mailto:jessepence@gmail.com"
            target="_blank"
          >
            Send an e-mail!
          </a>
        </div>
      </div>
      <form
        className="flex flex-col items-center justify-center gap-2 text-black w-full md:w-3/4 mx-auto p-4"
        ref={form}
        onSubmit={sendEmail}
      >
        <input
          type="text"
          name="name"
          className="rounded-md shadow-md p-2 min-w-1/3"
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="email"
          className="rounded-md shadow-md p-2 min-w-1/2"
          placeholder="E-mail Address"
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          className="rounded-md shadow-md p-2 min-w-3/4"
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          rows="10"
          className="rounded-md shadow-md p-2 w-full"
          required
        ></textarea>
        <button className="btn-tertiary">Send Message</button>
      </form>
    </section>
  )
}

export default Contact
