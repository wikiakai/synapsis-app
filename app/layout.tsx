import type { Metadata } from 'next'

import '@/styles/global.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Synapsis Id App',
  description: 'Frontend Engineer Test ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">
          <Navbar />

          {children}
        </main>
      </body>
    </html>
  )
}
