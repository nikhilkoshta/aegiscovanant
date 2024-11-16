'use client';

import { Blog } from "@/components/Blog";
import { CustomerReviews } from "@/components/CustomerReviews";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Journey } from "@/components/Journey";
import { Partners } from "@/components/Partners";
import { useEffect, useState } from "react";


export default function Home() {

  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Hero />
        <Features />
        <Partners />
        <Journey />
        <Blog />
        <CustomerReviews />
      </main>
      <Footer />
    </div>
  );
}
