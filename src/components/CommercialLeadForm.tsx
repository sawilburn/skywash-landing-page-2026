import { HoneyBookForm } from './HoneyBookForm';

export function CommercialLeadForm() {
  return (
    <section id="commercial-form" className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Request Capability Statement
          </h2>
          <p className="text-xl text-slate-600">
            Let's discuss your facility's specific requirements. Receive a detailed proposal within 24 business hours.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-slate-200">
          <HoneyBookForm />
        </div>
      </div>
    </section>
  );
}
