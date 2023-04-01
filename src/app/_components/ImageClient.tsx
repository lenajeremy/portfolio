'use client'

import Image from 'next/image'

function ImageClient(props: React.ComponentProps<typeof Image>) {
  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image
      width={700}
      height={400}
      {...props}
      style={{
        objectFit: 'cover',
        objectPosition: 'top left',
        border: '1px solid rgb(var(--border-color-rgb))',
        margin: '20px 0px',
        width: '100%',
        height: '100%',
        ...props.style,
      }}
    />
  )
}

export default ImageClient
