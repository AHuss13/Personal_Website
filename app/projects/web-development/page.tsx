"use client";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  image: string;
}

import { ProjectCard } from "@/components/projects/ProjectCard";

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Personal Portfolio Website 😄",
      description:
        "My latest project - a modern portfolio built using Next.js App Router and styled with Tailwind CSS and Shadcn UI components. Features a responsive design, dark mode, dynamic content loading, optimized images, and server-side rendering for optimal performance. It also features a Chaos button to add a bit of fun to the site.",
      technologies: [
        "Next.js",
        "TypeScript",
        "React",
        "Tailwind CSS",
        "Shadcn UI",
        "Radix UI",
      ],
      link: "https://github.com/username/portfolio",
      image: "/images/Projects/Portfolio.png",
    },
    {
      title: "Task Management App",
      description:
        "Git-R-Dun is a collaborative task management platform to organize projects in real-time. Built with the MERN stack, it features user authentication.",
      technologies: [
        "React",
        "TypeScript",
        "Chakra UI",
        "Node.js",
        "Express",
        "MongoDB",
        "JWT Auth",
      ],
      link: "https://git-r-dun-f22882a4b8b2.herokuapp.com/",
      image: "/images/Projects/Git-R-Dun.png",
    },
    {
      title: "Python Newsfeed",
      description:
        "A Twitter-inspired social platform where users can share and discuss news articles. Built with Python and Flask, featuring user authentication and SQLite database. Implements proper security measures including password hashing and CSRF protection.",
      technologies: [
        "Python",
        "Flask",
        "SQLite",
        "SQLAlchemy",
        "Bcrypt",
        "REST API",
      ],
      link: "https://baby-twitter.onrender.com/",
      image: "/images/Projects/PythonNewsfeed.png",
    },
    {
      title: "E-commerce Back End",
      description:
        "An online shopping platform with product catalog, and payment integration.",
      technologies: [
        "JavaScript",
        "Sequelize ORM",
        "Node.js",
        "Express.js",
        "MySQL2",
        "REST API",
      ],
      link: "https://drive.google.com/file/d/1F2iFXn4vH9LtIR17ime10BUQABARTwIG/view",
      image: "/images/Projects/Ecommerce.png",
    },
    {
      title: "Password Generator",
      description:
        "A secure password generator with customizable options for length, character types (uppercase, lowercase, numbers, special characters), and complexity requirements.",
      technologies: [
        "JavaScript",
        "CSS",
        "HTML",
        "DOM Manipulation",
        "Local Storage",
      ],
      link: "https://ahuss13.github.io/Password-Generator-Challenge/",
      image: "/images/Projects/PasswordGenerator.png",
    },
    {
      title: "Day Scheduler",
      description:
        "An interactive daily planner application that helps users manage their 9-5 workday efficiently. Features dynamic time-block color coding, persistent local storage for saved events, and current time tracking.",
      technologies: [
        "JavaScript",
        "jQuery",
        "Moment.js",
        "CSS",
        "Local Storage",
        "Bootstrap",
        "HTML",
      ],
      link: "https://ahuss13.github.io/Day-Scheduler-Challenge/",
      image: "/images/Projects/DayScheduler.png",
    },
    {
      title: "Note Taker",
      description:
        "A full-stack note-taking application powered by Express.js. Features include persistent note storage, real-time updates, markdown support, note categorization, and search functionality. Implements proper error handling and data validation.",
      technologies: ["Node.js", "Express.js", "JavaScript", "REST API", "UUID"],
      link: "https://note-taker-gyxp.onrender.com",
      image: "/images/Projects/NoteTaker.png",
    },
    {
      title: "JavaScript Quiz",
      description:
        "An interactive JavaScript knowledge quiz application with timer functionality and high score tracking. Features local storage for high scores, and responsive design.",
      technologies: [
        "JavaScript",
        "CSS",
        "HTML",
        "DOM Manipulation",
        "Local Storage",
      ],
      link: "https://ahuss13.github.io/JavaScript-Quiz-Challenge/",
      image: "/images/Projects/TimedQuiz.png",
    },
  ];

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-6">My Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </main>
  );
}
