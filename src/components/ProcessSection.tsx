'use client';

import { motion } from 'framer-motion';
import { FiCheckCircle, FiArrowRight } from 'react-icons/fi';

const steps = [
  { id: 1, title: 'Consultation', description: 'Understand your vision and budget.' },
  { id: 2, title: 'Design', description: '3D visualization and design proposals.' },
  { id: 3, title: 'Planning', description: 'Finalize materials and timeline.' },
  { id: 4, title: 'Execution', description: 'Expert craftsmanship and quality.' },
  { id: 5, title: 'Quality Check', description: 'Rigorous inspection for perfection.' },
  { id: 6, title: 'Handover', description: 'Delivery and post-project support.' },
];

export default function ProcessSection() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-2 md:mb-4">
            Our Process
          </h2>
          <p className="text-sm md:text-lg text-foreground/70 max-w-2xl mx-auto">
            Step-by-step process for your satisfaction
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              className="relative p-4 md:p-6 rounded-lg bg-white border border-gray-200 shadow-soft hover:shadow-base transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -2 }}
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 md:h-12 md:w-12 rounded-full bg-secondary text-white font-bold text-base md:text-lg">
                    {step.id}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-base md:text-lg font-bold text-primary mb-1">{step.title}</h3>
                  <p className="text-foreground/70 leading-relaxed text-xs md:text-sm">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
