import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, BookOpen, ChevronRight, Droplets, Leaf, Sparkles } from 'lucide-react';

const articles = [
  {
    path: '/learning-center/artillery-fungus',
    category: 'Exterior Stains',
    categoryColor: 'bg-amber-600',
    icon: Leaf,
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-700',
    title: 'Artillery Fungus: The Tiny Black Spots a Soft Wash Won\'t Touch',
    excerpt: 'Those stubborn little black specks on your siding and car aren\'t mold, and they aren\'t dirt. They\'re shotgun-launched spores from a fungus that lives in your mulch — and standard cleaning chemistry can\'t remove them.',
    readTime: '6 min read',
    date: 'August 2026',
  },
  {
    path: '/learning-center/roof-care/gloeocapsa-magma',
    category: 'Roof Care',
    categoryColor: 'bg-[#1a3c75]',
    icon: Droplets,
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-700',
    title: 'Why Your Roof Still Looks Dark After a Soft Wash',
    excerpt: 'The black streaking on your roof isn\'t just dirt — and understanding what it actually is will help you know what to expect after a professional cleaning.',
    readTime: '5 min read',
    date: '2026',
  },
  {
    path: '/learning-center/window-cleaning',
    category: 'Window Cleaning',
    categoryColor: 'bg-sky-600',
    icon: Sparkles,
    iconBg: 'bg-sky-100',
    iconColor: 'text-sky-700',
    title: 'Not All Window Cleaning Is the Same — Here\'s What to Expect from Each Method',
    excerpt: 'We offer four distinct approaches to window cleaning, each matched to a different condition, goal, and budget. Understanding which method is right for your situation helps you get the result you\'re looking for.',
    readTime: '6 min read',
    date: '2026',
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

export function LearningCenterIndexPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-[#1a3c75] text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 to-slate-900/80" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial="initial" animate="animate" variants={stagger}>
            <motion.div variants={fadeInUp} className="mb-8">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium transition-colors"
              >
                <ArrowLeft size={16} />
                Back to Home
              </Link>
            </motion.div>

            <motion.span variants={fadeInUp} className="inline-block bg-[#3a7bd5] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-5">
              <BookOpen size={12} className="inline mr-1.5 -mt-0.5" />
              Learning Center
            </motion.span>

            <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5">
              Understanding What's on Your Home
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-white/80 leading-relaxed">
              Plain-English guides to the stains, growths, and grime that show up on roofs, siding, and windows — and what exterior cleaning can (and can't) do about them.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid gap-6"
          >
            {articles.map((article, i) => {
              const Icon = article.icon;
              return (
                <motion.div key={i} variants={fadeInUp}>
                  <Link
                    to={article.path}
                    className="group block bg-white rounded-2xl shadow-sm hover:shadow-xl border border-slate-200 overflow-hidden transition-all duration-300"
                  >
                    <div className="flex flex-col sm:flex-row">
                      <div className="flex items-center justify-center sm:w-40 p-8 sm:p-10 bg-slate-50 sm:border-r border-slate-100">
                        <div className={`w-16 h-16 ${article.iconBg} rounded-2xl flex items-center justify-center`}>
                          <Icon className={article.iconColor} size={28} />
                        </div>
                      </div>
                      <div className="flex-1 p-6 sm:p-8">
                        <div className="flex items-center gap-3 mb-3">
                          <span className={`${article.categoryColor} text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full`}>
                            {article.category}
                          </span>
                        </div>
                        <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 group-hover:text-[#1a3c75] transition-colors leading-snug">
                          {article.title}
                        </h2>
                        <p className="text-slate-600 text-sm leading-relaxed mb-4">
                          {article.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-slate-400 text-xs">
                            <span className="flex items-center gap-1.5">
                              <Calendar size={12} />
                              {article.date}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <Clock size={12} />
                              {article.readTime}
                            </span>
                          </div>
                          <span className="flex items-center gap-1 text-[#1a3c75] text-sm font-semibold group-hover:gap-2 transition-all">
                            Read article
                            <ChevronRight size={16} />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
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
              Not sure what you're looking at?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Our technicians are happy to evaluate what's on your roof, siding, or windows and recommend the right course of action for your home.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/residential"
                className="bg-white text-[#1a3c75] px-8 py-4 rounded-lg font-bold text-lg hover:bg-slate-100 transition-all shadow-xl"
              >
                Explore Residential Services
              </Link>
              <Link
                to="/"
                className="border-2 border-white/40 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all"
              >
                Back to Home
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
