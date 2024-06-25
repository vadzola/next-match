import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Providers from '@/components/Providers'
import TopNav from '@/components/navbar/TopNav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NextMatch App',
  description: 'For people who want to meet new partners',
}

export default function RootLayout({
  children,
}: Readonly<{
 
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        <Providers>
        <TopNav />
        <main className='container mx-auto p-10'>
          {children}
        </main>
       
       </Providers> 
      </body>
    </html>
  )
}
