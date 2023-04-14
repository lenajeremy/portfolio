import './globals.scss'
import { Metadata } from 'next'
import { Sidebar, Footer } from '@/components/index'

export const metadata: Metadata = {
  title: 'Jeremiah Lena',
  description:
    'Jeremiah Lena is a frontend engineer who creates solutions by using the latest technologies to develop easy-to-use, visually appealing and engaging websites.',
    openGraph: {
      images: ['/me.jpg'],
      url: 'https://www.lenajeremy.xyz',
      username: 'Jeremiah Lena',
    }
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
