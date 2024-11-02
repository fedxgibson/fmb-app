// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fede Martinez',
  description: 'Personal blog about technology, organizations, startups, and things I find interesting :)',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="border-b">
          <div className="max-w-2xl mx-auto px-4 py-6">
            <div className="flex justify-between items-center">
              <Link href="/" className="text-xl font-bold">
              Fede Martinez | 
              </Link>
              <div className="space-x-4">
                <Link href="/about" className="hover:text-gray-600">About</Link>
                <Link href="https://github.com/fedxgibson" className="hover:text-gray-600">
                  GitHub
                </Link>
                <Link href="https://www.linkedin.com/in/fedxgibson" className="hover:text-gray-600">
                  LinkedIn
                </Link>
              </div>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}