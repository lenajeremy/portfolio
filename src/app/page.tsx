import * as React from 'react'
import styles from './page.module.scss'
import { AboutAndEmailButtonGroup, AnimatedCursorText } from '@/components/index'
import Link from 'next/link'
import client from './sanity-client'

export default async function Home() {
  return (
    <div className={styles.pageContainer}>
      <div className={`${styles.headingContainer}`}>
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

        <AboutAndEmailButtonGroup />

        <p className='w-560'>
          I&apos;m a Swiss digital product designer. I love grids, simplicity &
          good coffee. Apart being a practising minimalist and simple design
          addict, I’m also deeply into NoCode technologies and a truly
          typography enthusiast. As an autodidactic developer, I’m sensitive
          about important technical aspects and always seeking for
          self-improvement. I’m from Switzerland and based near Zurich, talking
          German and English natively. But for someone with roots in Chicago,
          Illinois, it is typical that I like to speak French. Don&apos;t I?
        </p>

        <p className='w-560'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
          consequatur reiciendis. Qui eius voluptates cumque debitis aspernatur
          vitae, eum temporibus ducimus voluptatem? Quisquam alias vitae quia
          dolores necessitatibus magnam nam!
        </p>

        <p className='w-560'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro debitis
          expedita tempora, officiis incidunt maiores autem necessitatibus
          eveniet eligendi, facilis est excepturi deserunt? Quisquam tempora
          obcaecati corrupti dolore magnam quod nemo error minus dolorem natus
          aut maxime, fugiat facere eum. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Cum officia laboriosam, aut non ab corporis dolores
          deleniti perferendis deserunt magnam dolor quae porro ad magni,
          assumenda excepturi odio expedita optio ipsam amet rem repellendus.
          Hic molestias dolorum, mollitia aut rem laudantium, explicabo quo
          animi, nisi expedita rerum recusandae! Obcaecati, sed.
        </p>
      </div>
    </div>
  )
}
