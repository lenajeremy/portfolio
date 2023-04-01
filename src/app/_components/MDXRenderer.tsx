'use client'

import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote'
import Codeblock from './Codeblock'
import CounterButton from './CounterButton'

export default function MDXRenderer(source: MDXRemoteProps) {
  return (
    <MDXRemote
      {...source}
      components={{
        CounterButton: CounterButton,
        code: Codeblock,
      }}
    />
  )
}
