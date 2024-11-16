'use client'
import { motion } from 'framer-motion'
import { Phone, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Image from 'next/image'

export function Hero() {
  return (
    <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl pb-3 md:text-5xl font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                It&apos;s time to expect more from your coverage
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Experience comprehensive protection with our 24/7 roadside assistance, 
                smart insurance management, and flexible vehicle services. Your journey, 
                our commitment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
                  Connect Now
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="group dark:border-gray-600 dark:text-gray-300">
                  <Phone className="mr-2 h-4 w-4 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                  +91 98111 56464
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 dark:from-blue-400/10 dark:to-purple-400/10 rounded-3xl transform rotate-3"></div>
              <Image
                src="/aegiscovenant.webp"
                height={400}
                width={600}
                alt="Roadside Assistance"
                className="rounded-3xl shadow-xl relative z-10"
              />
            </motion.div>
          </div>
        </div>
      </section>
  )
}