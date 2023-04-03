import Link from 'next/link'
import React from 'react'
import styles from './modules/listviewwithbutton.module.scss'

type ListViewWithButtonProps<T> = {
  heading: string
  subheading: string
  listItems: Array<T>
  renderListItems: (item: T) => JSX.Element
  buttonLink: string
  buttonTitle: string
}

export default function ListViewWithButton<T>(
  props: ListViewWithButtonProps<T>,
) {
  return (
    <div className={styles.listViewContainer}>
      <div className={styles.heading}>
        <h4>{props.heading}</h4>
        <p>{props.subheading}</p>
      </div>
      <div className={styles.contentContainer}>
        {props.listItems.map((item) => props.renderListItems(item))}
      </div>

      <div>
        <Link className={styles.button} href={props.buttonLink}>
          {props.buttonTitle}
        </Link>
      </div>
    </div>
  )
}
