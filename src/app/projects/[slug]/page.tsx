import { fetchProject } from '@/app/_api'
import ImageClient from '@/app/_components/ImageClient'
import React from 'react'

async function ProjectDetailsPage(props: any) {

  const project = await fetchProject(props.params.slug)

  return (
    <div>
      <h1>{project.name}</h1>

      <div>
        <ImageClient
          placeholder="blur"
          blurDataURL={project.coverImage.blurred}
          src={project.coverImage.src}
          alt={'image description'}
        />
        <p>{project.description}</p>
      </div>

    </div>
  )
}

export default ProjectDetailsPage
