import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Clock,
  Calendar,
  Shield,
  Droplets,
  FlaskConical,
  Sparkles,
  Leaf,
  CheckCircle,
  Info,
  ChevronRight,
  HardHat,
  SprayCan,
  Wind,
} from 'lucide-react';

const chemicals = [
  {
    name: 'Sodium Hypochlorite (SH)',
    icon: FlaskConical,
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-700',
    concentration: '1.5% – 3% mix with raw water',
    use: 'Non-glass surfaces',
    description:
      'A diluted bleach solution applied at low pressure to kill organic matter — algae, mold, mildew, and bacteria — at the root. This is the industry-standard approach recommended by the Asphalt Roofing Manufacturers Association (ARMA) for roof staining.',
  },
  {
    name: 'Lucid Clear+',
    icon: Sparkles,
    iconBg: 'bg-sky-100',
    iconColor: 'text-sky-700',
    concentration: 'Lucid Clear+ with 2% Isopropyl Alcohol',
    use: 'Exterior window & glass washing',
    description:
      'A specialized glass-cleaning solution paired with isopropyl alcohol for standard exterior window cleaning and rinsing. Lifts grime, dust, and environmental buildup without leaving residue or streaks.',
  },
  {
    name: '0 PPM / 0 TDS Water',
    icon: Droplets,
    iconBg: 'bg-cyan-100',
    iconColor: 'text-cyan-700',
    concentration: 'Deionized, zero-purity water',
    use: 'Glass rinsing for spot-free finish',
    description:
      'Water that has been filtered to remove all dissolved solids and minerals. When it evaporates off glass it leaves zero spots — the same technology used in high-end car washes and commercial window cleaning.',
  },
  {
    name: 'Surfactants',
    icon: SprayCan,
    iconBg: 'bg-teal-100',
    iconColor: 'text-teal-700',
    concentration: 'Industrial-grade soap, application-specific',
    use: 'Roof, precast, gutters, vinyl siding, rear water tank',
    description:
      'Soaps that reduce surface tension so cleaning solutions cling to vertical surfaces longer instead of running off. We select the surfactant based on what we are cleaning — a roof needs different dwell time than a gutter or vinyl siding.',
  },
  {
    name: 'Acid-Based Cleaners',
    icon: FlaskConical,
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-700',
    concentration: 'e.g. OneRestore — spot cleaning only',
    use: 'Non-organic stain removal',
    description:
      'Used selectively for stains that are not biological in origin — things like metal oxidation, efflorescence, or hard-water etching. These are applied as targeted spot treatments, not broad-surface application.',
  },
];

const propertyCare = [
  {
    icon: Shield,
    title: 'Low-Pressure Application',
    description:
      'We soft wash — never pressure wash — delicate surfaces. Our solutions are applied at low pressure through dedicated equipment, so there is no blasting, no granule loss, and no damage to your shingles, siding, or landscaping.',
  },
  {
    icon: Leaf,
    title: 'Landscaping Protection',
    description:
      'Before we begin, we pre-rinse and protect surrounding plants and landscaping. We dilute and rinse areas where overspray could reach, and we use only the concentration needed for the job — no more.',
  },
  {
    icon: Wind,
    title: 'Containment & Rinsing',
    description:
      'We manage runoff carefully. Surfaces are rinsed before, during, and after application to neutralize any solution that reaches areas it should not. Your property is left clean, not just treated.',
  },
  {
    icon: HardHat,
    title: 'OSHA-Certified Crews',
    description:
      'Every Skywash Innovations technician is OSHA certified and trained to handle industrial-grade solutions safely. We follow proper handling, mixing, and disposal protocols on every job site.',
  },
];

