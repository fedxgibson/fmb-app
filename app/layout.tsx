// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
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
              <a href="/" className="text-xl font-bold">
                { metadata.title }
              </a>
              <div className="space-x-4">
                <a href="/about" className="hover:text-gray-600">About</a>
                <a href="https://github.com/fedxgibson" className="hover:text-gray-600">
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/fedxgibson" className="hover:text-gray-600">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}