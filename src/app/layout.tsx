import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import 'remixicon/fonts/remixicon.css'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rakesh Mariyaplar',
  description: 'I am a software engineer based in Bangalore with 2.5 years of experience in front-end technologies. Currently, I am working as a Software Development Engineer 2 (SDE-2) at Hashedin by Deloitte.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
