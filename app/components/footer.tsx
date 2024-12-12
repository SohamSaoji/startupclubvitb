import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="text-gray-300">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div>
            <p>&copy; 2024 Startup Club VITB.</p>
          </div>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-white transition-colors">
              <Facebook size={20} />
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              <Twitter size={20} />
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              <Instagram size={20} />
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              <Linkedin size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

