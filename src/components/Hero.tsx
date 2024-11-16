'use client'
import { motion } from 'framer-motion'
import { Phone, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="pt-32 pb-16 px-4 md:pt-40 md:pb-24">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Your Safety is Our Priority
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            24/7 roadside assistance and comprehensive insurance coverage for your peace of mind.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="w-full sm:w-auto text-lg bg-blue-600 hover:bg-blue-700">
              Get Started <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="w-full sm:w-auto text-lg">
              <Phone className="mr-2 h-5 w-5" /> Contact Sales
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}