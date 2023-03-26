import React from 'react'
import styles from './modules/header.module.scss'
import sidebarStyles from './modules/sidebar.module.scss'
import Image from 'next/image'

export default function Header() {
  return (
    <header className={`${sidebarStyles.sidebarContainer} ${styles.header}`}>
      <div className={sidebarStyles.heading}>
        <Image src={'/me.jpg'} alt="Jeremiah Lena" width={40} height={40} />
        <div>
          <p className={`foreground`}>Jeremiah Lena</p>
          <p>Frontend Engineer</p>
        </div>
      </div>
      <button className={styles.toggleSidebarButton}>
        <div />
        <div />
        <div />
      </button>
    </header>
  )
}
