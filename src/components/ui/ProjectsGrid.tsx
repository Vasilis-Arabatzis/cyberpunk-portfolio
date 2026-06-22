'use client';
import { useEffect, useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

// Ενημέρωση του Interface ώστε να ταιριάζει απόλυτα με τα κλειδιά του GitHub API
interface Project {
  id: number;
  name: string;
  description: string;
  html_url: string; // Διορθώθηκε από url σε html_url
  homepage: string;
  language: string;
  stargazers_count: number; // Διορθώθηκε από stars σε stargazers_count για native υποστήριξη
}

export default function ProjectsGrid() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    // Απευθείας κλήση στο live API του GitHub
    fetch('https://api.github.com/users/Vasilis-Arabatzis/repos')
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP network response code: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          // Ταξινόμηση ώστε τα πιο πρόσφατα ενημερωμένα projects να εμφανίζονται πρώτα
          const sortedData = data.sort(
            (a: any, b: any) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
          );
          setProjects(sortedData);
        } else if (data.error) {
          setErrorMessage(data.error);
        } else {
          setErrorMessage("Extracted payload did not return an array structure.");
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Diagnostic Grid Log:", err);
        setErrorMessage(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="text-center font-mono text-xs text-cyan-400 animate-pulse py-12">
        // CONNECTING TO DATA MATRIX PIPELINE... BUFFERING METADATA
      </div>
    );
  }

  if (errorMessage) {
    return (
      <div className="text-center font-mono text-xs text-red-400 border border-red-500/30 bg-red-950/20 rounded p-6 max-w-xl mx-auto py-8">
        <p className="font-bold mb-2">⚡ // EXTRACTION_EXCEPTION_DETECTED</p>
        <p className="text-gray-400 tracking-tight text-[11px]">Reason: {errorMessage}</p>
        <p className="text-gray-500 text-[10px] mt-4">Verify local environment network loops or token rates.</p>
      </div>
    );
  }

  if (projects.length === 0) {
    return (
      <div className="text-center font-mono text-xs text-yellow-400 py-12">
        // PIPELINE ACCESS STABLE // ZERO REPOSITORIES RECOVERED
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-20">
      {projects.map((project) => (
        <Card 
          key={project.id} 
          className="bg-transparent border border-cyan-500/20 text-white transition-all duration-300 hover:scale-[1.02] hover:border-cyan-400/60 shadow-xl flex flex-col justify-between"
        >
          <CardHeader className="p-5 pb-2">
            <div className="flex justify-between items-center gap-2 mb-2">
              <CardTitle className="text-base font-bold text-cyan-400 capitalize tracking-tight truncate">
                {project.name.replace(/-/g, ' ')}
              </CardTitle>
              {project.language && (
                <span className="text-[9px] font-mono bg-purple-950/80 text-purple-300 px-2 py-0.5 rounded border border-purple-500/30 shrink-0">
                  {project.language}
                </span>
              )}
            </div>
            <CardDescription className="text-gray-300 font-light text-xs line-clamp-3 leading-relaxed">
              {project.description || "System data payload active. Open source build module."}
            </CardDescription>
          </CardHeader>
          
          <CardContent className="px-5 py-2">
            <div className="text-[10px] font-mono text-gray-500 flex items-center gap-1">
              <span>⚡ core_node_id: {project.id}</span>
              <span className="ml-2">⭐ {project.stargazers_count || 0}</span>
            </div>
          </CardContent>

          <CardFooter className="px-5 pb-5 pt-3 border-t border-gray-900/40 flex gap-4 mt-auto">
            <a 
              href={project.html_url} // Διορθώθηκε σε html_url για να ανοίγει το σωστό Link
              target="_blank" 
              rel="noopener noreferrer" // Εξασφαλίζει το άνοιγμα σε καθαρό, νέο tab χωρίς bugs
              className="text-xs font-mono font-bold text-purple-400 hover:text-purple-300 hover:underline tracking-wider transition"
            >
              [ SOURCE ]
            </a>
            
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}