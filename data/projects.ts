export interface ProjectType {
    id: number;
    title: string;
    description: string;
    images: string[];
    technologies: string[];
  }
  

export const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "Description for Project 1",
      images: [
        "/slider/7-copy.webp",
        "/slider/7-copy.webp",
        "/slider/7-copy.webp",
      ],
  
      technologies: ["React", "Next.js", "Tailwind CSS"],
    },
    {
      id: 2,
      title: "Project 2",
      description: "Description for Project 2",
      images: [
        "/slider/7-copy.webp",
        "/slider/7-copy.webp",
        "/slider/7-copy.webp",
      ],
  
      technologies: ["Flutter", "Python", "Flask"],
    },
    {
      id: 3,
      title: "Project 3",
      description: "Description for Project 3",
      images: [
        "/slider/7-copy.webp",
        "/slider/7-copy.webp",
        "/slider/7-copy.webp",
      ],
  
      technologies: ["Flutter", ".net", "C#"],
    },
  ];