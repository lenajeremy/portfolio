import * as React from 'react'
import Link from 'next/link'
import styles from './page.module.scss'
import {
  AboutAndEmailButtonGroup,
  AnimatedCursorText,
  ListView,
  Tool,
} from '@/components/index'

import client from './sanity-client'

type BlogItemType = {
  title: string
  image: {
    blurred: string
    url: string
  }
  slug: string
  tags: Array<{ id: string; tagName: string }>
}

const BlogListItem = Tool

export default async function Home() {
  const res: Array<BlogItemType> = await client.fetch(`
    *[_type == 'article']|order(_createdAt desc){
      title,
      "image": *[_id == ^.coverImage.asset._ref][0]{
        "blurred": metadata.lqip,
          url,
      },
      "slug": slug.current,
      "createdAt": _createdAt,
      "tags": tags[]{
        "id": _ref,
        "tagName": *[_type == 'tag' && _id == ^._ref][0].name
      }
      }  
    `)

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

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
        consequatur reiciendis. Qui eius voluptates cumque debitis aspernatur
        vitae, eum temporibus ducimus voluptatem? Quisquam alias vitae quia
        dolores necessitatibus magnam nam!
      </p>

      <ListView
        heading="Blog"
        subheading="Sharing experiences, knowledge and videos on design & tech."
        listItems={res.slice(0, 4).map((item) => ({
          name: item.title,
          category: item.tags[0].tagName,
          imageUrl: item.image,
          slug: item.slug,
        }))}
        renderListItems={(item) => (
          <Link href={`/blog/${item.slug}`}>
            <BlogListItem {...item} />
          </Link>
        )}
        buttonLink="/blog"
        buttonTitle="All Articles"
      />

      <ListView
        heading="Tools"
        subheading="Software and tools I use regularly."
        listItems={[
          {
            name: 'Figma',
            category: 'Design Tool',
            imageUrl:
              'https://framerusercontent.com/images/u6LX1xbRWcF4uAfNGXgPuyJiM.webp',
          },
          {
            name: 'Cron',
            category: 'Calendar',
            imageUrl:
              'https://framerusercontent.com/images/X4iSnNDJiPdfGvKo6FvP8pdne8.webp',
          },
          {
            name: 'Typescript',
            category: 'Programming Language',
            imageUrl: '/typescript.png',
          },
        ]}
        renderListItems={(item) => <Tool {...item} />}
        buttonLink="/tools"
        buttonTitle="All Tools"
      />

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro debitis
        expedita tempora, officiis incidunt maiores autem necessitatibus eveniet
        eligendi, facilis est excepturi deserunt? Quisquam tempora obcaecati
        corrupti dolore magnam quod nemo error minus dolorem natus aut maxime,
        fugiat facere eum. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Cum officia laboriosam, aut non ab corporis dolores deleniti
        perferendis deserunt magnam dolor quae porro ad magni, assumenda
        excepturi odio expedita optio ipsam amet rem repellendus. Hic molestias
        dolorum, mollitia aut rem laudantium, explicabo quo animi, nisi expedita
        rerum recusandae! Obcaecati, sed.
      </p>
    </div>
  )
}
