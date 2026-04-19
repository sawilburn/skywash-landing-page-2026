import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, AlertTriangle, CheckCircle, Info, Droplets, Wind, Shield, ChevronRight } from 'lucide-react';

const infestationImages = [
  {
    label: 'Mild Infestation',
    description: 'Early-stage GM growth — faint black streaking beginning to appear on the upper slope.',
    pexelsUrl: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
    badge: 'Mild',
    badgeColor: 'bg-yellow-500',
  },
  {
    label: 'Moderate Infestation',
    description: 'Visible dark streaks running down multiple shingle courses. Common on north-facing slopes.',
    pexelsUrl: 'https://images.pexels.com/photos/209272/pexels-photo-209272.jpeg?auto=compress&cs=tinysrgb&w=800',
    badge: 'Moderate',
    badgeColor: 'bg-orange-500',
  },
  {
    label: 'Heavy Infestation',
    description: 'Dense, widespread black-brown colonization. May require a second treatment after initial soft wash.',
    pexelsUrl: 'https://images.pexels.com/photos/2079234/pexels-photo-2079234.jpeg?auto=compress&cs=tinysrgb&w=800',
    badge: 'Severe',
    badgeColor: 'bg-red-600',
  },
];

const timeline = [
  {
    phase: 'Hours After Treatment',
    icon: Droplets,
    description:
      'The solution begins killing the organism. You may notice slight lightening in some areas as the chemical reaction starts breaking down the outer pigment layer.',
  },
  {
    phase: 'First 1–2 Weeks',
    icon: Info,
    description:
      'The GM is dead. The staining is still visible. This is normal — you\'re looking at the remnants of the organism, not active growth. The first rain events begin to flush dead material down the slope.',
  },
  {
    phase: '2–6 Weeks',
    icon: Wind,
    description:
      'With regular rainfall, the staining progressively lightens. Each rain event flushes more dead material off the surface. Heavily colonized areas — especially shaded, north-facing slopes — may take the full 4–8 weeks to fully clear.',
  },
  {
    phase: '6–8 Weeks',
    icon: CheckCircle,
    description:
      'In most cases, the roof will have fully cleared by this point. For severe accumulations or very low-rainfall periods, a second treatment may occasionally be recommended by your technician.',
  },
];

