import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, AlertTriangle, CheckCircle, Info, Shield, ChevronRight, Droplets, Search, Eye, Wrench, XCircle } from 'lucide-react';

const causes = [
  {
    title: 'Hard water overspray',
    detail:
      'Irrigation systems, sprinklers, and hose-end rinsing deposit calcium and magnesium minerals onto glass. Each drying cycle leaves a mineral film that slowly etches the surface.',
  },
  {
    title: 'Soap and chemical scum',
    detail:
      'Improperly mixed cleaning solutions, dish soap, or harsh household chemicals can leave an alkaline residue that bonds to the silica in glass over repeated exposures.',
  },
  {
    title: 'Environmental fallout',
    detail:
      'Airborne pollutants, acid rain, and hard-water rain deposits carry minerals and acids that interact with the glass surface over months and years of exposure.',
  },
  {
    title: 'Incorrect cleaning tools',
    detail:
      'Abrasive sponges, steel wool, or dirty squeegee blades introduce micro-scratches that catch and hold mineral deposits, accelerating the etching process.',
  },
];

const stages = [
  {
    label: 'Stage 1 — Water Spots (Removable)',
    description:
      'Minerals sit on the surface as a visible film or droplet pattern. The glass itself is still smooth. A professional pure-water rinse or mild acid wash will remove them completely.',
    color: 'text-green-700',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    icon: CheckCircle,
  },
  {
    label: 'Stage 2 — Cloudy Haze (Partially Removable)',
    description:
      'Minerals have begun bonding with the silica. The glass looks cloudy or foggy in direct sunlight. Specialty glass polish can restore clarity in many cases, but results vary.',
    color: 'text-amber-700',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
    icon: AlertTriangle,
  },
  {
    label: 'Stage 3 — Permanent Etching (Not Removable)',
    description:
      'The mineral deposits have chemically reacted with and damaged the glass surface itself. The cloudiness is now in the glass, not on it. No cleaning or polishing will restore full clarity.',
    color: 'text-red-700',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200',
    icon: XCircle,
  },
];

const mechanicalOptions = [
  {
    icon: Wrench,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    title: 'Cerium oxide glass polish',
    detail:
      'A rare-earth oxide compound applied with a buffing pad. Mechanical polishing with cerium oxide removes a microscopic layer of glass, smoothing out Stage 2 cloudiness. Effective on light to moderate etching; requires training and the right equipment to avoid distortion.',
  },
  {
    icon: Wrench,
    color: 'text-amber-600',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
    title: 'Professional-grade acid treatments',
    detail:
      'Controlled application of hydrofluoric or phosphoric acid-based glass restorers can dissolve mineral deposits that have bonded to the surface. Effective for Stage 1 and early Stage 2 only, and must be performed by trained professionals with proper safety protocols.',
  },
  {
    icon: Wrench,
    color: 'text-amber-600',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
    title: 'Mechanical buffing with graded abrasives',
    detail:
      'For deeper Stage 2 etching, a multi-step process using progressively finer abrasive pads can restore surface clarity. Time-intensive and best suited for high-value windows where replacement is cost-prohibitive.',
  },
  {
    icon: XCircle,
    color: 'text-red-600',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200',
    title: 'Glass replacement (Stage 3)',
    detail:
      'Once etching has chemically damaged the glass surface, replacement is the only option for full clarity. Mechanical polishing at this stage would require removing so much material that the glass becomes structurally compromised.',
  },
];

