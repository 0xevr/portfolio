// src/app/projects/[id]/page.tsx
import { notFound } from "next/navigation";
import ProjectPageContent  from "./ProjectPageContent";

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
  // Properly handle dynamic params
  const projectId = params.id;
  const project = projectData[projectId as keyof typeof projectData];

  if (!project) {
    notFound();
  }

  return <ProjectPageContent project={project} />;
}