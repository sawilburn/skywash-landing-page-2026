import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (section: string) => {
    setIsMobileMenuOpen(false);

    if (location.pathname === '/') {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/', { state: { scrollTo: section } });
    }
  };

  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        const element = document.getElementById(location.state.scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-[#1a3c75] rounded-lg flex items-center justify-center text-white font-bold text-xl">
              SW
            </div>
            <div>
              <h1 className="text-xl font-bold text-[#1a3c75]">Skywash Innovations</h1>
              <p className="text-xs text-slate-600">Premium Drone Washing</p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-6">
            <Link
              to="/commercial"
              className="text-slate-700 hover:text-[#1a3c75] font-medium transition-colors"
            >
              Commercial
            </Link>
            <Link
              to="/residential"
              className="text-slate-700 hover:text-[#1a3c75] font-medium transition-colors"
            >
              Residential
            </Link>
            <button
              onClick={() => handleNavigation('about')}
              className="text-slate-700 hover:text-[#1a3c75] font-medium transition-colors"
            >
              About
            </button>
            <button
              onClick={() => handleNavigation('service-areas')}
              className="text-slate-700 hover:text-[#1a3c75] font-medium transition-colors"
            >
              Service Areas
            </button>
            <Link
              to="/safety"
              className="text-slate-700 hover:text-[#1a3c75] font-medium transition-colors"
            >
              Safety
            </Link>
            <a
              href="tel:+17037550865"
              className="flex items-center space-x-2 text-slate-700 hover:text-[#1a3c75] font-medium transition-colors"
            >
              <Phone size={18} />
              <span className="hidden xl:inline">Call Now</span>
            </a>
            <button
              onClick={() => handleNavigation('contact')}
              className="bg-[#1a3c75] text-white px-6 py-2 rounded-lg hover:bg-[#2a4c85] transition-colors font-medium"
            >
              Get Quote
            </button>
          </nav>

          <button
            className="lg:hidden text-slate-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <nav className="flex flex-col space-y-4 px-4 py-6">
            <Link
              to="/commercial"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-slate-700 hover:text-[#1a3c75] font-medium text-left"
            >
              Commercial
            </Link>
            <Link
              to="/residential"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-slate-700 hover:text-[#1a3c75] font-medium text-left"
            >
              Residential
            </Link>
            <button
              onClick={() => handleNavigation('about')}
              className="text-slate-700 hover:text-[#1a3c75] font-medium text-left"
            >
              About
            </button>
            <button
              onClick={() => handleNavigation('service-areas')}
              className="text-slate-700 hover:text-[#1a3c75] font-medium text-left"
            >
              Service Areas
            </button>
            <Link
              to="/safety"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-slate-700 hover:text-[#1a3c75] font-medium text-left"
            >
              Safety
            </Link>
            <a
              href="tel:+17037550865"
              className="flex items-center space-x-2 bg-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-cyan-600 transition-colors font-medium text-center justify-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Phone size={18} />
              <span>Call Now</span>
            </a>
            <button
              onClick={() => handleNavigation('contact')}
              className="bg-[#1a3c75] text-white px-6 py-2 rounded-lg hover:bg-[#2a4c85] transition-colors font-medium text-center"
            >
              Get Quote
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
