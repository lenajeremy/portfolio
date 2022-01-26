const AboutMe: React.FC = () => {
  return (
    <div className="md:pl-20 space-y-6 md:w-1/2 w-full">
      <p className="text-md md:text-lg leading-8 md:leading-10">
        I'm a passionate frontend engineer who enjoys building beautiful and
        interactive websites. I have a knack for crafting immersive and
        user-friendly websites.
      </p>
      <p className="md:text-lg leadinng-8 md:leading-10">
        While ensuring applications are beautiful and visually appealing, I
        consider it priority that applications must be performance and secure,
        ensuring that users get the best experience possible.
      </p>

      <p className="md:text-lg leadinng-8 md:leading-10">
        While I'm not coding, reading or writing a tech-related article, I spend
        time playing the guitar and singing, making music to please my ears. I
        also love being around family and friends☺☺.
      </p>
    </div>
  )
}

const Technologies: React.FC = () => {
  const technologies = [
    'React',
    'React Native',
    'Firebase',
    'Framer Motion',
    'HTML5',
    'CSS3',
    'SCSS',
    'Responsive Design',
    'Javascript',
    'Git',
    'Redux',
    'NextJS',
    'Agile Development',
  ]

  return (
    <div className="flex flex-wrap w-full md:w-1/2 stackContainer md:pr-20 md:pt-8">
      {technologies.map((tech) => (
        <p className="stack bg-green-800">{tech}</p>
      ))}
    </div>
  )
}

export const MyStack = () => {
  return (
    <>
      <div className="mt-10 md:mt-0 md:p-10 technologies min-h-screen overflow-hidden flex flex-col justify-center">
        <h1 className="text-center text-4xl md:text-8xl uppercase text-white font-bold primary">
          SKILLS
        </h1>
        <div className="flex-col md:flex-row flex gap-10 my-10 px-4">
          <AboutMe />
          <Technologies />
        </div>
      </div>
    </>
  )
}
