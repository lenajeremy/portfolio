'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import LoadingAnimation from './LoadingAnimation'
import styles from './modules/contactform.module.scss'

export default function ContactForm() {
  type FormType = {
    name: string
    email: string
    message: string
  }
  const { handleSubmit, register } = useForm<FormType>()

  const [isSendingMail, setIsSendingMail] = React.useState<boolean>(false)

  const onSubmitSuccess = (data: FormType) => {
    console.log(data)
    setIsSendingMail(true)

    setTimeout(() => setIsSendingMail(false), 2000)
  }

  const onSubmitFailure = (data: unknown) => {
    console.log(data)
    setIsSendingMail(false)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmitSuccess, onSubmitFailure)}
      className={styles.contactForm}
    >
      <div className={styles.inputContainer}>
        <input
          className={styles.input}
          {...register('name', { required: true })}
          placeholder="Name"
        />
        <input
          className={styles.input}
          {...register('email', { required: true })}
          placeholder="Email"
        />
      </div>
      <textarea
        className={styles.textarea}
        {...register('message', { required: true })}
        placeholder="Message"
        rows={8}
      ></textarea>
      {isSendingMail ? (
        <div className={styles.loadingContainer}>
          <LoadingAnimation width={24} height={24} />
        </div>
      ) : (
        <input className={styles.input} type="submit" value={'Submit'} />
      )}
    </form>
  )
}
