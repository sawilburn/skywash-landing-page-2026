import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, AlertTriangle, CheckCircle, Info, Shield, ChevronRight, Leaf, Home, Droplets, XCircle } from 'lucide-react';

const causes = [
  {
    title: 'Hardwood mulch beds',
    detail:
      'Artillery fungus thrives in landscape mulch made from hardwood bark — especially mulch that is kept damp and partially decomposed. The fungus lives in the mulch, not on your house.',
  },
  {
    title: 'Warm, wet spring weather',
    detail:
      'Spore production peaks during wet, 60–80°F stretches in spring and early summer. A single fruiting structure can shoot spores for several weeks.',
  },
  {
    title: 'Proximity to the home',
    detail:
      'Spores are launched only a few meters upward and outward. Siding, windows, trim, and vehicles parked within roughly 20 feet of an infected mulch bed are the most common targets.',
  },
];

const whySoftWashFails = [
  {
    title: 'The spots are not biological growth',
    detail:
      'Soft washing kills algae, mold, and mildew by breaking down living cells. Artillery fungus spots are inert masses of dark pigment and sticky adhesive — there is nothing alive to kill.',
  },
  {
    title: 'Bleach does not dissolve the pigment',
    detail:
      'Sodium hypochlorite, the active ingredient in a roof and siding soft wash, has no effect on the melanin-like pigment that gives the spots their black, tar-like color.',
  },
  {
    title: 'Pressure just embeds them further',
    detail:
      'Rinsing with higher pressure — or scrubbing — often drives the sticky mass deeper into porous surfaces like vinyl, painted wood, and stucco, making removal harder.',
  },
  {
    title: 'They adhere within hours of landing',
    detail:
      'Once the spores bond to a surface, the bond strengthens over the first few days. After that, no amount of standard house-wash chemistry will lift them.',
  },
];

const removalMethods = [
  {
    icon: CheckCircle,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    title: 'Mechanical removal (mild cases)',
    detail:
      'On glass and smooth metal, the spots can sometimes be lifted with a plastic putty knife, warm soapy water, and patience. This is the safest first attempt on non-porous surfaces.',
  },
  {
    icon: CheckCircle,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    title: 'Specialty chemical cleaners',
    detail:
      'Products formulated for artillery fungus (oxidizing cleaners, certain citrus-based solvents) can soften the adhesive bond on vinyl and painted surfaces. These are outside the scope of a standard soft wash.',
  },
  {
    icon: CheckCircle,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    title: 'Repainting (severe cases on wood)',
    detail:
      'On painted wood siding where the spots have permanently stained, the realistic fix is often a light sanding followed by a fresh coat of quality exterior paint. The pigment simply will not come out of the existing paint film.',
  },
  {
    icon: XCircle,
    color: 'text-red-600',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200',
    title: 'What does NOT work',
    detail:
      'Standard soft wash chemistry, pressure washing, bleach, power washing, and household cleaners will not remove established artillery fungus spots. Attempting them usually wastes effort and can damage the surface underneath.',
  },
];

