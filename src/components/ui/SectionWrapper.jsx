import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function SectionWrapper({ children, className = '', id = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id={id} ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className={className}
      >
        {children}
      </motion.div>
    </section>
  );
}
