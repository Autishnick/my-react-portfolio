import React from "react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 py-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        <p className="text-slate-500 font-inter text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} Vladyslav Shevchuk
        </p>
        <div className="flex space-x-6">
          <a href="#home" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Home</a>
          <a href="#experience" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Experience</a>
          <a href="#portfolio" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Portfolio</a>
          <a href="#contact" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
