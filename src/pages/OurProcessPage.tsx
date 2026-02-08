import { Shield, CheckCircle, Users, FileCheck, Rocket, Star, ClipboardCheck, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export function OurProcessPage() {
  const processSteps = [
    {
      number: 1,
      title: 'Initial Contact',
      description: 'We begin with initial contact to understand your cleaning needs and establish a relationship. This is where we gather basic information about your property and requirements.',
      activities: [
        'Initial inquiry and consultation',
        'Basic property information gathering',
        'Preliminary needs assessment',
        'Relationship establishment'
      ]
    },
    {
      number: 2,
      title: 'Initial Assessment',
      description: 'Our team conducts a thorough initial assessment of your property to understand the scope of work, cleaning requirements, and any unique challenges.',
      activities: [
        'Property evaluation',
        'Cleaning needs analysis',
        'Challenge identification',
        'Requirements documentation'
      ]
    },
    {
      number: 3,
      title: 'Proposal Development and Method Selection',
      description: 'Based on our assessment, we develop a comprehensive proposal and select the most effective cleaning methods and equipment for optimal results.',
      activities: [
        'Detailed proposal creation',
        'Cleaning method selection',
        'Equipment configuration',
        'Timeline and pricing development'
      ]
    },
    {
      number: 4,
      title: 'Client Review and Approval',
      description: 'We present the proposal to you for review and work together to address any questions or modifications, ensuring the plan meets all your requirements.',
      activities: [
        'Proposal presentation',
        'Client feedback and questions',
        'Modifications as needed',
        'Contract approval and signing'
      ]
    },
    {
      number: 5,
      title: 'Detailed Site Visit, Survey & Operations Planning',
      description: 'Once the proposal is accepted, we perform an extensive on-site visit to document our comprehensive cleaning operations plan, including risk assessment and all operational details.',
      activities: [
        'Comprehensive physical site inspection',
        'Risk identification and hazard assessment',
        'Cleaning approach documentation',
        'Flight areas mapping and planning',
        'Survey and labor planning and assignment',
        'Secure flight clearances as needed',
        'Safety protocol development'
      ]
    },
    {
      number: 6,
      title: 'Project Execution',
      description: 'Our expert team executes the approved plan with precision, adhering to all safety protocols and quality standards to deliver exceptional results.',
      activities: [
        'Plan and Permit: Assess building surface and dirt type, select the right solution (soft wash vs. pressure wash), obtain necessary permits, and secure the work area',
        'Setup and Supply: Establish ground support system (water tanks, pumps, pure water filtration) and connect via hose/tether to the specialized cleaning drone',
        'Clean and Rinse: Pilot uses drone to apply cleaning solution systematically, allows it to dwell, and follows up with thorough pure water rinse from top to bottom',
        'Inspect and Finalize: Perform final drone flight to visually inspect all areas for missed spots, safely break down equipment, and finalize project report'
      ]
    },
    {
      number: 7,
      title: 'Project Review and Client Satisfaction Appraisal',
      description: 'After completion, we conduct a thorough review with you to ensure satisfaction, gather feedback, and address any final concerns.',
      activities: [
        'Post-project walkthrough',
        'Quality verification',
        'Client satisfaction survey',
        'Feedback collection and follow-up'
      ]
    }
  ];

  const differentiators = [
    {
      icon: Shield,
      title: 'Safety-First Culture and Rigorous Training',
      description: 'Skywash Innovations prioritizes a safety-first culture across all operations. Our team undergoes comprehensive training in both drone operation and site safety protocols, ensuring every project meets or exceeds industry safety standards. We conduct regular safety briefings, risk assessments, and ongoing education to maintain a zero-incident workplace.'
    },
    {
      icon: FileCheck,
      title: 'Robust Operational Procedures and Compliance',
      description: 'We have established robust standard operating procedures (SOPs) for every stage of our service—from pre-site analysis and FAA compliance to post-job reporting. Our operations are fully compliant with all relevant federal, state, and local regulations, including FAA Part 107 requirements. This disciplined approach minimizes risk, ensures legal compliance, and delivers peace of mind to our clients.'
    },
    {
      icon: ClipboardCheck,
      title: 'Proactive Site Assessment and Risk Mitigation',
      description: 'Before every project, Skywash Innovations performs a thorough site analysis to identify potential hazards and operational challenges. We develop customized safety, and logistics plans for each location, proactively addressing issues such as public safety, property protection, and environmental considerations. This proactive planning ensures smooth, efficient, and incident-free operations.'
    }
  ];

  const safetyCommitments = [
    {
      title: 'Pre-Flight Inspections',
      description: 'Comprehensive equipment checks before every operation'
    },
    {
      title: 'Risk Assessment',
      description: 'Thorough site analysis and hazard mitigation planning'
    },
    {
      title: 'Regulatory Compliance',
      description: 'Full adherence to FAA, OSHA, and local safety regulations'
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-slate-900 via-[#1a3c75] to-slate-800 text-white pt-20">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-cyan-300 text-sm font-semibold mb-6">
              How We Work
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                Our Process & Operations
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed">
              Revolutionizing commercial cleaning in the DC area with advanced industrial drones and rigorous safety protocols
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900">Executive Summary</h2>
            <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed space-y-4">
              <p>
                Skywash Innovations revolutionizes commercial cleaning in the DC area by using advanced industrial Unmanned Aerial Systems (UAS) including the Apellix B2 and Lucid BOTS Sherpa platforms. Instead of risky lifts and scaffolding, Skywash's FAA-certified team delivers fast, safe, and efficient cleaning for high-rise buildings and hard-to-reach exteriors.
              </p>
              <p>
                With powerful, battery-powered UAS platforms, we complete jobs in a fraction of the time, minimizing disruption and maximizing safety. Trusted by property managers and facility directors, Skywash Innovations sets a new industry standard—proving that with the right technology, even the sky isn't the limit.
              </p>
              <p className="font-semibold text-slate-900">
                Skywash meets and can exceed expectations of exterior cleaning while providing a safer, faster, and less expensive solution than traditional cleaning methods.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-semibold mb-4">
              <Shield className="w-4 h-4" />
              SAFETY FIRST
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Safety is Our Top Priority</h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              At Skywash Innovations, safety isn't just a priority—it's the foundation of everything we do. Every team member is a certified, highly-trained professional committed to excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-cyan-500">
              <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">FAA Part 107 Certified Pilots</h3>
              <p className="text-slate-700 leading-relaxed">
                All Skywash UAS pilots hold valid FAA Part 107 Remote Pilot Certificates. Our pilots undergo rigorous training and continuous education to maintain the highest standards of airspace safety and operational excellence.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-blue-500">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Expert Technicians</h3>
              <p className="text-slate-700 leading-relaxed">
                Our technicians are trained specialists in drone operations, soft washing techniques, and commercial building maintenance. Each team member completes comprehensive safety protocols and site-specific training before every project.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h3 className="text-3xl font-bold mb-8 text-slate-900 text-center">Our Safety Commitment</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {safetyCommitments.map((commitment, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-slate-900">{commitment.title}</h4>
                  <p className="text-slate-700">{commitment.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Industry-Leading Technology Partners</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Skywash Innovations collaborates with the world's leading drone and cleaning technology manufacturers to deliver the most advanced, reliable, and effective solutions available.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-4">
                <Rocket className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Purpose-Built Equipment</h3>
              <p className="text-slate-300 leading-relaxed">
                We work directly with industry leaders like Apellix and Lucid BOTS to design and deploy UAS platforms specifically engineered for commercial exterior cleaning. Our equipment represents the cutting edge of drone technology, optimized for safety, efficiency, and performance.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Continuous Innovation</h3>
              <p className="text-slate-300 leading-relaxed">
                Our partners invest heavily in research, development, and innovation to revolutionize site management. By staying at the forefront of technological advancement, Skywash ensures our clients benefit from the latest breakthroughs in autonomous systems, cleaning chemistry, and operational efficiency.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 md:p-12 border border-cyan-500/20">
            <h3 className="text-3xl font-bold mb-4 text-center">The Future of Commercial Cleaning</h3>
            <p className="text-xl text-slate-300 text-center leading-relaxed">
              Through strategic partnerships and continuous innovation, Skywash Innovations is not just adopting new technology—we're helping to shape the future of the industry. Our collaborative approach ensures that our equipment, methods, and safety standards remain best-in-class.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Key Differentiators</h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              What sets Skywash Innovations apart in the commercial cleaning industry
            </p>
          </div>

          <div className="space-y-8">
            {differentiators.map((diff, index) => {
              const Icon = diff.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl shadow-lg p-8 md:p-10 border-l-4 border-cyan-500 hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-slate-900">{diff.title}</h3>
                      <p className="text-lg text-slate-700 leading-relaxed">{diff.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-900 via-[#1a3c75] to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Full Project Lifecycle</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our comprehensive 7-step process ensures every project is executed with precision, safety, and excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-cyan-500/50 transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-2xl font-bold">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold flex-1">{step.title}</h3>
                </div>
                <p className="text-slate-300 mb-6 leading-relaxed">{step.description}</p>
                <div className="space-y-3">
                  <p className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">Key Activities:</p>
                  <ul className="space-y-2">
                    {step.activities.map((activity, actIndex) => (
                      <li key={actIndex} className="flex items-start gap-2 text-sm text-slate-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-cyan-500 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Experience Our Professional Process?
          </h2>
          <p className="text-xl mb-10 text-cyan-50">
            Contact us today to begin your comprehensive cleaning project with our proven 7-step process
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/commercial"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-cyan-600 font-bold text-lg rounded-lg hover:bg-slate-100 transition-all shadow-xl"
            >
              Start Your Project
            </Link>
            <a
              href="tel:1-888-503-7639"
              className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white font-bold text-lg rounded-lg hover:bg-slate-800 transition-all shadow-xl"
            >
              <Phone className="w-5 h-5" />
              Call Now: 1-888-503-7639
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
