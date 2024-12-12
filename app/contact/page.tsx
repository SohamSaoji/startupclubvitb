'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log({ name, email, message })
    // Reset form fields
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 animate-fade-in">
      <div className="max-w-3xl mx-auto glass-effect p-8">
        <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <Button type="submit">Send Message</Button>
        </form>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold mb-4">Connect With Us</h2>
          <div className="flex justify-center space-x-4">
            <Link href="#" className="hover:text-white transition-colors transform hover:scale-110">
              <Facebook size={24} />
            </Link>
            <Link href="#" className="hover:text-white transition-colors transform hover:scale-110">
              <Twitter size={24} />
            </Link>
            <Link href="#" className="hover:text-white transition-colors transform hover:scale-110">
              <Instagram size={24} />
            </Link>
            <Link href="#" className="hover:text-white transition-colors transform hover:scale-110">
              <Linkedin size={24} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

