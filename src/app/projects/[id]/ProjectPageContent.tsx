// src/app/projects/[id]/ProjectPageContent.tsx
'use client';

import { motion } from "framer-motion";

export interface ProjectData {
  title: string;
  description: string;
  challenges: string;
  age: string;
  coffee: number;
  demoLink: string;
}

export default function ProjectPageContent({ project }: { project: ProjectData }) {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen p-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900"
    >
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          {project.title}
        </h1>
        
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          {project.description}
        </p>

        <div className="space-y-4 mb-8">
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              🚧 Challenges Faced
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              {project.challenges}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <h3 className="font-medium text-gray-900 dark:text-white">⏳ Development Time</h3>
              <p className="text-gray-600 dark:text-gray-400">{project.age}</p>
            </div>
            
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <h3 className="font-medium text-gray-900 dark:text-white">☕ Coffee Consumed</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {project.coffee} cup{project.coffee !== 1 ? 's' : ''}
              </p>
            </div>
          </div>
        </div>

        <a
          href={project.demoLink}
          className="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Demo
          <span className="ml-2">→</span>
        </a>
      </div>
    </motion.main>
  );
}