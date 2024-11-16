'use client'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Sign Up',
    description: 'Create your account in minutes'
  },
  {
    number: '02',
    title: 'Choose Coverage',
    description: 'Select the perfect plan for your needs'
  },
  {
    number: '03',
    title: 'Get Protected',
    description: 'Enjoy immediate coverage and support'
  }
]

export function Journey() {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Start Your Journey
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Getting started with Aegis Covenant is simple and straightforward
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="flex items-start space-x-4">
                <span className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                  {step.number}
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <ChevronRight className="hidden md:block h-6 w-6 text-gray-400 absolute right-0 top-1/2 -translate-y-1/2" />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}