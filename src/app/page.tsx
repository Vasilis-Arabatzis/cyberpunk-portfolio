import DynamicCanvas from '@/components/3d/DynamicCanvas';
import NavBar from '@/components/ui/Navbar';
import About from '@/components/ui/About';
import Experience from '@/components/ui/Experience';
import ProjectsGrid from '@/components/ui/ProjectsGrid';
import Contact from '@/components/ui/Contact';
import Footer from '@/components/ui/Footer';

export default function Home() {
  return (
    // ΔΙΟΡΘΩΘΗΚΕ: Το κεντρικό main γίνεται bg-transparent για να μην κρύβει τον καμβά
    <main className="relative w-full min-h-screen bg-transparent text-white overflow-x-hidden">
      
      {/* 1. Το 3D Background Wrapper παίρνει το επίσημο Cyber background χρώμα */}
      <div className="fixed inset-0 -z-50 w-screen h-screen pointer-events-none bg-[#030712] block">
        <DynamicCanvas />
      </div>

      {/* 2. Τα UI Στοιχεία επιπλέουν από πάνω */}
      <NavBar />

      <div className="relative z-10 w-full flex flex-col items-center pt-16 bg-transparent">
        
        {/* Hero Section */}
        <section className="w-full min-h-screen flex flex-col justify-center px-8 max-w-6xl bg-transparent">
          <p className="text-cyan-400 font-mono text-xs mb-2 tracking-widest">⚡ INITIALIZING PIPELINE</p>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4 leading-none">
            FULL STACK <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">DEVELOPER</span>
          </h1>
          <p className="text-gray-400 max-w-sm text-sm font-light leading-relaxed mb-6">Building modular 3D architectures and real-time streaming interfaces.</p>
          <div>
            <a href="#contact" className="px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded font-mono text-xs tracking-wider transition hover:opacity-90 inline-block">
              [ CONTACT_ME ]
            </a>
          </div>
        </section>

        <About />
        <Experience />

        <section id="projects" className="w-full min-h-screen px-8 max-w-6xl py-24 bg-transparent">
          <div className="mb-12">
            <h2 className="text-2xl font-bold font-mono tracking-tight text-white mb-2">// DETECTED_REPOSITORIES</h2>
            <p className="text-gray-400 font-mono text-xs">Live data connection tracking via GitHub REST API.</p>
          </div>
          <ProjectsGrid />
        </section>

        <Contact />
        <Footer />
      </div>
    </main>
  );
}