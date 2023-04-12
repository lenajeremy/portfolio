import client from "../sanity-client";

export async function fetchBlog() {
    return await client.fetch(`
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
}

export async function fetchProjects() {
    return await client.fetch(`
    *[_type == 'project']|order(_createdAt desc) {
        "id": _id,
        name,
        description,
        content,
        "slug": slug.current,
        "createdAt": _createdAt,
        "coverImage": *[_id == ^.coverImage.asset._ref][0]{
            "blurred": metadata.lqip,
              url,
          },
    }
    `)
}