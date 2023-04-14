import './globals.scss'
import { Metadata } from 'next'
import { Sidebar, Footer } from '@/components/index'

export const metadata: Metadata = {
  title: 'Jeremiah Lena',
  description:
    'Jeremiah Lena is a frontend engineer who creates solutions by using the latest technologies to develop easy-to-use, visually appealing and engaging websites.',
  openGraph: {
    images: ['_next/image?url=%2Fme.jpg&w=500&q=500'],
    url: 'https://www.lenajeremy.xyz',
    username: 'Jeremiah Lena',
    type: 'profile',
    title: 'Jeremiah Lena',
  },
  twitter: {
    card: 'summary_large_image',
    creator: 'Jeremiah Lena',
    description:
      'Jeremiah Lena is a frontend engineer who creates solutions by using the latest technologies to develop easy-to-use, visually appealing and engaging websites.',
    images: ['_next/image?url=%2Fme.jpg&w=500&q=500'],
    title: 'Jeremiah Lena',
    site: 'lenajeremy.xyz',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Sidebar />
        <main className="mainContainer">
          <div id="mainContent">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  )
}
