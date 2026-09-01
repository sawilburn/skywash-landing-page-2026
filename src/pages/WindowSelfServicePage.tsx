import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  Droplets,
  Home,
  Eye,
  Wind,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Plus,
  Minus,
  Shield,
  BadgeCheck,
  Wrench,
  Award,
  ClipboardList,
  Phone,
} from 'lucide-react';
import { submitLead, HOW_FOUND_OPTIONS } from '../lib/supabase';

const RATES = {
  exteriorWindow: 6,
  interiorWindow: 8,
  screenCleaning: 2,
  sillCleaning: 3,
};

interface ServiceSelection {
  exteriorWindows: number;
  interiorWindows: number;
  screenCleaning: number;
  sillCleaning: number;
}

export function WindowSelfServicePage() {
  const navigate = useNavigate();
  const [selection, setSelection] = useState<ServiceSelection>({
    exteriorWindows: 0,
    interiorWindows: 0,
    screenCleaning: 0,
    sillCleaning: 0,
  });
  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    howFound: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const pricing = useMemo(() => {
    const exteriorTotal = selection.exteriorWindows * RATES.exteriorWindow;
    const interiorTotal = selection.interiorWindows * RATES.interiorWindow;
    const screenTotal = selection.screenCleaning * RATES.screenCleaning;
    const sillTotal = selection.sillCleaning * RATES.sillCleaning;
    const grandTotal = exteriorTotal + interiorTotal + screenTotal + sillTotal;
    return { exteriorTotal, interiorTotal, screenTotal, sillTotal, grandTotal };
  }, [selection]);

  const hasAnyService =
    selection.exteriorWindows > 0 ||
    selection.interiorWindows > 0 ||
    selection.screenCleaning > 0 ||
    selection.sillCleaning > 0;

  const updateCount = (key: keyof ServiceSelection, delta: number) => {
    setSelection((prev) => ({
      ...prev,
      [key]: Math.max(0, prev[key] + delta),
    }));
  };

  const setCount = (key: keyof ServiceSelection, value: string) => {
    const num = Math.max(0, Math.floor(Number(value) || 0));
    setSelection((prev) => ({ ...prev, [key]: num }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const lineItems = [
      selection.exteriorWindows > 0
        ? `Exterior Window Cleaning: ${selection.exteriorWindows} windows @ $${RATES.exteriorWindow}/window = $${(selection.exteriorWindows * RATES.exteriorWindow).toFixed(2)}`
        : '',
      selection.interiorWindows > 0
        ? `Interior Window Cleaning: ${selection.interiorWindows} windows @ $${RATES.interiorWindow}/window = $${(selection.interiorWindows * RATES.interiorWindow).toFixed(2)}`
        : '',
      selection.screenCleaning > 0
        ? `Screen Cleaning: ${selection.screenCleaning} screens @ $${RATES.screenCleaning}/screen = $${(selection.screenCleaning * RATES.screenCleaning).toFixed(2)}`
        : '',
      selection.sillCleaning > 0
        ? `Sill Clean-Out: ${selection.sillCleaning} sills @ $${RATES.sillCleaning}/sill = $${(selection.sillCleaning * RATES.sillCleaning).toFixed(2)}`
        : '',
    ].filter(Boolean);

    const details = [
      'Window Self-Service Quote',
      '',
      ...lineItems,
      '',
      `Estimated Total: $${pricing.grandTotal.toFixed(2)}`,
      contact.address ? `Address: ${contact.address}` : '',
    ].filter(Boolean).join('\n');

    try {
      await submitLead({
        type: 'residential',
        contact_name: contact.name,
        email: contact.email,
        phone: contact.phone,
        details,
        how_found: contact.howFound,
      });
      setSubmitted(true);
    } catch (err) {
      console.error('Lead submission error:', err);
      setError('Something went wrong submitting your quote. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-20">
        <section className="py-20">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white rounded-3xl shadow-xl p-12 border border-slate-200">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="text-green-600" size={40} />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Your Quote Has Been Sent!
              </h1>
              <p className="text-lg text-slate-600 mb-2">
                Estimated total: <span className="font-bold text-[#1a3c75]">${pricing.grandTotal.toFixed(2)}</span>
              </p>
              <p className="text-slate-600 mb-8">
                We received your window cleaning request and will reach out within 24 hours to confirm your appointment and finalize the details.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/"
                  className="px-8 py-3 bg-[#1a3c75] text-white rounded-lg font-bold hover:bg-[#15305f] transition-all"
                >
                  Back to Home
                </Link>
                <a
                  href="tel:+17037550865"
                  className="px-8 py-3 border-2 border-slate-300 text-slate-700 rounded-lg font-bold hover:bg-slate-50 transition-all inline-flex items-center justify-center gap-2"
                >
                  <Phone size={18} />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-20">
      {/* Hero */}
      <section className="relative py-16 bg-gradient-to-br from-slate-900 via-[#1a3c75] to-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium transition-colors mb-6"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-cyan-300 text-sm font-semibold mb-5">
            <Sparkles size={14} />
            Self-Service Quote Builder
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Build Your Own Window Cleaning Quote
          </h1>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed">
            Pick the services you need, set your quantities, and see your estimated total instantly. No waiting, no obligation — just transparent pricing.
          </p>
        </div>
      </section>

      {/* Trust badges */}
      <section className="py-8 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Award, label: 'Trained & Certified' },
              { icon: BadgeCheck, label: 'Background Checked' },
              { icon: Wrench, label: 'Pro-Grade Equipment' },
              { icon: Shield, label: 'Fully Insured' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-slate-600">
                <item.icon className="text-[#1a3c75] flex-shrink-0" size={18} />
                <span className="font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Builder */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Service selection */}
            <div className="lg:col-span-3 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Select Your Services</h2>
                <p className="text-slate-500 text-sm">Add or remove items to build your custom quote. Prices update instantly.</p>
              </div>

              {/* Exterior Window Cleaning */}
              <ServiceCard
                icon={Droplets}
                iconBg="bg-blue-100"
                iconColor="text-blue-600"
                title="Exterior Window Cleaning"
                description="Professional cleaning of the outside of your windows using purified water and squeegee technique for a streak-free finish."
                rate={RATES.exteriorWindow}
                rateLabel="per window"
                count={selection.exteriorWindows}
                onDecrement={() => updateCount('exteriorWindows', -1)}
                onIncrement={() => updateCount('exteriorWindows', 1)}
                onInput={(v) => setCount('exteriorWindows', v)}
              />

              {/* Interior Window Cleaning */}
              <ServiceCard
                icon={Home}
                iconBg="bg-cyan-100"
                iconColor="text-cyan-600"
                title="Interior Window Cleaning"
                description="Cleaning of the inside of your windows by trained, background-checked technicians who respect your home."
                rate={RATES.interiorWindow}
                rateLabel="per window"
                count={selection.interiorWindows}
                onDecrement={() => updateCount('interiorWindows', -1)}
                onIncrement={() => updateCount('interiorWindows', 1)}
                onInput={(v) => setCount('interiorWindows', v)}
                addons={[
                  {
                    key: 'screenCleaning',
                    icon: Eye,
                    label: 'Screen Cleaning',
                    description: 'Screens removed, brushed clean, and rinsed.',
                    rate: RATES.screenCleaning,
                    rateLabel: 'per screen',
                    count: selection.screenCleaning,
                    onDecrement: () => updateCount('screenCleaning', -1),
                    onIncrement: () => updateCount('screenCleaning', 1),
                    onInput: (v) => setCount('screenCleaning', v),
                  },
                  {
                    key: 'sillCleaning',
                    icon: Wind,
                    label: 'Sill Clean-Out',
                    description: 'Window sills vacuumed and wiped clean of dust and debris.',
                    rate: RATES.sillCleaning,
                    rateLabel: 'per sill',
                    count: selection.sillCleaning,
                    onDecrement: () => updateCount('sillCleaning', -1),
                    onIncrement: () => updateCount('sillCleaning', 1),
                    onInput: (v) => setCount('sillCleaning', v),
                  },
                ]}
              />
            </div>

            {/* Live total */}
            <div className="lg:col-span-2">
              <div className="sticky top-24 bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
                <div className="bg-[#1a3c75] text-white px-6 py-5">
                  <div className="flex items-center gap-2 mb-1">
                    <ClipboardList size={20} />
                    <h3 className="font-bold text-lg">Your Quote Summary</h3>
                  </div>
                  <p className="text-white/70 text-sm">Estimate updates as you build</p>
                </div>

                <div className="p-6">
                  {pricing.grandTotal === 0 ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Sparkles className="text-slate-400" size={28} />
                      </div>
                      <p className="text-slate-400 text-sm">
                        Add a service to start building your quote
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {selection.exteriorWindows > 0 && (
                        <LineItem
                          label="Exterior Windows"
                          qty={selection.exteriorWindows}
                          rate={RATES.exteriorWindow}
                          total={pricing.exteriorTotal}
                        />
                      )}
                      {selection.interiorWindows > 0 && (
                        <LineItem
                          label="Interior Windows"
                          qty={selection.interiorWindows}
                          rate={RATES.interiorWindow}
                          total={pricing.interiorTotal}
                        />
                      )}
                      {selection.screenCleaning > 0 && (
                        <LineItem
                          label="Screen Cleaning"
                          qty={selection.screenCleaning}
                          rate={RATES.screenCleaning}
                          total={pricing.screenTotal}
                        />
                      )}
                      {selection.sillCleaning > 0 && (
                        <LineItem
                          label="Sill Clean-Out"
                          qty={selection.sillCleaning}
                          rate={RATES.sillCleaning}
                          total={pricing.sillTotal}
                        />
                      )}
                    </div>
                  )}

                  <div className="mt-6 pt-6 border-t-2 border-slate-100">
                    <div className="flex items-baseline justify-between">
                      <span className="text-slate-500 font-semibold text-sm uppercase tracking-wide">Estimated Total</span>
                      <span className="text-3xl font-extrabold text-[#1a3c75]">
                        ${pricing.grandTotal.toFixed(2)}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mt-2">
                      Final price confirmed at appointment. Estimate based on your selections.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact form */}
      {hasAnyService && (
        <section className="py-16 bg-slate-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-slate-200">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Request This Quote</h2>
                <p className="text-slate-500">
                  Enter your contact info and we'll confirm your appointment within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="wss-name" className="block text-sm font-semibold text-slate-700 mb-2">Full Name *</label>
                    <input
                      id="wss-name"
                      type="text"
                      required
                      value={contact.name}
                      onChange={(e) => setContact({ ...contact, name: e.target.value })}
                      placeholder="Jane Smith"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#1a3c75] focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="wss-phone" className="block text-sm font-semibold text-slate-700 mb-2">Phone Number *</label>
                    <input
                      id="wss-phone"
                      type="tel"
                      required
                      value={contact.phone}
                      onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                      placeholder="(703) 555-0100"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#1a3c75] focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="wss-email" className="block text-sm font-semibold text-slate-700 mb-2">Email Address *</label>
                    <input
                      id="wss-email"
                      type="email"
                      required
                      value={contact.email}
                      onChange={(e) => setContact({ ...contact, email: e.target.value })}
                      placeholder="jane@example.com"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#1a3c75] focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="wss-address" className="block text-sm font-semibold text-slate-700 mb-2">Property Address</label>
                    <input
                      id="wss-address"
                      type="text"
                      value={contact.address}
                      onChange={(e) => setContact({ ...contact, address: e.target.value })}
                      placeholder="Purcellville, VA"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#1a3c75] focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="wss-how-found" className="block text-sm font-semibold text-slate-700 mb-2">How did you find us? *</label>
                  <select
                    id="wss-how-found"
                    required
                    value={contact.howFound}
                    onChange={(e) => setContact({ ...contact, howFound: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#1a3c75] focus:border-transparent outline-none transition-all bg-white"
                  >
                    <option value="" disabled>Select an option</option>
                    {HOW_FOUND_OPTIONS.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>

                {/* Quote recap */}
                <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">Your Quote</p>
                  <div className="space-y-1.5 text-sm">
                    {selection.exteriorWindows > 0 && (
                      <div className="flex justify-between text-slate-600">
                        <span>Exterior Windows ({selection.exteriorWindows})</span>
                        <span className="font-semibold">${pricing.exteriorTotal.toFixed(2)}</span>
                      </div>
                    )}
                    {selection.interiorWindows > 0 && (
                      <div className="flex justify-between text-slate-600">
                        <span>Interior Windows ({selection.interiorWindows})</span>
                        <span className="font-semibold">${pricing.interiorTotal.toFixed(2)}</span>
                      </div>
                    )}
                    {selection.screenCleaning > 0 && (
                      <div className="flex justify-between text-slate-600">
                        <span>Screen Cleaning ({selection.screenCleaning})</span>
                        <span className="font-semibold">${pricing.screenTotal.toFixed(2)}</span>
                      </div>
                    )}
                    {selection.sillCleaning > 0 && (
                      <div className="flex justify-between text-slate-600">
                        <span>Sill Clean-Out ({selection.sillCleaning})</span>
                        <span className="font-semibold">${pricing.sillTotal.toFixed(2)}</span>
                      </div>
                    )}
                    <div className="flex justify-between pt-2 border-t border-slate-200 text-base">
                      <span className="font-bold text-slate-900">Total</span>
                      <span className="font-extrabold text-[#1a3c75]">${pricing.grandTotal.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {error && (
                  <p className="text-red-600 text-sm bg-red-50 border border-red-200 px-4 py-3 rounded-lg">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#1a3c75] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#15305f] transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
                >
                  {isSubmitting ? 'Sending...' : 'Request My Quote'}
                  {!isSubmitting && <ArrowRight size={20} />}
                </button>
              </form>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

interface ServiceCardProps {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  iconBg: string;
  iconColor: string;
  title: string;
  description: string;
  rate: number;
  rateLabel: string;
  count: number;
  onDecrement: () => void;
  onIncrement: () => void;
  onInput: (value: string) => void;
  addons?: AddonProps[];
}

function ServiceCard({
  icon: Icon,
  iconBg,
  iconColor,
  title,
  description,
  rate,
  rateLabel,
  count,
  onDecrement,
  onIncrement,
  onInput,
  addons,
}: ServiceCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-6">
        <div className="flex items-start gap-4">
          <div className={`w-14 h-14 ${iconBg} rounded-xl flex items-center justify-center flex-shrink-0`}>
            <Icon className={iconColor} size={26} />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-slate-900">{title}</h3>
            <p className="text-sm text-slate-500 mt-1 leading-relaxed">{description}</p>
            <p className="mt-2 text-sm font-bold text-[#1a3c75]">
              ${rate.toFixed(2)} <span className="text-slate-400 font-normal">{rateLabel}</span>
            </p>
          </div>
        </div>

        <Counter
          count={count}
          onDecrement={onDecrement}
          onIncrement={onIncrement}
          onInput={onInput}
        />
      </div>

      {addons && addons.length > 0 && count > 0 && (
        <div className="border-t border-slate-100 bg-slate-50/50 p-6 space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Available Add-Ons</p>
          {addons.map((addon) => (
            <AddonRow key={addon.key} {...addon} />
          ))}
        </div>
      )}
    </div>
  );
}

interface AddonProps {
  key: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  description: string;
  rate: number;
  rateLabel: string;
  count: number;
  onDecrement: () => void;
  onIncrement: () => void;
  onInput: (value: string) => void;
}

function AddonRow({
  icon: Icon,
  label,
  description,
  rate,
  rateLabel,
  count,
  onDecrement,
  onIncrement,
  onInput,
}: AddonProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-3 bg-white rounded-xl p-4 border border-slate-200">
      <div className="flex items-start gap-3 flex-1">
        <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
          <Icon className="text-slate-500" size={18} />
        </div>
        <div>
          <p className="font-semibold text-slate-800 text-sm">{label}</p>
          <p className="text-xs text-slate-500">{description}</p>
          <p className="text-xs font-bold text-[#1a3c75] mt-0.5">
            ${rate.toFixed(2)} <span className="text-slate-400 font-normal">{rateLabel}</span>
          </p>
        </div>
      </div>
      <Counter
        count={count}
        onDecrement={onDecrement}
        onIncrement={onIncrement}
        onInput={onInput}
        compact
      />
    </div>
  );
}

interface CounterProps {
  count: number;
  onDecrement: () => void;
  onIncrement: () => void;
  onInput: (value: string) => void;
  compact?: boolean;
}

function Counter({ count, onDecrement, onIncrement, onInput, compact }: CounterProps) {
  return (
    <div className={`flex items-center gap-3 ${compact ? 'mt-0' : 'mt-4'}`}>
      <button
        type="button"
        onClick={onDecrement}
        disabled={count === 0}
        className="w-10 h-10 rounded-lg border border-slate-300 text-slate-600 hover:bg-slate-50 hover:border-slate-400 transition-all disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center"
        aria-label="Decrease"
      >
        <Minus size={18} />
      </button>
      <input
        type="number"
        min={0}
        value={count}
        onChange={(e) => onInput(e.target.value)}
        className={`w-16 text-center rounded-lg border border-slate-300 px-2 py-2 font-bold text-slate-800 focus:ring-2 focus:ring-[#1a3c75] focus:border-transparent outline-none transition-all [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none ${compact ? 'text-sm' : 'text-lg'}`}
      />
      <button
        type="button"
        onClick={onIncrement}
        className="w-10 h-10 rounded-lg border border-slate-300 text-slate-600 hover:bg-slate-50 hover:border-slate-400 transition-all flex items-center justify-center"
        aria-label="Increase"
      >
        <Plus size={18} />
      </button>
      {count > 0 && (
        <span className="text-sm font-semibold text-green-600 ml-1">
          <CheckCircle2 size={16} className="inline mr-1 -mt-0.5" />
          Added
        </span>
      )}
    </div>
  );
}

function LineItem({
  label,
  qty,
  rate,
  total,
}: {
  label: string;
  qty: number;
  rate: number;
  total: number;
}) {
  return (
    <div className="flex items-center justify-between text-sm">
      <div>
        <p className="font-semibold text-slate-800">{label}</p>
        <p className="text-xs text-slate-400">{qty} × ${rate.toFixed(2)}</p>
      </div>
      <span className="font-bold text-slate-900">${total.toFixed(2)}</span>
    </div>
  );
}
