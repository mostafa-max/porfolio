
'use client';
import { motion } from 'motion/react';
import { Code, Database, Brush} from 'lucide-react';
import { useLanguage } from '../utils/LanguageProvider';
import { translations as t } from '../utils/translations';


const skillsData = {
  frontend: [
    { name: 'React', icon: <Code />, level: '90%' },
    { name: 'TypeScript', icon: <Code />, level: '70%' },
    { name: 'Next.js', icon: <Code />, level: '80%' },
  ],
  backend: [
    { name: 'Node.js', icon: <Database />, level: '30%' },
    { name: 'MongoDB', icon: <Database />, level: '40%' },
  ],

  design: [
    { name: 'Figma', icon: <Brush />, level: '50%' },
    { name: 'Framer', icon: <Brush />, level: '85%' },
  ],
};

export default function SkillsSection() {
  const { language } = useLanguage();
  const lang = language as keyof typeof t; 
  return (
    <section id='skills' className="relative min-h-screen w-full overflow-hidden bg-bg py-20">
     <motion.h2
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               className="text-5xl font-bold text-center mb-20 text-text"
             >
               {t[lang].skills}
             </motion.h2>

      {/* Main skills grid */}
      <div className="container mx-auto mt-20 grid gap-16 px-4 md:grid-cols-2 lg:grid-cols-3">
        {Object.entries(skillsData).map(([category, skills], index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="group relative rounded-3xl border border-glass bg-glass/20 p-8 backdrop-blur-xl"
          >
            {/* Floating category icon */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-8 left-1/2 -translate-x-1/2 rounded-full bg-primary p-4 text-bg"
            >
              {skills[0].icon}
            </motion.div>

            <h3 className="mb-6 text-center text-2xl font-semibold capitalize text-text">
              {category}
            </h3>

            <div className="space-y-6">
              {skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 0.4,
                    delay: skillIndex * 0.1 + index * 0.05,
                  }}
                  whileHover={{ scale: 1.05 }}
                  className="skill-card relative rounded-xl border border-border bg-bg/50 p-4"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-primary">{skill.icon}</span>
                      <span className="font-medium text-text">{skill.name}</span>
                    </div>
                    <span className="text-sm text-text/60">{skill.level}</span>
                  </div>
                  
                  {/* Animated progress bar */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="relative mt-3 h-2 rounded-full bg-border"
                  >
                    <div
                      className="absolute left-0 top-0 h-full rounded-full bg-secondary"
                      style={{ width: skill.level }}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}