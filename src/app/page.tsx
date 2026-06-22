import CanvasView from '@/components/3d/CanvasView';
import About from '@/components/ui/About';
import Experience from '@/components/ui/Experience';
import ProjectsGrid from '@/components/ui/ProjectsGrid';
import Contact from '@/components/ui/Contact';
import Footer from '@/components/ui/Footer'; // 1. Προσθήκη του Import
import NavBar from '@/components/ui/Navbar'; 
export default function Home() {
  return (
    <main className="relative w-full min-h-screen bg-[#030712] text-white overflow-x-hidden">
      {/* Background Canvas Layer (Fixed) */}
      <div className="fixed inset-0 -z-50 w-full h-full pointer-events-none bg-[#030712]">
        <CanvasView />
      </div>
      {/* Global Navigation NavBar */}
      <NavBar />
      

      {/* Foreground Content Stack */}
      <div className="relative z-10 w-full flex flex-col items-center pt-16">
        
        {/* 1. Hero Section */}
        <section className="w-full min-h-screen flex flex-col justify-center px-8 max-w-6xl">
          <p className="text-cyan-400 font-mono text-xs mb-2 tracking-widest">⚡ INITIALIZING PIPELINE</p>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4 leading-none">
            FULL STACK <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">DEVELOPER</span>
          </h1>
          <p className="text-gray-400 max-w-sm text-sm font-light leading-relaxed mb-6">Building modular 3D architectures and real-time streaming interfaces.</p>
          <div>
            <a 
              href="#contact" 
              className="px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded font-mono text-xs tracking-wider transition hover:opacity-90 inline-block"
            >
              [ Contact_Me ]
            </a>
          </div>
        </section>

        {/* 2. About Me Section */}
        <About />

        {/* 3. Experience Section */}
        <Experience />

        {/* 4. Projects Section */}
        <section id="projects" className="w-full min-h-screen px-8 max-w-6xl py-24">
          <div className="mb-12">
            <h2 className="text-2xl font-bold font-mono tracking-tight text-white mb-2">// DETECTED_REPOSITORIES</h2>
            <p className="text-gray-400 font-mono text-xs">Live data connection tracking via GitHub REST API.</p>
          </div>
          <ProjectsGrid />
        </section>

        {/* 5. Contact Section */}
        <Contact />

        {/* 6. Η Προσθήκη του Footer στο τέλος */}
        <Footer />
      </div>
    </main>
  );
}