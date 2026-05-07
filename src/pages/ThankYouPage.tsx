import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Home, Phone, Mail } from 'lucide-react';

export function ThankYouPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex flex-col items-center justify-center px-4 py-24">
      <div className="max-w-2xl w-full text-center">
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle className="text-green-500" size={52} strokeWidth={1.5} />
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          Thank You!
        </h1>
        <p className="text-xl text-slate-600 mb-4 leading-relaxed">
          Your request has been received. A member of the Skywash Innovations team will be in touch with you shortly.
        </p>
        <p className="text-slate-500 mb-12">
          We typically respond within 1 business day. In the meantime, feel free to reach out to us directly.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-12 max-w-md mx-auto">
          <a
            href="tel:+17037550865"
            className="flex items-center justify-center gap-3 bg-white border border-slate-200 rounded-xl px-6 py-4 text-slate-700 font-semibold hover:border-[#1a3c75] hover:text-[#1a3c75] transition-all shadow-sm"
          >
            <Phone size={20} className="text-[#1a3c75]" />
            (703) 755-0865
          </a>
          <a
            href="mailto:info@skywashinnovations.com"
            className="flex items-center justify-center gap-3 bg-white border border-slate-200 rounded-xl px-6 py-4 text-slate-700 font-semibold hover:border-[#1a3c75] hover:text-[#1a3c75] transition-all shadow-sm"
          >
            <Mail size={20} className="text-[#1a3c75]" />
            Send Email
          </a>
        </div>

        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-[#1a3c75] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#15305f] transition-all shadow-md"
        >
          <Home size={20} />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
