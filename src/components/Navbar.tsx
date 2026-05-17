import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold gradient-text">
            Ethiraj Srinivasan
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-700 hover:text-primary-600 transition-colors"
            >
              Resume
            </a>
            <Link href="/#portfolio" className="text-slate-700 hover:text-primary-600 transition-colors">
              Portfolio
            </Link>
            <Link href="/blogs" className="text-slate-700 hover:text-primary-600 transition-colors">
              Blog
            </Link>
            <Link href="/about" className="text-slate-700 hover:text-primary-600 transition-colors">
              About
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-3">
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block px-4 py-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
            >
              Resume
            </a>
            <Link href="/#portfolio" className="block px-4 py-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors">
              Portfolio
            </Link>
            <Link href="/blogs" className="block px-4 py-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors">
              Blog
            </Link>
            <Link href="/about" className="block px-4 py-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors">
              About
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
