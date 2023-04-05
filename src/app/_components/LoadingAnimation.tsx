'use client'
import React from 'react'
import Lottie from 'lottie-react'
import loadingLottie from '../../loading.json'
import styles from './modules/header.module.scss'

export default function LoadingAnimation({
  width,
  height,
}: {
  width?: number
  height?: number
}) {
  return (
    <div className={styles.loadingAnimation}>
      <Lottie
        animationData={loadingLottie}
        style={{ width: width || 36, height: height || 36 }}
      />
    </div>
  )
}
