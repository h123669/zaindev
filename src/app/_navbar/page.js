'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <header className="bg-[rgb(246,246,247)] shadow-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/087b018f-f6ab-4366-a947-0f4a7d8fb720_logo.webp"
              alt="شعار زين التنموية"
              width={30}
              height={30}
            />
            <span className="text-2xl font-bold text-gray-800">زين التنموية</span>
          </Link>

          <nav className="hidden md:flex gap-6 text-gray-700 font-medium text-2xl">
            <a href="#about" className="hover:text-amber-600">من نحن</a>
            <a href="#services" className="hover:text-amber-600">خدماتنا</a>
            <a href="#contact" className="hover:text-amber-600">تواصل معنا</a>
          </nav>

          <button
            className="md:hidden text-3xl text-gray-800"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>

          <motion.a
  href="tel:090256489"
  initial={{ scale: 1 }}
  whileHover={{ scale: 1.1 }}
  transition={{ type: 'spring', stiffness: 300 }}
  className="hidden md:block bg-amber-600 p-3 rounded-xl text-white text-lg"
>
  090256489
</motion.a>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white shadow-md p-4 text-center space-y-4">
            <a href="#about" className="block text-xl text-gray-700 hover:text-amber-600">من نحن</a>
            <a href="#services" className="block text-xl text-gray-700 hover:text-amber-600">خدماتنا</a>
            <a href="#contact" className="block text-xl text-gray-700 hover:text-amber-600">تواصل معنا</a>
            <a href="tel:090256489"
   className="hidden md:block bg-amber-600 p-3 rounded-xl text-white text-lg hover:scale-105 transition-transform duration-300">
  090256489
</a>
          </div>
        )}
      </header>
    </>
  )
}
