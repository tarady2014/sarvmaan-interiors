'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiCheckCircle, FiArrowRight, FiPhone } from 'react-icons/fi';
import HeroImage from '@/components/HeroImage';
import { Metadata } from 'next';

const steps = [
  { id: 1, title: 'Consultation', description: 'Understand your vision and budget.' },
  { id: 2, title: 'Design', description: '3D visualization and design proposals.' },
  { id: 3, title: 'Planning', description: 'Finalize materials and timeline.' },
  { id: 4, title: 'Execution', description: 'Expert craftsmanship and quality.' },
  { id: 5, title: 'Quality Check', description: 'Rigorous inspection for perfection.' },
  { id: 6, title: 'Handover', description: 'Delivery and post-project support.' },
];


export const metadata: Metadata = {
  title: 'Our Interior Design Process | 6-Step Transparent Workflow',
  description: 'Understand our proven 6-step design process: Consultation, Design, Planning, Execution, Quality Check, and Handover. Transparent, professional, and customer-focused.',
  keywords: 'interior design process, design workflow, home design steps, interior design consultation, project management',
  openGraph: {
    type: 'website',
    url: 'https://sarvmaan.com/process',
    title: 'Our Design Process | Sarvmaan Home Superhero',
    description: '6-step transparent process: Consultation → Design → Planning → Execution → QC → Handover',
    images: [
      {
        url: '/images/hero-process.webp',
        width: 1200,
        height: 630,
        alt: 'Our Design Process | Sarvmaan Home Superhero',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Design Process | Sarvmaan Home Superhero',
    description: '6-step transparent interior design workflow',
  },
};

export default function Process() {
  return (
    <div className="flex flex-col">
      <HeroImage 
        title="Our Process"
        subtitle="Transparent, step-by-step process for your satisfaction"
        imageUrl="images/hero-process.webp"
        imageAlt="Our Design Process"
      />

      {/* Process Steps */}
      <section className="py-8 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="relative p-4 md:p-6 rounded-lg bg-light border border-gray-200 shadow-soft hover:shadow-base transition-all"
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

                {/* Arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-8 top-1/2 transform -translate-y-1/2">
                    <FiArrowRight className="text-secondary text-2xl" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline & Details */}
      <section className="py-8 md:py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-primary mb-2 md:mb-4">Project Timeline</h2>
            <p className="text-sm md:text-lg text-foreground/70">
              Typical project duration
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              { title: 'Small Projects', time: '30-45 days', example: 'Single bedroom, wardrobe, kitchen' },
              { title: 'Medium Projects', time: '60-90 days', example: '2-3 room renovation' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-4 md:p-6 rounded-lg border-l-4 border-secondary shadow-soft"
              >
                <h3 className="text-lg md:text-xl font-bold text-primary mb-1">{item.title}</h3>
                <p className="text-2xl md:text-3xl font-bold text-secondary mb-2">{item.time}</p>
                <p className="text-xs md:text-sm text-foreground/70">{item.example}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-8 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-primary mb-2 md:mb-4">Quality Assurance</h2>
            <p className="text-sm md:text-lg text-foreground/70">
              Our commitment to excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {[
              'ISI-marked materials only',
              'Expert craftsmanship',
              'Regular quality inspections',
              'Transparent communication',
              'On-time delivery guarantee',
              'Post-project support',
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-4 bg-light rounded-lg border border-gray-200"
              >
                <FiCheckCircle className="text-secondary text-2xl flex-shrink-0 mt-1" />
                <span className="text-sm md:text-base font-medium text-foreground">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 md:py-16 bg-gradient-to-r from-[#1a1410] to-[#b8956a] text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-6">Ready to Start?</h2>
            <p className="text-sm md:text-base text-white/90 mb-6 md:mb-8 max-w-2xl mx-auto">
              Schedule a free consultation to discuss your project timeline and requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-white text-primary px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm md:text-base"
                style={{ backgroundColor: '#d4af37', color: '#ffffff', textDecoration: 'none' }}
              >
                Book Consultation
              </Link>
              <a
                href="https://wa.me/917447722255"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-green-600 transition-colors text-sm md:text-base flex items-center justify-center gap-2"
              >
                <FiPhone size={18} /> Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
