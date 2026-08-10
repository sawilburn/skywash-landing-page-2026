import { ArrowRight, Check, Phone, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const benefits = [
  {
    title: 'Kills the organism.',
    text: 'Low-pressure application of professional cleaning solutions eliminates algae at the source — not just the stain.'
  },
  {
    title: 'Pressure washing makes it worse.',
    text: 'High pressure strips protective granules, scars shingles, and can void your manufacturer’s warranty.'
  },
  {
    title: 'Drone application.',
    text: 'Nobody walks on your shingles. Precise, even coverage on steep and complex rooflines.'
  },
  {
    title: 'Curb appeal & resale.',
    text: 'Buyers read streaked roofs as “needs replacing” — and negotiate accordingly.'
  }
];

const steps = [
  { number: '1', title: 'Free assessment', text: 'We inspect and photograph your roof by drone — no ladders, no walking on shingles — and give you a firm price.' },
  { number: '2', title: 'Drone soft wash', text: 'Low-pressure treatment kills the algae colony and rinses the streaks away, safely and evenly, usually in one visit.' },
  { number: '3', title: 'Stay protected', text: 'A cleaning every 2–3 years keeps the organism from re-establishing and your shingles on their full 25-year track.' }
];

export function AugustRoofSpecialPage() {
  return (
    <main className="bg-[#f7f8f8] text-[#142735]">
      <section className="px-4 pb-12 pt-36 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl overflow-hidden bg-white shadow-sm">
          <div className="border-b-4 border-[#258bc2] bg-[#e8f3f8] px-6 py-8 sm:px-10 sm:py-10">
            <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
              <Link to="/" className="text-sm font-black tracking-[0.18em] text-[#142735]">
                SKYWASH <span className="text-[#258bc2]">INNOVATIONS</span>
              </Link>
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#718b9c]">Drone roof soft washing · Loudoun County, VA</p>
            </div>
            <h1 className="max-w-4xl text-4xl font-black leading-[0.98] tracking-tight sm:text-6xl">
              Those black streaks aren’t dirt.<br />They’re <span className="text-[#c4522d]">eating your roof.</span>
            </h1>
            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-[#496171] sm:text-base">
              The streaks are <strong className="text-[#142735]">Gloeocapsa magma</strong> — a living cyanobacteria that feeds on the limestone filler in asphalt shingles. Left alone, it degrades shingles, invites moss and lichen, traps heat, and shaves years off the most expensive surface on your home.
            </p>
          </div>

          <div className="grid gap-px bg-[#d8e1e6] sm:grid-cols-3">
            {[
              ['$28K–$38K', 'Cost to replace the roof on a 5,000 sq ft Western Loudoun home (2026 NVA pricing)'],
              ['Up to 10 yrs', 'Roof life lost to severe algae infestation — Roofing Industry Alliance estimate'],
              ['80%+', 'Of U.S. homes affected by roof algae, worst in humid regions like ours (ARMA)']
            ].map(([stat, label]) => (
              <div key={stat} className="border-t-4 border-[#c4522d] bg-white px-5 py-4 first:border-[#c4522d] last:border-[#258bc2]">
                <p className="text-2xl font-black text-[#c4522d] sm:text-3xl">{stat}</p>
                <p className="mt-1 text-[10px] font-semibold leading-tight text-[#687c89]">{label}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-10 px-6 py-10 sm:px-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <h2 className="mb-3 text-sm font-black uppercase tracking-wide"><span className="text-[#258bc2]">/</span> The math on a $32,000 roof</h2>
              <div className="space-y-3 text-xs font-bold">
                <div className="flex items-end justify-between gap-4"><span>CLEAN, MAINTAINED ROOF — 25-year life</span><span>$1,280 / yr</span></div>
                <div className="h-5 bg-[#258bc2] px-2 text-[10px] leading-5 text-white">25 YEARS</div>
                <div className="flex items-end justify-between gap-4 pt-1"><span>ALGAE-INFESTED ROOF — 16-year life</span><span className="text-[#c4522d]">$2,000 / yr</span></div>
              </div>
              <div className="mt-8 bg-[#e8f3f8] px-5 py-4 text-sm leading-snug">
                <strong>Doing nothing costs <span className="text-[#c4522d]">~$720 every year</span></strong>
                <p className="mt-1 text-xs text-[#496171]">Add $100–$250/yr in extra summer cooling — stained shingles absorb heat instead of reflecting it. Regular soft washing protects $10,000–$13,000 in deferred replacement value, for a fraction of the cost of one year of damage.</p>
              </div>
            </div>

            <div>
              <h2 className="mb-4 text-sm font-black uppercase tracking-wide"><span className="text-[#258bc2]">/</span> Why soft wash?</h2>
              <ul className="space-y-3">
                {benefits.map((benefit) => (
                  <li key={benefit.title} className="flex gap-2 text-xs leading-snug text-[#496171]"><Check size={14} className="mt-0.5 shrink-0 text-[#258bc2]" strokeWidth={3} /><span><strong className="text-[#142735]">{benefit.title}</strong> {benefit.text}</span></li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid gap-6 border-t border-[#d8e1e6] px-6 py-9 sm:grid-cols-3 sm:px-10">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-sm bg-[#258bc2] text-lg font-black text-white">{step.number}</span>
                <div><h3 className="text-sm font-black">{step.title}</h3><p className="mt-1 text-xs leading-snug text-[#496171]">{step.text}</p></div>
              </div>
            ))}
          </div>

          <div className="mx-6 mb-2 flex flex-col items-start justify-between gap-5 bg-[#c4522d] px-5 py-4 text-white sm:mx-10 sm:flex-row sm:items-center sm:px-7">
            <div><p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ffe0d4]">Book by August 15</p><h2 className="text-xl font-black sm:text-2xl">Roof Soft Wash Special</h2><p className="text-[10px] text-[#ffe0d4]">Mention this flyer when you call. After August 15, standard pricing applies.</p></div>
            <div className="flex items-center gap-4"><span className="text-base font-bold line-through opacity-80">$1,499</span><span className="text-4xl font-black">$749</span><span className="border-l border-white/40 pl-4 text-center text-[10px] font-black uppercase">Save<br />$750</span></div>
          </div>

          <div className="flex flex-col gap-6 border-t-4 border-[#258bc2] bg-[#e8f3f8] px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-10">
            <p className="text-lg font-black">Get a <span className="text-[#258bc2]">free roof assessment</span> before the streaks spread.</p>
            <div className="text-left sm:text-right"><a href="tel:+17037550865" className="flex items-center gap-2 text-xl font-black hover:text-[#258bc2] sm:justify-end"><Phone size={18} /> 703-755-0865</a><p className="text-[10px] font-bold text-[#496171]">skywashinnovations.com<br />Purcellville, VA · Serving Loudoun & Northern Virginia</p></div>
          </div>
        </div>
      </section>

      <section className="bg-[#142735] px-4 py-14 text-white sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
          <div><div className="mb-2 flex items-center justify-center gap-2 text-[#8fd0ec] sm:justify-start"><ShieldCheck size={20} /><span className="text-xs font-bold uppercase tracking-[0.2em]">Licensed · Insured · OSHA Certified</span></div><h2 className="text-2xl font-black sm:text-3xl">Protect the roof you already paid for.</h2></div>
          <a href="tel:+17037550865" className="inline-flex items-center gap-2 bg-[#c4522d] px-6 py-4 text-sm font-black uppercase tracking-wide transition hover:bg-[#a94425]">Call for your free assessment <ArrowRight size={18} /></a>
        </div>
      </section>
    </main>
  );
}
