import React from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Sudoku",
    description: "Sudoku is a logic-based number-placement puzzle. The objective is to fill a 9×9 grid with digits so that each column, each row, and each of the nine 3×3 subgrids that compose the grid contain all of the digits from 1 to 9.",
    challenge: "I implemented a backtracking algorithm to generate and solve Sudoku puzzles, ensuring a valid and solvable puzzle every time.",
    image: "/assets/sudoku.png",
    tags: ["React", "C++", "Python", "Tailwind CSS"],
    github: "https://github.com/Autishnick/Sudoku-course_work.git",
    demo: "https://course-work-sudoku.vercel.app/"
  },
  {
    title: "Sport equipment rent",
    description: "A platform for renting sports equipment, where users can rent equipment for a certain period of time.",
    challenge: "I implemented a feature that allows users to rent equipment for a certain period of time, and also added a feature that allows users to pay for the equipment.",
    image: "/assets/sport_equipment.png",
    tags: ["React", "Node.js", "Firebase"],
    github: "https://github.com/Autishnick/Sport_equipment.git", // Placeholder
    demo: "https://sport-equipment.onrender.com/"
  },
  {
    title: "Book Explorer Platform",
    description: "Architected a high-performance book search platform designed to handle large datasets.",
    challenge: "Optimized data fetching and search indexing, reducing load speed by 40% using Next.js static generation and optimized API routes.",
    image: "/assets/proj2.jpg",
    tags: ["React", "Next.js", "Tailwind CSS"],
    github: "https://github.com/Autishnick/Portfolio.git",
  },
  {
    title: "Quize builder",
    description: "Quiz builder is a platform for creating and taking quizzes.",
    challenge: "I implemented a feature that allows users to create and take quizzes, and also added a feature that allows users to pay for the quizzes.",
    image: "/assets/proj1.jpg",
    tags: ["React", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/Autishnick/Quiz_builder.git",
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 relative bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-white mb-4 inline-block relative">
            Selected Works
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full" />
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto mt-6">
            A showcase of projects featuring optimized performance, complex state management, and modern architectures.
          </p>
          <div className="mt-8 flex justify-center">
            <a href="https://github.com/Autishnick" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-medium text-white hover:text-white bg-slate-800 hover:bg-slate-700 px-6 py-2.5 rounded-full border border-slate-700 transition-all">
              <FaGithub className="w-5 h-5 mr-3" /> View All on GitHub
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <div key={index} className="group bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col">
              <div className="relative h-64 sm:h-80 w-full overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10" />
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 sm:p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold font-poppins text-white mb-3">{project.title}</h3>
                <p className="text-slate-300 mb-4 font-inter">{project.description}</p>

                <div className="mb-6 p-4 rounded-lg bg-slate-900/50 border border-slate-700/50 italic text-sm text-slate-400">
                  <span className="font-semibold text-blue-400 not-italic">Challenge: </span>
                  {project.challenge}
                </div>

                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-700/50">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-medium bg-slate-700 text-slate-300 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-6">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm font-semibold text-white bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg transition-colors">
                    <FaGithub className="w-4 h-4 mr-2" /> Code
                  </a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm font-semibold text-slate-900 bg-white hover:bg-slate-200 px-4 py-2 rounded-lg transition-colors">
                      <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
