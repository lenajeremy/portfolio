import Image from 'next/image'
import Link from 'next/link'
import * as React from 'react'
import client from '../sanity-client'
import styles from './blog.module.scss'

export default async function BlogHome() {
  const res = await client.fetch(`
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
    <div className={styles.blogPage}>
      <h1>Blog</h1>
      <p className='foreground'>Sometimes I also write useful things.</p>
      <div className={styles.articlesContainer}>
        {res.map((article: ArticleProps) => {
          return <ArticleComponent {...article} key={article.title} />
        })}
      </div>
    </div>
  )
}

type ArticleProps = {
  title: string
  image: { blurred: string; url: string }
  slug: string
  createdAt: string
  tags: Array<{ id: string; tagName: string }>
}

function ArticleComponent(props: ArticleProps) {
  return (
    <Link href={'/blog/' + props.slug}>
      <div className={styles.article}>
        <Image
          src={props.image.url}
          width={300}
          height={200}
          alt={props.title + 'Image'}
          placeholder="blur"
          blurDataURL={props.image.blurred}
          style={{
            borderRadius: 6,
            objectFit: 'cover',
            objectPosition: 'center',
            width: '100%',
          }}
        />
        <div>
          <h3 className="foreground">{props.title}</h3>
          <p>{new Date(props.createdAt).toDateString()}</p>
        </div>
        {/* <div style={{ display: 'flex', gap: '8px',, width: '100%' }}>
          {props.tags.map((t) => (
            <p key={t.tagName}>#{t.tagName}</p>
          ))}
        </div> */}
      </div>
    </Link>
  )
}
