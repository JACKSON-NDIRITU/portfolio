export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
}

export const projects: Project[] = [
  {
    id: "urban-wear-kenya",
    title: "Urban Wear Kenya",
    category: "E-Commerce",
    description:
      "A modern online store designed to showcase products and connect customers with the seller through WhatsApp.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
    ],
    image: "",
    liveUrl: "",
    githubUrl: "",
  },
];