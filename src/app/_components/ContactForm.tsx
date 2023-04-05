'use client'
import { useForm } from 'react-hook-form'
import styles from './modules/contactform.module.scss'

export default function ContactForm() {
  const { handleSubmit, register } = useForm<{
    name: string
    email: string
    message: string
  }>()
  return (
    <form
      onSubmit={handleSubmit((values) => console.log(values))}
      className={styles.contactForm}
    >
      <input className={styles.input} {...register('name')} />
      <input className={styles.input} {...register('email')} />
      <textarea className={styles.textarea} {...register('message')}></textarea>
      <input className={styles.input} {...register('email')} />
    </form>
  )
}
