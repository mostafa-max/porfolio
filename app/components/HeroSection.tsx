'use client';
import { motion } from 'motion/react';
import Link from 'next/link';
import { translations as t } from '../utils/translations';
import { useLanguage } from '../utils/LanguageProvider';

export default function HeroSection() {
  const { language } = useLanguage();
  const lang = language as keyof typeof t; 
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-bg">
      {/* Main content */}
      <div className="container relative mx-auto flex h-full items-center px-4">
        <div className="max-w-2xl text-right">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-6xl font-bold leading-tight text-text md:text-8xl"
          >
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {t[lang].hero_intro}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="mt-8 text-2xl text-text/80"
          >
            {t[lang].hero_description}
            <span className="text-primary">{t[lang].hero_code}</span> &amp;
            <span className="text-secondary">{t[lang].hero_design}</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.5 }}
            className="mt-12 flex gap-6 "
          >
            <Link href="/#projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-lg bg-primary px-8 py-4 font-medium text-bg transition-colors hover:bg-primary/90"
              >
                {t[lang].view_work}
              </motion.button>
            </Link>
            <Link href="/#skills">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 rounded-lg border-2 border-border px-8 py-4 font-medium text-text transition-colors hover:border-primary"
              >
                {t[lang].explore_more}
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
