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
    *[_type == 'project' && public == true]|order(_updatedAt desc) {
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

type Project = {
  name: string;
  coverImage: {
    src: string;
    blurred: string;
  };
  description: string;
  content: string;
}

export async function fetchProject(projectSlug: string): Promise<Project> {
  return await client.fetch(`
  *[_type == 'project' && slug.current == '${projectSlug}'][0] {
    name,
    slug,
    'coverImage': {
      'src': coverImage.asset->url,
      'blurred': coverImage.asset->metadata.lqip
    },
    description,
    content,
    'links': links[]->{
      title,
      url
    }
  }
  `)
}