'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export function CustomerReviews() {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-8 dark:text-white">What Our Customers Say</h2>
            <blockquote className="text-xl italic text-gray-700 dark:text-gray-300 mb-6">
              &ldquo;I&apos;ve been working with AegisCovenant for the past year, and I can honestly say that their roadside assistance services have been a game changer for my business. Not only do they provide prompt and professional support to my customers, but their marketing activities have also helped drive more business my way.&rdquo;
            </blockquote>
            <div className="flex items-center justify-center">
              <Image
                src="/customer.png"
                height={60}
                width={60}
                alt="Vikas Choudhary"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div className="text-left">
                <p className="font-semibold dark:text-white">Vikas Choudhary</p>
                <p className="text-gray-600 dark:text-gray-400">Director, Vikas Hero</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

  )
}
