import { Link } from 'react-router-dom';
import { Home, Building2, Home as HomeIcon, MapPin, Users, Shield, FileText, Briefcase, Handshake } from 'lucide-react';

export function SitemapPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Site Map
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Comprehensive navigation to all pages and services offered by Skywash Innovations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Main Pages */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Home className="text-blue-600" size={24} />
              </div>
              <h2 className="text-xl font-bold text-slate-900">Main Pages</h2>
            </div>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-slate-700 hover:text-blue-600 transition-colors flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/safety" className="text-slate-700 hover:text-blue-600 transition-colors flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  Safety
                </Link>
              </li>
              <li>
                <Link to="/our-process" className="text-slate-700 hover:text-blue-600 transition-colors flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  Our Process
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="text-slate-700 hover:text-blue-600 transition-colors flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  Blogs
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-slate-700 hover:text-blue-600 transition-colors flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-slate-700 hover:text-blue-600 transition-colors flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Commercial Services */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                <Building2 className="text-emerald-600" size={24} />
              </div>
              <h2 className="text-xl font-bold text-slate-900">Commercial Services</h2>
            </div>
            <ul className="space-y-3">
              <li>
                <Link to="/commercial" className="text-slate-700 hover:text-emerald-600 transition-colors flex items-center">
                  <span className="text-emerald-400 mr-2">→</span>
                  Commercial Overview
                </Link>
              </li>
              <li>
                <Link to="/commercial/window-cleaning" className="text-slate-700 hover:text-emerald-600 transition-colors flex items-center">
                  <span className="text-emerald-400 mr-2">→</span>
                  Window Cleaning
                </Link>
              </li>
              <li>
                <Link to="/commercial/hotel-cleaning" className="text-slate-700 hover:text-emerald-600 transition-colors flex items-center">
                  <span className="text-emerald-400 mr-2">→</span>
                  Hotel Cleaning
                </Link>
              </li>
              <li>
                <Link to="/commercial/data-center-cleaning" className="text-slate-700 hover:text-emerald-600 transition-colors flex items-center">
                  <span className="text-emerald-400 mr-2">→</span>
                  Data Center Cleaning
                </Link>
              </li>
              <li>
                <Link to="/commercial/church-cleaning" className="text-slate-700 hover:text-emerald-600 transition-colors flex items-center">
                  <span className="text-emerald-400 mr-2">→</span>
                  Church Cleaning
                </Link>
              </li>
              <li>
                <Link to="/commercial/schools-university-washing" className="text-slate-700 hover:text-emerald-600 transition-colors flex items-center">
                  <span className="text-emerald-400 mr-2">→</span>
                  Schools & Universities
                </Link>
              </li>
              <li>
                <Link to="/commercial/medical-cleaning" className="text-slate-700 hover:text-emerald-600 transition-colors flex items-center">
                  <span className="text-emerald-400 mr-2">→</span>
                  Medical Facilities
                </Link>
              </li>
              <li>
                <Link to="/commercial/large-retail" className="text-slate-700 hover:text-emerald-600 transition-colors flex items-center">
                  <span className="text-emerald-400 mr-2">→</span>
                  Large Retail Centers
                </Link>
              </li>
              <li>
                <Link to="/commercial/convenience" className="text-slate-700 hover:text-emerald-600 transition-colors flex items-center">
                  <span className="text-emerald-400 mr-2">→</span>
                  Convenience & Fuel Stations
                </Link>
              </li>
              <li>
                <Link to="/commercial/multi-unit-residential" className="text-slate-700 hover:text-emerald-600 transition-colors flex items-center">
                  <span className="text-emerald-400 mr-2">→</span>
                  Multi-Unit Residential
                </Link>
              </li>
            </ul>
          </div>

          {/* Residential Services */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center">
                <HomeIcon className="text-cyan-600" size={24} />
              </div>
              <h2 className="text-xl font-bold text-slate-900">Residential Services</h2>
            </div>
            <ul className="space-y-3">
              <li>
                <Link to="/residential" className="text-slate-700 hover:text-cyan-600 transition-colors flex items-center">
                  <span className="text-cyan-400 mr-2">→</span>
                  Residential Overview
                </Link>
              </li>
              <li>
                <Link to="/residential/house-washing" className="text-slate-700 hover:text-cyan-600 transition-colors flex items-center">
                  <span className="text-cyan-400 mr-2">→</span>
                  House Washing
                </Link>
              </li>
              <li>
                <Link to="/residential/roof-washing" className="text-slate-700 hover:text-cyan-600 transition-colors flex items-center">
                  <span className="text-cyan-400 mr-2">→</span>
                  Roof Washing
                </Link>
              </li>
              <li>
                <Link to="/residential/solar-washing" className="text-slate-700 hover:text-cyan-600 transition-colors flex items-center">
                  <span className="text-cyan-400 mr-2">→</span>
                  Solar Panel Cleaning
                </Link>
              </li>
              <li>
                <Link to="/residential/who-we-serve/realtor" className="text-slate-700 hover:text-cyan-600 transition-colors flex items-center">
                  <span className="text-cyan-400 mr-2">→</span>
                  Realtor Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Locations */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <MapPin className="text-purple-600" size={24} />
              </div>
              <h2 className="text-xl font-bold text-slate-900">Service Locations</h2>
            </div>
            <ul className="space-y-3">
              <li>
                <Link to="/locations/ashburn" className="text-slate-700 hover:text-purple-600 transition-colors flex items-center">
                  <span className="text-purple-400 mr-2">→</span>
                  Ashburn
                </Link>
              </li>
              <li>
                <Link to="/locations/greatfalls" className="text-slate-700 hover:text-purple-600 transition-colors flex items-center">
                  <span className="text-purple-400 mr-2">→</span>
                  Great Falls
                </Link>
              </li>
              <li>
                <Link to="/locations/reston" className="text-slate-700 hover:text-purple-600 transition-colors flex items-center">
                  <span className="text-purple-400 mr-2">→</span>
                  Reston
                </Link>
              </li>
              <li>
                <Link to="/locations/leesburg" className="text-slate-700 hover:text-purple-600 transition-colors flex items-center">
                  <span className="text-purple-400 mr-2">→</span>
                  Leesburg
                </Link>
              </li>
              <li>
                <Link to="/locations/middleburg" className="text-slate-700 hover:text-purple-600 transition-colors flex items-center">
                  <span className="text-purple-400 mr-2">→</span>
                  Middleburg
                </Link>
              </li>
              <li>
                <Link to="/locations/purcellville" className="text-slate-700 hover:text-purple-600 transition-colors flex items-center">
                  <span className="text-purple-400 mr-2">→</span>
                  Purcellville
                </Link>
              </li>
            </ul>
          </div>

          {/* Partners */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <Handshake className="text-orange-600" size={24} />
              </div>
              <h2 className="text-xl font-bold text-slate-900">Partners</h2>
            </div>
            <ul className="space-y-3">
              <li>
                <Link to="/partners/roofing-experts" className="text-slate-700 hover:text-orange-600 transition-colors flex items-center">
                  <span className="text-orange-400 mr-2">→</span>
                  Roofing Experts
                </Link>
              </li>
              <li>
                <Link to="/partners/pest-and-wildlife-control" className="text-slate-700 hover:text-orange-600 transition-colors flex items-center">
                  <span className="text-orange-400 mr-2">→</span>
                  Pest & Wildlife Control
                </Link>
              </li>
            </ul>
          </div>

          {/* Specials */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <FileText className="text-red-600" size={24} />
              </div>
              <h2 className="text-xl font-bold text-slate-900">Specials</h2>
            </div>
            <ul className="space-y-3">
              <li>
                <Link to="/specials/residential-spring-2026" className="text-slate-700 hover:text-red-600 transition-colors flex items-center">
                  <span className="text-red-400 mr-2">→</span>
                  Residential Spring 2026
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 bg-gradient-to-br from-blue-900 to-cyan-800 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Need Help Finding Something?</h2>
          <p className="text-slate-200 mb-6 max-w-2xl mx-auto">
            Can't find what you're looking for? Contact us directly and we'll be happy to assist you.
          </p>
          <a
            href="tel:+17037550865"
            className="inline-block px-8 py-3 bg-white text-blue-900 rounded-lg font-semibold hover:bg-slate-100 transition-all"
          >
            Call (703) 755-0865
          </a>
        </div>
      </div>
    </div>
  );
}
