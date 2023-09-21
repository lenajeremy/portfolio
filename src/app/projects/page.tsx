import Image from 'next/image'
import * as React from 'react'
import { fetchProjects } from '../_api'
import styles from './projects.module.scss'
import Link from 'next/link'

export default async function ProjectsPage() {
  const res = await fetchProjects()

  return (
    <div className={styles.pageContainer}>
      <div className={styles.header}>
        <h1>Projects</h1>
        <p className="foreground">Really cool stuffs I&apos;ve worked on.</p>
      </div>

      <div className={styles.projectsGrid}>
        {res.map((project: any) => (
          <Link key={project.id} href={`/projects/${project.slug}`}>
            <div className={styles.project} key={project.id}>
              <Image
                src={project.coverImage.url}
                placeholder="blur"
                blurDataURL={project.coverImage.blurred}
                alt={project.name}
                width={500}
                height={375}
              />
              <div>
                <div className={styles.projectDetails}>
                  <h5 className="foreground">{project.name}</h5>
                  <p>{project.description}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
