'use client'
import { useState, useEffect } from 'react'
import { Header } from '../components/Header'
import { Hero } from '@/components/Hero'
import { Features } from '@/components/Features'
import { Partners } from '@/components/Partners'
import { Journey } from '@/components/Journey'
import { Blog } from '@/components/Blog'
import { CustomerReviews } from '@/components/CustomerReviews'

export function HomePage() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100/50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <Features />
      <Partners />
      <Journey />
      <Blog />
      <CustomerReviews />
    </div>
  )
}
