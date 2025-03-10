// components/Header.tsx
'use client';
import { motion } from 'motion/react';
import Link from 'next/link';
import Navbar from './Navbar';
import LanguageToggle from './LanguageToggle';
import ThemeToggle from './ThemeToggle';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, easing: 'ease-out' }}
      className="fixed left-0 right-0 top-0 z-50 flex justify-between items-center p-4 bg-bg/80 backdrop-blur-md shadow-md"
    >
      <motion.div whileHover={{ scale: 1.05 }}>
        <Link href="/" className="text-2xl font-bold text-primary">
        <Image
              src="/logo.png"
              alt="Mostafa"
              width={64}  // Set width and height explicitly
              height={64}
              className="h-16 w-auto object-cover transition-transform duration-300 group-hover:scale-105"
            />
        </Link>
      </motion.div>
      
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      
      <div className="flex items-center gap-4">
        <LanguageToggle />
        <ThemeToggle/>
        {/* Mobile Menu Button */}
      <button className="md:hidden text-text/80" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      </div>
    </motion.header>
  );
}