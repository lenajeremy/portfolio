import Image from 'next/image'
import * as React from 'react'
import { fetchProjects } from '../_api'
import styles from './projects.module.scss'

export default async function ProjectsPage() {
  const res = await fetchProjects()

  console.log(res)

  return (
    <div className={styles.pageContainer}>
      <div className={styles.header}>
        <h1>Projects</h1>
        <p className="foreground">Really cool stuffs I&apos;ve worked on.</p>
      </div>

      <div className={styles.projectsGrid}>
        {res.map((project: any) => (
          <div className={styles.project} key={project.id}>
            <Image
              src={project.coverImage.url}
              placeholder="blur"
              blurDataURL={project.coverImage.blurred}
              alt={project.name}
              width={200}
              height={150}
            />
            <div>
              <div className={styles.projectDetails}>
                <h5 className="foreground">{project.name}</h5>
                <p>{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
