import { Shield, CheckCircle2, Award } from 'lucide-react';

export function TrustBar() {
  return (
    <div className="bg-gradient-to-r from-blue-900 via-slate-900 to-blue-900 border-b border-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 py-3">
          <div className="flex items-center gap-2 text-blue-100">
            <Award size={18} className="text-cyan-400 flex-shrink-0" />
            <span className="text-xs md:text-sm font-semibold whitespace-nowrap">FAA Part 107 Certified</span>
          </div>

          <div className="hidden sm:block w-px h-4 bg-blue-700"></div>

          <div className="flex items-center gap-2 text-blue-100">
            <Shield size={18} className="text-cyan-400 flex-shrink-0" />
            <span className="text-xs md:text-sm font-semibold whitespace-nowrap">OSHA Compliant</span>
          </div>

          <div className="hidden sm:block w-px h-4 bg-blue-700"></div>

          <div className="flex items-center gap-2 text-blue-100">
            <CheckCircle2 size={18} className="text-cyan-400 flex-shrink-0" />
            <span className="text-xs md:text-sm font-semibold whitespace-nowrap">Virginia DEQ Approved</span>
          </div>

          <div className="hidden md:block w-px h-4 bg-blue-700"></div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-md border border-white/20">
              <span className="text-xs font-medium text-blue-100">Member:</span>
              <span className="text-xs font-bold text-white">Loudoun Chamber</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-md border border-white/20">
              <span className="text-xs font-bold text-white">AOBA</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
