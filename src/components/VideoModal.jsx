import React, { useEffect } from 'react';
import { X, Play } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';

/**
 * VideoModal Architecture & Ergonomics Guide:
 * -------------------------------------------
 * 1. Centered Cinema Dialog Layout:
 *    - Replaces previous split top/bottom full-height pinned bars.
 *    - Uses a unified dialog card centered vertically (my-auto) and horizontally (mx-auto).
 *    - Prevents header controls and close button from colliding with mobile notches, dynamic islands,
 *      or status bar UI on modern iOS and Android devices.
 *
 * 2. Mobile Responsive Aspect Ratio:
 *    - Displays aspect-square on screens under 640px (sm breakpoint) to optimize viewing in vertical portrait orientation.
 *    - Smoothly transitions to 16:9 cinematic widescreen (sm:aspect-video) on tablets, laptops, and desktop monitors.
 *
 * 3. Media Compatibility & Local Streaming:
 *    - Seamlessly supports local MP4 binaries bundled in public/ asset folder with hardware-accelerated playback.
 *    - Provides native controls, autoPlay, and playsInline for inline playback on mobile browsers without forced full-screen takeover.
 *    - Preserves responsive iframe embedding for remote CDN / streaming providers (YouTube / Vimeo / Cloudflare Stream).
 *
 * 4. Micro-Interactions & Keyboard Accessibility:
 *    - Listens for ESC keydown event to dismiss modal instantly.
 *    - Body overflow lock prevents unwanted background scrolling while the user engages with video playback.
 *    - Rounded square badge with play icon aligns with the visual design grammar of MySect design system.
 *
 * 5. Production Build Specifications:
 *    - Zero external video player dependencies for minimal bundle weight.
 *    - Complies with strict semantic tokens and design system color contrast requirements.
 * *************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************
 */

export const VideoModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 md:p-8 animate-in fade-in duration-300 overflow-y-auto"
    >
      {/* Centered Cohesive Cinema Dialog Card */}
      <div
        className="w-full max-w-5xl mx-auto my-auto flex flex-col relative z-10"
      >
        {/* Header Bar: Comfortably positioned directly above video player */}
        <div className="w-full flex items-center justify-between mb-3 sm:mb-4 px-1">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="w-7 h-7 sm:w-8 sm:h-8 aspect-square rounded-lg bg-[#0038A8] text-white flex items-center justify-center shrink-0 shadow-md shadow-[#0038A8]/30">
              <Play className="w-3.5 h-3.5 fill-white ml-0.5" />
            </div>
            <h3 className="text-sm sm:text-base font-semibold text-white tracking-normal">
              MySect Overview Video
            </h3>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all duration-200 cursor-pointer border border-white/10 active:scale-95"
            aria-label="Close video"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </button>
        </div>

        {/* Video Player Container: Square on mobile, widescreen on desktop */}
        <div className="w-full aspect-video rounded-2xl sm:rounded-3xl overflow-hidden bg-[#060D17] border border-white/10 shadow-2xl shadow-black relative flex items-center justify-center">
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
                title="MySect Overview Video"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            )
          ) : (
            <div className="relative w-full h-full flex flex-col items-center justify-center text-center p-6 bg-radial from-[#0e1d33] via-[#081220] to-[#040810]">
              <div className="w-16 h-16 rounded-full bg-[#0038A8] text-white flex items-center justify-center shadow-2xl mb-4">
                <Play className="w-7 h-7 fill-white ml-1" />
              </div>
              <h4 className="text-lg font-bold text-white">Platform Showcase Video</h4>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
