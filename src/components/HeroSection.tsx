'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative w-full pt-16">
      {/* Full-width Hero Image with Overlay */}
      <div className="relative w-full h-96 md:h-[600px] overflow-hidden bg-black">
        <Image
          src="/images/hero-home.webp"
          alt="Modern Interior Design"
          fill
          className="object-cover w-full h-full"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content overlay */}
        <motion.div
          className="absolute inset-0 flex flex-col justify-center items-start px-4 md:px-8 max-w-7xl mx-auto w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="inline-block bg-secondary text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 md:mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            ✨ ✨ ✨ ✨ ✨ 
          </motion.span>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Transforming Your House <br className="hidden md:block" />into Your Dream Home
          </motion.h1>

          <motion.p
            className="text-base md:text-lg text-white/90 mb-6 md:mb-8 max-w-md font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Premium interior design & modular furniture. 500+ projects completed.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Link
              href="/contact"
              className="border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-white/10 transition-all text-center text-sm md:text-base"
            >
              Book Free Consultation
            </Link>
          </motion.div>

          {/* Stats - Hidden on mobile, shown on desktop */}
          <motion.div
            className="hidden md:grid grid-cols-3 gap-8 mt-12 w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div>
              <p className="text-4xl font-bold text-white">500+</p>
              <p className="text-white/80 text-sm font-medium mt-2">Projects</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white">10+</p>
              <p className="text-white/80 text-sm font-medium mt-2">Years</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white">1000+</p>
              <p className="text-white/80 text-sm font-medium mt-2">Clients</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 text-white/60"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
