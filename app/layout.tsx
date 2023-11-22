import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import './globals.css'
import SideBar from '@/components/sidebar'
import { SessionProvider } from 'next-auth/react'
import { Session } from 'inspector'

const figtree = Figtree({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Music App',
  description: 'Listen to Music Now!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // <SessionProvider session={}>
    <html lang="en">
      <body className={figtree.className}>
        
        <SideBar>
        {children}
        </SideBar>
        
        </body>
    </html>
    // </SessionProvider>
  )
}
