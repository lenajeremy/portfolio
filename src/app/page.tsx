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
    *[_type == 'article']|order(_updatedAt desc){
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
          <h1 className={styles.heading}>Hey! I&apos;m Jeremiah</h1>
          <h1 className={styles.heading}>
            {' '}
            I develop{' '}
            <AnimatedCursorText
              texts={['software.', 'apps.', 'websites.']}
              as="span"
            />
          </h1>
        </div>

        <p className={`foreground ${styles.developerDescription}`}>
          Frontend engineer who creates solutions by using the latest
          technologies to develop easy-to-use, visually appealing and engaging
          websites.
        </p>

        <AboutAndEmailButtonGroup />
      </div>

      <p className = 'w-560'>
        I love working at the intersection of design and technology, where I get
        to take a designer&apos;s vision and turn it into a dynamic and
        interactive website or app. As a frontend engineer, I get to flex my
        creative muscles while also problem-solving to create engaging user
        experiences.
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
            name: 'Typescript',
            category: 'Programming Language',
            imageUrl: '/typescript.png',
          },
          {
            name: 'React',
            category: 'Coding',
            imageUrl: '/react.png',
          },
          {
            name: 'NextJS',
            category: 'Fullstack React Framework',
            imageUrl: '/nextjs.png',
          },
        ]}
        renderListItems={(item) => <Tool {...item} />}
        buttonLink="/tools"
        buttonTitle="All Tools"
      />

      <div className="w-560">
        <p>
          As a frontend engineer with a passion for designing interactive
          websites, I strive to create digital experiences that are both
          visually appealing and user-friendly. I pay close attention to detail
          and pour my heart into every project to ensure that the end product is
          not only aesthetically pleasing but also functional and intuitive to
          use.
        </p>

        <br />

        <p>
          My background in user interface design and web development allows me
          to approach projects from both a design and technical perspective,
          ensuring that the website not only looks great but also functions
          flawlessly.
        </p>

        <br />

        <p>
          I’m always looking to collaborate on interesting projects with great
          people. Need a hand? I have two – Nice to meet you!
        </p>
      </div>
    </div>
  )
}
