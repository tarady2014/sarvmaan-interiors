'use client';

import { motion } from 'framer-motion';
import { FiTrendingUp, FiGrid, FiBriefcase, FiHome, FiBox } from 'react-icons/fi';

const services = [
  { id: 1, icon: FiGrid, title: 'Modular Kitchen Design' },
  { id: 2, icon: FiBox, title: 'Full Home Interiors' },
  { id: 3, icon: FiHome, title: '2D & 3D Interior Design' },
  { id: 4, icon: FiBriefcase, title: 'False Ceiling & Lighting' },
  { id: 5, icon: FiTrendingUp, title: 'Wall Finishes & Painting' },
  { id: 6, icon: FiHome, title: 'Interior Execution & Site Supervision' },
];

export default function ServicesSection() {
  return (
    <section className="py-12 md:py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-2 md:mb-4">
            Our Services
          </h2>
          <p className="text-sm md:text-lg text-foreground/70 max-w-2xl mx-auto">
            Comprehensive interior design solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                className="p-4 md:p-6 rounded-xl bg-white border border-gray-200 hover:border-secondary shadow-soft hover:shadow-base transition-all duration-300 cursor-pointer text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -3 }}
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-secondary/10 flex items-center justify-center mb-3 md:mb-4 mx-auto">
                  <Icon className="text-xl md:text-2xl text-secondary" />
                </div>
                <h3 className="text-sm md:text-base font-semibold text-primary">
                  {service.title}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