const preventionTips = [
  {
    title: 'Use resistant mulch',
    detail:
      'Cypress, cedar, pine bark, and rubber or stone mulch are far less hospitable to the fungus than shredded hardwood. Replacing the mulch closest to the house is the single most effective change you can make.',
  },
  {
    title: 'Keep mulch dry and thin',
    detail:
      'A 1–2 inch layer dries out between rain events. Thick, damp mulch beds stay wet long enough for the fungus to colonize and fruit.',
  },
  {
    title: 'Use a mulch mat or fabric barrier',
    detail:
      'A landscape fabric under the mulch improves drainage and reduces the decomposing layer the fungus feeds on.',
  },
  {
    title: 'Replace mulch annually',
    detail:
      'The fungus builds up over multiple seasons. Refreshing the top layer of mulch each spring removes the older, decomposed material most likely to host it.',
  },
  {
    title: 'Create a mulch-free zone near the home',
    detail:
      'A 2–3 foot buffer of gravel, stone, or ground cover between the mulch bed and the siding gives the spores nothing to land on at the most vulnerable range.',
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

export function ArtilleryFungusPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-[#1a3c75] text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/5838/garden-grass-green-lawn.jpg?auto=compress&cs=tinysrgb&w=1920')" }}
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

            <motion.span variants={fadeInUp} className="inline-block bg-amber-600 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-5">
              Exterior Stains Education
            </motion.span>

            <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5">
              Artillery Fungus: The Tiny Black Spots a Soft Wash Won't Touch
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 italic">
              Those stubborn little black specks on your siding and car aren't mold, and they aren't dirt. They're shotgun-launched spores from a fungus that lives in your mulch — and standard cleaning chemistry can't remove them.
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
              If you've noticed tiny black dots appearing on your siding, windows, trim, or even your car — and nothing you spray at them seems to make a dent — you're likely looking at artillery fungus. It's one of the most misunderstood stains we run into, and it's the reason a perfectly executed soft wash can leave a customer wondering why "those little spots" are still there. Here's what it is, where it comes from, and what actually works to remove it.
            </motion.p>

            <motion.div variants={fadeInUp} className="border-l-4 border-slate-200 pl-6 mb-12">
              <div className="flex items-start gap-3 text-slate-500 text-sm uppercase tracking-widest font-semibold mb-4">
                <Shield size={16} className="mt-0.5 text-[#1a3c75]" />
                Jump to section
              </div>
              <nav className="space-y-2">
                {[
                  ['#what-is-it', 'What is artillery fungus?'],
                  ['#what-causes-it', 'What causes it?'],
                  ['#why-soft-wash-fails', 'Why a standard soft wash will not remove it'],
                  ['#how-to-remove', 'Effective ways to remove it'],
                  ['#how-to-prevent', 'How to prevent it from coming back'],
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

      <section id="what-is-it" className="py-12 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-slate-900 mb-6">
              What is artillery fungus?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-slate-700 text-lg leading-relaxed mb-6">
              Artillery fungus — scientifically <em className="font-semibold text-slate-900">Sphaerobolus stellatus</em> — is a tiny wood-decay fungus that lives in landscape mulch. It gets its name from its remarkable reproductive strategy: the fungus builds a small, cup-shaped fruiting structure in the mulch, then uses internal pressure to <strong>shoot a sticky, dark spore mass up to 20 feet into the air</strong>, aiming toward light-colored surfaces and reflected light. Your white siding, windows, and the hood of a light-colored car are exactly what it's looking for.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-slate-700 text-lg leading-relaxed mb-8">
              The spore masses are tiny — about the size of a pinhead — but they carry a dark, tar-like pigment and an adhesive that bonds them to surfaces almost on contact. Within hours of landing, they're effectively glued in place. They don't wash off in the rain, they don't fade in the sun, and they don't grow into anything on your house. The fungus never colonizes your siding; it just uses it as a target.
            </motion.p>
            <motion.div variants={fadeInUp} className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
              <div className="flex items-start gap-3">
                <Info className="text-amber-600 flex-shrink-0 mt-0.5" size={22} />
                <p className="text-amber-900 text-lg leading-relaxed">
                  The spots are not alive, they are not growing, and they are not damaging your siding. They are purely a cosmetic nuisance — but a remarkably stubborn one.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="what-causes-it" className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-slate-900 mb-6">
              What causes it?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-slate-700 text-lg leading-relaxed mb-8">
              Artillery fungus is entirely a product of the landscape around your home. It colonizes decomposing hardwood mulch, and the conditions that favor it are common in Northern Virginia through the spring and early summer.
            </motion.p>
            <motion.div variants={stagger} className="grid md:grid-cols-3 gap-6">
              {causes.map((cause, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="bg-slate-50 rounded-xl p-6 border border-slate-200"
                >
                  <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                    <Leaf className="text-amber-700" size={20} />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{cause.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{cause.detail}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="why-soft-wash-fails" className="py-12 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-slate-900 mb-4">
              Why a standard soft wash will not remove it
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-slate-700 text-lg leading-relaxed mb-8">
              This is the part that confuses most homeowners. A professional soft wash is highly effective against algae, mold, mildew, and Gloeocapsa magma — because all of those are living organisms that the cleaning solution can kill and break down. Artillery fungus spots are a completely different problem.
            </motion.p>
            <motion.div variants={stagger} className="space-y-4 mb-8">
              {whySoftWashFails.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm flex gap-4 items-start"
                >
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <XCircle className="text-red-600" size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.detail}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <motion.div variants={fadeInUp} className="bg-red-50 border border-red-200 rounded-xl p-6 flex gap-4">
              <AlertTriangle className="text-red-600 flex-shrink-0 mt-0.5" size={22} />
              <p className="text-red-900 font-semibold text-lg leading-relaxed">
                A soft wash will remove algae, mold, and mildew from your siding — but the artillery fungus spots will remain exactly where they were. If a contractor tells you soft washing will clear them, that's a red flag.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="how-to-remove" className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-slate-900 mb-6">
              Effective ways to remove it
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-slate-700 text-lg leading-relaxed mb-8">
              Removal depends heavily on the surface. Smooth, non-porous surfaces like glass and metal are the easiest. Porous or painted surfaces — vinyl siding, painted wood, stucco — are far more difficult, and on those surfaces the spots may be effectively permanent.
            </motion.p>
            <motion.div variants={stagger} className="grid md:grid-cols-2 gap-6">
              {removalMethods.map((method, i) => {
                const Icon = method.icon;
                return (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    className={`${method.bgColor} ${method.borderColor} border rounded-xl p-6`}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <Icon className={method.color} size={20} />
                      <span className="font-bold text-slate-900">{method.title}</span>
                    </div>
                    <p className="text-slate-700 text-sm leading-relaxed">{method.detail}</p>
                  </motion.div>
                );
              })}
            </motion.div>
            <motion.div variants={fadeInUp} className="mt-8 bg-[#1a3c75]/5 border-l-4 border-[#1a3c75] p-6 rounded-r-xl">
              <p className="text-slate-700 italic text-lg leading-relaxed">
                "If the spots have been on painted wood siding for more than a season, the honest answer is often that they're there to stay until the siding is repainted. We'd rather tell you that up front than sell you a wash that won't fix it."
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
              How to prevent it from coming back
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-slate-700 text-lg leading-relaxed mb-8">
              Because the fungus lives in your mulch — not on your house — prevention is a landscaping issue, not a cleaning issue. These changes address the source.
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
            <motion.div variants={fadeInUp} className="bg-amber-50 border border-amber-200 rounded-xl p-6 flex gap-4">
              <Home className="text-amber-600 flex-shrink-0 mt-0.5" size={22} />
              <p className="text-amber-900 text-base leading-relaxed">
                <strong>The single most effective step:</strong> replace the hardwood mulch within a few feet of your home's siding with stone, gravel, or a resistant mulch type. Most artillery fungus problems originate from the mulch bed directly adjacent to the affected wall.
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
              Not sure what's on your siding?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              We're happy to take a look and tell you honestly whether it's algae, mold, or artillery fungus — and whether a soft wash will help or not. No pressure, no upsell.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/residential/house-washing"
                className="bg-white text-[#1a3c75] px-8 py-4 rounded-lg font-bold text-lg hover:bg-slate-100 transition-all shadow-xl"
              >
                Learn About House Washing
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
            This article is provided for educational purposes to help homeowners identify artillery fungus and set realistic expectations about what exterior cleaning can and cannot remove.
          </p>
        </div>
      </section>
    </div>
  );
}
