import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaFileDownload, FaPaperPlane, FaCalendarAlt, FaMapMarkerAlt, FaUsers, FaMicrochip, FaFileAlt, FaEnvelope, FaGlobe, FaMicrophone, FaHandshake, FaTrophy } from 'react-icons/fa';
import Countdown from '../components/ui/Countdown';

const stats = [
  { label: 'Conference Tracks', value: '26+', icon: FaMicrochip },
  { label: 'Expected Papers', value: '200+', icon: FaFileAlt },
  { label: 'Committee Members', value: '80+', icon: FaUsers },
  { label: 'Conference Days', value: '3', icon: FaCalendarAlt },
];

export default function Home() {
  return (
    /* pt accounts for fixed header: poster (h-24 sm:h-32 lg:h-36) + navbar (h-12) */
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-rose-50 to-white">
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        {/* Full Width Content */}
        <div className="w-full px-6 md:px-12 lg:px-20 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="w-full"
          >

            {/* Badge */}
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-block bg-primary/10 text-primary text-sm font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                IEEE
              </span>
              <span className="text-gray-500 text-base">Hybrid Mode Conference</span>
            </div>

            {/* Conference Name */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-6">
              First International IEEE Chhattisgarh Conference
              <span className="block text-primary mt-2">
                (IEEE CGCON 2027)
              </span>
            </h1>

            {/* Theme */}
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-10 italic">
              Theme: Intelligent Computing, Sustainable Energy and Smart Industrial
              Automation
            </p>

            {/* Info Chips */}
            <div className="flex flex-wrap gap-5 mb-10">
              <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-6 py-3 text-base text-gray-700 shadow-sm">
                <FaCalendarAlt className="text-primary text-lg" />
                <span className="font-semibold">2–4 February 2027</span>
              </div>

              <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-6 py-3 text-base text-gray-700 shadow-sm">
                <FaMapMarkerAlt className="text-primary text-lg" />
                <span>NIT Raipur, India</span>
              </div>

              <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-6 py-3 text-base text-gray-700 shadow-sm">
                <span className="w-3 h-3 rounded-full bg-green-400 inline-block" />
                <span>Hybrid Conference</span>
              </div>
            </div>

            {/* Organized By */}
            <div className="bg-white border border-gray-100 rounded-2xl px-8 py-6 mb-10 shadow-sm max-w-4xl">
              <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                Organized By
              </p>
              <p className="text-lg font-medium text-gray-700">
                Department of Electrical Engineering
              </p>
              <p className="text-lg font-medium text-gray-700">
                Department of Information Technology
              </p>
              <p className="text-xl text-primary font-semibold mt-3">
                National Institute of Technology Raipur
              </p>
              <p className="text-base text-gray-400 mt-2">
                G.E. Road, Raipur, Chhattisgarh – 492010
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-5">
              <a
                href="https://cmt3.research.microsoft.com/CGCON2026"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent"
              >
                Register Now
              </a>
              <a href="#" className="btn-outline flex items-center gap-2">
                <FaFileDownload />
                Download Brochure
              </a>
              <a
                href="https://cmt3.research.microsoft.com/CGCON2026"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-2"
              >
                <FaPaperPlane />
                Submit Paper
              </a>
            </div>

            {/* Event Countdown */}
            <Countdown targetDate="2027-02-02T00:00:00" />
          </motion.div>
        </div>
      </section>



      {/* Quick Info Strip */}
      <section className="bg-primary py-5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-x-10 gap-y-2 text-white text-base">
          <span className="flex items-center gap-2"><FaEnvelope /> <a href="mailto:cgcon@nitrr.ac.in" className="underline underline-offset-2">cgcon@nitrr.ac.in</a></span>
          <span className="flex items-center gap-2"><FaMapMarkerAlt /> NIT Raipur, G.E. Road, Raipur, CG – 492010</span>
          <span className="flex items-center gap-2"><FaGlobe /> <a href="https://www.nitrr.ac.in" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">www.nitrr.ac.in</a></span>
          <span className="flex items-center gap-2"><FaCalendarAlt /> Paper Submission Deadline: <strong>30 Oct 2026</strong></span>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="tag text-base">Why Attend?</span>
          <h2 className="section-title mt-3">Key Conference Highlights</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: <FaFileAlt />, title: 'IEEE Xplore Indexed', desc: 'All accepted & presented papers will be submitted for inclusion in IEEE Xplore (Scopus indexed).' },
            { icon: <FaGlobe />, title: 'Hybrid Format', desc: 'Participate physically in Raipur or join online from anywhere in the world.' },
            { icon: <FaMicrophone />, title: 'Keynote Speakers', desc: 'Invited talks from eminent professors & scientists across the globe.' },
            { icon: <FaMicrochip />, title: '26+ Research Tracks', desc: 'Wide coverage from AI & ML to Power Systems, Renewable Energy and Smart Automation.' },
            { icon: <FaHandshake />, title: 'Networking', desc: 'Connect with researchers, academicians and industry experts from India and abroad.' },
            { icon: <FaTrophy />, title: 'Best Paper Awards', desc: 'Recognition for outstanding research contributions across tracks.' },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="card p-8 hover:border-primary/30"
            >
              <span className="text-4xl">{item.icon}</span>
              <h3 className="font-bold text-lg text-gray-800 mt-4 mb-2">{item.title}</h3>
              <p className="text-base text-gray-500 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-primary to-orange-400 py-16 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Paper Submission Opens 1st July 2026
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
            Submit your research in IEEE format via the CMT portal. Deadline: 30 October 2026.
          </p>
          <div className="flex justify-center gap-5 flex-wrap">
            <a
              href="https://cmt3.research.microsoft.com/CGCON2026"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-white"
            >
              <FaPaperPlane /> Submit Paper
            </a>
            <Link to="/dates" className="bg-white text-primary font-semibold px-8 py-3.5 rounded-lg text-lg hover:bg-orange-50 transition-colors">
              View Important Dates
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