const preventionTips = [
  {
    title: 'Schedule regular professional cleaning',
    detail:
      'Removing mineral deposits before they bond prevents etching from developing. A professional pure-water window cleaning every 3–6 months keeps the surface free of damaging buildup.',
  },
  {
    title: 'Redirect sprinklers away from windows',
    detail:
      'The single most common cause of etched glass is irrigation overspray. Adjusting sprinkler heads so they do not hit windows eliminates the primary source of mineral deposition.',
  },
  {
    title: 'Squeegee after cleaning',
    detail:
      'If you clean your own windows, always finish with a squeegee. Leaving water to air-dry on glass is what creates the mineral film that eventually etches the surface.',
  },
  {
    title: 'Use only pure water for rinsing',
    detail:
      'Deionized or reverse-osmosis water contains no dissolved minerals and will not leave spots. Professional window cleaners use pure-water systems for exactly this reason.',
  },
  {
    title: 'Apply a hydrophobic glass coating',
    detail:
      'A quality glass sealant or coating causes water to bead and roll off rather than drying on the surface. It does not prevent etching entirely, but it significantly slows mineral buildup between cleanings.',
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

export function EtchedGlassPage() {
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

            <motion.span variants={fadeInUp} className="inline-block bg-sky-600 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-5">
              Window Care Education
            </motion.span>

            <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5">
              Etched Glass: What It Is, How It Happens, and What Can Be Done
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 italic">
              That cloudy, foggy haze on your windows that no amount of cleaning seems to fix may not be dirt at all. It could be etched glass — a permanent chemical change in the surface of the window itself. Here's how to tell, what causes it, and what options exist.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex items-center gap-6 text-white/60 text-sm">
              <span className="flex items-center gap-1.5">
                <Calendar size={14} />
                Skywash Innovations
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} />
                7 min read
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
              If you've cleaned your windows again and again and they still look foggy, hazy, or slightly cloudy in direct sunlight — especially on the side of the house nearest the sprinklers — you may be dealing with etched glass. It's one of the most frustrating things a homeowner encounters with windows, because the problem isn't dirt sitting on the glass. The problem is damage to the glass itself. Understanding what etched glass is, how it develops, and what can realistically be done about it will help you make informed decisions about your windows.
            </motion.p>

            <motion.div variants={fadeInUp} className="border-l-4 border-slate-200 pl-6 mb-12">
              <div className="flex items-start gap-3 text-slate-500 text-sm uppercase tracking-widest font-semibold mb-4">
                <Shield size={16} className="mt-0.5 text-[#1a3c75]" />
                Jump to section
              </div>
              <nav className="space-y-2">
                {[
                  ['#what-is-etched-glass', 'What is etched glass?'],
                  ['#how-it-happens', 'How does glass become etched?'],
                  ['#stages', 'The three stages of glass damage'],
                  ['#mechanical-improvement', 'Can etched glass be mechanically improved?'],
                  ['#how-to-prevent', 'How to prevent etched glass'],
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

      <section id="what-is-etched-glass" className="py-12 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-slate-900 mb-6">
              What is etched glass?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-slate-700 text-lg leading-relaxed mb-6">
              Glass is made primarily of silica (silicon dioxide). Under normal conditions it's an extremely hard, smooth, non-reactive surface. But glass is not impervious. When minerals — particularly calcium and magnesium from hard water — are allowed to sit on the surface and repeatedly dry, they undergo a chemical reaction with the silica. Over time, the minerals don't just sit on the glass; they become part of it.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-slate-700 text-lg leading-relaxed mb-8">
              This process is called <strong className="text-slate-900">etching</strong>. The result is a surface that has been microscopically roughened and chemically altered. Light scatters unevenly off the damaged surface, giving the glass a permanent cloudy, foggy, or milky appearance. No amount of standard window cleaning — no soap, no squeegee, no household glass cleaner — will remove it, because the cloudiness is not a substance on the glass. It is the glass itself, changed.
            </motion.p>
            <motion.div variants={fadeInUp} className="bg-sky-50 border-l-4 border-sky-500 p-6 rounded-r-xl">
              <div className="flex items-start gap-3">
                <Info className="text-sky-600 flex-shrink-0 mt-0.5" size={22} />
                <p className="text-sky-900 text-lg leading-relaxed">
                  The key distinction: water spots sit on the glass and can be removed. Etched glass has been chemically altered and cannot be cleaned away. The difference is whether the damage is on the surface or in the surface.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="how-it-happens" className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-slate-900 mb-6">
              How does glass become etched?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-slate-700 text-lg leading-relaxed mb-8">
              Etching is a gradual, cumulative process. It does not happen from a single exposure to water. It happens when mineral-laden water is allowed to dry on glass repeatedly over weeks, months, or years. Each drying cycle deposits a thin film of calcium and magnesium. Over time, those minerals react with the silica in the glass and bond at a molecular level.
            </motion.p>
            <motion.div variants={stagger} className="grid md:grid-cols-2 gap-6">
              {causes.map((cause, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="bg-slate-50 rounded-xl p-6 border border-slate-200"
                >
                  <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center mb-4">
                    <Droplets className="text-sky-700" size={20} />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{cause.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{cause.detail}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="stages" className="py-12 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-slate-900 mb-6">
              The three stages of glass damage
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-slate-700 text-lg leading-relaxed mb-8">
              Not all cloudy glass is permanently etched. Mineral damage exists on a spectrum, and understanding which stage your windows are in is critical to knowing whether they can be restored.
            </motion.p>
            <motion.div variants={stagger} className="space-y-6">
              {stages.map((stage, i) => {
                const Icon = stage.icon;
                return (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    className={`${stage.bgColor} ${stage.borderColor} border rounded-xl p-6 flex gap-4 items-start`}
                  >
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Icon className={stage.color} size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-2 text-lg">{stage.label}</h3>
                      <p className="text-slate-700 text-sm leading-relaxed">{stage.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
            <motion.div variants={fadeInUp} className="mt-8 bg-slate-100 border border-slate-200 rounded-xl p-6 flex gap-4">
              <Search className="text-[#1a3c75] flex-shrink-0 mt-0.5" size={22} />
              <p className="text-slate-700 text-base leading-relaxed">
                <strong>How to tell which stage you're in:</strong> Inspect the glass in direct sunlight at an angle. If the haze disappears when wet and reappears when dry, it is likely Stage 1 or early Stage 2. If the haze is visible even when the glass is wet, the etching has likely progressed to Stage 3 and is permanent.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="mechanical-improvement" className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-slate-900 mb-6">
              Can etched glass be mechanically improved?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-slate-700 text-lg leading-relaxed mb-8">
              The answer depends entirely on the stage of damage. Stage 1 water spots are completely removable. Stage 2 cloudiness can often be significantly improved with professional mechanical polishing. Stage 3 permanent etching cannot be restored without replacing the glass. Here is what each option involves.
            </motion.p>
            <motion.div variants={stagger} className="grid md:grid-cols-2 gap-6">
              {mechanicalOptions.map((option, i) => {
                const Icon = option.icon;
                return (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    className={`${option.bgColor} ${option.borderColor} border rounded-xl p-6`}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <Icon className={option.color} size={20} />
                      <span className="font-bold text-slate-900">{option.title}</span>
                    </div>
                    <p className="text-slate-700 text-sm leading-relaxed">{option.detail}</p>
                  </motion.div>
                );
              })}
            </motion.div>
            <motion.div variants={fadeInUp} className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-6 flex gap-4">
              <AlertTriangle className="text-amber-600 flex-shrink-0 mt-0.5" size={22} />
              <p className="text-amber-900 font-semibold text-lg leading-relaxed">
                Be cautious of anyone who promises to "remove" etching from glass. Stage 1 and Stage 2 can be improved, but Stage 3 etching is permanent damage. A reputable professional will assess the glass honestly and tell you which stage you're in before recommending a course of action.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="mt-6 bg-[#1a3c75]/5 border-l-4 border-[#1a3c75] p-6 rounded-r-xl">
              <p className="text-slate-700 italic text-lg leading-relaxed">
                "We'd rather tell you your windows are permanently etched and save you the cost of a cleaning that won't help than sell you a service that leaves you disappointed. Honesty about what's fixable and what isn't is the foundation of trust."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="how-to-prevent" className="py-12 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-slate-900 mb-4">
              How to prevent etched glass
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-slate-700 text-lg leading-relaxed mb-8">
              Etching is preventable. The key is removing mineral deposits before they have time to chemically bond with the glass surface. These steps address both the source of the minerals and the frequency of removal.
            </motion.p>
            <motion.div variants={stagger} className="space-y-4 mb-10">
              {preventionTips.map((tip, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm flex gap-4 items-start"
                >
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="text-green-600" size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">{tip.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{tip.detail}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <motion.div variants={fadeInUp} className="bg-sky-50 border border-sky-200 rounded-xl p-6 flex gap-4">
              <Eye className="text-sky-600 flex-shrink-0 mt-0.5" size={22} />
              <p className="text-sky-900 text-base leading-relaxed">
                <strong>The single most effective step:</strong> keep sprinklers from hitting your windows. Hard water overspray is the cause of the vast majority of etched glass we see. If your irrigation system hits your windows even occasionally, redirecting it will prevent more etching than any cleaning regimen.
              </p>
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
              Not sure if your windows are etched?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              We can evaluate your windows and tell you honestly whether the cloudiness is removable water spots, mechanically improvable haze, or permanent etching. No pressure, no upsell.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/residential/window-cleaning"
                className="bg-white text-[#1a3c75] px-8 py-4 rounded-lg font-bold text-lg hover:bg-slate-100 transition-all shadow-xl"
              >
                Explore Window Cleaning
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
            This article is provided for educational purposes to help homeowners identify etched glass and set realistic expectations about what window cleaning and mechanical polishing can and cannot restore.
          </p>
        </div>
      </section>
    </div>
  );
}
