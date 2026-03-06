import { Sparkles, X } from 'lucide-react';
import { useState } from 'react';

export function PromotionalBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-green-600 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-white">
          <div className="flex items-center gap-2">
            <Sparkles size={20} className="text-yellow-300 flex-shrink-0 animate-pulse" />
            <span className="font-bold text-sm md:text-base">New Customers Get 10% Off</span>
          </div>

          <div className="hidden sm:block w-px h-4 bg-white/40"></div>

          <span className="text-sm md:text-base font-semibold flex items-center gap-2">
            <span className="hidden sm:inline">+</span>
            Free Building Analysis Using UAS Drone Technology
          </span>

          <button
            onClick={() => setIsVisible(false)}
            className="absolute right-2 top-1/2 -translate-y-1/2 sm:relative sm:right-auto sm:top-auto sm:translate-y-0 p-1 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Close banner"
          >
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
