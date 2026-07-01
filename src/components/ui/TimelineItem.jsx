import { motion } from 'framer-motion';

export default function TimelineItem({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.1 }}
      className="flex gap-5 group"
    >
      {/* Left: dot + line */}
      <div className="flex flex-col items-center">
        <div
          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 transition-all duration-300 ${
            item.highlight
              ? 'border-primary bg-primary shadow-md shadow-primary/30'
              : 'border-gray-300 bg-white group-hover:border-primary'
          }`}
        >
          {item.highlight && <div className="w-2 h-2 rounded-full bg-white" />}
        </div>
        <div className="w-0.5 bg-gray-200 flex-1 mt-2 group-last:hidden" />
      </div>

      {/* Right: content */}
      <div
        className={`pb-8 flex-1 rounded-xl p-4 -mt-1 transition-all duration-300 ${
          item.highlight
            ? 'bg-primary text-white shadow-md shadow-primary/20'
            : 'bg-white border border-gray-100 hover:border-primary/30 hover:shadow-sm'
        }`}
      >
        <div className="flex items-start justify-between flex-wrap gap-2">
          <div>
            <span className="text-lg mr-2">{item.icon}</span>
            <span
              className={`font-semibold text-base ${
                item.highlight ? 'text-white' : 'text-gray-800'
              }`}
            >
              {item.event}
            </span>
          </div>
          <span
            className={`text-sm font-bold px-3 py-1 rounded-full ${
              item.highlight
                ? 'bg-white/20 text-white'
                : 'bg-primary-50 text-primary'
            }`}
          >
            {item.date}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
