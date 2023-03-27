import React from 'react'
import client from '@/app/sanity-client'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRenderer } from '@/app/_components'
import CounterButton from '@/app/_components/CounterButton'

type PageProps = {
  params: {
    slug: string
  }
}

export default async function ArticlePage(props: PageProps) {
  const article = await client.fetch(`
    *[_type == 'article' && slug.current == '${props.params.slug}']{
        content,
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
    }[0]
    `)

  if (article.length === 0) {
    console.log(article)

    notFound()
  }

  const mdxSource = await serialize(article.content)

  console.log(mdxSource)

  return (
    <div>
      <h1 className="foreground">{article.title}</h1>
      <Image
        width={650}
        height={400}
        src={article.image.url}
        blurDataURL={article.image.blurred}
        placeholder="blur"
        loading="eager"
        alt={`Cover picture for ${article.title}`}
      />
      <MDXRenderer {...mdxSource} components={{ CounterButton: CounterButton  }} />
    </div>
  )
}
