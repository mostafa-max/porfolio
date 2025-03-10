'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { translations as t }  from '../utils/translations';
import { useLanguage } from '../utils/LanguageProvider';


const links = [
  { name: 'home', path: '/' },
  { name: 'projects', path: '/#projects' },
  { name: 'skills', path: '/#skills' },
  { name: 'contact', path: '/#contact' },
];

interface NavbarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export default function Navbar({ isOpen, setIsOpen }: NavbarProps)  {
  const { language } = useLanguage();
  const lang = language as keyof typeof t;

  return (
    <nav className="flex items-center justify-between p-4 md:p-0 ">
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8">
        {links.map((link, index) => (
          <motion.div
            key={link.name}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link
              href={link.path}
              className="text-text/80 hover:text-primary transition-colors"
            >
              {t[lang][link.name as keyof typeof t["en"]]}
            </Link>
          </motion.div>
        ))}
      </div>

      
      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute top-24 left-0 w-full bg-bg  shadow-md md:hidden flex flex-col items-center gap-4 p-4"
        >
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="text-text/80 hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  );
}