'use client';
import { motion } from 'motion/react';
import { Mail, Github, Linkedin, FileText } from 'lucide-react';
import { useLanguage } from '../utils/LanguageProvider';
import { translations as t } from '../utils/translations';

const contacts = [
  { icon: <Mail />, labelKey: 'email', url: 'mailto:mostafagabr128@gmail.com' },
  { icon: <Github />, labelKey: 'github', url: 'https://github.com/mostafa-max' },
  { icon: <Linkedin />, labelKey: 'linkedin', url: 'https://www.linkedin.com/in/mostafa-gabr-257a64201/' },
  { icon: <FileText />, labelKey: 'resume', url: '/resume.pdf' },
];

export default function ContactsSection() {
  const { language } = useLanguage();
  const lang = language as keyof typeof t; 
  return (
    <section id='contact' className="relative py-20 bg-bg">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-20 text-text"
        >
          {t[lang].letsConnect}
        </motion.h2>

        <div className="flex justify-center flex-wrap gap-6 md:gap-8">
  {contacts.map((contact, index) => (
    <motion.a
      key={contact.labelKey}
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.95 }}
      href={contact.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center py-4 px-8 md:py-6 md:px-12 rounded-xl md:rounded-2xl border border-glass bg-glass/20 hover:bg-glass/40 transition-all duration-300"
    >
      <motion.div
        whileHover={{ scale: 1.15 }}
        className="text-primary mb-3 md:mb-4 text-3xl md:text-4xl"
      >
        {contact.icon}
      </motion.div>
      <span className="text-text text-lg md:text-xl font-medium">
        {t[lang][contact.labelKey as keyof typeof t['en']]}
      </span>
    </motion.a>
  ))}
</div>


      </div>
    </section>
  );
}
