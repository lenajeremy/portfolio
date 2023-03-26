import Link from 'next/link'
import React from 'react'
import styles from './modules/sidebar.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>Built with ❤️ by Jeremiah Lena</div>
      <div>
        <Link href="/projects">Projects</Link>
        <Link href="/blog">Writing</Link>
        <Link href="/tools">Stack</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </footer>
  )
}
