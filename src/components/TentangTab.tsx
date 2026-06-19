import React from "react";
import { Info, HelpCircle, GraduationCap, Compass, Layers, ShieldCheck } from "lucide-react";

export default function TentangTab() {
  const USPList = [
    {
      icon: GraduationCap,
      title: "Pembelajaran Terstruktur",
      desc: "Menyajikan 6 topik dasar aljabar sekolah menengah dengan penyampaian materi yang bertahap dan bahasa yang santai.",
    },
    {
      icon: Compass,
      title: "Contoh Soal Interaktif",
      desc: "Setiap materi dilengkapi dengan pemecahan langkah-demi-langkah (step-by-step solver) untuk memperdalam penyerapan konsep.",
    },
    {
      icon: Layers,
      title: "Uji Pemahaman Mandiri",
      desc: "Tantang dirimu dengan kuis interaktif di setiap akhir pembahasan materi dengan umpan balik atau pembahasan langsung.",
    },
  ];

  return (
    <div id="alg-tentang-tab" className="relative w-full max-w-3xl mx-auto px-4 py-8">
      {/* Intro section */}
      <div className="flex items-center gap-2 mb-6">
        <Info className="w-5 h-5 text-indigo-500" />
        <h2 className="text-xl font-display font-semibold text-slate-800">
          Tentang Algebrify
        </h2>
        <span className="text-xs bg-indigo-50 text-indigo-600 px-2.5 py-0.5 rounded-full font-medium border border-indigo-100">
          Informasi Platform
        </span>
      </div>

      {/* Background container */}
      <div className="bg-white/60 backdrop-blur-2xl border-4 border-white/90 rounded-[3rem] shadow-2xl shadow-joy-coral/20 p-5 sm:p-8 mb-8">
        <div className="bg-white border-2 border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-shadow p-6 sm:p-10 space-y-8">
        {/* Prime Overview with accent */}
        <div className="relative">
          <p className="text-slate-700 leading-relaxed font-sans text-sm sm:text-base">
            Algebrify adalah inovasi platform edukasi yang dirancang khusus untuk membantu siswa SMP menaklukkan materi Matematika Aljabar tanpa rasa takut. Kami percaya bahwa belajar haruslah menyenangkan. Oleh karena itu, Algebrify menggabungkan dua metode ampuh: Gamifikasi (belajar sambil bermain) dan Video Pembelajaran Interaktif. Di sini, angka dan variabel bukan lagi sekadar hafalan membosankan, melainkan sebuah misi yang harus dipecahkan lewat game seru dan visualisasi yang memanjakan mata.
          </p>
        </div>

        {/* Highlight Grid features */}
        <div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-6 border-t-2 border-slate-100">
          {USPList.map((usp, idx) => {
            const Icon = usp.icon;
            
            // Dynamic colorful styling for each USP card
            let cardHoverStyle = "hover:border-joy-mint hover:shadow-[0_12px_24px_-8px_rgba(16,185,129,0.3)]";
            let iconContainerStyle = "bg-emerald-50 text-joy-mint group-hover:bg-joy-mint";
            let blurBubbleStyle = "bg-joy-mint";
            
            if (idx === 1) {
              cardHoverStyle = "hover:border-joy-yellow hover:shadow-[0_12px_24px_-8px_rgba(250,204,21,0.4)]";
              iconContainerStyle = "bg-orange-50 text-orange-500 group-hover:bg-joy-yellow group-hover:text-orange-900";
              blurBubbleStyle = "bg-joy-yellow";
            } else if (idx === 2) {
              cardHoverStyle = "hover:border-joy-coral hover:shadow-[0_12px_24px_-8px_rgba(244,63,94,0.3)]";
              iconContainerStyle = "bg-rose-50 text-joy-coral group-hover:bg-joy-coral";
              blurBubbleStyle = "bg-joy-coral";
            }

            return (
              <div key={idx} className={`p-6 rounded-[2rem] bg-white border-2 border-slate-100 shadow-sm transition-all duration-300 flex flex-col items-start group relative overflow-hidden ${cardHoverStyle} hover:-translate-y-2`}>
                <div className={`absolute -right-6 -bottom-6 opacity-[0.03] group-hover:opacity-10 transition-opacity w-32 h-32 rounded-full blur-2xl ${blurBubbleStyle}`}></div>
                <div className={`p-3.5 rounded-2xl mb-4 group-hover:text-white transition-colors duration-300 shadow-inner relative z-10 ${iconContainerStyle}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-slate-800 mb-2 relative z-10">{usp.title}</h4>
                <p className="text-sm font-medium text-slate-500 leading-relaxed relative z-10">{usp.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Mission Statement */}
        <div className="p-8 rounded-[2rem] bg-gradient-to-br from-joy-bg to-orange-50 border-2 border-joy-yellow/40 shadow-inner relative overflow-hidden">
          <div className="absolute -right-4 -top-4 text-orange-300/20 rotate-12 pointer-events-none">
            <ShieldCheck className="w-56 h-56" />
          </div>
          <div className="relative z-10 flex flex-col sm:flex-row gap-5">
            <div className="p-3 bg-white rounded-2xl shadow-sm h-fit shrink-0">
              <ShieldCheck className="w-10 h-10 text-joy-orange" />
            </div>
            <div className="space-y-2">
              <h5 className="font-bold text-xl text-orange-950 tracking-wide">Misi Kami</h5>
              <p className="text-orange-900/80 font-sans text-sm sm:text-base leading-relaxed font-semibold">
                Kami percaya bahwa aljabar bukanlah sekadar tumpukan simbol x dan y yang kaku, melainkan sebuah teka-teki logika yang sangat menyenangkan! <strong>Tujuan Algebrify</strong> adalah menyediakan wadah bermain dan belajar mandiri yang ceria, intuitif, dan tanpa rasa takut salah bagi setiap anak.
              </p>
            </div>
          </div>
        </div>

        {/* End of content */}
      </div>
      </div>
    </div>
  );
}
