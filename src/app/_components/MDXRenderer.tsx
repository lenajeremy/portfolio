'use client'

import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote'
import Codeblock from './Codeblock'
import CounterButton from './CounterButton'
import BlockQuote from './BlockQuote'

export default function MDXRenderer(props: MDXRemoteProps) {
  return (
    <MDXRemote
      {...props}
      components={{
        CounterButton: CounterButton,
        code: Codeblock,
        blockquote: BlockQuote,
        ...props.components,
      }}
    />
  )
}
