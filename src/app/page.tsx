// src/app/page.tsx

// Add this at the top for client-side features
'use client'
import { motion } from "framer-motion";
import  {ProjectCard}  from "@/components/ui/ProjectCard";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

const projects = [
  {
    title: "CodeCrate",
    description:
      "Launch & manage coding courses—simple, clean, yours.",
    link: "/projects/lms-website",
  },
  {
    title: "DataPulse",
    description:
      "Automated web scraper with a live dashboard. Extracts, processes, and stores data directly into a SQL database for real-time insights.",
    link: "/projects/web-scraper",
  },
  {
    title: "VibeSync",
    description:
      "See who's vibing to the same track—on web & mobile.",
    link: "/projects/vibesync-app",
  },
  {
    title: "SwiftCart",
    description:
      "Fast, clean mock store for testing and demos.",
    link: "/projects/ecom-app",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 text-gray-900 dark:text-white p-8 transition-colors">
      <section className="max-w-4xl mx-auto text-center">
        <div className="absolute top-0 right-0">
          <ThemeToggle />
        </div>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-4"
        >
          Hey, I'm [Your Name] 👋
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl text-gray-600 dark:text-gray-400 mb-8"
        >
          I build fast, modern web apps & automate boring stuff.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center gap-4"
        >
          <Button variant="outline" className="gap-2">
            <Github size={18} /> GitHub
          </Button>
          <Button variant="outline" className="gap-2">
            <Linkedin size={18} /> LinkedIn
          </Button>
          <Button variant="outline" className="gap-2">
            <Mail size={18} /> Contact
          </Button>
        </motion.div>
      </section>

      <motion.section
        className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={project.link}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </motion.section>
    </main>
  );
}
