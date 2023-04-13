import * as React from 'react'
import { Tool } from '../_components'
import styles from './tools.module.scss'

export default function ToolsPage() {
  const tools: Array<React.ComponentProps<typeof Tool>> = [
    {
      name: 'Typescript',
      category: 'Programming Language',
      imageUrl: '/typescript.png',
    },
    {
      name: 'React',
      category: 'Coding',
      imageUrl: '/react.png',
    },
    {
      name: 'NextJS',
      category: 'Fullstack React Framework',
      imageUrl: '/nextjs.png',
    },
    {
      name: 'Framer Motion',
      category: 'Animation Library',
      imageUrl:
        'https://framerusercontent.com/images/8th70L8hfCMSHH26OxKegwlZzU.jpg',
    },
    {
      name: 'Figma',
      category: 'Design Tool',
      imageUrl:
        'https://framerusercontent.com/images/u6LX1xbRWcF4uAfNGXgPuyJiM.webp',
    },
    {
      name: 'Linear',
      category: 'Project Management',
      imageUrl:
        'https://framerusercontent.com/images/CQSyM2flIboH8syDCScLWEL7mgY.webp',
    },
    {
      name: 'Sanity',
      category: 'Content Management',
      imageUrl: '/sanity.png'
    }
  ]
  return (
    <div className={styles.toolsPage}>
      <h1>Tools</h1>
      <p className={`${styles.foreground} foreground`}>
        Some tools that I use and love.
      </p>
      <div className={styles.toolsGrid}>
        {tools.map((tool) => (
          <Tool {...tool} key={tool.name} />
        ))}
      </div>
    </div>
  )
}
