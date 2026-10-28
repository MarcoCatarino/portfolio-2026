// src/data/projects.ts
export interface Project {
  id: string;
  image: string;
  tags: string[];
  link?: string;
  github?: string;
}

export const PROJECTS_DATA: Project[] = [
  {
    id: "upqrooIntranet",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop",
    tags: ["react", "typescript", "nodejs", "mysql"],
    link: "#",
  },
  {
    id: "portfolioAstro",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop",
    tags: ["astro", "typescript", "tailwindcss", "git"],
    link: "#",
  },
  {
    id: "portfolioNext",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop",
    tags: ["astro", "typescript", "tailwindcss", "git"],
    link: "#",
  },
  // {
  //   id: "_",
  //   image:
  //     "/images/projects/",
  //   tags: ["astro", "typescript", "tailwindcss", "git"],
  //   link: "#",
  // },
];