const approachSteps = [
  {
    phase: 'Assessment',
    icon: Info,
    description:
      'We start by evaluating the surfaces, the type of growth or staining present, and the surrounding environment. This determines which solutions we use, at what concentration, and in what order.',
  },
  {
    phase: 'Preparation',
    icon: Shield,
    description:
      'We protect landscaping, cover sensitive areas, and set up containment. Equipment is staged and solutions are mixed to the correct dilution for the specific surface and condition.',
  },
  {
    phase: 'Application',
    icon: SprayCan,
    description:
      'Solutions are applied at low pressure and allowed to dwell — the time they need to work depends on the organism or stain. We never rush the chemistry. The solution does the work, not the pressure.',
  },
  {
    phase: 'Rinse & Verify',
    icon: CheckCircle,
    description:
      'We rinse all treated and surrounding surfaces thoroughly, verify the result, and confirm the area is left safe and clean. If a follow-up treatment is needed, we will tell you why and what to expect.',
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55 },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.1 } },
};

export function HowWeWorkPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-[#1a3c75] text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 to-slate-900/80" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial="initial" animate="animate" variants={stagger}>
            <motion.div variants={fadeInUp} className="mb-8">
              <Link
                to="/learning-center"
                className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium transition-colors"
              >
                <ArrowLeft size={16} />
                Back to Learning Center
              </Link>
            </motion.div>

            <motion.span
              variants={fadeInUp}
              className="inline-block bg-[#3a7bd5] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-5"
            >
              Our Process
            </motion.span>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5"
            >
              How We Work: Our Approach, Our Chemistry, Your Property
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 italic"
            >
              Transparency matters. Here is exactly what we use, why we use it, and how we keep your home and landscaping safe throughout the process.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex items-center gap-6 text-white/60 text-sm">
              <span className="flex items-center gap-1.5">
                <Calendar size={14} />
                Skywash Innovations
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} />
                6 min read
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="prose prose-lg max-w-none"
          >
            <motion.p variants={fadeInUp} className="text-slate-700 text-lg leading-relaxed mb-8">
              Exterior cleaning is not one-size-fits-all. The right approach depends on what is growing on your roof, what is on your siding, and what kind of glass you have. At Skywash Innovations, we match the chemistry to the problem — and we believe you should know exactly what we are putting on your property and why.
            </motion.p>

            <motion.div variants={fadeInUp} className="border-l-4 border-slate-200 pl-6 mb-12">
              <div className="flex items-start gap-3 text-slate-500 text-sm uppercase tracking-widest font-semibold mb-4">
                <Shield size={16} className="mt-0.5 text-[#1a3c75]" />
                Jump to section
              </div>
              <nav className="space-y-2">
                {[
                  ['#our-approach', 'Our approach to every job'],
                  ['#chemicals-we-use', 'The chemicals we use'],
                  ['#property-care', 'How we care for your property'],
                  ['#safety', 'Safety & certifications'],
                ].map(([href, label]) => (
                  <a
                    key={href as string}
                    href={href as string}
                    className="flex items-center gap-2 text-[#3a7bd5] hover:text-[#1a3c75] text-sm font-medium transition-colors"
                  >
                    <ChevronRight size={14} />
                    {label as string}
                  </a>
                ))}
              </nav>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="our-approach" className="py-12 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-slate-900 mb-6">
              Our approach to every job
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-slate-700 text-lg leading-relaxed mb-10">
              Every cleaning job follows the same four-phase process. Nothing is improvised — we assess, prepare, apply, and verify. This is how we get consistent results without risking your property.
            </motion.p>
            <motion.div variants={stagger} className="space-y-0">
              {approachSteps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div key={i} variants={fadeInUp} className="relative flex gap-6">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-[#1a3c75] rounded-full flex items-center justify-center flex-shrink-0 z-10">
                        <Icon className="text-white" size={20} />
                      </div>
                      {i < approachSteps.length - 1 && (
                        <div className="w-0.5 bg-slate-200 flex-1 my-1" />
                      )}
                    </div>
                    <div className={`pb-10 ${i === approachSteps.length - 1 ? 'pb-0' : ''}`}>
                      <p className="text-xs font-bold uppercase tracking-widest text-[#3a7bd5] mb-1">
                        {step.phase}
                      </p>
                      <p className="text-slate-700 text-base leading-relaxed">{step.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="chemicals-we-use" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-slate-900 mb-3">
              The chemicals we use
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-slate-600 text-lg mb-10">
              We use industrial-grade solutions selected for the specific surface and condition. Here is the full list, what each one does, and where we use it.
            </motion.p>
            <motion.div variants={stagger} className="grid gap-6">
              {chemicals.map((chem, i) => {
                const Icon = chem.icon;
                return (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                  >
                    <div className="flex flex-col sm:flex-row">
                      <div className="flex items-center justify-center sm:w-32 p-6 bg-slate-50 sm:border-r border-slate-100">
                        <div className={`w-14 h-14 ${chem.iconBg} rounded-2xl flex items-center justify-center`}>
                          <Icon className={chem.iconColor} size={26} />
                        </div>
                      </div>
                      <div className="flex-1 p-6">
                        <h3 className="text-lg font-bold text-slate-900 mb-1">{chem.name}</h3>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                            <Droplets size={11} />
                            {chem.concentration}
                          </span>
                          <span className="inline-flex items-center gap-1 bg-slate-100 text-slate-600 text-xs font-semibold px-2.5 py-1 rounded-full">
                            {chem.use}
                          </span>
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed">{chem.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-6 flex gap-4"
            >
              <Info className="text-amber-600 flex-shrink-0 mt-0.5" size={22} />
              <p className="text-amber-900 text-sm leading-relaxed">
                Safety Data Sheets (SDS) for every solution we use are available on request. If you would like to review the full product documentation before we begin, just ask your technician.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="property-care" className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-slate-900 mb-3">
              How we care for your property
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-slate-600 text-lg mb-10">
              Cleaning solutions are powerful — that is why they work. But that same power means we take property protection seriously. Here is what we do on every job.
            </motion.p>
            <motion.div variants={stagger} className="grid sm:grid-cols-2 gap-6">
              {propertyCare.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex gap-4 items-start"
                  >
                    <div className="w-12 h-12 bg-[#1a3c75] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="text-white" size={22} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1.5">{item.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="safety" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-slate-900 mb-6">
              Safety &amp; certifications
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="bg-[#1a3c75]/5 border-l-4 border-[#1a3c75] p-6 rounded-r-xl mb-8"
            >
              <p className="text-slate-700 text-lg leading-relaxed">
                Every Skywash Innovations employee is OSHA certified and trained to handle industrial-grade solutions safely and correctly. We follow established protocols for mixing, application, containment, and disposal — on every job, every time.
              </p>
            </motion.div>
            <motion.div variants={stagger} className="grid sm:grid-cols-2 gap-4">
              {[
                'OSHA-certified technicians on every crew',
                'Proper PPE worn during all chemical handling',
                'Safety Data Sheets available on request',
                'Correct dilution ratios — never stronger than needed',
              ].map((point, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="flex items-center gap-3 bg-white rounded-xl p-4 border border-slate-200"
                >
                  <CheckCircle className="text-green-600 flex-shrink-0" size={20} />
                  <span className="text-slate-700 text-sm font-medium">{point}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-[#1a3c75] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4">
              Have questions about our process?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              We are happy to walk you through exactly what we will use on your property and why. No jargon, no surprises.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/residential"
                className="bg-white text-[#1a3c75] px-8 py-4 rounded-lg font-bold text-lg hover:bg-slate-100 transition-all shadow-xl"
              >
                Explore Residential Services
              </Link>
              <Link
                to="/learning-center"
                className="border-2 border-white/40 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all"
              >
                Back to Learning Center
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-8 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-slate-400 text-sm text-center">
            This article is provided for transparency so you understand exactly what we use and how we protect your property.
          </p>
        </div>
      </section>
    </div>
  );
}
