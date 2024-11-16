'use client'
import Link from 'next/link'
import { Shield, Sun, Moon, Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

interface HeaderProps {
  darkMode: boolean
  setDarkMode: (value: boolean) => void
}

const navItems = ["Roadside Assistance", "Insurance Management", "Blogs", "Careers", "About Us"]

export function Header({ darkMode, setDarkMode }: HeaderProps) {
  return (
    <header className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b dark:border-gray-700">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            <span className="font-bold text-xl dark:text-white">Aegis Covenant</span>
          </Link>
          
          <nav className="hidden md:fle lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link key={index} href="#" className="text-sm font-medium hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
                {item}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="hidden md:inline-flex dark:text-gray-300">
              Sign In
            </Button>
            <Button className="hidden md:inline-flex bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
              Contact Us
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item, index) => (
                    <Link key={index} href="#" className="text-lg font-medium hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
                      {item}
                    </Link>
                  ))}
                  <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
                    Sign In
                  </Button>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
                    Contact Us
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
  )
}