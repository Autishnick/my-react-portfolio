import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-screen flex items-center">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/20 rounded-full blur-[120px] -z-10 mix-blend-screen opacity-50" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/20 rounded-full blur-[100px] -z-10 mix-blend-screen opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">

        <div className="relative mb-8 group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-slate-900 shadow-2xl">
            <Image
              src="/assets/Me.png"
              alt="Vladyslav Shevchuk"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              priority
            />
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-poppins font-bold tracking-tight text-white mb-6">
          Vladyslav Shevchuk <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-blue-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
            — Frontend Engineer
          </span>
        </h1>

        <p className="mt-4 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto font-inter">
          Specializing in React, Next.js, and TypeScript with commercial experience in web and mobile development.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#portfolio"
            className="px-8 py-3.5 rounded-full font-medium sm:text-lg bg-gradient-to-r from-blue-500 to-violet-600 text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all active:scale-95"
          >
            View My Work
          </a>
          <a
            href="/other/My-Profile.pdf"
            download="Vladyslav_Shevchuk_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-full font-medium sm:text-lg bg-slate-800 text-white border border-slate-700 hover:bg-slate-700 hover:border-slate-500 transition-all active:scale-95"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
