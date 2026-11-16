import { motion } from 'framer-motion';
import { FaGraduationCap, FaUniversity, FaMapMarkerAlt, FaMicrophone, FaCheckCircle } from 'react-icons/fa';
import { keynoteSpeakers } from '../data/speakers';
import { Link } from 'react-router-dom';

export default function KeynoteSpeakers() {
  return (
    <div className="min-h-screen bg-gray-50/50">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-orange-50 to-rose-50 py-14 px-4 text-center border-b border-gray-100">
        <span className="tag">Invited Talks</span>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mt-3">
          Keynote Speakers
        </h1>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-base md:text-lg">
          Meet the distinguished global researchers and academicians delivering keynote addresses at ICSETIC-2027.
        </p>
      </div>

      {/* Speakers Grid Section */}
      <section className="section-pad max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {keynoteSpeakers.map((speaker, index) => (
            <motion.div
              key={speaker.id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group"
            >
              {/* Card Header & Bio */}
              <div className="p-7 md:p-9 border-b border-gray-100 bg-gradient-to-br from-white to-orange-50/30">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                  {/* Speaker Avatar / Monogram */}
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-primary to-orange-400 text-white flex flex-col items-center justify-center font-bold text-2xl shadow-md shadow-primary/20 shrink-0 group-hover:scale-105 transition-transform duration-300">
                    <FaMicrophone className="text-xl mb-1 opacity-90" />
                    <span className="text-xs uppercase tracking-wider font-semibold">Keynote</span>
                  </div>

                  {/* Speaker Details */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-semibold bg-orange-100 text-primary">
                        <FaMapMarkerAlt className="text-[10px]" /> {speaker.country}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 group-hover:text-primary transition-colors">
                      {speaker.name}
                    </h2>
                    <p className="text-primary font-semibold text-base mt-1 flex items-center gap-2">
                      <FaGraduationCap className="shrink-0 text-primary-500" />
                      <span>{speaker.designation}</span>
                    </p>
                    <p className="text-gray-600 text-sm md:text-base mt-1 flex items-center gap-2">
                      <FaUniversity className="shrink-0 text-gray-400" />
                      <span>{speaker.institution}, {speaker.country}</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Research Expertise */}
              <div className="p-7 md:p-9 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary inline-block"></span>
                    {speaker.expertiseTitle}
                  </h3>
                  <ul className="space-y-3.5">
                    {speaker.expertise.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <FaCheckCircle className="text-primary text-sm mt-1 shrink-0 opacity-80" />
                        <div className="text-sm md:text-base leading-relaxed text-gray-700">
                          {item.detail ? (
                            <>
                              <strong className="font-semibold text-gray-900">{item.topic}</strong>
                              <span className="text-gray-500 mx-1.5">–</span>
                              <span>{item.detail}</span>
                            </>
                          ) : (
                            <span className="font-medium text-gray-800">{item.topic}</span>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Speakers Notice Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 bg-gradient-to-r from-primary-50 via-white to-orange-50 border border-primary/20 rounded-3xl p-8 md:p-10 text-center shadow-sm"
        >
          <div className="max-w-2xl mx-auto">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-3">
              Program Updates
            </span>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              More Keynote Speakers Coming Soon
            </h3>
            <p className="text-gray-600 text-sm md:text-base mb-6 leading-relaxed">
              We are actively confirming additional distinguished experts, researchers, and thought leaders from academia and industry. Stay tuned for further announcements!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://cmt3.research.microsoft.com/ICSETIC2027"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent"
              >
                Submit Paper (CMT)
              </a>
              <Link to="/registration" className="btn-outline">
                Registration Details
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
