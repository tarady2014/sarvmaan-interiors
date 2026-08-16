'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function TrustedPartners() {

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
        </motion.div>

        {/* Content with Text Left and Image Right */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center bg-white rounded-lg p-6 md:p-10 border border-gray-200 hover:shadow-lg transition-all duration-300"
        >
          {/* Left Side - Text Content */}
          <div className="flex flex-col justify-center">
            <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4">
              We source premium hardware, fittings, laminates, and materials from industry-leading brands that share our commitment to premium quality and durability.
            </p>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">
              Every material is handpicked to ensure superior performance, aesthetic excellence, and long-lasting value for your interior space.
            </p>
            <div className="flex items-start gap-3">
              <span className="text-secondary text-xl font-semibold">✓</span>
              <p className="text-sm md:text-base text-gray-600">
                <span className="text-secondary font-semibold">Premium quality, industry-certified, built to last.</span>
              </p>
            </div>
          </div>

          {/* Right Side - Brand Logos Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full bg-light rounded-lg p-4 md:p-6">
              <Image
                src="/images/trusted_partners.webp"
                alt="Our Trusted Brand Partners - Premium Interior Design Materials"
                width={600}
                height={300}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
