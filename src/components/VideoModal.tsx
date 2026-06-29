import React, { useEffect } from "react";
import { X } from "lucide-react";
import { VideoItem } from "../types";

interface VideoModalProps {
  video: VideoItem | null;
  onClose: () => void;
}

export default function VideoModal({ video, onClose }: VideoModalProps) {
  useEffect(() => {
    // Muat skrip resizer H5P dari Lumi (hanya sekali)
    const scriptId = "lumi-h5p-resizer";
    if (!document.getElementById(scriptId)) {
      const s = document.createElement("script");
      s.id = scriptId;
      s.src = "https://app.Lumi.education/api/v1/h5p/core/js/h5p-resizer.js";
      s.charset = "UTF-8";
      s.async = true;
      document.body.appendChild(s);
    }
  }, []);

  if (!video) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs">
      <div
        id="video-player-modal"
        className="relative w-full max-w-4xl bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800 bg-slate-900/60">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-joy-coral" />
            <h3 className="text-sm font-semibold text-white tracking-wide truncate max-w-xs sm:max-w-md">
              Materi Video: {video.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 px-1.5 rounded-lg border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors duration-150 cursor-pointer"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="relative aspect-video w-full bg-black">
          {video.embedType === "lumi" && video.externalUrl ? (
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={video.externalUrl}
              title={video.title}
              frameBorder={0}
              allowFullScreen
              allow="geolocation *; microphone *; camera *; midi *; encrypted-media *"
            />
          ) : (
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube.com/embed/${video.videoIdPlaceholder}?autoplay=1`}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          )}
        </div>

        <div className="flex justify-between px-6 py-4 bg-slate-900 text-sm font-mono text-slate-400">
          <span>Tutor: {video.instructor}</span>
          <span>{video.views} Views • ⭐ {video.rating}</span>
        </div>
      </div>
    </div>
  );
}
