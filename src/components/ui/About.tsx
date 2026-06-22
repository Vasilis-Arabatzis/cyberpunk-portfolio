'use client';
import React from 'react';

export default function About() {
  // Κατηγοριοποίηση των Skills με βάση το Stack σου
  const skillCategories = [
    {
      title: "Programming Languages",
      items: ["Java", "TypeScript", "JavaScript", "C++", "PHP", "Python", "MATLAB"]
    },
    {
      title: "Frameworks & Backend",
      items: ["Spring Boot", "Next.js", "React", "React Native", "JavaFX"]
    },
    {
      title: "Databases & Storage",
      items: ["MySQL", "PostgreSQL", "Oracle SQL"]
    },
    {
      title: "Tools & Architecture",
      items: ["Docker", "Git", "HTML", "CSS", "Tailwind"]
    }
  ];

  const hobbies = [
    "Traveling", "Outdoor Cooking (Grilling & BBQ)", "Hiking & Nature Walks", 
    "Tennis", "Basketball", "Watching Movies / TV Shows / Anime", 
    "Playing Video Games", "Exploring New Technologies", "Driving"
  ];

  return (
    <section id="about" className="w-full min-h-screen px-6 max-w-5xl py-24 flex flex-col justify-center mx-auto relative z-20 font-mono text-xs text-white">
      
      {/* 1. SECTION HEADER */}
      <div className="mb-12 border-b border-neutral-900 pb-4">
        <p className="text-cyan-400 text-[10px] tracking-widest mb-1">⚡ // CORE_PROFILE</p>
        <h2 className="text-4xl font-black font-sans tracking-tight uppercase">ABOUT ME</h2>
      </div>

      {/* 2. MAIN SPLIT GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* LEFT SIDE: WHO I AM & EDUCATION & ADDITIONAL */}
        <div className="lg:col-span-6 space-y-8">
          
          {/* WHO I AM */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-cyan-400 font-sans tracking-tight uppercase">// Who I am</h3>
            <div className="text-gray-300 font-sans text-sm font-light leading-relaxed space-y-3">
              <p>
                I am a Computer Engineering student with a strong interest in backend development, software architecture, and modern web technologies [INDEX].
              </p>
              <p>
                I have hands-on experience building applications using Java, PHP, React, and Next.js, focusing on clean code and scalable systems [INDEX].
              </p>
              <p>
                I enjoy working in team environments, using Git workflows, and continuously improving my skills through real-world projects [INDEX].
              </p>
              <p>
                My goal is to grow into a full-stack developer and build efficient, user-focused applications [INDEX].
              </p>
            </div>
          </div>

          {/* EDUCATION */}
          <div className="space-y-3 border-t border-neutral-900 pt-6">
            <h3 className="text-base font-bold text-purple-400 font-sans tracking-tight uppercase">// Education</h3>
            <div className="space-y-3">
              <div className="border border-neutral-800/60 bg-transparent p-3 rounded hover:border-cyan-500/20 transition">
              <p className="font-bold text-white text-[11px]">Democritus University of Thrace</p>
              <p className="text-gray-400 font-sans font-light mt-0.5">Computer Engineering (2018–Present)</p>
              <p className="text-purple-400 text-[10px] font-bold mt-1">_GPA: 7.09</p>
            </div>
            <div className="border border-neutral-800/60 bg-transparent p-3 rounded hover:border-cyan-500/20 transition">
              <p className="font-bold text-white text-[11px]">2nd General High School of Xanthi</p>
              <p className="text-gray-400 font-sans font-light mt-0.5">Graduate Profile</p>
              <p className="text-cyan-400 text-[10px] font-bold mt-1">_GRADE: 17</p>
            </div>
            </div>
          </div>

          {/* ADDITIONAL */}
          <div className="space-y-3 border-t border-neutral-900 pt-6">
            <h3 className="text-base font-bold text-indigo-400 font-sans tracking-tight uppercase">// Additional</h3>
            <ul className="space-y-2 text-gray-300 font-sans text-xs list-none">
              <li className="flex items-start gap-2">
                <span className="text-indigo-400 font-mono font-bold">&gt;</span>
                <div>
                  <span className="font-bold text-white font-mono text-[11px]">Military Service:</span> Reserve Second Lieutenant (Leadership & personnel management)
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-400 font-mono font-bold">&gt;</span>
                <div>
                  <span className="font-bold text-white font-mono text-[11px]">Endorsement:</span> Recommendation letter from Battalion Commander
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-400 font-mono font-bold">&gt;</span>
                <div>
                  <span className="font-bold text-white font-mono text-[11px]">Licenses:</span> Driving License (Car & Motorcycle)
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* RIGHT SIDE: CATEGORIZED SKILLS & HOBBIES */}
        <div className="lg:col-span-6 space-y-8">
          
          {/* CATEGORIZED SKILLS MATRIX */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-cyan-400 font-sans tracking-tight uppercase">// Technical Matrix</h3>
            
            <div className="space-y-4">
              {skillCategories.map((category, catIndex) => (
                <div key={catIndex} className="space-y-1.5">
                  <span className="text-gray-500 block text-[10px] uppercase tracking-wider">
                    __{category.title}:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {category.items.map((skill, index) => (
                      <span 
                        key={index} 
                        className="px-2 py-1 bg-neutral-950/60 border border-neutral-800 text-gray-300 rounded text-[10px] tracking-wide font-mono hover:border-cyan-500/40 hover:text-white transition duration-150"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* HOBBIES & INTERESTS */}
          <div className="space-y-3 border-t border-neutral-900 pt-6">
            <h3 className="text-base font-bold text-purple-400 font-sans tracking-tight uppercase">// Hobbies & Interests</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {hobbies.map((hobby, index) => (
              <div 
                key={index} 
                className="flex items-center gap-2 border border-neutral-900/40 bg-transparent p-2 rounded hover:border-purple-500/20 transition duration-150"
              >
                <span className="text-purple-400 text-[10px]">■</span>
                <span className="text-gray-300 font-sans text-xs font-light">{hobby}</span>
              </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}