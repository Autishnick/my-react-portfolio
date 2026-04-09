import React from "react";
import { Code2, Database, Smartphone, Layout } from "lucide-react";

const skillCategories = [
  {
    title: "Core",
    icon: <Code2 className="w-6 h-6 text-blue-400" />,
    skills: ["React", "Next.js", "TypeScript", "JavaScript (ES6+)"],
    color: "from-blue-500/20 to-blue-500/5",
    borderColor: "border-blue-500/20"
  },
  {
    title: "State Management",
    icon: <Database className="w-6 h-6 text-violet-400" />,
    skills: ["Redux Toolkit", "Zustand"],
    color: "from-violet-500/20 to-violet-500/5",
    borderColor: "border-violet-500/20"
  },
  {
    title: "Mobile",
    icon: <Smartphone className="w-6 h-6 text-emerald-400" />,
    skills: ["React Native", "Expo SDK", "App Store Connect", "Play Console"],
    color: "from-emerald-500/20 to-emerald-500/5",
    borderColor: "border-emerald-500/20"
  },
  {
    title: "Backend & Tools",
    icon: <Layout className="w-6 h-6 text-rose-400" />,
    skills: ["Firebase", "Supabase", "Nest.js", "Git / GitHub Actions"],
    color: "from-rose-500/20 to-rose-500/5",
    borderColor: "border-rose-500/20"
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-white mb-4 inline-block relative">
            Technical Arsenal
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full" />
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto mt-6">
            Technologies and tools I use to build scalable, high-performance web and mobile applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className={`p-6 rounded-2xl bg-gradient-to-b ${category.color} border ${category.borderColor} backdrop-blur-md hover:-translate-y-1 transition-transform duration-300`}
            >
              <div className="w-12 h-12 rounded-lg bg-slate-900/80 flex items-center justify-center mb-6 shadow-inner border border-slate-700/50">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold font-poppins text-white mb-4">{category.title}</h3>
              <div className="space-y-2">
                {category.skills.map((skill, i) => (
                  <div key={i} className="flex items-center text-slate-300 font-inter">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-500 mr-2" />
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
