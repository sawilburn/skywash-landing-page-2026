import { HoneyBookForm } from './HoneyBookForm';

export function RealtorLeadForm() {
  return (
    <section id="realtor-form" className="py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Get More Information
          </h2>
          <p className="text-xl text-slate-600">
            Talk with one of our team members about the right package for your property
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-slate-200">
          <HoneyBookForm />
        </div>
      </div>
    </section>
  );
}
