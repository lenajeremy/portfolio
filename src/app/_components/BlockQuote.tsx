'use client'
import React from 'react'
import styles from './modules/markdownstyles.module.scss'

export default function BlockQuote({
  children,
}: {
  children?: React.ReactNode
}) {
  return <div className={styles.blockQuoteContainer}>{children}</div>
}
