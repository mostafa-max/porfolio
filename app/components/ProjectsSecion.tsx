'use client';
import { motion } from 'motion/react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { useLanguage } from '../utils/LanguageProvider';
import { translations as t } from '../utils/translations';
import Image from 'next/image';

const projects = [
  {
    title: "Sentmay",
    descriptionKey: "sentmay_description",
    tags: ["Next.js", "Supabase", "Tailwind", "React Query"],
    image: "/sentmay.png",
    links: {
      live: "https://sentmay.vercel.app/",
      code: "https://github.com/mostafa-max/sentmay"
    }
  },
  {
    title: "Chat App",
    descriptionKey: "chatapp_description",
    tags: ["React", "Vite", "Axios", "Socket.io", "Express", "MongoDB"],
    image: "/chat.png",
    links: {
      live: "https://chat-app-website-production.up.railway.app/",
      code: "https://github.com/mostafa-max/chat-app-website"
    }
  }
];

export default function ProjectsSection() {
  const { language } = useLanguage();
  const lang = language as keyof typeof t; 

  return (
    <section id="projects" className="relative min-h-screen w-full overflow-hidden bg-bg py-20">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold text-center mb-20 text-text"
      >
        {t[lang].projects_title}
      </motion.h2>

      {/* Projects Grid */}
      <div className="container mx-auto mt-20 grid gap-12 px-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50, rotateX: -15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{ scale: 1.03 }}
            className="group relative rounded-3xl border border-glass bg-glass/10 p-6 backdrop-blur-xl"
          >
            {/* Image */}
            <motion.div whileHover={{ y: -10 }} className="relative overflow-hidden rounded-2xl">
            <Image
                src={project.image}
                alt={project.title}
                width={500} // Replace with actual width
                height={256} // Replace with actual height
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              
              {/* Live Preview Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 flex items-center justify-center bg-black/50"
              >
                <a href={project.links.live} target="_blank">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-bg"
                  >
                    {t[lang].live_preview}
                    <ExternalLink className="h-4 w-4" />
                  </motion.button>
                </a>
              </motion.div>
            </motion.div>

            {/* Content */}
            <div className="mt-6 space-y-4">
              <h3 className="text-2xl font-bold text-text">{project.title}</h3>
              <p className="text-text/80">{t[lang][project.descriptionKey as keyof typeof t["en"]]}</p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: tagIndex * 0.1 + index * 0.05 }}
                    className="rounded-full border border-border bg-bg px-3 py-1 text-sm text-text"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center justify-between pt-4">
                <motion.a
                  whileHover={{ x: 5 }}
                  href={project.links.code}
                  className="flex items-center gap-2 text-primary"
                  target="_blank"
                >
                  {t[lang].view_code}
                  <Github className="h-5 w-5" />
                </motion.a>
                <motion.a
                  whileHover={{ x: 5 }}
                  href={project.links.live}
                  className="flex items-center gap-2 text-secondary"
                  target="_blank"
                >
                  {t[lang].live_demo}
                  <ArrowRight className="h-5 w-5" />
                </motion.a>
              </div>
            </div>

            {/* Glow Effect */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20 blur-xl"
            />
          </motion.div>
        ))}
      </div>

      {/* View All Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mt-20 flex justify-center"
      >
        <a href="https://github.com/mostafa-max/" target="_blank">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 rounded-full border-2 border-border bg-glass/20 px-8 py-4 font-medium text-text backdrop-blur-xl"
          >
            {t[lang].view_all_projects}
            <span className="text-primary">
              <ArrowRight className="h-6 w-6" />
            </span>
          </motion.button>
        </a>
      </motion.div>
    </section>
  );
}
