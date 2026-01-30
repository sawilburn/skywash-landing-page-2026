import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Shield, Droplets, Wind, Microscope, Target, CheckCircle2 } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  content: JSX.Element;
}

const blogPosts: BlogPost[] = [
  {
    id: 'science-over-pressure',
    title: 'Science over Pressure - Why Softwashing is the Right Solution',
    excerpt: 'Discover why chemical science beats brute force when it comes to exterior cleaning, and how softwashing protects your property while delivering superior results.',
    date: 'January 28, 2026',
    readTime: '5 min read',
    content: (
      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-slate-700 leading-relaxed mb-6">
          When it comes to cleaning exterior surfaces, many property owners assume that more pressure equals better results. However, modern cleaning science tells a different story. Softwashing represents a paradigm shift in exterior maintenance—one that prioritizes chemistry over force, protection over power.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
          <h3 className="text-2xl font-bold text-slate-900 mb-3 flex items-center gap-2">
            <Microscope className="text-blue-600" size={28} />
            The Science Behind Softwashing
          </h3>
          <p className="text-slate-700 mb-0">
            Softwashing uses specialized biodegradable chemicals that work at the molecular level to break down organic matter, killing algae, mold, mildew, and bacteria at their roots. Unlike pressure washing, which merely blasts away surface contaminants, softwashing eliminates the problem at its source.
          </p>
        </div>

        <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Why Pressure Can Damage Your Property</h3>

        <p className="text-slate-700 mb-6">
          Traditional pressure washing delivers water at 2,000-4,000 PSI. While this force can remove visible dirt, it comes with significant risks:
        </p>

        <ul className="space-y-3 mb-8">
          <li className="flex items-start gap-3">
            <Shield className="text-red-500 mt-1 flex-shrink-0" size={20} />
            <span className="text-slate-700"><strong>Surface Damage:</strong> High pressure can erode wood, strip paint, crack vinyl siding, and damage shingles, leading to costly repairs.</span>
          </li>
          <li className="flex items-start gap-3">
            <Shield className="text-red-500 mt-1 flex-shrink-0" size={20} />
            <span className="text-slate-700"><strong>Water Intrusion:</strong> Pressurized water can force its way behind siding, under shingles, and into building envelopes, causing hidden moisture damage and mold growth.</span>
          </li>
          <li className="flex items-start gap-3">
            <Shield className="text-red-500 mt-1 flex-shrink-0" size={20} />
            <span className="text-slate-700"><strong>Incomplete Cleaning:</strong> Pressure washing only addresses surface symptoms without killing the underlying organisms, meaning they grow back quickly.</span>
          </li>
          <li className="flex items-start gap-3">
            <Shield className="text-red-500 mt-1 flex-shrink-0" size={20} />
            <span className="text-slate-700"><strong>Safety Hazards:</strong> The force required creates significant kickback and requires workers to operate at dangerous heights with powerful equipment.</span>
          </li>
        </ul>

        <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">The Softwashing Advantage</h3>

        <p className="text-slate-700 mb-6">
          Softwashing applies cleaning solutions at pressures similar to a garden hose (typically 60-100 PSI). This gentle approach offers multiple benefits:
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-green-50 p-6 rounded-xl border border-green-200">
            <CheckCircle2 className="text-green-600 mb-3" size={32} />
            <h4 className="font-bold text-slate-900 mb-2">Long-Lasting Results</h4>
            <p className="text-slate-700 text-sm">
              By killing organic matter at the root level, softwashing results last 4-6 times longer than pressure washing—often 2-3 years or more.
            </p>
          </div>

          <div className="bg-green-50 p-6 rounded-xl border border-green-200">
            <CheckCircle2 className="text-green-600 mb-3" size={32} />
            <h4 className="font-bold text-slate-900 mb-2">Surface Protection</h4>
            <p className="text-slate-700 text-sm">
              Low pressure means zero risk of damage to delicate surfaces like painted wood, asphalt shingles, vinyl siding, and stucco.
            </p>
          </div>

          <div className="bg-green-50 p-6 rounded-xl border border-green-200">
            <CheckCircle2 className="text-green-600 mb-3" size={32} />
            <h4 className="font-bold text-slate-900 mb-2">Eco-Friendly Chemistry</h4>
            <p className="text-slate-700 text-sm">
              Modern softwash solutions are biodegradable, EPA compliant, and safe for plants, pets, and people when applied correctly.
            </p>
          </div>

          <div className="bg-green-50 p-6 rounded-xl border border-green-200">
            <CheckCircle2 className="text-green-600 mb-3" size={32} />
            <h4 className="font-bold text-slate-900 mb-2">Enhanced Safety</h4>
            <p className="text-slate-700 text-sm">
              Lower pressure and reduced equipment weight make softwashing inherently safer for operators, especially at heights.
            </p>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Drone Technology: Taking Softwashing to New Heights</h3>

        <p className="text-slate-700 mb-6">
          At Skywash Innovations, we've combined the proven science of softwashing with unmanned aerial systems technology. Our drones deliver softwash solutions precisely where needed, eliminating the need for ladders, scaffolding, or boom lifts. This means:
        </p>

        <ul className="space-y-3 mb-8">
          <li className="flex items-start gap-3">
            <Target className="text-blue-600 mt-1 flex-shrink-0" size={20} />
            <span className="text-slate-700">No workers at dangerous heights</span>
          </li>
          <li className="flex items-start gap-3">
            <Target className="text-blue-600 mt-1 flex-shrink-0" size={20} />
            <span className="text-slate-700">No foot traffic on delicate roofing materials</span>
          </li>
          <li className="flex items-start gap-3">
            <Target className="text-blue-600 mt-1 flex-shrink-0" size={20} />
            <span className="text-slate-700">Access to difficult areas without expensive equipment</span>
          </li>
          <li className="flex items-start gap-3">
            <Target className="text-blue-600 mt-1 flex-shrink-0" size={20} />
            <span className="text-slate-700">Faster job completion with consistent, precise application</span>
          </li>
        </ul>

        <div className="bg-gradient-to-r from-[#1a3c75] to-[#2a5a95] text-white p-8 rounded-2xl my-8">
          <h3 className="text-2xl font-bold mb-4">The Bottom Line</h3>
          <p className="text-slate-100 mb-4">
            When it comes to exterior cleaning, pressure isn't the answer—science is. Softwashing delivers superior results that last longer, protects your investment, and keeps everyone safer. Combined with drone technology, it represents the future of exterior maintenance.
          </p>
          <p className="text-slate-100 mb-0">
            Whether you're maintaining a residential property or managing a commercial facility, choosing softwashing over pressure washing is a decision backed by chemistry, proven by results, and validated by safer operations.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'touchless-window-cleaning',
    title: 'Touchless Window Cleaning using Drones - Does it Work?',
    excerpt: 'Exploring the science, technology, and real-world effectiveness of drone-based window cleaning systems that clean glass surfaces without physical contact.',
    date: 'January 25, 2026',
    readTime: '6 min read',
    content: (
      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-slate-700 leading-relaxed mb-6">
          The question we hear most often from skeptical property managers: "Can drones really clean windows without touching them?" The short answer is yes—but the longer answer reveals a fascinating intersection of chemistry, aerodynamics, and precision technology that's revolutionizing commercial window cleaning.
        </p>

        <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">The Traditional Window Cleaning Challenge</h3>

        <p className="text-slate-700 mb-6">
          Commercial window cleaning has remained largely unchanged for decades. Workers suspended on platforms or scaffolding physically scrub glass surfaces with squeegees and cleaning solutions. This method faces several challenges:
        </p>

        <ul className="space-y-3 mb-8">
          <li className="flex items-start gap-3">
            <Wind className="text-slate-600 mt-1 flex-shrink-0" size={20} />
            <span className="text-slate-700"><strong>Safety Risks:</strong> Falls from height remain one of the leading causes of workplace fatalities in the cleaning industry.</span>
          </li>
          <li className="flex items-start gap-3">
            <Wind className="text-slate-600 mt-1 flex-shrink-0" size={20} />
            <span className="text-slate-700"><strong>Time-Intensive:</strong> Setup, safety protocols, and physical access requirements make traditional window cleaning slow and expensive.</span>
          </li>
          <li className="flex items-start gap-3">
            <Wind className="text-slate-600 mt-1 flex-shrink-0" size={20} />
            <span className="text-slate-700"><strong>Weather Dependent:</strong> Wind, rain, and temperature extremes can halt operations for days or weeks.</span>
          </li>
          <li className="flex items-start gap-3">
            <Wind className="text-slate-600 mt-1 flex-shrink-0" size={20} />
            <span className="text-slate-700"><strong>Access Limitations:</strong> Some architectural designs make traditional cleaning methods difficult or impossible without expensive equipment.</span>
          </li>
        </ul>

        <div className="bg-cyan-50 border-l-4 border-cyan-500 p-6 my-8 rounded-r-lg">
          <h3 className="text-2xl font-bold text-slate-900 mb-3 flex items-center gap-2">
            <Droplets className="text-cyan-600" size={28} />
            How Touchless Drone Cleaning Works
          </h3>
          <p className="text-slate-700 mb-0">
            Drone-based window cleaning systems combine three key technologies: precision flight control, specialized atomized cleaning solutions, and water purification systems. Together, these create a touchless cleaning process that's both effective and efficient.
          </p>
        </div>

        <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">The Science of Touchless Cleaning</h3>

        <div className="space-y-6 mb-8">
          <div className="bg-white border-2 border-slate-200 p-6 rounded-xl">
            <h4 className="font-bold text-slate-900 mb-3 text-lg">1. Purified Water Chemistry</h4>
            <p className="text-slate-700">
              Our systems use deionized or reverse-osmosis purified water, which lacks the minerals found in tap water. This is crucial—tap water leaves spots because dissolved minerals remain after evaporation. Purified water contains virtually no dissolved solids, meaning it dries completely clear without residue. This eliminates the need for squeegees and physical contact.
            </p>
          </div>

          <div className="bg-white border-2 border-slate-200 p-6 rounded-xl">
            <h4 className="font-bold text-slate-900 mb-3 text-lg">2. Advanced Cleaning Agents</h4>
            <p className="text-slate-700">
              We apply specialized surfactant solutions that break down organic matter, oils, and atmospheric pollutants. These biodegradable chemicals work at the molecular level to lift contaminants from glass surfaces. The key is proper dwell time—allowing the chemistry to work before the purified water rinse.
            </p>
          </div>

          <div className="bg-white border-2 border-slate-200 p-6 rounded-xl">
            <h4 className="font-bold text-slate-900 mb-3 text-lg">3. Precision Application</h4>
            <p className="text-slate-700">
              Our drones maintain stable positions using GPS and visual positioning systems, ensuring consistent coverage and proper standoff distance. Advanced spray nozzles atomize the cleaning solution and purified water rinse into fine droplets that provide even coverage without over-saturation.
            </p>
          </div>

          <div className="bg-white border-2 border-slate-200 p-6 rounded-xl">
            <h4 className="font-bold text-slate-900 mb-3 text-lg">4. Controlled Drying</h4>
            <p className="text-slate-700">
              Because we use purified water, the drying process becomes an advantage rather than a challenge. As water evaporates, it leaves behind nothing—no streaks, no spots, no residue. The result is crystal-clear glass that often looks better than squeegee-cleaned windows.
            </p>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Ideal Applications</h3>

        <p className="text-slate-700 mb-4">
          Touchless drone window cleaning excels in several scenarios:
        </p>

        <ul className="space-y-3 mb-8">
          <li className="flex items-start gap-3">
            <CheckCircle2 className="text-green-600 mt-1 flex-shrink-0" size={20} />
            <span className="text-slate-700"><strong>High-rise buildings</strong> where traditional access is expensive or dangerous</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="text-green-600 mt-1 flex-shrink-0" size={20} />
            <span className="text-slate-700"><strong>Skylights and atriums</strong> that are difficult to reach from interior or exterior</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="text-green-600 mt-1 flex-shrink-0" size={20} />
            <span className="text-slate-700"><strong>Data centers and secure facilities</strong> where exterior personnel access is restricted</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="text-green-600 mt-1 flex-shrink-0" size={20} />
            <span className="text-slate-700"><strong>Curtain wall facades</strong> with extensive glass surfaces</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="text-green-600 mt-1 flex-shrink-0" size={20} />
            <span className="text-slate-700"><strong>Historic buildings</strong> where scaffolding could damage architectural features</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="text-green-600 mt-1 flex-shrink-0" size={20} />
            <span className="text-slate-700"><strong>Occupied facilities</strong> requiring minimal operational disruption</span>
          </li>
        </ul>

        <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Limitations and Considerations</h3>

        <p className="text-slate-700 mb-6">
          While highly effective, drone window cleaning isn't always the perfect solution for every situation:
        </p>

        <ul className="space-y-3 mb-8">
          <li className="flex items-start gap-3">
            <span className="text-slate-600 mt-1 flex-shrink-0">•</span>
            <span className="text-slate-700"><strong>Heavy buildup:</strong> Windows with years of neglect or industrial contamination may require initial traditional cleaning before switching to drone maintenance.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-slate-600 mt-1 flex-shrink-0">•</span>
            <span className="text-slate-700"><strong>Interior surfaces:</strong> Drone systems work best on exterior glass. Interior cleaning still requires traditional methods.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-slate-600 mt-1 flex-shrink-0">•</span>
            <span className="text-slate-700"><strong>Extreme weather:</strong> While more weather-tolerant than traditional methods, very high winds or heavy rain can still ground operations.</span>
          </li>
        </ul>

        <div className="bg-gradient-to-r from-[#1a3c75] to-[#2a5a95] text-white p-8 rounded-2xl my-8">
          <h3 className="text-2xl font-bold mb-4">The Verdict: Yes, It Works</h3>
          <p className="text-slate-100 mb-4">
            Touchless drone window cleaning isn't just a novelty—it's a proven technology that combines chemistry, engineering, and aviation to solve real-world cleaning challenges. When applied correctly with the right equipment, training, and solutions, it delivers results that meet or exceed traditional methods while dramatically improving safety and efficiency.
          </p>
          <p className="text-slate-100 mb-0">
            At Skywash Innovations, we've proven that technology can transform even the most traditional industries. Our touchless window cleaning services represent not just a new method, but a fundamentally safer and smarter approach to building maintenance.
          </p>
        </div>

        <div className="bg-slate-50 border-2 border-slate-200 p-6 rounded-xl mt-8">
          <p className="text-slate-700 mb-3">
            <strong>Ready to see touchless drone window cleaning in action?</strong>
          </p>
          <p className="text-slate-700 mb-0">
            Contact Skywash Innovations for a demonstration and consultation. We'll assess your facility and show you how drone technology can improve your window cleaning program while reducing costs and eliminating safety risks.
          </p>
        </div>
      </div>
    ),
  },
];

export function BlogsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-gradient-to-br from-slate-900 via-[#1a3c75] to-slate-800 text-white py-20 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Blogs & Insights
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl">
            Industry news, technology updates, and expert insights on drone-based exterior cleaning
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-16">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-8 md:p-12">
                <div className="flex items-center gap-4 text-sm text-slate-600 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  {post.title}
                </h2>

                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="border-t border-slate-200 pt-8">
                  {post.content}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#1a3c75] to-[#2a5a95] text-white rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Want to Learn More?
          </h2>
          <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
            Connect with our team to discuss how drone technology can transform your property maintenance program.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+17037550865"
              className="px-8 py-4 bg-white text-[#1a3c75] rounded-lg font-bold hover:bg-slate-100 transition-all"
            >
              Call for Consultation
            </a>
            <Link
              to="/commercial"
              className="px-8 py-4 bg-cyan-500 text-white rounded-lg font-bold hover:bg-cyan-600 transition-all"
            >
              View Commercial Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
