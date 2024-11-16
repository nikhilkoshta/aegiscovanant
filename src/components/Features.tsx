'use client'
import { motion } from 'framer-motion'
import { Car, Shield, FileText, Users } from 'lucide-react'

const features = [
  {
    icon: Car,
    title: '24/7 Roadside Assistance',
    description: 'Emergency support whenever and wherever you need it.'
  },
  {
    icon: Shield,
    title: 'Comprehensive Coverage',
    description: 'Full protection for your vehicle and peace of mind.'
  },
  {
    icon: FileText,
    title: 'Easy Claims Process',
    description: 'Quick and hassle-free claims with minimal paperwork.'
  },
  {
    icon: Users,
    title: 'Dedicated Support Team',
    description: 'Expert advisors ready to help you every step of the way.'
  }
]

export function Features() {
  return (
    <section className="py-16 md:py-24 px-4 bg-white dark:bg-gray-800">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose Us
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We provide comprehensive solutions to keep you protected on the road
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-lg bg-gray-50 dark:bg-gray-700"
            >
              <feature.icon className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}