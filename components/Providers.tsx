'use client'

import { ThemeProvider } from 'next-themes'
import { AnimatePresence } from 'framer-motion'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
		<AnimatePresence mode="wait">
			{children}
		</AnimatePresence>
  )
}