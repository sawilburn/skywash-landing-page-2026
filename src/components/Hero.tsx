import { Building2, Home } from 'lucide-react';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a3c75] via-slate-800 to-slate-900 opacity-95"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            The Future of
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Facility Maintenance
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">
            Revolutionary drone-powered washing technology for commercial data centers and residential properties
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <div
            onClick={() => scrollToSection('commercial')}
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 p-8 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-slate-700"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all"></div>

            <div className="relative z-10">
              <div className="w-16 h-16 bg-[#1a3c75] rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <Building2 className="text-white" size={32} />
              </div>

              <h3 className="text-3xl font-bold text-white mb-4">Commercial</h3>
              <p className="text-slate-300 text-lg mb-6">
                Data Center Risk Mitigation & Precision Cleaning
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-slate-300">
                  <span className="text-blue-400 mr-2">→</span>
                  Zero downtime operations
                </li>
                <li className="flex items-start text-slate-300">
                  <span className="text-blue-400 mr-2">→</span>
                  Advanced thermal management
                </li>
                <li className="flex items-start text-slate-300">
                  <span className="text-blue-400 mr-2">→</span>
                  Compliance-ready documentation
                </li>
              </ul>

              <div className="inline-flex items-center text-blue-400 font-semibold group-hover:text-blue-300 transition-colors">
                Explore Commercial Solutions
                <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
              </div>
            </div>
          </div>

          <div
            onClick={() => scrollToSection('residential')}
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 p-8 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-slate-700"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all"></div>

            <div className="relative z-10">
              <div className="w-16 h-16 bg-[#1a3c75] rounded-xl flex items-center justify-center mb-6 group-hover:bg-cyan-600 transition-colors">
                <Home className="text-white" size={32} />
              </div>

              <h3 className="text-3xl font-bold text-white mb-4">Residential</h3>
              <p className="text-slate-300 text-lg mb-6">
                Gentle Soft Wash & Maximum Curb Appeal
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-slate-300">
                  <span className="text-cyan-400 mr-2">→</span>
                  Surface-safe soft washing
                </li>
                <li className="flex items-start text-slate-300">
                  <span className="text-cyan-400 mr-2">→</span>
                  Eco-friendly cleaning solutions
                </li>
                <li className="flex items-start text-slate-300">
                  <span className="text-cyan-400 mr-2">→</span>
                  Increase property value
                </li>
              </ul>

              <div className="inline-flex items-center text-cyan-400 font-semibold group-hover:text-cyan-300 transition-colors">
                Explore Residential Services
                <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
