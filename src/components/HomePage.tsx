'use client'
import { Header } from '@/components/Header'

export function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100/50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <Header />
      {/* Add other sections here */}
    </div>
  )
}