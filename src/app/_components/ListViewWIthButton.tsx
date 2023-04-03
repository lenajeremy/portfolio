'use client'
import React from 'react'
import styles from './modules/listviewwithbutton.module.scss'

type ListViewWithButtonProps<T> = {
  heading: string
  subheading: string
  listItems: Array<T>
  Component: () => JSX.Element
  buttonLink: string
}

export default function ListViewWithButton<T>(
  props: ListViewWithButtonProps<T>,
) {
//   const Component = React.memo(props.renderComponent)

//   console.log(Component)

  return (
    <div className={styles.listViewContainer}>
      <h1>{props.heading}</h1>
      {props.listItems.map((item, index) => {
        return <props.Component key={index} />
      })}
    </div>
  )
}
