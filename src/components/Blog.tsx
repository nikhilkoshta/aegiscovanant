'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { ChevronRight } from 'lucide-react'

const blogPosts = [
  {
    title: '5 Tips for Choosing the Right Vehicle Insurance Policy',
    author: 'Bandana Choudhary',
    image: '/blog1.webp',
    date: 'Mar 15, 2024'
  },
  {
    title: 'Safety First: How Insurance Can Protect You in 2-Wheeler Accidents',
    author: 'Bandana Choudhary',
    image: '/blog2.webp',
    date: 'Mar 10, 2024'
  }
]

export function Blog() {
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
              See our latest news & blogs
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Empowering Your Journey with Reliable Assistance and Insurance Management Solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <Image
                  src={post.image}
                  height={200}
                  width={400}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 dark:text-white">{post.title}</h3>
                  <div className='flex justify-between pt-5'>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{post.author}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{post.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
              Check Out More
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
  )
}