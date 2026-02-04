import { Mail, Phone, MapPin, Shield, Award, Users, Handshake, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-[#1a3c75] rounded-lg flex items-center justify-center text-white font-bold">
                SW
              </div>
              <div>
                <h3 className="text-white font-bold">Skywash Innovations</h3>
                <p className="text-xs text-slate-400">Premium Drone Washing</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Revolutionary drone-powered washing technology for commercial and residential properties.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-cyan-400" />
                <a href="tel:+17037550865" className="text-xs hover:text-white transition-colors">(703) 755-0865</a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-cyan-400" />
                <span className="text-xs">info@skywashinnovations.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-cyan-400" />
                <span className="text-xs">631 W. Main Street, #150, Purcellville, VA</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 flex items-center space-x-2">
              <Briefcase size={18} className="text-cyan-400" />
              <span>Commercial Services</span>
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/commercial/window-cleaning" className="hover:text-white transition-colors flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>Window Cleaning</span>
                </Link>
              </li>
              <li>
                <Link to="/commercial/hotel-cleaning" className="hover:text-white transition-colors flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>Hotel Cleaning</span>
                </Link>
              </li>
              <li>
                <Link to="/commercial/data-center-cleaning" className="hover:text-white transition-colors flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>Data Center Cleaning</span>
                </Link>
              </li>
              <li>
                <Link to="/commercial/church-cleaning" className="hover:text-white transition-colors flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>Church Cleaning</span>
                </Link>
              </li>
              <li>
                <Link to="/commercial/schools-university-washing" className="hover:text-white transition-colors flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>Schools & Universities</span>
                </Link>
              </li>
              <li>
                <Link to="/commercial/large-retail" className="hover:text-white transition-colors flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>Large Retail Centers</span>
                </Link>
              </li>
              <li>
                <Link to="/commercial/convenience" className="hover:text-white transition-colors flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>Convenience & Fuel Stations</span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 flex items-center space-x-2">
              <Briefcase size={18} className="text-cyan-400" />
              <span>Residential Services</span>
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/residential" className="hover:text-white transition-colors flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>Roof Cleaning</span>
                </Link>
              </li>
              <li>
                <Link to="/residential" className="hover:text-white transition-colors flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>Siding & Gutters</span>
                </Link>
              </li>
              <li>
                <Link to="/residential" className="hover:text-white transition-colors flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>Window Cleaning</span>
                </Link>
              </li>
              <li>
                <Link to="/residential" className="hover:text-white transition-colors flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>Hardscape Washing</span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 flex items-center space-x-2">
              <Shield size={18} className="text-cyan-400" />
              <span>Certifications</span>
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span>FAA Part 107 Certified</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span>OSHA Compliant</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span>Clean Water Act</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span>Virginia DEQ</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-sm">
              <Shield size={16} className="text-green-400" />
              <span>Fully Insured & Licensed</span>
            </div>

            <div className="flex space-x-6 text-sm">
              <Link to="/commercial" className="hover:text-white transition-colors">
                Commercial
              </Link>
              <Link to="/residential" className="hover:text-white transition-colors">
                Residential
              </Link>
              <Link to="/safety" className="hover:text-white transition-colors">
                Safety
              </Link>
              <button className="hover:text-white transition-colors">
                About
              </button>
              <button className="hover:text-white transition-colors">
                Contact
              </button>
            </div>

            <p className="text-sm">
              &copy; {new Date().getFullYear()} Skywash Innovations
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
