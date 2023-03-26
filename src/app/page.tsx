import * as React from 'react'
import styles from './page.module.scss'
import { AnimatedCursorText } from '@/components/index'
import Link from 'next/link'
import client from './sanity-client'

export default async function Home() {

  return (
    <div className={styles.pageContainer}>
      <div className={styles.headingContainer}>
        <div>
          <h1 className={styles.heading}>Designing highly</h1>
          <h1 className={styles.heading}>
            polished{' '}
            <AnimatedCursorText
              texts={['software.', 'apps.', 'websites.']}
              as="span"
            />
          </h1>
        </div>

        <p className={`foreground ${styles.developerDescription}`}>
          Product designer obsessed with (no)code. Creating aesthetic & timeless
          digital products & helpful tools that give you an unfair advantage
          online.
        </p>

        <div className={styles.ctaContainer}>
          <Link
            href="/about"
            className={`foreground ${styles.cta} ${styles.ctaAbout}`}
          >
            About
          </Link>
          <button className={`foreground ${styles.cta} ${styles.ctaEmail}`}>
            E-mail
          </button>
        </div>

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
      </div>
    </div>
  )
}
