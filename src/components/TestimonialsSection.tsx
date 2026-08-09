'use client';

import { motion } from 'framer-motion';
import { FiStar, FiChevronLeft, FiChevronRight, FiUser } from 'react-icons/fi';
import Image from 'next/image';
import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Abhishek Anpat',
    role: 'Homeowners, Hadapsar',
    testimonial: 'SarvMaan Interior Studio transformed my living room and kitchen beautifully! Their creative vision, attention to detail, and professional team made the entire process smooth and enjoyable. They worked within my budget and completed the project on time. Highly recommend for anyone looking to elevate their home\'s design!.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Pravin Dangat',
    role: 'Clients, Wakad',
    testimonial: `I would like to take a moment to appreciate the exceptional efforts of Mr. Vijay and Mr. Akshay's SarvaMaan team in completing the project on time.
The quality of work delivered was excellent and I encourage the team to continue with this high standard. Keep up the great work!.`,
    rating: 5,
  },
  {
    id: 3,
    name: 'Vikram',
    role: 'Corporate Client',
    testimonial: 'Perfect entertainment space for the family. Worth every rupee invested.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Sharma Family',
    role: 'Homeowners, Hadapsar',
    testimonial: 'Every room looks like a magazine cover. Best decision we made!',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-8 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-2 md:mb-4">
            Loved by Our Clients
          </h2>
          <p className="text-sm md:text-lg text-foreground/70">
            What our satisfied clients say
          </p>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-light border border-gray-200 p-6 md:p-8 rounded-xl shadow-soft hover:shadow-base transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -3 }}
            >
              <div className="flex gap-1 mb-3 md:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FiStar
                    key={i}
                    size={16}
                    className="text-secondary fill-secondary"
                  />
                ))}
              </div>

              <p className="text-foreground/80 mb-4 md:mb-6 leading-relaxed italic text-sm md:text-base">
                "{testimonial.testimonial}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <FiUser className="text-lg md:text-2xl text-secondary" />
                </div>
                <div>
                  <p className="font-semibold text-primary text-sm md:text-base">{testimonial.name}</p>
                  <p className="text-foreground/60 text-xs md:text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-light border border-gray-200 p-6 rounded-lg"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <FiStar
                  key={i}
                  size={16}
                  className="text-secondary fill-secondary"
                />
              ))}
            </div>

            <p className="text-foreground/80 mb-6 leading-relaxed italic text-sm">
              "{testimonials[currentIndex].testimonial}"
            </p>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                <FiUser className="text-2xl text-secondary" />
              </div>
              <div>
                <p className="font-semibold text-primary text-sm">{testimonials[currentIndex].name}</p>
                <p className="text-foreground/60 text-xs">{testimonials[currentIndex].role}</p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between gap-4">
              <button
                onClick={goToPrevious}
                className="flex-1 flex items-center justify-center gap-2 bg-secondary text-white py-2 rounded-lg hover:bg-secondary/90 transition-colors text-sm font-medium"
              >
                <FiChevronLeft /> Previous
              </button>
              <span className="text-foreground/60 text-xs font-medium min-w-fit">
                {currentIndex + 1}/{testimonials.length}
              </span>
              <button
                onClick={goToNext}
                className="flex-1 flex items-center justify-center gap-2 bg-secondary text-white py-2 rounded-lg hover:bg-secondary/90 transition-colors text-sm font-medium"
              >
                Next <FiChevronRight />
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentIndex ? 'bg-secondary w-6' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
