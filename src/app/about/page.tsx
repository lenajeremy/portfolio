import * as React from 'react'
import { AboutAndEmailButtonGroup } from '../_components'
import styles from './about.module.scss'

export default async function AboutPage() {
  const quote_categories = [
    'art',
    'best',
    'cool',
    'dad',
    'funny',
    'friendship',
    'freedom',
    'hope',
    'humor',
    'imagination',
    'love',
  ]

  const promise = await fetch(
    `https://api.api-ninjas.com/v1/quotes?category=${quote_categories.at(
      Math.floor(Math.random() * quote_categories.length),
    )}`,
    { headers: { 'X-Api-Key': 'Yl88t9Xen+6wIS1Gpz8u8A==VzLSqVQM8YUkIMvH' } },
  )

  const quote = await promise.json()

  return (
    <div className={styles.pageContainer}>
      <div className={styles.heading}>
        <h1>About Jeremiah</h1>
        <p className={styles.quote}>
          {quote[0].quote} ({quote[0].author})
        </p>
      </div>

      <div className={`w-560 ${styles.aboutContent}`}>
        <p>
          I&apos;m a frontend engineer based in Lagos, Nigeria. I love
          microinteraction and sometimes obsess over them.
        </p>
        <p>
          As a frontend engineer with a passion for designing interactive
          websites, I strive to create digital experiences that are both
          visually appealing and user-friendly. I pay close attention to detail
          and pour my heart into every project to ensure that the end product is
          not only aesthetically pleasing but also functional and intuitive to
          use.
        </p>

        <p>
          My background in user interface design and web development allows me
          to approach projects from both a design and technical perspective,
          ensuring that the website not only looks great but also functions
          flawlessly.
        </p>

        <p>
          I’m always looking to collaborate on interesting projects with great
          people. Need a hand? I have two – Nice to meet you!
        </p>

        <AboutAndEmailButtonGroup />
      </div>
    </div>
  )
}
