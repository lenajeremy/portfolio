'use client'

import React, { useEffect } from 'react'
import styles from './modules/animatedcursor.module.scss'

type AnimatedCursorTextProps = {
  texts: string[]
  as: keyof HTMLElementTagNameMap
}

function AnimatedCursorText({ texts, as }: AnimatedCursorTextProps) {
  let initialTextIndex = 0
  const _currentText = texts[initialTextIndex]

  const animatedText = React.useRef<HTMLDivElement>(null)
  let deletionInterval: NodeJS.Timeout;
  let incrementInterval;

  React.useEffect(() => {
    setupAnimation()
  }, [])

  React.useEffect(() => {
    if (animatedText.current) {
      animatedText.current.textContent = _currentText
    }
  }, [_currentText])

  const setupAnimation = () => {
    decreaseAnimation()
  }

  const decreaseAnimation = () => {
    let currentText = animatedText.current?.textContent || ''
    deletionInterval = setInterval(() => {
      let newText = currentText
        .split('')
        .splice(0, currentText.length - 1)
        .join('')
      if (animatedText.current) {
        animatedText.current.textContent = newText
        currentText = newText
      }

      if (!newText) {
        clearInterval(deletionInterval)
        console.log(deletionInterval)
        console.log('interval should be cleared')
        let nextTextIndex = initialTextIndex++ % texts.length
        currentText = texts[nextTextIndex]

        setTimeout(() => {
            increaseAnimation(currentText)
        }, 2000)
      }
    }, 70)
  }

  const increaseAnimation = (targetText: string) => {
    let currentText = ''

    let increaseInterval = setInterval(() => {

      let newText = targetText
        .split('')
        .splice(0, currentText.length + 1)
        .join('')
      if (animatedText.current) {
        animatedText.current.textContent = newText
        currentText = newText
      }


      if (currentText === targetText) {
        clearInterval(increaseInterval)
        setTimeout(() => {
            decreaseAnimation()
        }, 4000)
      }
    }, 180)
  }

  return (
    <div style={{ display: 'inline' }}>
      <span ref={animatedText}>{_currentText}</span>
      <span id={styles.cursor}>|</span>
    </div>
  )
}

export default AnimatedCursorText
