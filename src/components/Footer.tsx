'use client'
import Link from 'next/link'
import { Shield } from 'lucide-react'

const footerLinks = {
  company: ['About Us', 'Careers', 'Contact Us', 'Blog'],
  services: ['Roadside Assistance', 'Insurance Plans', 'Claims Process', 'Support'],
  legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Licenses'],
  support: ['FAQs', 'Help Center', 'Customer Service', 'Emergency Contact']
}

export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t dark:border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              <span className="font-bold text-xl dark:text-white">Aegis Covenant</span>
            </Link>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Providing reliable insurance and roadside assistance services for your peace of mind.
            </p>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4 capitalize">
                {title}
              </h3>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <Link
                      href="#"
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t dark:border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              © {new Date().getFullYear()} Aegis Covenant. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                Twitter
              </Link>
              <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                LinkedIn
              </Link>
              <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                Facebook
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}