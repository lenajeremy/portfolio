import React from 'react'
import client from '@/app/sanity-client'
import { notFound } from 'next/navigation'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRenderer } from '@/app/_components'
import ImageClient from '@/app/_components/ImageClient'
import styles from './blogpage.module.scss'
import { Metadata } from 'next'

type PageProps = {
  params: {
    slug: string
  }
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const article = await client.fetch(`
    *[_type == 'article' && slug.current == '${params.slug}']{
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

  return {
    title: article.title,
    description: article.content.substring(0, 300),
    openGraph: {
      images: [article.image.url],
      description: article.content.substring(0, 300),
      url: `https://lenajeremy.xyz/blog/${article.slug}`,
      type: 'article',
      title: article.title,
    },
    twitter: {
      card: 'summary_large_image',
      creator: 'Jeremiah Lena',
      description: article.content.substring(0, 300),
      images: [article.image.url],
      title: article.title,
      site: 'lenajeremy.xyz',
    },
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

  if (!article) {
    notFound()
  }

  const mdxSource = await serialize(article.content)

  return (
    <div className={styles.pageContainer}>
      <h1 className="foreground">{article.title}</h1>
      <ImageClient
        width={650}
        height={350}
        src={article.image.url}
        blurDataURL={article.image.blurred}
        placeholder="blur"
        loading="eager"
        alt={`Cover picture for ${article.title}`}
        style={{
          maxHeight: 350,
          height: 'false',
          borderRadius: 6,
          marginTop: '3rem',
          marginBottom: '2rem',
        }}
      />
      <MDXRenderer
        {...mdxSource}
        components={{
          // @ts-ignore
          img: ImageClient,
          h1: 'h2',
        }}
      />
    </div>
  )
}
