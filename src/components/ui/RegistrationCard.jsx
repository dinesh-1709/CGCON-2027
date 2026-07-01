import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

export default function RegistrationCard({ category, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.12 }}
      whileHover={{ y: -6 }}
      className={`relative bg-gradient-to-br ${category.color} rounded-2xl border-2 ${category.border} p-7 flex flex-col gap-5 shadow-sm hover:shadow-lg transition-all duration-300`}
    >
      {category.badge && (
        <span className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
          {category.badge}
        </span>
      )}

      {/* Header */}
      <div>
        <div className="text-3xl mb-2">{category.icon}</div>
        <h3 className="text-xl font-bold text-gray-800">{category.category}</h3>
        <p className="text-sm text-gray-500 mt-1">{category.description}</p>
      </div>

      {/* Fees */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white/70 rounded-xl p-4 text-center">
          <p className="text-xs font-semibold text-accent uppercase tracking-wide mb-1">IEEE Member</p>
          <p className="text-2xl font-bold text-gray-800">{category.ieee.inr}</p>
          <p className="text-xs text-gray-400 mt-0.5">{category.ieee.usd}</p>
        </div>
        <div className="bg-white/70 rounded-xl p-4 text-center">
          <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">Non-IEEE</p>
          <p className="text-2xl font-bold text-gray-800">{category.nonIeee.inr}</p>
          <p className="text-xs text-gray-400 mt-0.5">{category.nonIeee.usd}</p>
        </div>
      </div>

      {/* Inclusions */}
      <ul className="space-y-2">
        {['IEEE Xplore publication', 'Conference Kit', 'All sessions access', 'e-Certificate'].map((item) => (
          <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
            <FaCheckCircle className="text-primary shrink-0" />
            {item}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="https://cmt3.research.microsoft.com/CGCON2026"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto btn-accent text-sm text-center justify-center"
      >
        Register Now
      </a>
      <p className="text-xs text-gray-400 text-center -mt-2">* GST applicable as per Govt. directives</p>
    </motion.div>
  );
}
