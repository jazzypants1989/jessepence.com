import { Pagination, Navigation, EffectCoverflow, Virtual } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/effect-coverflow"

const data = [
  {
    id: 1,
    image: "./electriclarrys.png",
    title: "Electric Larry's",
    github: "https://github.com/jazzypants1989/electric-larrys",
    live: "https://electriclarrys.com",
  },
  {
    id: 2,
    image: "./jesseddit.png",
    title: "Jesseddit",
    github: "https://github.com/jazzypants1989/jesseddit",
    live: "https://jesseddit.com",
  },
  {
    id: 3,
    image: "./astrodocstemplate.png",
    title: "Astro Docs Template",
    github: "https://github.com/jazzypants1989/astro-docs-template",
    live: "https://astro-docs-template.netlify.app/",
  },
  {
    id: 4,
    image: "./realshop.png",
    title: "Real Shop",
    github: "https://github.com/jazzypants1989/deno-real-store",
    live: "https://real-store.deno.dev/",
  },
  {
    id: 5,
    image: "./reactrouter.png",
    title: "React View Transition Router",
    github:
      "https://github.com/jazzypants1989/react-router-navigation-viewtransitions",
    live: "https://react-router-navigation-viewtransitions.vercel.app/",
  },
  {
    id: 6,
    image: "./fastify.png",
    title: "Fastify Postgres REST API Starter",
    github: "https://github.com/jazzypants1989/fastify-prisma-api",
    live: "https://github.com/jazzypants1989/fastify-prisma-api",
  },
]

const Portfolio = () => {
  return (
    <section
      className="bg-tertiary rounded-2xl w-full md:max-w-3/4 m-auto p-4 observed sleeping bg-opacity-90 text-center"
      id="portfolio"
    >
      <div className="flex flex-col justify-center items-center mb-24 md:mb-12 lg:mb-2 w-full">
        <h2
          font="bold"
          text="4xl center white dark:black"
          transition="all duration-2000 ease-in-out"
          bg="secondary opacity-50"
          rounded="lg"
          p="4"
          w="fit"
        >
          Portfolio
        </h2>
      </div>
      <Swiper
        modules={[Pagination, Navigation, EffectCoverflow]}
        spaceBetween={50}
        pagination={{ clickable: true }}
        navigation
        loop
        effect="coverflow"
      >
        {data.map(({ id, image, title, github, live }) => (
          <SwiperSlide
            className="flex flex-col justify-center p-4 h-full"
            key={id}
          >
            <img
              src={image}
              alt={title}
              className="rounded-2xl mx-auto aspect-auto w-full"
            />
            <h3 className="text-center text-2xl font-bold p-4">{title}</h3>
            <div className="flex gap-2 justify-center">
              <a href={github} className="btn-secondary mb-4" target="_blank">
                Github Repo
              </a>
              <a href={live} className="btn-primary mb-4" target="_blank">
                Live Demo!
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <p>Swipe left or right to see more!</p>
    </section>
  )
}

export default Portfolio
