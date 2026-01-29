import { Shield, Zap, FileCheck, Thermometer, Clock, Award } from 'lucide-react';

export function CommercialSection() {
  const features = [
    {
      icon: Shield,
      title: 'Risk Mitigation',
      description: 'Eliminate hazards associated with manual cleaning near critical infrastructure'
    },
    {
      icon: Thermometer,
      title: 'Thermal Management',
      description: 'Improve HVAC efficiency by removing heat-trapping debris from rooftops and vents'
    },
    {
      icon: Clock,
      title: 'Zero Downtime',
      description: 'Non-invasive drone operations ensure continuous facility operations'
    },
    {
      icon: FileCheck,
      title: 'Compliance Ready',
      description: 'Detailed documentation and reporting for audit requirements'
    },
    {
      icon: Zap,
      title: 'Rapid Deployment',
      description: 'Cover large surface areas in fraction of traditional cleaning time'
    },
    {
      icon: Award,
      title: 'Certified Operators',
      description: 'FAA-certified pilots with data center experience'
    }
  ];

  return (
    <section id="commercial" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-[#1a3c75] rounded-full text-sm font-semibold mb-4">
            Commercial Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Data Center Risk Mitigation
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Protect your critical infrastructure with advanced drone-powered maintenance that eliminates human risk and maximizes operational efficiency
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-xl border border-slate-200 hover:border-[#1a3c75] transition-all duration-300 hover:shadow-lg bg-white"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#1a3c75] transition-colors">
                <feature.icon className="text-[#1a3c75] group-hover:text-white transition-colors" size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-[#1a3c75] to-slate-800 rounded-2xl p-12 text-white">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Why Data Centers Choose Us</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Our drone-powered washing technology represents a paradigm shift in facility maintenance. We eliminate the risks of manual labor at heights, reduce operational disruption, and provide unprecedented precision in cleaning critical infrastructure.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2 mt-1">✓</span>
                  <span>Insurance-approved safety protocols</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2 mt-1">✓</span>
                  <span>Up to 40% cost reduction vs. traditional methods</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2 mt-1">✓</span>
                  <span>Real-time thermal imaging and reporting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2 mt-1">✓</span>
                  <span>24/7 emergency response capability</span>
                </li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h4 className="text-2xl font-bold mb-4">Request Commercial Assessment</h4>
              <p className="text-slate-300 mb-6">
                Schedule a free site evaluation and receive a comprehensive risk mitigation plan tailored to your facility.
              </p>
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full bg-white text-[#1a3c75] px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
              >
                Get Free Assessment
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
