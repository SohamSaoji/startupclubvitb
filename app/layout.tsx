import './globals.css'
import type { Metadata } from 'next'
import Navbar from './components/navbar'
import Footer from './components/footer'
import BackgroundAnimation from './components/background-animation'

export const metadata: Metadata = {
  title: 'Startup Club VITB',
  description: 'Empowering student entrepreneurs at VIT Bhopal',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-gradient-to-br from-black to-gray-900 text-gray-100 min-h-screen flex flex-col">
        <div className="fixed inset-0 z-[-1]">
          <BackgroundAnimation />
        </div>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

