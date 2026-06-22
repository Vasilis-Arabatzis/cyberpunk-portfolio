"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-6 py-20 relative z-20"
    >
      {/* ΚΕΝΤΡΙΚΟ CONTAINER ΠΟΥ ΕΥΘΥΓΡΑΜΜΙΖΕΙ ΤΟΝ ΤΙΤΛΟ ΠΑΝΩ ΑΠΟ ΤΙΣ ΚΑΡΤΕΣ */}
      <div className="w-full max-w-5xl mx-auto">
        
        {/* ΚΕΝΤΡΙΚΟΣ ΤΙΤΛΟΣ (ΤΩΡΑ ΚΑΘΕΤΑΙ ΣΩΣΤΑ ΠΑΝΩ ΑΠΟ ΤΟ GRID) */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight text-white">
            Let’s Build Something
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-sans font-light">
            Open to internships, collaborations and exciting software engineering projects.
          </p>
        </div>

        {/* ΤΟ ΔΙΠΛΟ GRID ΜΕ ΤΙΣ ΔΥΟ ΚΑΡΤΕΣ ΔΙΠΛΑ-ΔΙΠΛΑ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* ΑΡΙΣΤΕΡΗ ΚΑΡΤΑ: ΠΡΟΣΩΠΙΚΑ ΣΤΟΙΧΕΙΑ (PERSONAL INFO) */}
          <Card className="group relative overflow-hidden bg-transparent border border-white/10 rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:border-indigo-500/50 text-white flex flex-col justify-between">
            <CardContent className="p-8 space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-2 font-sans tracking-tight">
                  Contact Information
                </h3>
                <p className="text-gray-400 font-sans text-sm font-light leading-relaxed">
                  Feel free to reach out through email, phone, or social media. I usually respond quickly.
                </p>
              </div>

              {/* ΣΤΟΙΧΕΙΑ ΕΠΙΚΟΙΝΩΝΙΑΣ (EMAIL, PHONE, LOCATION) */}
              <div className="space-y-4 font-sans text-sm">
                <a
                  href="mailto:arabatzis.vasileios@://gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl border border-neutral-800/80 hover:bg-white/5 transition"
                >
                  <div className="p-2.5 rounded-full bg-neutral-900 text-cyan-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 font-mono">_EMAIL_NODE:</p>
                    <p className="text-white font-medium break-all">arabatzis.vasileios@gmail.com</p>
                  </div>
                </a>

                <a
                  href="tel:+306979912118"
                  className="flex items-center gap-4 p-4 rounded-xl border border-neutral-800/80 hover:bg-white/5 transition"
                >
                  <div className="p-2.5 rounded-full bg-neutral-900 text-purple-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 font-mono">_PHONE_COMMS:</p>
                    <p className="text-white font-medium">+30 6979912118</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl border border-neutral-800/80">
                  <div className="p-2.5 rounded-full bg-neutral-900 text-indigo-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 font-mono">_GEOLOCATION:</p>
                    <p className="text-white font-medium">Xanthi, Greece</p>
                  </div>
                </div>
              </div>

              {/* SOCIAL LINKS ΜΕ ΚΑΘΑΡΟ ΚΕΙΜΕΝΟ (ΧΩΡΙΣ ΕΙΚΟΝΙΔΙΑ) */}
              <div className="flex gap-3 pt-2 font-mono text-xs">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl border border-neutral-800 hover:bg-white/5 text-purple-400 font-bold transition hover:scale-105"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl border border-neutral-800 hover:bg-white/5 text-cyan-400 font-bold transition hover:scale-105"
                >
                  GitHub
                </a>
              </div>
            </CardContent>
          </Card>

          {/* ΔΕΞΙΑ ΚΑΡΤΑ: ΚΟΥΜΠΙΑ ΛΗΨΗΣ & ACTIONS (DOWNLOAD BUTTONS) */}
         <Card className="group relative overflow-hidden bg-transparent border border-white/10 rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:border-indigo-500/50 text-white flex flex-col justify-center">
            <CardContent className="p-8 space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-2 font-sans tracking-tight">Quick Actions</h3>
                <p className="text-gray-400 font-sans text-sm font-light leading-relaxed">
                  Download my verified documents or dispatch an email directly to my terminal.
                </p>
              </div>

              {/* ΚΟΥΜΠΙΑ ΕΝΕΡΓΕΙΩΝ (EMAIL, CV, LR) */}
              <div className="space-y-4 font-mono text-xs">
                <Button size="lg" className="w-full h-12 text-xs font-bold bg-gradient-to-r from-cyan-500 to-indigo-600 text-white transition duration-300 hover:opacity-95" asChild>
                  <a href="mailto:arabatzis.vasileios@://gmail.com">
                    [ SEND EMAIL ]
                  </a>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="w-full h-12 text-xs font-bold border-neutral-800 text-gray-300 bg-neutral-900/40 hover:bg-neutral-800 hover:text-white transition duration-300"
                  asChild
                >
                  <a href="/cv.pdf" download="Vasilis_Arabatzis_CV.pdf" target="_blank" rel="noopener noreferrer">
                    [ DOWNLOAD CV ]
                  </a>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="w-full h-12 text-xs font-bold border-neutral-800 text-gray-300 bg-neutral-900/40 hover:bg-neutral-800 hover:text-white transition duration-300"
                  asChild
                >
                  <a href="/lr.pdf" download="Vasilis_Arabatzis_LR.pdf" target="_blank" rel="noopener noreferrer">
                    [ DOWNLOAD LR ]
                  </a>
                </Button>
              </div>

              {/* ΔΙΑΚΟΣΜΗΤΙΚΟ TERMINAL FOOTER ΣΤΗ ΔΕΞΙΑ ΚΑΡΤΑ */}
              <div className="p-4 rounded-xl border border-neutral-900 bg-neutral-950/40 text-center font-mono text-[10px] text-gray-500">
                // SECURE PIPELINE CONNECTION ACTIVE // READY
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
}