// src/app/projects/[id].tsx

import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Import motion
import { useParams } from "next/navigation";
import { notFound } from "next/navigation";

interface ProjectData {
  title: string;
  description: string;
  challenges: string;
  age: string;
  coffee: number;
  demoLink: string;
}
  

const projectData = {
  "lms-website": {
    title: "CodeCrate",
    description: "Launch & manage coding courses—simple, clean, yours.",
    challenges: "Building a flexible course structure, handling user roles, and designing a distraction-free learning UI.",
    age: "1 Week",
    coffee: 5,
    demoLink: "https://your-portfolio-link.com",
  },
  "web-scraper": {
    title: "DataPulse",
    description: "Automated web scraper with a live dashboard. Extracts, processes, and stores data into a SQL database.",
    challenges: "Managing rate limits, avoiding IP bans, and visualizing scraped data in real time.",
    age: "3 Days",
    coffee: 3,
    demoLink: "https://web-scraper-demo-link.com",
  },
  "vibesync-app": {
    title: "VibeSync",
    description: "See who's vibing to the same track—web & mobile.",
    challenges: "Integrating real-time Spotify API data and building cross-platform compatibility.",
    age: "5 Days",
    coffee: 7,
    demoLink: "https://spotify-app-demo-link.com",
  },
  "ecom-app": {
    title: "SwiftCart",
    description: "Fast, clean mock store for testing and demos.",
    challenges: "Creating smooth product filtering, cart management, and a responsive UI with no backend.",
    age: "2 Days",
    coffee: 2,
    demoLink: "https://ecom-app-demo-link.com",
  }
}satisfies Record<string, ProjectData>;

export async function generateStaticParams() {
  return Object.keys(projectData).map((id) => ({ id }));
}


export default function ProjectPage({ params }: { params: { id: string } }) {

  const project = projectData[params.id as keyof typeof projectData];

  if (!project) {
    notFound();
  }

  return (
    <motion.main
      className="min-h-screen p-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-center text-4xl font-bold mb-8 text-gray-900 dark:text-white">
        {project.title}
      </h1>
      <div className="max-w-3xl mx-auto">
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          {project.description}
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          <strong>Challenges:</strong> {project.challenges}
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          <strong>Age:</strong> {project.age}
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          <strong>Cups of Coffee:</strong> {project.coffee}
        </p>
        <a
          href={project.demoLink}
          className="text-blue-500 hover:text-blue-700 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Demo →
        </a>    
      </div>
    </motion.main>
  );
}
