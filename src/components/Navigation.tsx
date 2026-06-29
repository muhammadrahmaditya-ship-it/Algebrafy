import React from "react";
import { BookOpen, Video, Info, Gamepad2, FileText } from "lucide-react";
import { motion } from "motion/react";

interface NavigationProps {
  activeTab: "game" | "video" | "tentang" | "materi";
  setActiveTab: (tab: "game" | "video" | "tentang" | "materi") => void;
}

export default function Navigation({ activeTab, setActiveTab }: NavigationProps) {
  const tabs = [
    { id: "game" as const, label: "Game", icon: Gamepad2 },
    { id: "video" as const, label: "Video", icon: Video },
    { id: "materi" as const, label: "Materi", icon: FileText },
    { id: "tentang" as const, label: "Tentang", icon: Info },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto px-4 mt-8 sm:mt-12 relative z-20">
      <nav id="alg-main-nav" className="flex justify-center p-2.5 rounded-[3rem] bg-white/80 backdrop-blur-2xl border-4 border-white shadow-xl shadow-joy-orange/10">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              id={`nav-btn-${tab.id}`}
              onClick={() => setActiveTab(tab.id as "game" | "video" | "tentang" | "materi")}
              className={`relative flex-1 flex items-center justify-center gap-2 py-4 px-4 text-sm sm:text-base font-bold tracking-wide transition-all duration-300 rounded-[2.5rem] cursor-pointer ${
                isActive
                  ? "text-white shadow-[0_8px_20px_-6px_rgba(249,115,22,0.6)] scale-[1.03]"
                  : "text-slate-500 hover:text-joy-orange hover:bg-white hover:shadow-lg hover:-translate-y-1"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute inset-0 bg-gradient-to-r from-joy-orange to-joy-coral z-0"
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                />
              )}
              <Icon className={`w-5 h-5 relative z-10 transition-colors duration-300 ${isActive ? "text-white" : "text-slate-400 group-hover:text-joy-orange"}`} />
              <span className="relative z-10">{tab.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
