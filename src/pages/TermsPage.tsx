import { useState } from 'react';
import { FileText, ScrollText, Play } from 'lucide-react';

export function TermsPage() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Terms & Conditions
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Skywash Innovations - Professional Drone Cleaning Services
          </p>
          <button
            onClick={() => setShowVideo(!showVideo)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
          >
            <Play className="w-5 h-5" />
            {showVideo ? 'Hide Video' : 'See In Action'}
          </button>
        </div>

        {showVideo && (
          <div className="mb-12 bg-black rounded-lg overflow-hidden shadow-xl">
            <video
              controls
              className="w-full"
              src="https://lvsyooxctvdydwbnwvou.supabase.co/storage/v1/object/public/Videos/drone_720p.mp4"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        )}

        <div className="space-y-12">
          <section className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-8 h-8 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">Quote Terms</h2>
            </div>

            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Quote Validity</h3>
                <p>This quote is valid for 60 days. After this period, pricing may be adjusted.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Estimate Only</h3>
                <p>This is an estimate only, based on information available. Final pricing is subject to on-site verification of property conditions, scope, and access.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Deposit Required</h3>
                <p>A 30% deposit is required to schedule work.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Payment Due</h3>
                <p>The remaining balance is due 15 days after project completion. Late payments may incur a 2% monthly interest charge.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Client Responsibilities</h3>
                <p>You are responsible for providing safe and timely access to the property and water access (unless otherwise agreed).</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Cancellations</h3>
                <p>Cancellations made less than 48 hours before scheduled work may incur a 10% cancellation fee. Rescheduling due to weather or safety is at no additional charge.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Liability</h3>
                <p>Skywash Innovations is not responsible for damage due to loose materials, improperly sealed windows, or pre-existing oxidation / UV damage. The team will document pre-existing damage prior to cleaning.</p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <ScrollText className="w-8 h-8 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">Service Agreement</h2>
            </div>

            <p className="text-gray-700 mb-6">
              This contract is between Skywash Innovations and the client, and includes the scope of work and items listed in the previously accepted quote at the pricing accepted in the quote.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Operations & Safety</h3>
                <div className="space-y-3 text-gray-700 pl-4">
                  <div>
                    <span className="font-semibold">Aviation Standards:</span> All services are performed by FAA Part 107 certified pilots using industrial UAS (Unmanned Aerial Systems).
                  </div>
                  <div>
                    <span className="font-semibold">Site Management:</span> The Skywash Team will establish and monitor "Restricted Access Zones" to keep unauthorized persons away from cleaning operations.
                  </div>
                  <div>
                    <span className="font-semibold">Safety Pause:</span> Skywash reserves the right to pause operations immediately if the flight zone is breached by unauthorized personnel or pets; work will resume once the area is secured.
                  </div>
                  <div>
                    <span className="font-semibold">Weather & Airspace:</span> We manage all regulatory clearances (e.g., DC SFRA, Class Bravo). If weather or flight restrictions prevent safe operation, we will reschedule at no additional charge.
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Site Review & Liability</h3>
                <div className="space-y-3 text-gray-700 pl-4">
                  <div>
                    <span className="font-semibold">Pre-Job Assessment:</span> Skywash will identify any areas of concern during our site walk-thru and risk review process, providing documentation of pre-existing conditions.
                  </div>
                  <div>
                    <span className="font-semibold">Surface Integrity:</span> We use "Softwashing" (low-pressure chemical efficacy) to protect your property from the damage caused by high-pressure washing.
                  </div>
                  <div>
                    <span className="font-semibold">Property Protection:</span> Skywash is not responsible for damage due to loose materials, improperly sealed windows, or pre-existing oxidation/UV damage.
                  </div>
                  <div>
                    <span className="font-semibold">Water Access:</span> The Client provides access to a water source; Skywash utilizes a 7-stage filtration system to ensure a 0 PPM mineral-free finish.
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Financial & Cancellation Terms</h3>
                <div className="space-y-3 text-gray-700 pl-4">
                  <div>
                    <span className="font-semibold">Deposit:</span> A 30% deposit is required to secure your service date.
                  </div>
                  <div>
                    <span className="font-semibold">Payment:</span> The remaining balance is due 15 days after project completion. Late payments may incur a 2% monthly interest charge.
                  </div>
                  <div>
                    <span className="font-semibold">Cancellations:</span> Cancellations made with less than 48 hours' notice may incur a 10% cancellation fee.
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">4. Acceptance</h3>
                <div className="text-gray-700 pl-4">
                  <p>
                    By signing via Zoho Sign, both parties agree to these terms and the full Terms and Conditions at{' '}
                    <a href="https://skywashinnovations.com/terms" className="text-blue-600 hover:text-blue-700 underline">
                      https://skywashinnovations.com/terms
                    </a>
                    . This signature is legally binding under the Virginia Uniform Electronic Transactions Act.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
            <p className="text-gray-700">
              For questions about these terms, please contact us at{' '}
              <a href="mailto:info@skywashinnovations.com" className="text-blue-600 hover:text-blue-700 font-semibold">
                info@skywashinnovations.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
