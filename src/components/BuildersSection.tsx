'use client';

import { motion } from 'framer-motion';

export default function BuildersSection() {
  const builders = [
    { name: 'Life Republic', location: 'Marunji, Hinjewadi' },
    { name: 'Megapolis', location: 'Hinjewadi Phase 3' },
    { name: 'Blue Ridge', location: 'Hinjewadi Phase 1' },
    { name: 'Western Avenue', location: 'Wakad' },
    { name: 'VTP Blue Waters', location: 'Mahalunge, Baner' },
    { name: 'Royal Entrada', location: 'Wakad' },
    { name: 'Amanora Park Town', location: 'Hadapsar' },
    { name: 'Magarpatta City', location: 'Hadapsar' },
    { name: 'VTP Pegasus', location: 'Wagholi' },
    { name: 'Pride World City', location: 'Charholi' },
    { name: "Gera's World of Joy", location: 'Kharadi' },
    { name: 'Pristine City', location: 'Wagholi' },
    { name: 'Nanded City', location: 'Sinhagad Road' },
    { name: 'Kumar Princetown', location: 'Undri' },
    { name: 'Nyati Elan', location: 'Wagholi' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-8 md:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-8 md:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-3 md:mb-4">
            Premium Projects at <span className="text-secondary">Top Locations</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Our interior projects completed across Pune's most prestigious residential communities
          </p>
        </motion.div>

        {/* Builders Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {builders.map((builder, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-3 md:p-4 border-t-4 border-secondary hover:scale-105"
            >
              {/* Builder Card Content */}
              <div className="text-center">
                <h3 className="text-sm md:text-base font-bold text-primary truncate line-clamp-2">
                  {builder.name}
                </h3>
                <p className="text-xs md:text-sm text-gray-500 mt-1.5 md:mt-2">
                  {builder.location}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
