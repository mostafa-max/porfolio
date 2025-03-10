'use client';
import { motion } from 'motion/react';
import { useLanguage } from '../utils/LanguageProvider';
import { translations as t } from '../utils/translations';

export default function Footer() {
  const { language } = useLanguage();
  const lang = language as keyof typeof t; 

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="border-t border-glass bg-bg/80 backdrop-blur-md"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="text-center">
          <motion.div whileHover={{ scale: 1.05 }} className="text-text/80">
            © {new Date().getFullYear()} {t[lang].footerText}
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
}
