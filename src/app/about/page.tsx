import * as React from 'react'
import { AboutAndEmailButtonGroup } from '../_components'
import styles from './about.module.scss'

export default function AboutPage() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.heading}>
        <h1>About Jeremiah</h1>
        <p className="foreground">European aesthetics with American spirit.</p>
      </div>

      <div className={styles.aboutContent}>
        <p>
          I&apos;m a Swiss digital product designer. I love grids, simplicity &
          good coffee. Apart being a practising minimalist and simple design
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
