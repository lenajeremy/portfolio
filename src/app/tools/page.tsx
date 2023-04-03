import Image from 'next/image'
import * as React from 'react'
import styles from './tools.module.scss'

export default function ToolsPage() {
  const tools: Array<{
    imageUrl: string
    name: string
    category: string
  }> = [
    {
      name: 'Framer',
      category: 'Website Builder',
      imageUrl:
        'https://framerusercontent.com/images/8th70L8hfCMSHH26OxKegwlZzU.jpg',
    },
    {
      name: 'Instaprice',
      category: 'Pricing Calculator',
      imageUrl:
        'https://framerusercontent.com/images/DEcCS5H0lo7pxictMSp8ngeRFUs.webp',
    },
    {
      name: 'Linear',
      category: 'Project Management',
      imageUrl:
        'https://framerusercontent.com/images/CQSyM2flIboH8syDCScLWEL7mgY.webp',
    },
    {
      name: 'Webflow',
      category: 'Website Builder',
      imageUrl:
        'https://framerusercontent.com/images/UPkjR5UQGzIvkr5SJ7WBpGso4o.webp',
    },
    {
      name: 'Figma',
      category: 'Design Tool',
      imageUrl:
        'https://framerusercontent.com/images/u6LX1xbRWcF4uAfNGXgPuyJiM.webp',
    },
    {
      name: 'Cron',
      category: 'Calendar',
      imageUrl:
        'https://framerusercontent.com/images/X4iSnNDJiPdfGvKo6FvP8pdne8.webp',
    },
    {
      name: 'Typescript',
      category: 'Programming Language',
      imageUrl: '/typescript.png',
    },
  ]
  return (
    <div className={styles.toolsPage}>
      <h1>Tools</h1>
      <p className={`${styles.foreground} foreground`}>
        Some tools that I use and love.
      </p>
      <div className={styles.toolsGrid}>
        {tools.map((tool) => (
          <div className={styles.tool} key={tool.name}>
            <Image
              src={tool.imageUrl}
              width={40}
              height={40}
              alt={`Image for ${tool.name}`}
              style={{
                border: '1px solid rgb(var(--border-color-rgb))',
                borderRadius: 6,
              }}
            />
            <div>
              <p className="foreground">{tool.name}</p>
              <p>{tool.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