const preventionTips = [
  {
    title: 'Zinc or Copper Ridge Strips',
    detail:
      'Installed near the ridge, these allow trace metals to wash down the roof in the rain, creating an inhospitable environment for algae.',
  },
  {
    title: 'Regular Annual or Biannual Cleaning',
    detail:
      'Prevents heavy accumulations from building up and keeps treatment simple and cost-effective.',
  },
  {
    title: 'Trim Overhanging Branches',
    detail:
      'Reduces shade and moisture retention on the shingles, making your roof far less hospitable to biological growth.',
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

export function RoofCareGloeocapsaPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-[#1a3c75] text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 to-slate-900/80" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial="initial" animate="animate" variants={stagger}>
            <motion.div variants={fadeInUp} className="mb-8">
              <Link
                to="/blogs"
                className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium transition-colors"
              >
                <ArrowLeft size={16} />
                Back to Learning Center
              </Link>
            </motion.div>

            <motion.span variants={fadeInUp} className="inline-block bg-[#3a7bd5] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-5">
              Roof Care Education
            </motion.span>

            <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5">
              Why Your Roof Still Looks Dark After a Soft Wash
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 italic">
              The black streaking on your roof isn't just dirt — and understanding what it actually is will help you know what to expect after a professional cleaning.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex items-center gap-6 text-white/60 text-sm">
              <span className="flex items-center gap-1.5">
                <Calendar size={14} />
                Skywash Innovations
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} />
                5 min read
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
              If you've recently had your roof soft washed and you're noticing that the dark streaking hasn't completely disappeared, you're not alone — and there's nothing wrong with the job that was done. What's happening on your roof is a biological process, and cleaning it is a biological process too. That means it unfolds on nature's timeline, not ours.
            </motion.p>

            <motion.div variants={fadeInUp} className="border-l-4 border-slate-200 pl-6 mb-12">
              <div className="flex items-start gap-3 text-slate-500 text-sm uppercase tracking-widest font-semibold mb-4">
                <Shield size={16} className="mt-0.5 text-[#1a3c75]" />
                Jump to section
              </div>
              <nav className="space-y-2">
                {[
                  ['#what-is-gm', 'What is that black streaking?'],
                  ['#how-soft-washing-works', 'How soft washing works'],
                  ['#what-to-expect', 'What to expect after treatment'],
                  ['#dead-or-active', 'How to tell if it\'s dead or still active'],
                  ['#second-treatment', 'Does a heavy infestation need a second treatment?'],
                  ['#prevention', 'How to prevent it from coming back'],
                  ['#infestation-gallery', 'Infestation severity gallery'],
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

      <section id="what-is-gm" className="py-12 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-slate-900 mb-6">
              What is that black streaking?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-slate-700 text-lg leading-relaxed mb-6">
              Those dark stains — particularly common on north-facing roof slopes — are caused by a cyanobacteria called <em className="font-semibold text-slate-900">Gloeocapsa magma</em> (GM). Despite looking like mold or mildew, it's actually a living organism that feeds on the limestone filler used in asphalt shingles. It produces a dark pigmented outer shell to protect itself from UV rays, which is what gives it that characteristic black-brown color.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-slate-700 text-lg leading-relaxed mb-8">
              GM thrives on north-facing slopes because those areas receive less direct sunlight and stay damp longer, creating the perfect environment for it to colonize. Left untreated, it doesn't just look bad — it actively degrades your shingles over time, shortening the life of your roof.
            </motion.p>
            <motion.div variants={fadeInUp} className="bg-[#1a3c75]/5 border-l-4 border-[#1a3c75] p-6 rounded-r-xl">
              <p className="text-slate-700 italic text-lg leading-relaxed">
                "Gloeocapsa magma is so common that the Asphalt Roofing Manufacturers Association (ARMA) has issued guidelines specifically addressing it — and recommends sodium hypochlorite (bleach) solution as the standard treatment."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="how-soft-washing-works" className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-slate-900 mb-6">
              How soft washing works
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-slate-700 text-lg leading-relaxed mb-6">
              Soft washing uses a diluted sodium hypochlorite (bleach) solution applied at low pressure to kill the organism at the root. Unlike pressure washing, which can blast granules off your shingles and void manufacturer warranties, soft washing is gentle on your roof while being highly effective against biological growth.
            </motion.p>
            <motion.div variants={fadeInUp} className="bg-amber-50 border border-amber-200 rounded-xl p-6 flex gap-4">
              <AlertTriangle className="text-amber-600 flex-shrink-0 mt-0.5" size={22} />
              <p className="text-amber-900 font-semibold text-lg leading-relaxed">
                Soft washing kills the organism — it does not instantly erase the staining. After treatment, the dead GM still sits on the surface of your shingles. It takes time and rainfall to flush it away.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="what-to-expect" className="py-12 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-slate-900 mb-10">
              What to expect after treatment
            </motion.h2>
            <motion.div variants={stagger} className="space-y-0">
              {timeline.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    className="relative flex gap-6"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-[#1a3c75] rounded-full flex items-center justify-center flex-shrink-0 z-10">
                        <Icon className="text-white" size={20} />
                      </div>
                      {i < timeline.length - 1 && (
                        <div className="w-0.5 bg-slate-200 flex-1 my-1" />
                      )}
                    </div>
                    <div className={`pb-10 ${i === timeline.length - 1 ? 'pb-0' : ''}`}>
                      <p className="text-xs font-bold uppercase tracking-widest text-[#3a7bd5] mb-1">{item.phase}</p>
                      <p className="text-slate-700 text-base leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="dead-or-active" className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-slate-900 mb-6">
              How do you know if it's dead or still active?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-slate-700 text-lg leading-relaxed mb-8">
              There's a meaningful difference between dead residue and live growth. Active GM tends to have a slightly greenish or brownish cast and can look almost slimy or wet even when it hasn't rained. Dead residue looks flat black or dark gray and loses that living quality. If you're unsure, your technician can assess it on a follow-up visit.
            </motion.p>
            <motion.div variants={fadeInUp} className="grid sm:grid-cols-2 gap-4">
              <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle className="text-green-600" size={20} />
                  <span className="font-bold text-green-900">Dead Residue</span>
                </div>
                <ul className="space-y-1.5 text-green-800 text-sm">
                  <li>Flat black or dark gray color</li>
                  <li>No green or brown cast</li>
                  <li>Does not look wet/slimy when dry</li>
                  <li>Progressively fades with rain</li>
                </ul>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle className="text-red-600" size={20} />
                  <span className="font-bold text-red-900">Active Growth</span>
                </div>
                <ul className="space-y-1.5 text-red-800 text-sm">
                  <li>Slight greenish or brownish hue</li>
                  <li>Appears slimy or wet when dry</li>
                  <li>Does not fade between rain events</li>
                  <li>May indicate a retreatment is needed</li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="second-treatment" className="py-12 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-slate-900 mb-6">
              Does a heavy infestation need a second treatment?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-slate-700 text-lg leading-relaxed mb-6">
              In cases of very severe, long-established growth — particularly on north-facing slopes that haven't been treated in years — a second application is sometimes needed. This isn't a sign that the first treatment failed. Think of it like a deep cleaning: the first pass does the heavy lifting, and a second pass addresses whatever the first couldn't fully penetrate.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-slate-700 text-lg leading-relaxed mb-8">
              Your technician will evaluate the roof after allowing adequate time for natural rinsing. If a second treatment is warranted, they'll let you know. You should never be charged for a revisit without a clear explanation of why it's needed and what it will accomplish.
            </motion.p>
            <motion.div variants={fadeInUp} className="bg-[#1a3c75]/5 border-l-4 border-[#1a3c75] p-6 rounded-r-xl">
              <p className="text-slate-700 italic text-lg leading-relaxed">
                "A treated roof that's still showing some staining at the two-week mark is almost always just in the flushing phase — not evidence that the treatment didn't work."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="infestation-gallery" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-slate-900 mb-3">
              Infestation Severity Examples
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-slate-600 text-lg mb-10">
              Below are reference images showing varying degrees of Gloeocapsa magma colonization on asphalt shingles.
            </motion.p>
            <motion.div variants={stagger} className="grid md:grid-cols-3 gap-6">
              {infestationImages.map((img, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-slate-100"
                >
                  <div className="relative">
                    <img
                      src={img.pexelsUrl}
                      alt={img.label}
                      className="w-full h-52 object-cover"
                    />
                    <span className={`absolute top-3 left-3 ${img.badgeColor} text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full`}>
                      {img.badge}
                    </span>
                  </div>
                  <div className="p-5 bg-white">
                    <h3 className="text-base font-bold text-slate-900 mb-2">{img.label}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{img.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <motion.p variants={fadeInUp} className="text-slate-400 text-xs mt-6 text-center">
              Reference images shown for educational purposes. Actual appearance varies by shingle type, climate, and colonization age.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section id="prevention" className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-slate-900 mb-4">
              How to prevent it from coming back
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-slate-700 text-lg leading-relaxed mb-8">
              GM is airborne — spores travel on the wind, and any roof can be recolonized after treatment. A few things slow it down significantly.
            </motion.p>
            <motion.div variants={stagger} className="space-y-4 mb-10">
              {preventionTips.map((tip, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm flex gap-4 items-start"
                >
                  <div className="w-10 h-10 bg-[#1a3c75] rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="text-white" size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">{tip.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{tip.detail}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <motion.p variants={fadeInUp} className="text-slate-700 text-lg leading-relaxed">
              If you have questions about the treatment process, what you're seeing on your roof, or what the right maintenance schedule looks like for your home, don't hesitate to reach out. We're happy to walk you through it.
            </motion.p>
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
              Have questions about your roof?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Our technicians are happy to evaluate what you're seeing and recommend the right course of action for your home.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/residential/roof-washing"
                className="bg-white text-[#1a3c75] px-8 py-4 rounded-lg font-bold text-lg hover:bg-slate-100 transition-all shadow-xl"
              >
                Learn About Roof Washing
              </Link>
              <Link
                to="/blogs"
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
            This article is provided for educational purposes to help homeowners understand the soft washing process and set realistic expectations after roof cleaning treatments.
          </p>
        </div>
      </section>
    </div>
  );
}
