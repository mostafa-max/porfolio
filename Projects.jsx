import Image from "next/image";
import { motion } from "motion/react";

const projects = [
  {
    title: "E-Commerce Website",
    description: "A modern e-commerce platform with Next.js and Supabase.",
    image: "/projects/ecommerce.jpg",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio showcasing my skills and projects.",
    image: "/projects/portfolio.jpg",
  },
  {
    title: "Sentmay Village",
    description: "A website for my village with local information.",
    image: "/projects/sentmay.jpg",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 text-center">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
        My Projects
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={300}
              className="w-full h-full object-cover group-hover:opacity-75 transition"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition">
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
              <p className="text-gray-300 mt-2">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
