'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

interface HeroImageProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  imageAlt: string;
}

export default function HeroImage({ title, subtitle, imageUrl, imageAlt }: HeroImageProps) {
  return (
    <section className="relative pt-24 pb-12 md:py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className="object-cover object-center w-full h-full"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <motion.h1 
          className="text-3xl md:text-5xl font-bold mb-2 md:mb-4 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {title}
        </motion.h1>
        <motion.p 
          className="text-sm md:text-lg text-white/90 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}
