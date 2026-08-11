'use client';

import { motion } from 'framer-motion';

// Color palette for brand circles
const brandColors = [
  'bg-blue-500',
  'bg-red-500',
  'bg-green-500',
  'bg-purple-500',
  'bg-orange-500',
  'bg-pink-500',
  'bg-indigo-500',
  'bg-cyan-500',
  'bg-amber-500',
  'bg-emerald-500',
  'bg-rose-500',
  'bg-violet-500',
  'bg-teal-500',
  'bg-sky-500',
];

export default function TrustedPartners() {
  const partnerCategories = [
    {
      title: 'Hardware & Furniture Fittings',
      description: 'Premium hardware and fittings from industry‑leading brands ensure smooth functionality, durability, and long‑lasting performance in every interior project.',
      brands: ['Hettich', 'Hafele', 'Blum', 'Godrej', 'Grass', 'Dorma Kaba'],
    },
    {
      title: 'Laminates & Surface Solutions',
      description: 'High‑quality laminates and surface materials provide superior finish, texture, and style for kitchens, wardrobes, and home interiors.',
      brands: ['Greenlam', 'Century Plywood', 'Royale Touche', 'Stylam'],
    },
    {
      title: 'Bathroom Fittings',
      description: 'Top‑tier bathroom fittings deliver reliability, modern aesthetics, and long‑lasting performance for premium bath spaces.',
      brands: ['Jaquar', 'Kohler', 'Grohe', 'Hindware', 'Cera'],
    },
    {
      title: 'Electrical & Lighting',
      description: 'Trusted electrical and lighting brands help us create safe, efficient, and beautifully illuminated interiors.',
      brands: ['Legrand', 'Schneider Electric', 'Havells', 'Wipro Lighting'],
    },
    {
      title: 'Plywood, MDF & Boards',
      description: 'Strong, durable plywood and boards form the backbone of our modular furniture, ensuring stability and long‑term quality.',
      brands: ['Century Ply', 'Greenply', 'Duro Ply', 'Kitply'],
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3 md:mb-4">
            Our Trusted Partners
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            We work with industry‑leading brands to source premium materials, fittings, and hardware for your interior projects.
          </p>
        </motion.div>

        {/* Partner Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {partnerCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 md:p-8 border border-gray-200 hover:shadow-lg hover:border-secondary/50 transition-all duration-300"
            >
              {/* Category Title */}
              <h3 className="text-lg md:text-xl font-bold text-primary mb-3">
                {category.title}
              </h3>
              
              {/* Category Description */}
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-5">
                {category.description}
              </p>

              {/* Brand List - Colored circles */}
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {category.brands.map((brand, idx) => (
                  <motion.div
                    key={brand}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    viewport={{ once: true }}
                    className={`flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full ${brandColors[idx % brandColors.length]} text-white group cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-300`}
                    title={brand}
                  >
                    <p className="text-center text-[10px] md:text-xs font-bold line-clamp-2 px-1.5 leading-tight">
                      {brand}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 pt-8 md:pt-12 border-t border-gray-200 text-center"
        >
          <p className="text-sm md:text-base text-gray-600">
            Every material we source is selected for durability and excellence. <br className="hidden md:block" />
            <span className="text-secondary font-semibold">Premium quality, industry-certified, built to last.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
