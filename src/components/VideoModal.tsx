import React from 'react';
import { X, Play, Video, ExternalLink } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="bg-[#14181F] text-white rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl border border-slate-700/80 relative overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-full bg-slate-800/80 hover:bg-slate-700 transition-colors z-20 cursor-pointer"
          aria-label="Close video"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-2xl bg-[#0038A8] text-white flex items-center justify-center shadow-lg shadow-[#0038A8]/30">
            <Video className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#0038A8]/20 text-white border border-[#0038A8]/30">
                Official Presentation
              </span>
              <span className="text-xs text-slate-400">MySect Platform Overview</span>
            </div>
            <h3 className="text-xl font-bold text-white mt-0.5">Meet MySect: Company matters. Made simpler.</h3>
          </div>
        </div>

        {/* Video Container */}
        <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-inner flex items-center justify-center group">
          {SITE_CONFIG.videoUrl ? (
            <iframe
              src={SITE_CONFIG.videoUrl}
              title="Meet MySect Video"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            /* Video Placeholder Frame */
            <div className="relative w-full h-full flex flex-col items-center justify-center text-center p-8 bg-[#0B192C]">
              {/* Big Play Button */}
              <div className="relative z-10 w-20 h-20 rounded-full bg-[#0038A8] hover:bg-[#002D88] text-white flex items-center justify-center shadow-2xl shadow-[#0038A8]/50 transition-all transform hover:scale-110 cursor-pointer mb-5">
                <Play className="w-8 h-8 fill-white ml-1" />
              </div>

              {/* Status & instructions */}
              <div className="relative z-10 max-w-md space-y-2">
                <span className="inline-block text-[11px] font-mono uppercase tracking-wider text-white bg-[#0038A8]/30 px-3 py-1 rounded-full border border-[#0038A8]/40">
                  Video Slot Ready
                </span>
                <h4 className="text-lg font-bold text-white">Video will be embedded here</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Provide your video URL (YouTube, Vimeo, or MP4) in <code className="text-slate-200 bg-slate-800 px-1.5 py-0.5 rounded font-mono">src/data/siteConfig.ts</code> to display your live showcase video.
                </p>
              </div>

              <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-[11px] text-slate-500 border-t border-slate-800/80 pt-3">
                <span>Designed & Developed in Malaysia</span>
                <span className="text-slate-400 font-mono">1080p HD • Corporate Preview</span>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800 text-xs text-slate-400">
          <p>
            Have questions about the platform? Reach out directly via WhatsApp.
          </p>
          <a
            href={SITE_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#0038A8] hover:bg-[#002D88] text-white font-semibold transition-colors shrink-0"
          >
            <span>Register Interest via WhatsApp</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
