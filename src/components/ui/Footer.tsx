import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-900/40 bg-[#030712]/20 backdrop-blur-md px-8 py-6 mt-12 relative z-20">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left font-mono text-[11px] text-gray-500">
        
        {/* Copyright & Credits */}
        <p>
          Designed and developed by <span className="text-gray-300">Vasileios Arabatzis</span> © 2026
        </p>
        {/* Social Links */}
        <div className="flex gap-4">
          <a 
            href="https://github.com/vasileiosarabatzis" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-cyan-400 transition-colors"
          >
            GitHub
          </a>
          <a 
            href="https://linkedin.com/in/vasileiosarabatzis" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-cyan-400 transition-colors"
          >
            LinkedIn
          </a>
        </div>

      </div>
    </footer>
  );
}