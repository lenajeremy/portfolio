'use client'

import { MDXRemote, MDXRemoteProps } from "next-mdx-remote";

export default function MDXRenderer (source: MDXRemoteProps) {
    return (
        <MDXRemote {...source} />
    )
}