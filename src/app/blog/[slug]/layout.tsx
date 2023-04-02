import client from '@/app/sanity-client'
import { ArticleHeader } from '@/app/_components'

export default async function ArticlePageLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { slug: string }
}) {
    
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

  return (
    <div>
      <ArticleHeader {...article} />
      {children}
    </div>
  )
}
