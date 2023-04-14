import React from 'react'
import styles from './modules/sidebar.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        Built with ❤️ by Jeremiah Lena | Inspired by{' '}
        <a
          href="https://cedric.design"
          style={{ textDecoration: 'underline', textDecorationStyle: 'dotted' }}
          referrerPolicy="no-referrer"
          target={'_blank'}
        >
          Cédric Moore
        </a>
      </div>
    </footer>
  )
}
