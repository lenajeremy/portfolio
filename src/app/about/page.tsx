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
    'love'
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
        <p className={styles.quote}>{quote[0].quote} ({quote[0].author})</p>
      </div>

      <div className={`w-560 ${styles.aboutContent}`}>
        <p>
          I&apos;m a frontend engineer based in Lagos, Nigeria. I love microinteraction and sometimes obsess over them. 
          Apart being a practising minimalist and simple design
          addict, I’m also deeply into NoCode technologies and a truly
          typography enthusiast. As an autodidactic developer, I’m sensitive
          about important technical aspects and always seeking for
          self-improvement. I’m from Switzerland and based near Zurich, talking
          German and English natively. But for someone with roots in Chicago,
          Illinois, it is typical that I like to speak French. Don&apos;t I?
        </p>

        <p>
          Design is at the heart of how I build an emotional connection between
          your brand and your customers. Through my background in human computer
          interaction design and requirements engineering, I know exactly how to
          design your digital product to deliver great value for your business.
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
