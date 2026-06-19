import React from "react";
import { Gamepad2, ExternalLink } from "lucide-react";

export default function GameTab() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      <a 
        href="https://ladders-war-game.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="group block relative bg-white border-4 border-joy-yellow/40 rounded-[2.5rem] shadow-xl hover:shadow-2xl shadow-joy-orange/10 transition-all duration-500 overflow-hidden cursor-pointer hover:-translate-y-2 flex flex-col focus:outline-none focus:ring-4 focus:ring-joy-orange"
      >
        {/* Visual Preview Area (Iframe as background) */}
        <div className="relative w-full h-[350px] sm:h-[450px] overflow-hidden bg-slate-100 border-b-4 border-joy-yellow/40">
          {/* Iframe with pointer-events-none so it doesn't trap clicks */}
          <iframe
            src="https://ladders-war-game.vercel.app/"
            className="w-full h-full border-0 pointer-events-none scale-[1.02] origin-top"
            title="Algebrify Game Preview"
            tabIndex={-1}
            sandbox="allow-scripts allow-same-origin"
          />
          
          {/* Blur Overlay on Hover */}
          <div className="absolute inset-0 bg-slate-900/5 backdrop-blur-[2px] transition-all duration-500 group-hover:bg-slate-900/60 group-hover:backdrop-blur-md z-10 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100">
            <div className="bg-joy-coral text-white p-5 rounded-full mb-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 shadow-xl">
              <Gamepad2 className="w-12 h-12" />
            </div>
            <h3 className="text-white font-display font-black text-2xl sm:text-3xl tracking-wide transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-75 shadow-sm text-center px-4">
              KLIK UNTUK BERMAIN
            </h3>
            <p className="text-white/90 font-bold mt-2 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-100 flex items-center gap-2">
              Buka layar penuh di tab baru <ExternalLink className="w-5 h-5" />
            </p>
          </div>
        </div>

        {/* Post Content Area */}
        <div className="p-8 sm:p-10 bg-gradient-to-br from-white to-orange-50 relative z-20">
          <div className="inline-flex gap-2 items-center px-4 py-1.5 rounded-full bg-joy-yellow text-joy-orange font-bold text-xs tracking-widest uppercase mb-4 shadow-sm">
            <Gamepad2 className="w-4 h-4 text-joy-orange" />
            Algebrify Mini Game
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-800 mb-4 group-hover:text-joy-coral transition-colors duration-300">
            Ladders War Online ⚔️
          </h2>
          <p className="text-slate-600 font-semibold leading-relaxed sm:text-lg">
            Petualangan seru menyelesaikan misi dan menaklukkan rintangan permainan sambil mengasah kemampuan Aljabar kamu! 
            Klik kartu ini untuk membuka permainan dalam layar penuh dan mulai bermain secara online bersama teman-temanmu.
          </p>
          
          <div className="mt-8 flex items-center text-joy-coral font-bold text-lg group-hover:text-rose-500 transition-colors">
            Mulai Petualangan Game <ExternalLink className="w-6 h-6 ml-2 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </div>
        </div>
      </a>
    </div>
  );
}
