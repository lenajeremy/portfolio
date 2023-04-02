'use client'

import { CopyBlock, androidstudio } from 'react-code-blocks'
import styles from './modules/markdownstyles.module.scss'

export default function Codeblock({
  children: text,
  ...otherProps
}: {
  children?: any
  className?: string
}) {
  if (otherProps.className) {
    return (
      <div className={styles.codeBlock}>
        <CopyBlock
          text={text}
          language={
            otherProps.className
              ? otherProps.className.split('language-')[1]
              : 'jsx'
          }
          showLineNumbers={true}
          wrapLines={true}
          theme={androidstudio}
        />
      </div>
    )
  } else {
    return <span className={styles.inlineCode}>{text}</span>
  }
}
