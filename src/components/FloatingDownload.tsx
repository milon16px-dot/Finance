import React from 'react';
import { Download, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function DownloadBanner() {
  const [isVisible, setIsVisible] = React.useState(true);

  const handleDownload = () => {
    window.location.href = '/project_app.zip';
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          id="download-banner"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          className="fixed top-0 left-0 right-0 z-[100] bg-emerald-600 text-white shadow-xl"
        >
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-lg">
                <Download size={20} className="text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm md:text-base">
                  Project Source Ready for Download
                </p>
                <p className="text-xs text-white/80 hidden md:block">
                  Get the full source code for the Aron Financial Intelligence project.
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <button
                onClick={handleDownload}
                className="bg-white text-emerald-700 px-4 py-2 rounded-full font-bold text-sm hover:bg-emerald-50 transition-colors shadow-sm whitespace-nowrap"
              >
                Download ZIP
              </button>
              <button
                onClick={() => setIsVisible(false)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
                aria-label="Close banner"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
