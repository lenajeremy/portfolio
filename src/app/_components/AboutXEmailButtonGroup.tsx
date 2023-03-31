'use client'
import Link from "next/link"
import styles from './modules/aboutandemailbuttongroup.module.scss'

function AboutAndEmailButtonGroup() {
  return (
    <div className={styles.ctaContainer}>
      <Link
        href="/about"
        className={`foreground ${styles.cta} ${styles.ctaAbout}`}
      >
        About
      </Link>
      <button className={`foreground ${styles.cta} ${styles.ctaEmail}`}>
        E-mail
      </button>
    </div>
  )
}


export default AboutAndEmailButtonGroup