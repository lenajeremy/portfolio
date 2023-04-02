'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import styles from './modules/articleheader.module.scss'

export default function ArticleHeader(props: any) {
  const router = useRouter()
  const ANIMATABLE_BREAKPOINT = 150
  const articleHeaderElementRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY >= ANIMATABLE_BREAKPOINT) {
        articleHeaderElementRef.current?.classList.add(styles.open)
      } else {
        articleHeaderElementRef.current?.classList.remove(styles.open)
      }
    }

    document.addEventListener('scroll', scrollListener)

    return () => document.removeEventListener('scroll', scrollListener)
  }),
    []

  return (
    <div
      className={styles.articleHeaderContainer}
      ref={articleHeaderElementRef}
    >
      <div>
        <button className={styles.backToAllArticles} onClick={router.back}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.25 12.2743L19.25 12.2743"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.2998 18.2987L4.2498 12.2747L10.2998 6.24969"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p className="foreground">All articles</p>
        </button>

        <p className = 'foreground'>{props.title}</p>
      </div>
    </div>
  )
}
