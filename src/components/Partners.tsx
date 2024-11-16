'use client'
import { motion } from 'framer-motion'

// You would need to add actual partner logos
const partners = [
  { name: 'Partner 1', logo: '/placeholder-1.svg' },
  { name: 'Partner 2', logo: '/placeholder-2.svg' },
  { name: 'Partner 3', logo: '/placeholder-3.svg' },
  { name: 'Partner 4', logo: '/placeholder-4.svg' },
]

export function Partners() {
  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Trusted by Leading Companies
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex justify-center"
            >
              {/* <img
                src={`/api/placeholder/200/100`}
                alt={partner.name}
                className="h-12 object-contain grayscale hover:grayscale-0 transition-all"
              /> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
