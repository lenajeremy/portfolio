'use client'
import React from 'react'
import Link from 'next/link'
import styles from './modules/aboutandemailbuttongroup.module.scss'

function AboutAndEmailButtonGroup() {
  const [hasCopiedEmail, setHasCopiedEmail] = React.useState<boolean>(false)
  const EMAIL_ADDRESS = 'jeremiahlena13@gmail.com'

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL_ADDRESS)
      setHasCopiedEmail(true)
      setTimeout(() => setHasCopiedEmail(false), 3000)
    } catch (error) {
      console.log(error)
      alert('error while copying email address')
    }
  }

  return (
    <div className={styles.ctaContainer}>
      <Link
        href="/about"
        className={`foreground ${styles.cta} ${styles.ctaAbout}`}
      >
        About
      </Link>
      <button
        className={`foreground ${styles.cta} ${styles.ctaEmail} ${
          hasCopiedEmail ? styles.copied : ''
        }`}
        onClick={handleCopyEmail}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14.7378 2.76181H8.0848C6.0048 2.75381 4.2998 4.41181 4.2508 6.49081V17.2038C4.2048 19.3168 5.8798 21.0678 7.9928 21.1148C8.0238 21.1148 8.0538 21.1158 8.0848 21.1148H16.0738C18.1678 21.0298 19.8178 19.2998 19.8028 17.2038V8.03781L14.7378 2.76181Z"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14.4751 2.75V5.659C14.4751 7.079 15.6231 8.23 17.0431 8.234H19.7981"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14.2881 15.3585H8.8881"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.2432 11.606H8.8872"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <div>
          <div className={styles.emailTextContainer}>
            <div>E-mail</div>
            <div>Copied</div>
          </div>
        </div>
      </button>
    </div>
  )
}

export default AboutAndEmailButtonGroup
