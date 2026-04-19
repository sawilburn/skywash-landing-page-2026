import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, Sparkles, Droplets, Hand, Wrench, ChevronRight, AlertTriangle, CheckCircle, Info } from 'lucide-react';
import { getSiteImage, getImageUrl } from '../lib/siteImages';

const methods = [
  {
    number: '01',
    badge: 'Standard',
    badgeColor: 'bg-slate-600',
    title: 'Touchless Exterior Cleaning',
    icon: Sparkles,
    iconBg: 'bg-sky-100',
    iconColor: 'text-sky-700',
    borderColor: 'border-sky-200',
    tagline: 'Chemical application, no physical contact. Best for maintained windows.',
    body: [
      'Our standard exterior window cleaning uses a touchless system — a chemical solution is applied across the glass surface without any physical scrubbing or contact. The chemistry does the work, breaking down surface contamination and biological growth, and the solution is rinsed or allowed to weather off.',
      'This method is fast, efficient, and works excellently on windows that have been regularly maintained. If your windows are cleaned on a consistent schedule and haven\'t accumulated heavy deposits or sustained damage, touchless cleaning will leave them looking sharp.',
    ],
    callout: {
      type: 'warning',
      text: 'Where it has limits: touchless cleaning won\'t fully resolve heavy mineral deposits, long-neglected buildup, or glass that has been etched or scratched. On those windows, a satisfactory result is achievable — but an excellent one requires a more intensive approach.',
    },
    bestFor: ['Regular maintenance schedules', 'Well-maintained glass', 'Quick exterior refresh'],
    sectionId: 'learning/window-cleaning-method-1',
    fallbackUrl: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    number: '02',
    badge: 'Upcharge',
    badgeColor: 'bg-teal-600',
    title: 'Water-Fed Pole Cleaning',
    icon: Droplets,
    iconBg: 'bg-teal-100',
    iconColor: 'text-teal-700',
    borderColor: 'border-teal-200',
    tagline: 'Brush + deionized water. Exterior only. Great results on dirtier glass.',
    body: [
      'Our water-fed pole system takes exterior cleaning a step further. A telescoping pole with a soft brush head is fed with purified, deionized water — along with appropriate cleaning agents — allowing our technicians to agitate the glass surface directly while rinsing with water that leaves zero mineral residue behind.',
      'Because deionized water has had all its mineral content removed, it pulls contaminants off the glass as it rinses and evaporates spotlessly. There\'s no squeegee needed, and the result on most windows is noticeably cleaner than what a touchless-only pass achieves — particularly on glass with moderate soiling or textured frames that collect grime.',
      'This service is offered as an upcharge from our standard exterior package. If your windows are overdue for a cleaning, have been exposed to construction dust, pollen, or hard water spray, or are simply harder to reach, the water-fed pole method is the right upgrade.',
    ],
    callout: null,
    bestFor: ['Overdue or neglected windows', 'Construction dust & pollen exposure', 'Hard-to-reach glass', 'Hard water spray exposure'],
    sectionId: 'learning/window-cleaning-method-2',
    fallbackUrl: 'https://images.pexels.com/photos/6195130/pexels-photo-6195130.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    number: '03',
    badge: 'Standard',
    badgeColor: 'bg-slate-600',
    title: 'Traditional Detail Cleaning (Interior)',
    icon: Hand,
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-700',
    borderColor: 'border-blue-200',
    tagline: 'Squeegee + mop. Our interior standard. Thorough, hands-on results.',
    body: [
      'For interior windows, we use the time-tested method that professional window cleaners have relied on for generations: a mop to apply the cleaning solution and a squeegee to remove it cleanly from the glass. Done properly, this produces a streak-free, optically clear result that no spray-and-wipe approach can match.',
      'This is our standard for all interior window cleaning. It\'s hands-on, methodical, and attentive to edges, corners, and sills. We also detail the frames and sills as part of the service so you\'re not left with clean glass surrounded by grimy tracks.',
    ],
    callout: {
      type: 'info',
      text: 'Interior and exterior cleaning are separate services that can be booked together or independently. Many customers opt for an interior detail once or twice a year while maintaining exterior cleaning on a more frequent schedule.',
    },
    bestFor: ['Interior window cleaning', 'Streak-free, optically clear results', 'Frame and sill detailing'],
    sectionId: 'learning/window-cleaning-method-3',
    fallbackUrl: 'https://images.pexels.com/photos/4107278/pexels-photo-4107278.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    number: '04',
    badge: 'Custom Quote',
    badgeColor: 'bg-amber-600',
    title: 'Glass Restoration',
    icon: Wrench,
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-700',
    borderColor: 'border-amber-200',
    tagline: 'For etched, hard-water stained, or damaged glass. Requires site visit.',
    body: [
      'Some windows can\'t be cleaned — they have to be restored. Hard water staining, mineral etching, oxidation haze, construction debris bonded to the surface, and scratches all fall into a different category than ordinary dirt. These conditions have physically altered or permanently bonded to the glass, and no amount of scrubbing or chemical application will touch them through normal cleaning methods.',
      'Glass restoration uses specialized abrasive compounds, polishing equipment, and in some cases chemical treatment to remove or minimize these defects and bring the glass back toward its original clarity. The process varies significantly depending on what\'s present, how severe it is, and the type of glass involved.',
      'Because of that variability, restoration is offered as a custom service only. We\'ll schedule a site visit to assess the glass in person, determine what\'s treatable and to what degree, and provide you with a quote based on the actual scope of the work. In some cases, glass that appears permanently damaged can be significantly improved — in others, replacement may be the more practical path, and we\'ll tell you that honestly.',
    ],
    callout: {
      type: 'warning',
      text: 'Signs you may need restoration rather than cleaning: white haze or mineral crust that doesn\'t respond to cleaning products, a frosted or dull appearance on glass that should be clear, visible etching or pit marks, or streaking that remains after the glass has been cleaned and dried.',
    },
    bestFor: ['Hard water staining & mineral etching', 'Oxidation haze', 'Construction debris bonded to glass', 'Scratches and pit marks'],
    sectionId: 'learning/window-cleaning-method-4',
    fallbackUrl: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

const comparisonRows = [
  { feature: 'Exterior cleaning', m1: true, m2: true, m3: false, m4: true },
  { feature: 'Interior cleaning', m1: false, m2: false, m3: true, m4: false },
  { feature: 'Physical agitation', m1: false, m2: true, m3: true, m4: true },
  { feature: 'Removes mineral deposits', m1: false, m2: true, m3: false, m4: true },
  { feature: 'Spot-free rinse', m1: false, m2: true, m3: true, m4: true },
  { feature: 'Frames & sills detailed', m1: false, m2: false, m3: true, m4: false },
  { feature: 'Works on damaged glass', m1: false, m2: false, m3: false, m4: true },
  { feature: 'Included in standard rate', m1: true, m2: false, m3: true, m4: false },
];

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55 },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.1 } },
};

