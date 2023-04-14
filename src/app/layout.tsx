import './globals.scss'
import { Metadata } from 'next'
import { Sidebar, Footer } from '@/components/index'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Jeremiah Lena',
  description:
    'Jeremiah Lena is a frontend engineer who creates solutions by using the latest technologies to develop easy-to-use, visually appealing and engaging websites.',
  openGraph: {
    images: [
      'https://cdn.sanity.io/images/8nimll87/production/373734e57d6e45220ba5ac02a0a6d5584911f3c5-2316x3088.jpg',
    ],
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
    images: [
      'https://cdn.sanity.io/images/8nimll87/production/373734e57d6e45220ba5ac02a0a6d5584911f3c5-2316x3088.jpg',
    ],
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

        <Script
          strategy="lazyOnload"
          src="https://www.googletagmanager.com/gtag/js?id=G-D6LSRKEDQ4"
        />

        <Script
          id="google-analytics"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-D6LSRKEDQ4');`,
          }}
        />
      </body>
    </html>
  )
}
