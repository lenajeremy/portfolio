import * as React from 'react'
import styles from './page.module.scss'
import {
  AboutAndEmailButtonGroup,
  AnimatedCursorText,
  ListView,
} from '@/components/index'
import client from './sanity-client'

type BlogListItem = number

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
      </div>

      {/* <BlogListItem /> */}

      <div className={styles.container}>
        <p className="w-560">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
          consequatur reiciendis. Qui eius voluptates cumque debitis aspernatur
          vitae, eum temporibus ducimus voluptatem? Quisquam alias vitae quia
          dolores necessitatibus magnam nam!
        </p>

        <p className="w-560">
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

// const BlogListItem = () => (
//   <ListView<BlogListItem>
//     heading="Blog"
//     subheading="Sharing experiences, knowledge and videos on design & tech."
//     listItems={[1, 2, 3, 4, 5]}
//     renderListItems={AboutAndEmailButtonGroup}
//     buttonLink="/blog"
//   />
// )
