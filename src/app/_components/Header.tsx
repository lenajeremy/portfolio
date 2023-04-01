import React from 'react'
import styles from './modules/header.module.scss'
import sidebarStyles from './modules/sidebar.module.scss'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className={`${sidebarStyles.sidebarContainer} ${styles.header}`}>
      <div className={sidebarStyles.heading}>
        <Image src={'/me.jpg'} alt="Jeremiah Lena" width={40} height={40} />
        <Link href="/about">
          <div>
            <p className={`foreground`}>Jeremiah Lena</p>
            <div className={sidebarStyles.positionsContainer}>
              <div>
                <p>Frontend Engineer</p>
                <p>Mobile Engineer</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
      <button className={styles.toggleSidebarButton}>
        <div />
        <div />
        <div />
      </button>
    </header>
  )
}
