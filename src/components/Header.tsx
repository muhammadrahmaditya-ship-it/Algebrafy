import React from "react";
import { Sparkles, Binary } from "lucide-react";

export default function Header() {
  return (
    <header className="relative w-full overflow-hidden bg-white/40 backdrop-blur-lg pt-16 pb-14 text-center border-b-2 border-joy-yellow/40 shadow-sm shadow-joy-orange/5">
      {/* Dynamic Background Glows for Depth */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[150%] rounded-[100%] bg-joy-yellow/20 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[120%] rounded-[100%] bg-joy-coral/10 blur-[90px] pointer-events-none" />
      <div className="absolute top-[30%] left-[40%] w-[20%] h-[40%] rounded-full bg-joy-mint/15 blur-[60px] pointer-events-none" />

      {/* Background Math-Grid Aesthetic Decorator */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none select-none">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating Decorative Equations in Background - Moved away from content */}
      <div className="absolute left-[10%] top-[10%] text-joy-orange/40 text-xl font-bold font-mono hidden md:block select-none pointer-events-none rotate-[-12deg] drop-shadow-sm">
        f(x) = 3x² + 5x
      </div>
      <div className="absolute right-[15%] top-[15%] text-joy-coral/40 text-2xl font-bold font-mono hidden md:block select-none pointer-events-none rotate-[8deg] drop-shadow-sm">
        a² + b² = c²
      </div>

      {/* Modern Digital Vector Art / Illustrations - Ceria Version */}
      {/* Left side: Friendly Gamified Student Icon & Geometric Math Grid */}
      <svg width="180" height="180" viewBox="0 0 150 150" className="absolute left-[2%] top-[30%] hidden lg:block opacity-100 drop-shadow-xl pointer-events-none animate-float">
        <defs>
          <linearGradient id="mint-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#34d399" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
        </defs>
        <circle cx="75" cy="75" r="60" fill="url(#mint-grad)" opacity="0.25"/>
        {/* Math Grid Coordinate System */}
        <path d="M25 75 L125 75 M75 25 L75 125" stroke="#10b981" strokeWidth="3" strokeDasharray="4 4" opacity="0.6"/>
        <polyline points="95,55 105,45 115,65" stroke="#f43f5e" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        {/* Friendly Student Face Avatar */}
        <circle cx="75" cy="65" r="24" fill="#fde047" stroke="#fb923c" strokeWidth="3"/>
        {/* Glasses */}
        <rect x="58" y="57" width="13" height="10" rx="4" fill="white" stroke="#ea580c" strokeWidth="2.5"/>
        <rect x="79" y="57" width="13" height="10" rx="4" fill="white" stroke="#ea580c" strokeWidth="2.5"/>
        <line x1="71" y1="62" x2="79" y2="62" stroke="#ea580c" strokeWidth="2.5"/>
        {/* Smile */}
        <path d="M 68 74 Q 75 82 82 74" fill="none" stroke="#ea580c" strokeWidth="2.5" strokeLinecap="round"/>
        {/* Graduation Cap styling (bubbly) */}
        <path d="M 50 48 L 75 38 L 100 48 L 75 58 Z" fill="#fb923c" stroke="#ea580c" strokeWidth="2" strokeLinejoin="round"/>
        <rect x="85" y="48" width="4" height="12" fill="#f43f5e" rx="2"/>
      </svg>

      {/* Right side: Dynamic Algebra Curve & Educational UI Elements */}
      <svg width="200" height="200" viewBox="0 0 180 180" className="absolute right-[0%] bottom-[5%] hidden lg:block opacity-100 drop-shadow-xl pointer-events-none animate-float" style={{animationDelay: '1.5s'}}>
        <defs>
          <linearGradient id="coral-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fb7185" />
            <stop offset="100%" stopColor="#f43f5e" />
          </linearGradient>
          <linearGradient id="orange-fade" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f97316" stopOpacity="0.4"/>
            <stop offset="100%" stopColor="#f97316" stopOpacity="0"/>
          </linearGradient>
        </defs>
        {/* Abstract Blob Base */}
        <path d="M 30 90 Q 60 20 120 40 T 150 120 T 90 160 T 30 90 Z" fill="#fef08a" opacity="0.8"/>
        {/* Graph Parabola Area */}
        <path d="M 40 140 Q 90 20 140 140 Z" fill="url(#orange-fade)"/>
        {/* Graph Line */}
        <path d="M 40 140 Q 90 20 140 140" fill="none" stroke="#f97316" strokeWidth="5" strokeLinecap="round"/>
        {/* Interactive Point Orb */}
        <circle cx="115" cy="80" r="16" fill="url(#coral-grad)" filter="drop-shadow(0px 8px 12px rgba(244,63,94,0.5))"/>
        <text x="115" y="85" fontSize="15" fontWeight="900" fill="white" textAnchor="middle" fontFamily="sans-serif">x²</text>
        {/* Floating Gamified Star */}
        <polygon points="40,20 45,30 55,30 47,38 50,48 40,42 30,48 33,38 25,30 35,30" fill="#34d399" filter="drop-shadow(0px 4px 8px rgba(52,211,153,0.5))"/>
      </svg>

      <div className="relative z-10 max-w-4xl mx-auto px-4 flex flex-col items-center">
        {/* Modern Math-Inspired badge */}
        <div id="alg-header-badge" className="inline-flex items-center gap-2 px-5 py-2 mb-6 rounded-full bg-white/80 backdrop-blur-md border-2 border-joy-yellow/50 shadow-md text-joy-orange text-xs sm:text-sm font-extrabold tracking-wide animate-pulse">
          <Binary className="w-4 h-4 text-joy-mint" />
          <span>PEMBELAJARAN INTERAKTIF</span>
          <Sparkles className="w-4 h-4 text-joy-yellow" />
        </div>

        {/* Big Title */}
        <h1 id="alg-main-title" className="text-6xl sm:text-7xl md:text-8xl font-display font-black tracking-tight text-slate-800 mb-4 drop-shadow-[0_12px_24px_rgba(249,115,22,0.15)] leading-tight">
          Algebrify<span className="text-transparent bg-clip-text bg-gradient-to-tr from-joy-orange to-joy-coral">.</span>
        </h1>

        {/* Tagline directly below */}
        <p id="alg-main-tagline" className="mt-2 text-sm sm:text-base md:text-lg font-bold tracking-widest text-joy-coral/90 uppercase font-sans mb-6 shadow-white drop-shadow-sm">
          Taklukkan Aljabar Lewat Petualangan Visual & Game!
        </p>

        {/* Additional Subtle Context - Improved Readability Background Box */}
        <div className="max-w-2xl relative">
          <div className="absolute inset-0 bg-white/70 backdrop-blur-xl rounded-2xl blur-md -z-10"></div>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-bold px-4 py-2 opacity-90">
            Tinggalkan cara lama! Algebrify hadir sebagai platform interaktif gratis untuk siswa SMP. Kami menyulap rumitnya matematika menjadi petualangan game seru dan video visual yang super gampang dipahami. Mari ubah cara belajarmu jadi lebih asyik kawan!
          </p>
        </div>
      </div>
    </header>
  );
}
