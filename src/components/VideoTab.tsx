import React, { useState } from "react";
import { ChevronDown, Video, Clock, User, Play, Star, Eye } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { videoCategoriesData } from "../data";
import { VideoItem, VideoCategory } from "../types";

interface VideoTabProps {
  onWatchVideo: (video: VideoItem) => void;
}

export default function VideoTab({ onWatchVideo }: VideoTabProps) {
  // Independent accordion expansions tracking state
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({
    "vid-pola-bilangan": true, // open first by default for best presentation
  });

  const toggleAccordion = (id: string) => {
    setExpandedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div id="alg-video-tab" className="relative w-full max-w-3xl mx-auto px-4 py-8">
      {/* Tab intro title */}
      <div className="flex items-center gap-2 mb-6">
        <Video className="w-5 h-5 text-indigo-500" />
        <h2 className="text-xl font-display font-semibold text-slate-800">
          Galeri Video Tutorial
        </h2>
        <span className="text-xs bg-indigo-50 text-indigo-600 px-2.5 py-0.5 rounded-full font-medium border border-indigo-100">
          Video Interaktif
        </span>
      </div>

      {/* Accordion system - Rich Background Container (Bubbly) */}
      <div className="p-5 sm:p-8 bg-white/60 backdrop-blur-2xl rounded-[3rem] border-4 border-white/90 shadow-2xl shadow-joy-mint/20 space-y-6">
        {videoCategoriesData.map((category: VideoCategory, idx) => {
          const isExpanded = !!expandedIds[category.id];

          return (
            <div
              key={category.id}
              id={`video-category-${category.id}`}
              className={`group bg-white rounded-[2.5rem] border-2 transition-all duration-300 overflow-hidden ${isExpanded ? "border-joy-mint/60 shadow-[0_12px_24px_-8px_rgba(16,185,129,0.3)] ring-4 ring-joy-mint/20 scale-[1.01]" : "border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:border-joy-mint/80"}`}
            >
              {/* Accordion Header */}
              <button
                type="button"
                onClick={() => toggleAccordion(category.id)}
                className="w-full text-left px-6 py-6 flex items-start sm:items-center justify-between gap-4 cursor-pointer focus:outline-none transition-colors group-hover:bg-joy-bg/40"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-mono font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-joy-mint to-teal-500 tracking-wider">
                      PLAYLIST {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-joy-yellow" />
                    <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-slate-400">
                      {category.videos.length} Video Tersedia
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-800 group-hover:text-joy-mint transition-colors duration-200">
                    Video: {category.topicTitle}
                  </h3>
                </div>

                {/* Arrow Icon */}
                <div className={`p-2.5 rounded-2xl transition-all duration-300 flex-shrink-0 ${
                  isExpanded ? "rotate-180 bg-joy-mint text-white shadow-inner" : "bg-slate-100 text-slate-400 group-hover:bg-joy-yellow group-hover:text-joy-orange shadow-sm"
                }`}>
                  <ChevronDown className="w-5 h-5 transition-transform duration-300 font-bold" />
                </div>
              </button>

              {/* Grid content and accordion animation */}
              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-5 pb-6 border-t border-slate-100 bg-slate-50/40">
                      {/* Video Cards Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4.5 mt-5">
                        {category.videos.map((vid: VideoItem) => (
                          <div
                            key={vid.id}
                            className="bg-white rounded-[1.75rem] border-2 border-slate-100 hover:border-joy-mint/50 shadow-sm hover:shadow-[0_12px_24px_-8px_rgba(16,185,129,0.25)] transition-all duration-300 hover:-translate-y-1.5 overflow-hidden flex flex-col justify-between"
                          >
                            {/* Card Video Header Preview/Thumbnail */}
                            <div className="relative aspect-video w-full overflow-hidden group/thumb cursor-pointer">
                              {/* Thumbnail Image Base */}
                              <div className="absolute inset-0 bg-slate-100 flex items-center justify-center overflow-hidden">
                                <img
                                  src={`https://img.youtube.com/vi/${vid.videoIdPlaceholder}/hqdefault.jpg`}
                                  alt={vid.title}
                                  className="w-full h-full object-cover transition-transform duration-500 group-hover/thumb:scale-110"
                                />
                                <div className="absolute inset-0 bg-slate-900/20 group-hover/thumb:bg-slate-900/40 transition-colors duration-300" />
                                
                                {/* Inner Play Overlay circle */}
                                <div className="absolute w-12 h-12 rounded-full bg-white/95 backdrop-blur-sm shadow-[0_8px_16px_rgba(0,0,0,0.3)] flex items-center justify-center group-hover/thumb:scale-110 transition-transform duration-300 z-10">
                                  <Play className="w-5 h-5 fill-joy-coral text-joy-coral ml-0.5" />
                                </div>
                              </div>

                              {/* Duration Stamp overlay */}
                              <span className="absolute bottom-2.5 right-2.5 z-10 inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-slate-900/80 text-white text-[10px] font-mono font-semibold">
                                <Clock className="w-3.5 h-3.5" />
                                {vid.duration}
                              </span>

                              {/* Instructor Badge overlay */}
                              <span className="absolute top-2.5 left-2.5 z-10 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/90 backdrop-blur-xs text-slate-800 text-[10px] font-medium border border-slate-200/50">
                                <User className="w-3 h-3 text-indigo-500" />
                                {vid.instructor}
                              </span>
                            </div>

                            {/* Card Info Section */}
                            <div className="p-4 flex-1 flex flex-col justify-between">
                              <div>
                                <h4 className="text-sm font-semibold text-slate-800 line-clamp-2 mb-2 leading-snug hover:text-indigo-600 transition-colors duration-150">
                                  {vid.title}
                                </h4>

                                {/* Ratings & Views info */}
                                <div className="flex items-center gap-3.5 text-[11px] text-slate-400 mb-4 whitespace-nowrap">
                                  <span className="flex items-center gap-1">
                                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                                    <span className="font-semibold text-slate-600">{vid.rating.toFixed(1)}</span>
                                  </span>
                                  <span className="w-1 h-1 rounded-full bg-slate-300" />
                                  <span className="flex items-center gap-1">
                                    <Eye className="w-3.5 h-3.5" />
                                    <span>{vid.views} x ditonton</span>
                                  </span>
                                </div>
                              </div>

                              {/* Watch Button */}
                              <button
                                type="button"
                                onClick={() => onWatchVideo(vid)}
                                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-joy-coral hover:bg-rose-500 text-white text-sm font-bold rounded-2xl shadow-md hover:shadow-[0_8px_16px_-4px_rgba(244,63,94,0.4)] transition-all duration-300 cursor-pointer mt-2"
                              >
                                <Play className="w-4 h-4 fill-white" />
                                Tonton Seru
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
