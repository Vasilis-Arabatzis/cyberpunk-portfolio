'use client';
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface Position {
  role: string;
  category: string;
  details: string[];
  tags: string[];
}

export default function Experience() {
  const experiences: Position[] = [
    {
      role: "Interactive 3D Portfolio Platform",
      category: "⚡ 3D WEB ARCHITECTURE",
      details: [
        "Designed and developed a portfolio using WebGL particle systems with React Three Fiber and Next.js.",
        "Implemented scroll-driven camera animations and dynamic cursor particle physics in real time.",
        "Integrated directly with GitHub's live REST API for real-time repository updates."
      ],
      tags: ["Next.js", "React Three Fiber", "Three.js", "TypeScript", "Tailwind", "WebGL"]
    },
    {
      role: "Basketball Referee (3 Years Experience)",
      category: "🏀 OFFICIATING & SPORTS MANAGEMENT",
      details: [
        "Refereed basketball games for 3 years, applying official rules with absolute precision.",
        "Developed strong reflective skills for quick decision-making under high-pressure conditions.",
        "Managed tensions on the court and maintained effective communication with players and coaches."
      ],
      tags: ["Decision Making", "Conflict Management", "Communication", "Leadership"]
    },
    {
      role: "Web Development Architecture",
      category: "🌐 WEB DEVELOPMENT",
      details: [
        "Built web applications using React and Next.js with focus on UI/UX, component design, and scalable frontend architecture."
      ],
      tags: ["React", "Next.js", "TypeScript", "Tailwind"]
    },
    {
      role: "Cross-Platform Mobile Apps",
      category: "📱 MOBILE DEVELOPMENT",
      details: [
        "Developed React Native applications including “GreekLinks” focusing on cross-platform mobile UI and performance."
      ],
      tags: ["React Native", "JavaScript", "Mobile UI"]
    },
    {
      role: "Full-Stack System Engineering",
      category: "👤 USER MANAGEMENT PLATFORM",
      details: [
        "A full-stack User Management System built with Spring Boot, React, Java, JavaScript and PostgreSQL.",
        "The project demonstrates a clean REST API architecture with layered backend design."
      ],
      tags: ["Spring Boot", "React", "Java", "JavaScript", "PostgreSQL"]
    },
    {
      role: "Academic Software Systems",
      category: "🎓 UNIVERSITY PROJECTS",
      details: [
        "Developed academic projects using MATLAB, Java, C++, PHP, MySQL, Oracle SQL (Pl/SQL) and App Inventor focusing on algorithms and backend systems."
      ],
      tags: ["MATLAB", "Java", "C++", "PHP", "MySQL", "Oracle SQL"]
    },
    {
      role: "Software Validation Practice",
      category: "🛠️ KTEO – JAVA DEVELOPMENT PRACTICE",
      details: [
        "Developed two Java projects including a web application and system testing tools for software validation and debugging."
      ],
      tags: ["Java", "Testing", "Debugging", "Web App"]
    },
    {
      role: "Leadership & Tactical Coordination",
      category: "🛡️ MILITARY SERVICE – RESERVE SECOND LIEUTENANT",
      details: [
        "Completed military service with leadership responsibilities, managing personnel coordination in structured environments.",
        "Developed strong discipline, teamwork, and problem-solving skills under pressure."
      ],
      tags: ["Leadership", "Management", "Responsibility", "Teamwork"]
    }
  ];

  return (
    <section id="experience" className="w-full min-h-screen px-6 max-w-5xl py-24 flex flex-col justify-center mx-auto relative z-20 font-mono text-xs text-white">
      
      {/* SECTION HEADER */}
      <div className="mb-12 border-b border-neutral-900 pb-4">
        <p className="text-purple-400 text-[10px] tracking-widest mb-1">⚡ // WORK_TIMELINE</p>
        <h2 className="text-4xl font-black font-sans tracking-tight uppercase">EXPERIENCE</h2>
      </div>

      {/* COMPACT MULTI-CARD GRID LAYOUT */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {experiences.map((exp, index) => (
          <Card 
            key={index} 
            className="group relative overflow-hidden bg-transparent border border-white/10 rounded-2xl transition-all duration-500 hover:-translate-y-1.5 hover:border-purple-500/50 text-white flex flex-col justify-between"
          >
            <CardContent className="p-6 flex flex-col h-full justify-between space-y-4">
              
              {/* Card Header Info */}
              <div className="space-y-1.5">
                <span className="text-[9px] text-purple-400 font-bold tracking-wider uppercase block">
                  {exp.category}
                </span>
                <h3 className="text-base font-bold text-white font-sans tracking-tight group-hover:text-purple-300 transition duration-150">
                  {exp.role}
                </h3>
              </div>

              {/* Details Lines */}
              <ul className="space-y-1.5 text-gray-400 font-sans text-xs font-light leading-relaxed flex-grow">
                {exp.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-purple-500 font-mono text-[10px] mt-0.5 shrink-0">&gt;</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              {/* Badges Block στο κάτω μέρος της κάθε κάρτας */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-neutral-900/60">
                {exp.tags.map((tag, tagIdx) => (
                  <span 
                    key={tagIdx} 
                    className="px-2 py-0.5 bg-neutral-950 border border-neutral-900 text-gray-500 rounded text-[9px] font-mono group-hover:border-purple-500/20 group-hover:text-gray-400 transition duration-150"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </CardContent>
          </Card>
        ))}
      </div>

    </section>
  );
}