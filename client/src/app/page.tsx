'use client'

import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Globe, ChevronRight, Menu, X, User } from 'lucide-react'

export default function TinderHomepage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-pink-500 to-orange-400 text-white">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white">
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
            <span className="text-2xl font-bold">tinder</span>
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="#" className="text-sm font-medium hover:text-pink-300 transition-colors">Products</Link>
            <Link href="#" className="text-sm font-medium hover:text-pink-300 transition-colors">Learn</Link>
            <Link href="#" className="text-sm font-medium hover:text-pink-300 transition-colors">Safety</Link>
            <Link href="#" className="text-sm font-medium hover:text-pink-300 transition-colors">Support</Link>
            <Link href="#" className="text-sm font-medium hover:text-pink-300 transition-colors">Download</Link>
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-white hover:text-pink-300 transition-colors">
              <Globe className="w-5 h-5 mr-1" />
              Language
            </Button>
            <Button variant="default" size="sm" className="bg-black text-white hover:bg-gray-800 transition-colors">
              Log in
            </Button>
          </div>
          <button onClick={toggleMenu} className="md:hidden text-white">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black/95 backdrop-blur-sm">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <Link href="#" className="text-2xl font-medium hover:text-pink-300 transition-colors">Products</Link>
            <Link href="#" className="text-2xl font-medium hover:text-pink-300 transition-colors">Learn</Link>
            <Link href="#" className="text-2xl font-medium hover:text-pink-300 transition-colors">Safety</Link>
            <Link href="#" className="text-2xl font-medium hover:text-pink-300 transition-colors">Support</Link>
            <Link href="#" className="text-2xl font-medium hover:text-pink-300 transition-colors">Download</Link>
            <Button variant="ghost" size="lg" className="text-white hover:text-pink-300 transition-colors">
              <Globe className="w-6 h-6 mr-2" />
              Language
            </Button>
            <Button variant="default" size="lg" className="bg-black text-white hover:bg-gray-800 transition-colors">
              Log in
            </Button>
          </div>
        </div>
      )}

      <main className="flex-grow">
        <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/placeholder.svg?height=1080&width=1920"
              alt="Tinder profiles collage"
              layout="fill"
              objectFit="cover"
              className="opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-orange-400 mix-blend-multiply" />
          </div>
          <div className="relative max-w-2xl mx-auto text-center">
            <h1 className="text-5xl sm:text-7xl font-extrabold mb-6 animate-fade-in-up">
              Start something epic.
            </h1>
            <p className="text-xl sm:text-2xl mb-8 animate-fade-in-up animation-delay-300">
              Join millions of people discovering new connections on Tinder every day.
            </p>
            <Button size="lg" className="bg-white text-pink-500 hover:bg-pink-100 transition-colors animate-fade-in-up animation-delay-600 text-lg px-8 py-3 rounded-full font-semibold">
              Create account
            </Button>
          </div>
        </div>

        <section className="bg-white text-gray-800 py-16 skew-y-3 -mt-32">
          <div className="container mx-auto px-4 -skew-y-3">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">How Tinder Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { title: "Create a profile", icon: "👤", description: "Add your best photos and tell us about yourself." },
                { title: "Find your match", icon: "💖", description: "Swipe right on profiles you like, left on those you don't." },
                { title: "Start a conversation", icon: "💬", description: "When you match with someone, break the ice with a message." },
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl mb-4">{step.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-100 text-gray-800 py-16 -skew-y-3">
          <div className="container mx-auto px-4 skew-y-3">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  names: "Courtney & Miranda",
                  story: "Thanks to Tinder I have found the love of my life and we are to be married. After going on a few dates and having a few fun nights I came across Miranda. After reading her profile I couldn't resist swiping right after reading her final sentence... 'Looking for my super babe for life.' After talking for about a week we went out on our first date and I knew there was something special about her!"
                },
                {
                  names: "Gabriel & Fiance",
                  story: "I met my fiancé on tinder during the quarantine for COVID. She is from Lafayette, Indiana and I am from Cleveland, Ohio. We are both Christians who fell madly in love."
                },
                {
                  names: "Kenneth & Elliot",
                  story: "I honestly had been on many Tinder dates and was absolutely sure I was meeting a fling to get a free meal and have some fun...3 years and sooo many dates and memories later, I am married to my Tinder guy, Kenny!"
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-semibold mb-2 text-pink-500">{testimonial.names}</h3>
                  <p className="text-gray-600">{testimonial.story}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-pink-500 text-white py-16 skew-y-3">
          <div className="container mx-auto px-4 -skew-y-3">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">Ready to start your story?</h2>
            <div className="max-w-md mx-auto">
              <form className="flex flex-col sm:flex-row gap-4">
                <Input type="email" placeholder="Enter your email" className="bg-white text-gray-800" />
                <Button type="submit" className="bg-black hover:bg-gray-800 text-white transition-colors">
                  Get Started
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-pink-400 transition-colors">Privacy</Link></li>
                <li><Link href="#" className="hover:text-pink-400 transition-colors">Terms</Link></li>
                <li><Link href="#" className="hover:text-pink-400 transition-colors">Cookie Policy</Link></li>
                <li><Link href="#" className="hover:text-pink-400 transition-colors">Intellectual Property</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Careers</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-pink-400 transition-colors">Careers Portal</Link></li>
                <li><Link href="#" className="hover:text-pink-400 transition-colors">Tech Blog</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Social</h4>
              <div className="flex space-x-4">
                <Link href="#" className="hover:text-pink-400 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </Link>
                <Link href="#" className="hover:text-pink-400 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </Link>
                <Link href="#" className="hover:text-pink-400 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                </Link>
                <Link href="#" className="hover:text-pink-400 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                </Link>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">FAQ</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-pink-400 transition-colors">Destinations</Link></li>
                <li><Link href="#" className="hover:text-pink-400 transition-colors">Press Room</Link></li>
                <li><Link href="#" className="hover:text-pink-400 transition-colors">Contact</Link></li>
                <li><Link href="#" className="hover:text-pink-400 transition-colors">Promo Code</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="mb-4 md:mb-0">Get the app!</p>
              <div className="flex space-x-4">
                <Link href="#" className="hover:opacity-80 transition-opacity">
                  <Image src="/placeholder.svg" alt="App Store" width={120} height={40} />
                </Link>
                <Link href="#" className="hover:opacity-80 transition-opacity">
                  <Image src="/placeholder.svg" alt="Google Play" width={135} height={40} />
                </Link>
              </div>
            </div>
            <div className="mt-8 text-sm">
              <p className="mb-4">Single people, listen up: If you are looking for love, want to start dating, or just keep it casual, you need to be on Tinder. With over 55 billion matches made, it is the place to be to meet your next best match. Let us be real, the dating landscape looks very different today, as most people are meeting online. With Tinder, the world's most popular free dating app, you have millions of other single people at your fingertips and they're all ready to meet someone like you. Whether you're straight or in the LGBTQIA community, Tinder's here to bring you all the sparks.</p>
              <p>There really is something for everyone on Tinder. Want to get into a relationship? You got it. Trying to find some new friends? Say no more. New kid on campus and looking to make the most of your college experience? Tinder U's got you covered. Tinder isn't your average dating site — it's the most diverse dating app, where adults of all backgrounds and experiences are invited to make connections, memories, and everything in between.</p>
            </div>
            <div className="mt-4 text-sm">
              <Link href="#" className="hover:text-pink-400 transition-colors mr-4">FAQ</Link>
              <Link href="#" className="hover:text-pink-400 transition-colors mr-4">Safety Tips</Link>
              <Link href="#" className="hover:text-pink-400 transition-colors mr-4">Terms</Link>
              <Link href="#" className="hover:text-pink-400 transition-colors mr-4">Cookie Policy</Link>
              <Link href="#" className="hover:text-pink-400 transition-colors">Privacy Settings</Link>
            </div>
            <p className="mt-4 text-sm">&copy; 2024 Tinder LLC. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}