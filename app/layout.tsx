// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My Blog',
  description: 'Personal blog about technology and entrepreneurship',
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
                My Blog
              </a>
              <div className="space-x-4">
                <a href="/about" className="hover:text-gray-600">About</a>
                <a href="https://github.com/yourusername" className="hover:text-gray-600">
                  GitHub
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