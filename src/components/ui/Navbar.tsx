"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const LINKS = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const link of LINKS) {
        if (link.href === "#") continue;
        const el = document.querySelector(link.href);
        if (el) {
          const top = (el as HTMLElement).offsetTop;
          const height = (el as HTMLElement).offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.href);
            return;
          }
        }
      }
      if (window.scrollY < 300) setActiveSection("#");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <nav className="w-full fixed top-0 z-40 backdrop-blur-md bg-[#030712]/90 border-b border-gray-900/40 font-mono">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4 relative">
        
        {/* LOGO */}
        <a href="#" className="font-bold text-sm text-white tracking-wider shrink-0">
          MY<span className="text-cyan-400">PORTFOLIO</span>.
        </a>

        {/* DESKTOP LINKS (CENTER) */}
        <div className="hidden md:flex items-center gap-4">
          {LINKS.map((link) => {
            const isActive = activeSection === link.href || (link.href === "#" && activeSection === "");

            return (
              <a
                key={link.href}
                href={link.href}
                className={`
                  text-xs font-medium transition-all duration-200 uppercase tracking-wider px-2 py-1
                  ${
                    isActive
                      ? "text-cyan-400 font-bold"
                      : "text-gray-400 hover:text-cyan-400"
                  }
                `}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        {/* DESKTOP TEXT SOCIALS & BUTTONS (RIGHT SIDE) */}
        <div className="hidden md:flex items-center gap-3 text-xs font-bold tracking-wide shrink-0">
          {/* GitHub: Σταθερό Cyan Border */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 border border-cyan-500/30 px-3 py-1 rounded-xl hover:bg-cyan-500/10 transition-all duration-300 hover:scale-105 shrink-0"
          >
            GITHUB
          </a>

          {/* LinkedIn: Σταθερό Purple Border */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 border border-purple-500/30 px-3 py-1 rounded-xl hover:bg-purple-500/10 transition-all duration-300 hover:scale-105 shrink-0"
          >
            LINKEDIN
          </a>

          {/* Email: ΝΕΟ ΧΡΩΜΑ - Σταθερό Emerald/Green Border */}
          <a
            href="mailto:arabatzis.vasileios@://gmail.com"
            className="text-emerald-400 border border-emerald-500/30 px-3 py-1 rounded-xl hover:bg-emerald-500/10 transition-all duration-300 hover:scale-105 shrink-0"
          >
            EMAIL
          </a>
          
          <span className="h-4 w-[1px] bg-neutral-800 shrink-0 mx-0.5" />

          <Button asChild variant="outline" className="h-8 text-[11px] font-bold border-neutral-800 text-gray-300 bg-neutral-900/40 hover:bg-neutral-800 hover:text-white transition">
            <a href="/lr.pdf" download="Vasilis_Arabatzis_LR.pdf" target="_blank" rel="noopener noreferrer">LR</a>
          </Button>
          <Button asChild variant="outline" className="h-8 text-[11px] font-bold border-neutral-800 text-gray-300 bg-neutral-900/40 hover:bg-neutral-800 hover:text-white transition">
            <a href="/cv.pdf" download="Vasilis_Arabatzis_CV.pdf" target="_blank" rel="noopener noreferrer">CV</a>
          </Button>
        </div>

        {/* FIXED POSITION MOBILE TRIGGER */}
        <button
          className="md:hidden fixed top-3 right-4 z-50 flex flex-col justify-center items-center w-10 h-10 gap-1.5 focus:outline-none bg-neutral-900/90 border border-neutral-800 rounded-xl"
          onClick={() => setOpen(!open)}
          type="button"
          aria-label="Menu"
        >
          <span className={`h-[2px] w-5 bg-white rounded transition-all duration-300 transform origin-center ${open ? "rotate-45 translate-y-[5.5px]" : ""}`} />
          <span className={`h-[2px] w-5 bg-white rounded transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`h-[2px] w-5 bg-white rounded transition-all duration-300 transform origin-center ${open ? "-rotate-45 -translate-y-[5.5px]" : ""}`} />
        </button>
      </div>

      {/* MOBILE DRAWER OVERLAY */}
      {open && (
        <div className="md:hidden flex flex-col gap-4 p-5 border-t border-gray-900/60 bg-[#030712]/98 backdrop-blur-xl fixed top-[60px] left-0 w-full h-auto shadow-2xl z-40">
          {LINKS.map((link) => {
            const isActive = activeSection === link.href || (link.href === "#" && activeSection === "");
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`text-xs font-bold uppercase tracking-widest transition py-2.5 border-b border-neutral-900/60 last:border-0 ${
                  isActive ? "text-cyan-400" : "text-gray-300 hover:text-cyan-400"
                }`}
              >
                {link.name}
              </a>
            );
          })}

          {/* MOBILE TEXT SOCIALS & BUTTONS */}
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-neutral-900 text-[11px] font-bold tracking-wider">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-cyan-400 border border-cyan-500/30 px-2.5 py-1 rounded-xl hover:bg-cyan-500/10 transition"
            >
              GITHUB
            </a>

            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-purple-400 border border-purple-500/30 px-2.5 py-1 rounded-xl hover:bg-purple-500/10 transition"
            >
              LINKEDIN
            </a>

            <a 
              href="mailto:arabatzis.vasileios@://gmail.com" 
              className="text-emerald-400 border border-emerald-500/30 px-2.5 py-1 rounded-xl hover:bg-emerald-500/10 transition"
            >
              EMAIL
            </a>

            <div className="flex gap-2 ml-auto">
              <Button asChild variant="outline" className="h-8 text-[10px] font-bold border-neutral-800 text-gray-300 bg-neutral-900/40">
                <a href="/lr.pdf" download="Vasilis_Arabatzis_LR.pdf" target="_blank" rel="noopener noreferrer">LR</a>
              </Button>
              <Button asChild variant="outline" className="h-8 text-[10px] font-bold border-neutral-800 text-gray-300 bg-neutral-900/40">
                <a href="/cv.pdf" download="Vasilis_Arabatzis_CV.pdf" target="_blank" rel="noopener noreferrer">CV</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}