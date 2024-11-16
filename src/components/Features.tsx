'use client'
import { motion } from 'framer-motion'
import { Car, Shield, Users } from 'lucide-react'

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
    icon: Users,
    title: 'Dedicated Support Team',
    description: 'Expert advisors ready to help you every step of the way.'
  }
]

export function Features() {
  return (
    <section className="py-16 px-4 bg-white dark:bg-gray-800">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 dark:text-white">
              Trusted by India&apos;s leading OEM Partners
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We work with the biggest names in the automotive industry to provide you
              with reliable and comprehensive coverage.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-gradient-to-b from-white to-slate-50 dark:from-gray-700 dark:to-gray-800 border dark:border-gray-600 shadow-sm hover:shadow-md transition-shadow"
              >
                <feature.icon className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
  )
}