export function WindowCleaningLearningPage() {
  const [methodImages, setMethodImages] = useState<Record<string, string>>({});
  const [heroBg, setHeroBg] = useState('https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1920');

  useEffect(() => {
    async function loadImages() {
      const heroRecord = await getSiteImage('learning/window-cleaning-hero');
      if (heroRecord) setHeroBg(getImageUrl(heroRecord.storage_path));

      const entries = await Promise.all(
        methods.map(async (m) => {
          const record = await getSiteImage(m.sectionId);
          return [m.sectionId, record ? getImageUrl(record.storage_path) : m.fallbackUrl] as [string, string];
        })
      );
      setMethodImages(Object.fromEntries(entries));
    }
    loadImages();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-sky-900 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: `url('${heroBg}')` }}
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

            <motion.span variants={fadeInUp} className="inline-block bg-sky-600 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-5">
              Window Cleaning Services
            </motion.span>

            <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5">
              Not All Window Cleaning Is the Same — Here's What to Expect from Each Method
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 italic">
              We offer four distinct approaches to window cleaning, each matched to a different condition, goal, and budget. Understanding which method is right for your situation helps you get the result you're looking for.
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
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={fadeInUp} className="text-slate-700 text-lg leading-relaxed mb-8">
              Window cleaning sounds straightforward until you're standing in front of a pane that's been etched by hard water, hazed by years of oxidation, or coated in mineral deposits that no squeegee can touch. The method that works perfectly on a well-maintained window does almost nothing for glass in that condition — and vice versa. We built our service menu around that reality.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-slate-700 text-lg leading-relaxed mb-10">
              Here's a plain-English breakdown of our four service methods, what each one is designed to do, and how to know which one your windows need.
            </motion.p>

            <motion.div variants={fadeInUp} className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
              {[
                { label: 'Standard', title: 'Touchless Exterior', color: 'bg-slate-50 border-slate-200' },
                { label: 'Upcharge', title: 'Water-Fed Pole', color: 'bg-teal-50 border-teal-200' },
                { label: 'Standard', title: 'Traditional Detail', color: 'bg-blue-50 border-blue-200' },
                { label: 'Custom Quote', title: 'Glass Restoration', color: 'bg-amber-50 border-amber-200' },
              ].map((card, i) => (
                <a
                  key={i}
                  href={`#method-${i + 1}`}
                  className={`border rounded-xl p-4 ${card.color} hover:shadow-md transition-shadow text-center block`}
                >
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-500 block mb-1">{card.label}</span>
                  <span className="text-sm font-bold text-slate-800">{card.title}</span>
                </a>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="border-l-4 border-slate-200 pl-6">
              <div className="flex items-center gap-2 text-slate-500 text-sm uppercase tracking-widest font-semibold mb-4">
                <ChevronRight size={16} className="text-[#1a3c75]" />
                Jump to section
              </div>
              <nav className="space-y-2">
                {[
                  ['#method-1', '1. Touchless exterior cleaning'],
                  ['#method-2', '2. Water-fed pole cleaning'],
                  ['#method-3', '3. Traditional detail cleaning (interior)'],
                  ['#method-4', '4. Glass restoration'],
                  ['#comparison', 'Method comparison table'],
                  ['#which-is-right', 'Which service is right for you?'],
                ].map(([href, label]) => (
                  <a
                    key={href}
                    href={href}
                    className="flex items-center gap-2 text-sky-600 hover:text-sky-800 text-sm font-medium transition-colors"
                  >
                    <ChevronRight size={14} />
                    {label}
                  </a>
                ))}
              </nav>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {methods.map((method, i) => {
        const Icon = method.icon;
        const isEven = i % 2 === 0;
        return (
          <section
            key={i}
            id={`method-${i + 1}`}
            className={`py-16 ${isEven ? 'bg-slate-50' : 'bg-white'}`}
          >
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={stagger}
                className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 items-start`}
              >
                <motion.div variants={fadeInUp} className="lg:w-5/12 flex-shrink-0">
                  <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={methodImages[method.sectionId] ?? method.fallbackUrl}
                      alt={method.title}
                      className="w-full h-64 lg:h-80 object-cover"
                    />
                    <span className={`absolute top-4 left-4 ${method.badgeColor} text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow`}>
                      {method.badge}
                    </span>
                  </div>
                </motion.div>

                <motion.div variants={stagger} className="lg:w-7/12">
                  <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 ${method.iconBg} rounded-xl flex items-center justify-center`}>
                      <Icon className={method.iconColor} size={20} />
                    </div>
                    <span className="text-4xl font-black text-slate-100 select-none">{method.number}</span>
                  </motion.div>

                  <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                    {method.title}
                  </motion.h2>
                  <motion.p variants={fadeInUp} className="text-sm text-slate-500 italic mb-6">
                    {method.tagline}
                  </motion.p>

                  {method.body.map((para, j) => (
                    <motion.p key={j} variants={fadeInUp} className="text-slate-700 text-base leading-relaxed mb-4">
                      {para}
                    </motion.p>
                  ))}

                  {method.callout && (
                    <motion.div
                      variants={fadeInUp}
                      className={`rounded-xl p-5 flex gap-3 mb-5 ${
                        method.callout.type === 'warning'
                          ? 'bg-amber-50 border border-amber-200'
                          : 'bg-sky-50 border border-sky-200'
                      }`}
                    >
                      {method.callout.type === 'warning'
                        ? <AlertTriangle className="text-amber-600 flex-shrink-0 mt-0.5" size={18} />
                        : <Info className="text-sky-600 flex-shrink-0 mt-0.5" size={18} />
                      }
                      <p className={`text-sm italic leading-relaxed ${method.callout.type === 'warning' ? 'text-amber-900' : 'text-sky-900'}`}>
                        {method.callout.text}
                      </p>
                    </motion.div>
                  )}

                  <motion.div variants={fadeInUp} className={`border ${method.borderColor} rounded-xl p-4`}>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Best for</p>
                    <ul className="space-y-1">
                      {method.bestFor.map((item, j) => (
                        <li key={j} className="flex items-center gap-2 text-slate-700 text-sm">
                          <CheckCircle className={method.iconColor} size={14} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </section>
        );
      })}

      <section id="comparison" className="py-16 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold mb-2">
              Method Comparison
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-slate-400 mb-8">
              A quick reference for what each service method covers.
            </motion.p>
            <motion.div variants={fadeInUp} className="overflow-x-auto rounded-xl border border-slate-700">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-800 border-b border-slate-700">
                    <th className="text-left p-4 text-slate-300 font-semibold">Feature</th>
                    <th className="text-center p-4 text-slate-300 font-semibold">Touchless</th>
                    <th className="text-center p-4 text-teal-400 font-semibold">Water-Fed</th>
                    <th className="text-center p-4 text-slate-300 font-semibold">Traditional</th>
                    <th className="text-center p-4 text-amber-400 font-semibold">Restoration</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={i} className={`border-b border-slate-800 ${i % 2 === 0 ? 'bg-slate-900' : 'bg-slate-800/50'}`}>
                      <td className="p-4 text-slate-300">{row.feature}</td>
                      {[row.m1, row.m2, row.m3, row.m4].map((val, j) => (
                        <td key={j} className="p-4 text-center">
                          {val
                            ? <CheckCircle className="inline text-green-400" size={18} />
                            : <span className="text-slate-600 text-lg">—</span>
                          }
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="which-is-right" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-slate-900 mb-6">
              Which service is right for you?
            </motion.h2>
            <motion.div variants={stagger} className="space-y-4 mb-10">
              {[
                {
                  condition: 'Your windows are on a regular maintenance schedule',
                  recommendation: 'Standard touchless exterior and traditional interior cleaning will serve you well.',
                  color: 'border-slate-200 bg-slate-50',
                  label: 'Maintain',
                  labelColor: 'bg-slate-600',
                },
                {
                  condition: 'Your windows have been neglected or are particularly dirty',
                  recommendation: 'Add the water-fed pole upgrade for a noticeably better exterior result.',
                  color: 'border-teal-200 bg-teal-50',
                  label: 'Upgrade',
                  labelColor: 'bg-teal-600',
                },
                {
                  condition: 'You\'re seeing staining, haze, or damage that cleaning hasn\'t resolved',
                  recommendation: 'Give us a call — we\'ll come take a look and assess whether restoration is an option.',
                  color: 'border-amber-200 bg-amber-50',
                  label: 'Restore',
                  labelColor: 'bg-amber-600',
                },
              ].map((item, i) => (
                <motion.div key={i} variants={fadeInUp} className={`border rounded-xl p-6 ${item.color}`}>
                  <div className="flex items-start gap-4">
                    <span className={`${item.labelColor} text-white text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full flex-shrink-0 mt-0.5`}>
                      {item.label}
                    </span>
                    <div>
                      <p className="font-semibold text-slate-900 mb-1">{item.condition}</p>
                      <p className="text-slate-600 text-sm">{item.recommendation}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-[#1a3c75]/5 border-l-4 border-[#1a3c75] p-6 rounded-r-xl">
              <p className="text-slate-700 text-lg leading-relaxed">
                We'd rather tell you upfront what a service will and won't accomplish than have you disappointed with the outcome. Clean glass makes a real difference in how a home or building looks and feels — and we take that seriously.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-[#1a3c75] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4">
              Not sure which method your windows need?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Questions about which service is right for your windows? Contact us to discuss your situation or schedule a consultation.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/residential"
                className="bg-white text-[#1a3c75] px-8 py-4 rounded-lg font-bold text-lg hover:bg-slate-100 transition-all shadow-xl"
              >
                View Residential Services
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
            This article is provided for educational purposes to help customers understand the differences between our window cleaning service options.
          </p>
        </div>
      </section>
    </div>
  );
}
