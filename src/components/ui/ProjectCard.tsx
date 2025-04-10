// src/components/ui/ProjectCard.tsx
'use client';

import { motion } from "framer-motion";
import Link from "next/link";

export const ProjectCard = ({
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  link: string;
}) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transition-transform transform hover:scale-[1.02] cursor-pointer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
    >
      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
      <Link
        href={link}
        className="inline-flex items-center text-blue-500 hover:text-blue-700 transition-colors"
      >
        View Project <span className="ml-2">→</span>
      </Link>
    </motion.div>
  );
};