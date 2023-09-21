'use client'
import styles from './modules/carousel.module.scss'

interface CarouselProps {
  images: Array<{ blurred: string; url: string }>
}

function Carousel(props: CarouselProps) {
  return (
    <div>
      <h1>Hello there!</h1>
      <pre>{JSON.stringify(props)}</pre>
    </div>
  )
}

export default Carousel
