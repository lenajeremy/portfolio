import React from 'react'
import Image from 'next/image'
import styles from './modules/tool.module.scss'

export type ToolProps = {
  imageUrl: string | { blurred: string; url: string }
  name: string
  category: string
}

export default function Tool(tool: ToolProps) {
  return (
    <div className={styles.tool}>
      <Image
        src={
          typeof tool.imageUrl === 'string' ? tool.imageUrl : tool.imageUrl.url
        }
        width={40}
        height={40}
        alt={`Image for ${tool.name}`}
        style={{
          border: '1px solid rgb(var(--border-color-rgb))',
          borderRadius: 6,
        }}
        placeholder={typeof tool.imageUrl === 'string' ? 'empty' : 'blur'}
        blurDataURL={
          typeof tool.imageUrl === 'string' ? '' : tool.imageUrl.blurred
        }
      />
      <div className = {styles.textContainer}>
        <p className="foreground">{tool.name}</p>
        <p>{tool.category}</p>
      </div>
    </div>
  )
}
