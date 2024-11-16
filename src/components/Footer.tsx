'use client'
import Link from 'next/link'
import { Shield } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <Shield className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                <span className="font-bold text-xl dark:text-white">Aegis Covenant</span>
              </Link>
              <p className="text-gray-600 dark:text-gray-400">Your trusted partner for roadside assistance and insurance management.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4 dark:text-white">Quick Links</h3>
              <ul className="space-y-2">
                {["Home", "About Us", "Services", "Blog", "Contact"].map((item, index) => (
                  <li key={index}>
                    <Link href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4 dark:text-white">Services</h3>
              <ul className="space-y-2">
                {["Roadside Assistance", "Insurance Management", "Vehicle Renting", "Subscription Services"].map((item, index) => (
                  <li key={index}>
                    <Link href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4 dark:text-white">Contact Us</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">123 Main Street, City, Country</p>
              <p className="text-gray-600 dark:text-gray-400 mb-2">Phone: +91 98111 56464</p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Email: info@aegiscovenant.com</p>
              <div className="flex space-x-4">
                {["Facebook", "Twitter", "LinkedIn", "Instagram"].map((social, index) => (
                  <a key={index} href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                    <span className="sr-only">{social}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center text-gray-600 dark:text-gray-400">
            <p>&copy; 2024 Aegis Covenant. All rights reserved.</p>
          </div>
        </div>
      </footer>
  )
}