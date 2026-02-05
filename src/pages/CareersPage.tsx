import { motion } from 'framer-motion';
import { DollarSign, TrendingUp, Users, Plane, Wrench, Droplets, CheckCircle2, Mail } from 'lucide-react';

const benefits = [
  {
    icon: DollarSign,
    title: 'Competitive Pay',
    description: 'Industry-leading compensation packages'
  },
  {
    icon: TrendingUp,
    title: 'Career Growth',
    description: 'Clear advancement opportunities as we expand'
  },
  {
    icon: Users,
    title: 'Growing Team',
    description: 'Join a dynamic, innovative local company'
  }
];

const positions = [
  {
    icon: Plane,
    title: 'Part 107 Pilots',
    description: 'FAA certified drone pilots to operate our advanced cleaning systems',
    requirements: [
      'Valid FAA Part 107 certification',
      'Experience with commercial drone operations',
      'Strong attention to detail',
      'Ability to work at various heights and locations'
    ]
  },
  {
    icon: Wrench,
    title: 'Ground Technicians',
    description: 'Technical support specialists for equipment maintenance and setup',
    requirements: [
      'Technical aptitude with equipment',
      'Problem-solving skills',
      'Physical ability to handle equipment',
      'Team collaboration skills'
    ]
  },
  {
    icon: Droplets,
    title: 'Softwashing Technicians',
    description: 'Specialists in eco-friendly cleaning techniques and water systems',
    requirements: [
      'Experience with pressure washing/softwashing',
      'Knowledge of cleaning chemicals and techniques',
      'Customer service skills',
      'Valid driver\'s license'
    ]
  }
];

const employmentRequirements = [
  {
    number: '1',
    title: 'Background Check',
    items: [
      'Must pass a comprehensive criminal background check',
      'No felony convictions or pending felony charges',
      'No history of theft, violence, or crimes involving dishonesty'
    ]
  },
  {
    number: '2',
    title: 'Driving Record',
    items: [
      'Must possess a valid driver\'s license in good standing',
      'No DUI/DWI convictions within the past 7 years',
      'No more than 2 moving violations or at-fault accidents in the past 3 years',
      'No license suspensions or revocations in the past 5 years'
    ]
  },
  {
    number: '3',
    title: 'Drug and Alcohol Screening',
    items: [
      'Must pass a pre-employment drug screening',
      'Subject to random drug and alcohol testing during employment'
    ]
  },
  {
    number: '4',
    title: 'Work Authorization',
    items: [
      'Must be legally authorized to work in the United States'
    ]
  },
  {
    number: '5',
    title: 'Education and Certification',
    items: [
      'High school diploma or GED required',
      'Any required professional certifications (e.g., FAA Part 107 for drone operators) must be current and in good standing'
    ]
  },
  {
    number: '6',
    title: 'Physical and Mental Fitness',
    items: [
      'Must be able to perform the essential functions of the job, with or without reasonable accommodation',
      'Must be able to work safely at heights and in various weather conditions (if applicable)'
    ]
  },
  {
    number: '7',
    title: 'References',
    items: [
      'Must provide at least two professional references from previous employers'
    ]
  },
  {
    number: '8',
    title: 'Reliability and Professionalism',
    items: [
      'Demonstrated history of punctuality, reliability, and professional conduct',
      'No history of job abandonment or excessive absenteeism'
    ]
  },
  {
    number: '9',
    title: 'Technology and Safety',
    items: [
      'Must be comfortable using smartphones, tablets, and company software',
      'Must adhere to all company safety protocols and procedures'
    ]
  },
  {
    number: '10',
    title: 'Additional Requirements',
    items: [
      'Willingness to travel as required by the job',
      'Ability to pass any additional screenings or requirements specific to the role'
    ]
  }
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-24 mt-16">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptLTEyIDBjMy4zMTQgMCA2IDIuNjg2IDYgNnMtMi42ODYgNi02IDYtNi0yLjY4Ni02LTYgMi42ODYtNiA2LTZ6bTAgMTJjMy4zMTQgMCA2IDIuNjg2IDYgNnMtMi42ODYgNi02IDYtNi0yLjY4Ni02LTYgMi42ODYtNiA2LTZ6bTEyIDBjMy4zMTQgMCA2IDIuNjg2IDYgNnMtMi42ODYgNi02IDYtNi0yLjY4Ni02LTYgMi42ODYtNiA2LTZ6IiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L2c+PC9zdmc+')] opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Join Our Growing Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto"
          >
            Be part of the future of exterior cleaning technology. We're a local, growing company looking for talented individuals to help revolutionize the industry.
          </motion.p>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Work With Us?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Skywash Innovations is at the forefront of drone technology in the cleaning industry. As a local Northern Virginia company, we're rapidly expanding and looking for dedicated professionals to grow with us.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl p-8 text-center hover:shadow-xl transition-shadow"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-xl mb-6">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                  <p className="text-slate-600">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Current Openings Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Current Openings</h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {positions.map((position, index) => {
              const Icon = position.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 text-blue-600 rounded-xl mb-6">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{position.title}</h3>
                  <p className="text-slate-600 mb-6">{position.description}</p>

                  <div className="border-t border-slate-200 pt-6">
                    <h4 className="font-semibold text-slate-900 mb-4">Requirements:</h4>
                    <ul className="space-y-2">
                      {position.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start text-slate-600">
                          <CheckCircle2 className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Employment Requirements Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Employment Requirements</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              All candidates must meet the following requirements to be considered for employment with Skywash Innovations:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {employmentRequirements.map((requirement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-slate-50 border border-slate-200 rounded-xl p-6 hover:border-blue-300 transition-colors"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold mr-4">
                    {requirement.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900 mb-3">{requirement.title}</h3>
                    <ul className="space-y-2">
                      {requirement.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-slate-600 text-sm leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-6 max-w-4xl mx-auto"
          >
            <p className="text-slate-700 text-sm leading-relaxed">
              <strong>Important:</strong> All employment offers are contingent upon successful completion of background checks, drug screening, and verification of all requirements listed above. Skywash Innovations is an equal opportunity employer committed to workplace diversity and inclusion.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Apply Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Join Our Team?</h2>
            <p className="text-xl text-blue-100 mb-12">
              We offer competitive rates, advancement opportunities, and the chance to work with cutting-edge technology in a growing local company.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Send Your Resume</h3>
              <div className="flex items-center justify-center mb-6">
                <Mail className="w-6 h-6 mr-3" />
                <a
                  href="mailto:careers@skywashinnovations.com"
                  className="text-2xl font-semibold hover:text-blue-200 transition-colors"
                >
                  careers@skywashinnovations.com
                </a>
              </div>
              <p className="text-blue-100 text-lg leading-relaxed">
                Include your resume, relevant certifications, and a brief cover letter explaining why you'd be a great fit for our team.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
