import Image from 'next/image'
import Link from 'next/link'
import * as React from 'react'
import client from '../sanity-client'

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
    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 20 }}>
      <h1>Blog</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
        expedita magni aut optio delectus quibusdam reprehenderit perferendis
        perspiciatis at soluta non atque necessitatibus est numquam recusandae
        alias, sequi adipisci itaque!
      </p>
      <div
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '36px' }}
      >
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
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '12px' }}>
        <Image
          src={props.image.url}
          width={400}
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
        <h2 className="foreground" style = {{ fontSize: 20 }}>{props.title}</h2>
        <div style={{ display: 'flex', gap: '8px', marginTop: '-8px' }}>
          {props.tags.map((t) => (
            <p key={t.tagName}>#{t.tagName}</p>
          ))}
        </div>
      </div>
    </Link>
  )
}
