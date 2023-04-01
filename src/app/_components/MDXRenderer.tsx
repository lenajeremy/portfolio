'use client'

import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote'
import Codeblock from './Codeblock'
import CounterButton from './CounterButton'

export default function MDXRenderer(props: MDXRemoteProps) {
  return (
    <MDXRemote
      {...props}
      components={{
        CounterButton: CounterButton,
        code: Codeblock,
        ...props.components,
      }}
    />
  )
}
