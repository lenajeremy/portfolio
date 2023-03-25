'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './modules/navlink.module.scss'

function NavLink(props: React.ComponentProps<typeof Link>) {
  const pathName = usePathname()

  return (
    <Link
      {...props}
      className={`${styles.navLink} ${
        pathName === props.href ? styles.active : ''
      } ${props.className}`}
    >
      {props.children}
    </Link>
  )
}

export default NavLink
