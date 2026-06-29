import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import GameTab from "./components/GameTab";
import VideoTab from "./components/VideoTab";
import TentangTab from "./components/TentangTab";
import VideoModal from "./components/VideoModal";
import { VideoItem } from "./types";
import { Sparkles, Github, Heart, Gamepad2 } from "lucide-react";
import LumiPlayer from "./components/LumiPlayer";

export default function App() {
  const [activeTab, setActiveTab] = useState<"game" | "video" | "tentang">("game");
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  // Render content conditionally with subtle animation wrappers
  const renderTabContent = () => {
    switch (activeTab) {
      case "game":
        return (
          <motion.div
            key="game"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <GameTab />
          </motion.div>
        );
      case "video":
        return (
          <motion.div
            key="video"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <VideoTab onWatchVideo={(vid) => setActiveVideo(vid)} />
          </motion.div>
        );
      case "tentang":
        return (
          <motion.div
            key="tentang"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <TentangTab />
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-joy-bg text-slate-800 flex flex-col font-sans selection:bg-joy-yellow/50 selection:text-slate-900 relative overflow-hidden">
      
      {/* Global Background Layering for Depth (Cheerful Warm Gradient) */}
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-joy-bg via-white to-orange-50/80 pointer-events-none" />
      <div className="fixed top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-joy-yellow/20 rounded-full blur-[100px] pointer-events-none mix-blend-multiply" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[60vw] h-[40vw] bg-joy-coral/15 rounded-full blur-[120px] pointer-events-none mix-blend-multiply" />
      <div className="fixed top-[40%] left-[60%] w-[30vw] h-[30vw] bg-joy-mint/15 rounded-full blur-[90px] pointer-events-none mix-blend-multiply" />
      <div className="fixed inset-0 z-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.025] pointer-events-none mix-blend-color-burn" />
      
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Prime Header Component */}
        <Header />

        {/* Main Container */}
        <main className="flex-grow max-w-5xl w-full mx-auto pb-16">
          
          {/* Navigation Tabs bar */}
          <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />

          {/* Contoh embed Lumi */}
          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-3">Contoh Video</h2>
            <LumiPlayer runId="ztxexD" />
          </div>

          {/* Dynamic Tab Panel Area */}
          <div className="mt-2 sm:mt-4">
            <AnimatePresence mode="wait">
              {renderTabContent()}
            </AnimatePresence>
          </div>
        </main>

        {/* Structured Simulated Whiteboard Player Portal Overlay */}
        <AnimatePresence>
          {activeVideo && (
            <VideoModal 
              video={activeVideo} 
              onClose={() => setActiveVideo(null)} 
            />
          )}
        </AnimatePresence>

        {/* Sleek, Humble, Human Footer (Anti-AI-Slop compliant) */}
        <footer className="w-full bg-white/70 backdrop-blur-md border-t border-slate-200/50 py-8 text-center text-xs text-slate-400 mt-auto">
          <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-slate-700 font-display tracking-tight text-sm">Algebrify</span>
              <span className="text-slate-300">|</span>
              <span className="font-medium">Platform Pembelajaran Matematika Mandiri</span>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] font-medium">
              <span>Dibuat dengan</span>
              <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
              <span>untuk siswa Indonesia &copy; 2026.</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
