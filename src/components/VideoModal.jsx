import React, { useEffect } from 'react';
import { X, Play, Maximize2 } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';



export const VideoModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-6 md:p-8 animate-in fade-in duration-300"
      onClick={onClose}
    >
      {/* Top Floating Cinema Bar */}
      <div
        className="w-full max-w-7xl mx-auto flex items-center justify-between z-20 shrink-0"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#0038A8] text-white flex items-center justify-center shadow-lg shadow-[#0038A8]/30">
            <Maximize2 className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-bold text-white tracking-normal">
              Meet MySect: Company matters. Made simpler.
            </h3>
          </div>
        </div>

        {/* Big Close Button */}
        <button
          onClick={onClose}
          className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all duration-200 cursor-pointer border border-white/10 active:scale-95"
          aria-label="Close fullscreen video"
        >
          <X className="w-5 h-5 text-white" />
        </button>
      </div>

      {/* Main Fullscreen Video Player Area */}
      <div
        className="w-full max-w-7xl mx-auto flex-1 my-2 sm:my-4 flex items-center justify-center relative z-10 min-h-0"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full aspect-square sm:aspect-video sm:h-full max-h-[82vh] rounded-2xl sm:rounded-3xl overflow-hidden bg-[#060D17] border border-white/10 shadow-2xl shadow-black relative flex items-center justify-center">
          {SITE_CONFIG.videoUrl ? (
            SITE_CONFIG.videoUrl.endsWith('.mp4') || SITE_CONFIG.videoUrl.startsWith('/') ? (
              <video
                src={SITE_CONFIG.videoUrl}
                controls
                autoPlay
                playsInline
                className="w-full h-full object-contain bg-black"
              >
                Your browser does not support the video tag.
              </video>
            ) : (
              <iframe
                src={SITE_CONFIG.videoUrl}
                title="Meet MySect Video"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            )
          ) : (
            /* Fullscreen Cinematic Video Stage */
            <div className="relative w-full h-full flex flex-col items-center justify-center text-center p-6 sm:p-12 bg-radial from-[#0e1d33] via-[#081220] to-[#040810]">
              {/* Background ambient grid pattern */}
              <div className="absolute inset-0 pointer-events-none opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"></div>

              {/* Big Luminous Play Button */}
              <div className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#0038A8] hover:bg-[#002D88] text-white flex items-center justify-center shadow-2xl shadow-[#0038A8]/60 transition-all transform hover:scale-110 active:scale-95 cursor-pointer mb-6 group">
                <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-white ml-1 group-hover:scale-105 transition-transform" />
              </div>

              {/* Video Info in Cinema Mode */}
              <div className="relative z-10 max-w-lg space-y-3">
                <span className="inline-block font-mono text-xs uppercase tracking-widest text-white bg-[#0038A8] px-3 py-1 rounded-full font-semibold shadow-md">
                  Full Screen Video Mode
                </span>
                <h4 className="text-xl sm:text-3xl font-extrabold text-white tracking-normal">
                  Platform Showcase Video
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md mx-auto">
                  Provide your video URL (YouTube, Vimeo, or MP4) in{' '}
                  <code className="text-white bg-white/10 px-1.5 py-0.5 rounded font-mono text-xs">
                    src/data/siteConfig.ts
                  </code>{' '}
                  to stream directly in high definition.
                </p>
              </div>

              {/* Corner Metadata Badges */}
              <div className="absolute bottom-4 left-6 right-6 hidden sm:flex items-center justify-between text-xs text-slate-500 font-mono border-t border-white/5 pt-3">
                <span>1080p Ultra HD Cinema Stage</span>
                <span>Malaysia Corporate Governance Platform</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Minimalist Bar */}
      <div
        className="w-full max-w-7xl mx-auto flex items-center justify-between text-xs font-mono text-slate-500 pt-2 z-20 shrink-0"
        onClick={(e) => e.stopPropagation()}
      >
        <span>MySect Overview Video</span>
        <span>Click outside or press ESC to exit</span>
      </div>
    </div>
  );
};
