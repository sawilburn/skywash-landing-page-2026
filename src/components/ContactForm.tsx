import { HoneyBookForm } from './HoneyBookForm';

export function ContactForm() {
  return (
    <section id="contact" className="py-24 bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get Your Free Quote
          </h2>
          <p className="text-xl text-slate-300">
            Tell us about your project and we'll provide a detailed estimate within 24 hours
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          <HoneyBookForm />
        </div>
      </div>
    </section>
  );
}
