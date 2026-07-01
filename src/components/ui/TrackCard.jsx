import { motion } from 'framer-motion';

export default function TrackCard({ track, index }) {
  const Icon = track.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: (index % 6) * 0.07 }}
      whileHover={{ y: -4, boxShadow: '0 8px 30px rgba(242,101,34,0.15)' }}
      className="bg-white rounded-xl border border-gray-100 p-5 flex items-start gap-4 cursor-default group transition-all duration-300"
    >
      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary-50 group-hover:bg-primary flex items-center justify-center transition-colors duration-300">
        <Icon className="text-primary group-hover:text-white text-lg transition-colors duration-300" />
      </div>
      <div>
        <p className="text-sm font-semibold text-gray-800 leading-snug group-hover:text-primary transition-colors duration-300">
          {track.title}
        </p>
      </div>
    </motion.div>
  );
}
