'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

// You would need to add actual partner logos
const partners = [
  { name: 'Hero', logo: '/logo1.svg' },
  { name: 'Honda', logo: '/logo2.svg' },
  { name: 'TVS', logo: '/logo3.svg' },
  { name: 'Bajaj', logo: '/logo5.svg' },
  { name: 'Royal Enfield', logo: '/logo6.svg' },
]

export function Partners() {
  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Trusted by Leading Companies
        </h2>
        <div className="grid md:grid-cols-5 gap-8 items-center">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex justify-center"
            >
              <div className='p-3 rounded bg-white'>
              <Image
                src={partner.logo}
                height={60}
                width={120}
                alt={partner.name}
                className="h-12 object-contain grayscale hover:grayscale-0 transition-all"
              />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
