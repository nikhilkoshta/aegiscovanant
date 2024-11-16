'use client'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { Button } from './ui/button'

export function Journey() {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-5xl font-bold mb-4 dark:text-white">
              Make your journey safer, more convenient and stress-free
            </h2>
            <p className="text-2xl text-gray-600 dark:text-gray-300 mb-6">
              Experience seamless transportation solutions with our wide-ranging services
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Our commitment to personalized, reliable and cutting-edge offerings, combined with our Pan-India presence and partnerships with industry leaders, make us your one-stop-shop for all your mobility needs
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
              Check Out More
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>
  )
}