'use client';

import { motion } from 'framer-motion';

export default function TrustedPartners() {
  const partnerCategories = [
    {
      title: 'Hardware & Furniture Fittings',
      brands: ['Hettich', 'Hafele', 'Blum', 'Godrej', 'Grass', 'Dorma Kaba'],
    },
    {
      title: 'Laminates & Surface Solutions',
      brands: ['Greenlam', 'Century Plywood', 'Royale Touche', 'Stylam'],
    },
    {
      title: 'Bathroom Fittings',
      brands: ['Jaquar', 'Kohler', 'Grohe', 'Hindware', 'Cera'],
    },
    {
      title: 'Electrical & Lighting',
      brands: ['Legrand', 'Schneider Electric', 'Havells', 'Wipro Lighting'],
    },
    {
      title: 'Plywood & MDF Boards',
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
            We partner with industry-leading brands to deliver premium quality materials and fittings for your dream interiors
          </p>
        </motion.div>

        {/* Partner Categories */}
        <div className="space-y-10 md:space-y-14">
          {partnerCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Category Title */}
              <h3 className="text-lg md:text-xl font-bold text-primary mb-6 md:mb-8 relative pl-4">
                <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-secondary rounded-full"></span>
                {category.title}
              </h3>

              {/* Brand Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4">
                {category.brands.map((brand, brandIndex) => (
                  <motion.div
                    key={brand}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.1 + brandIndex * 0.02 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-center p-4 md:p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg hover:border-secondary/50 hover:bg-secondary/5 transition-all duration-300 group cursor-pointer min-h-24 md:min-h-28"
                  >
                    {/* Brand Name */}
                    <p className="text-center text-sm md:text-base font-semibold text-foreground group-hover:text-secondary transition-colors duration-300 line-clamp-3">
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
            Using only authentic, ISI-certified materials from trusted brands ensures your interiors are built to last. <br className="hidden md:block" />
            <span className="text-secondary font-semibold">Quality that stands the test of time.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
