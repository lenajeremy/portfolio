import { Inter } from 'next/font/google'
import './globals.scss'
import { Sidebar, Footer, Header } from '@/components/index'

export const metadata = {
  title: "Don't Create Next App",
  description: 'Generated by create next app',
}
// const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600'] })

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
          href="https://fonts.googleapis.com/css2?family=Courier+Prime&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <Sidebar />
        <main className="mainContainer">
          <div id="mainContent">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  )
}