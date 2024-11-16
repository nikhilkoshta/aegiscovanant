'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

const blogPosts = [
  {
    title: 'Understanding Car Insurance Coverage',
    excerpt: 'Learn about different types of car insurance and what they cover.',
    image: '/blog-1.jpg',
    date: 'Mar 15, 2024'
  },
  {
    title: 'Top 5 Road Safety Tips',
    excerpt: 'Essential safety tips every driver should know.',
    image: '/blog-2.jpg',
    date: 'Mar 10, 2024'
  },
  {
    title: 'How to Handle a Roadside Emergency',
    excerpt: 'Step-by-step guide to managing unexpected situations.',
    image: '/blog-3.jpg',
    date: 'Mar 5, 2024'
  }
]

export function Blog() {
  return (
    <section className="py-16 md:py-24 px-4 bg-white dark:bg-gray-800">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Latest Updates
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Stay informed with our latest articles and insights
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden"
            >
              {/* <img
                src={`/api/placeholder/400/250`}
                alt={post.title}
                className="w-full h-48 object-cover"
              /> */}
              <div className="p-6">
                <span className="text-sm text-blue-600 dark:text-blue-400">
                  {post.date}
                </span>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-2 mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {post.excerpt}
                </p>
                <Link 
                  href="#"
                  className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button variant="outline">
            View All Posts
          </Button>
        </div>
      </div>
    </section>
  )
}