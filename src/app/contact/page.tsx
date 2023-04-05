import * as React from 'react'
import { AboutAndEmailButtonGroup, ContactForm } from '../_components'
import styles from './contactpage.module.scss'


export default function ContactPage() {

  return (
    <div className={styles.contactPage}>
      <div className={styles.header}>
        <h1>Contact</h1>
        <p className={`foreground ${styles.foreground}`}>
          I’m always looking to collaborate on interesting projects with great
          people. Need a supportive hand? I have two!
        </p>

        <AboutAndEmailButtonGroup />
      </div>

      <div className={styles.contactSection}>
        <h4>Send us a message</h4>
        <ContactForm />
      </div>
    </div>
  )
}
