import React from "react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Frontend Engineer",
    company: "Develops Today",
    period: "Jul 2025 – Feb 2026",
    location: "Ukraine",
    achievements: [
      "Architecting and developing responsive, high-performance web applications using React, Next.js, and TypeScript.",
      "Integrating RESTful and GraphQL APIs, while efficiently managing complex global state using Redux Toolkit and Zustand.",
      "Implementing pixel-perfect, accessible user interfaces utilizing Tailwind CSS and modern UI component libraries.",
      "Collaborating closely with cross-functional teams in an Agile environment using Git-flow, and actively participating in peer code reviews.",
      "Configuring CI/CD pipelines via Vercel and GitHub Actions, and optimizing Core Web Vitals to improve SEO and overall application load times."
    ]
  },
  {
    role: "Frontend Developer",
    company: "Insiders",
    period: "Feb 2025 – Jun 2025",
    location: "Lviv, Ukraine",
    achievements: [
      "Developing responsive web and mobile applications using React, React Native, and TypeScript.",
      "Integrating REST APIs, Firebase, and Supabase while managing complex state with Zustand and Redux.",
      "Collaborating in a team environment using Git-flow, participating in code reviews.",
      "Configuring CI/CD and automated deployments via Vercel and Render.",
      "Managing full release cycles for App Store and Google Play, including SDK upgrades (v52 to v54) to ensure store compliance."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-slate-900 border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-white mb-4 inline-block relative">
            My Experience
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full" />
          </h2>
        </div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
          {experiences.map((exp, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              {/* Timeline dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-900 bg-blue-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 box-content">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              
              {/* Content Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl hover:border-blue-500/50 transition-colors shadow-lg">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-xl font-bold font-poppins text-white">{exp.role}</h3>
                  <div className="flex items-center text-sm font-medium text-blue-400 mt-1 sm:mt-0">
                    <Calendar className="w-4 h-4 mr-1" />
                    {exp.period}
                  </div>
                </div>
                <div className="text-violet-400 font-medium mb-4 flex items-center">
                  {exp.company} <span className="text-slate-500 mx-2">•</span> {exp.location}
                </div>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-slate-300 text-sm font-inter leading-relaxed flex items-start">
                      <span className="text-blue-500 mr-2 mt-1 shrink-0">▹</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
