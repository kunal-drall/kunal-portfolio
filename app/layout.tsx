// app/layout.tsx
import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import { Righteous, Inter } from 'next/font/google'
import './globals.css'
import SocialBar from './components/SocialBar'
import Background from './components/Background'

const righteous = Righteous({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-righteous'
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'Kunal Drall | Web Developer',
  description: 'Personal portfolio of Kunal Drall - Web Developer passionate about music, programming, stars, and cats.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${righteous.variable} ${inter.variable} bg-black text-white`}>
        <Background />
        <main className="relative z-10">
          {children}
        </main>
        <SocialBar />
        <Analytics />
      </body>
    </html>
  )
}