'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FiGrid, FiBox, FiHome, FiBriefcase, FiTrendingUp, FiCheckSquare } from 'react-icons/fi';
import HeroImage from '@/components/HeroImage';

const services = [
  {
    id: 1,
    icon: FiGrid,
    title: 'Modular Kitchen Design',
    image: 'images/projects/kitchen-1.webp',
    features: ['Premium plywood & materials', 'Quartz countertops', 'Smart storage solutions'],
    budget: '₹8,00,000 - ₹12,00,000',
    timeline: '45 days',
  },
  {
    id: 2,
    icon: FiBox,
    title: 'Full Home Interiors',
    image: 'images/projects/completeinterior-1.webp',
    features: ['Custom designed spaces', 'Complete home makeover', 'Quality furniture installation'],
    budget: '₹3,00,000 - ₹6,00,000',
    timeline: '30 days',
  },
  {
    id: 3,
    icon: FiHome,
    title: '2D & 3D Interior Design',
    image: 'images/hero-services.png',
    features: ['Detailed 2D floor plans', '3D visualization rendering', 'Design consultation'],
    budget: '₹7,50,000 - ₹10,50,000',
    timeline: '40 days',
  },
  {
    id: 4,
    icon: FiBriefcase,
    title: 'False Ceiling & Lighting',
    image: 'images/hero-services.png',
    features: ['Decorative ceiling designs', 'LED lighting solutions', 'Acoustic treatments'],
    budget: '₹25,00,000+',
    timeline: '90 days',
  },
  {
    id: 5,
    icon: FiTrendingUp,
    title: 'Wall Finishes & Painting',
    image: 'images/hero-services.png',
    features: ['Premium paint finishes', 'Texture & wallpaper', 'Wall decor installation'],
    budget: '₹6,00,000 - ₹9,00,000',
    timeline: '35 days',
  },
  {
    id: 6,
    icon: FiCheckSquare,
    title: 'Interior Execution & Site Supervision',
    image: 'images/hero-services.png',
    features: ['Complete project execution', 'On-site quality supervision', 'Timeline management'],
    budget: '₹18,00,000 - ₹25,00,000',
    timeline: '120 days',
  },
];

export default function Services() {
  return (
    <div className="flex flex-col">
      <HeroImage 
        title="Our Services"
        subtitle="Comprehensive interior design and execution"
        imageUrl="images/hero-services.webp"
        imageAlt="Interior Design Services"
      />

      {/* Services Grid */}
      <section className="py-8 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-light rounded-lg overflow-hidden border border-gray-200 hover:shadow-base transition-shadow"
                >
                  {/* Image */}
                  <div className="relative h-48 md:h-56 w-full bg-gray-200 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4 md:p-6">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="text-lg md:text-2xl text-secondary" />
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-primary mt-1">{service.title}</h3>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <p className="text-xs md:text-sm font-semibold text-foreground/70 mb-2">Key Features:</p>
                      <ul className="space-y-1">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="text-xs md:text-sm text-foreground/80 flex items-start gap-2">
                            <span className="text-secondary mt-1">✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <Link
                      href="/contact"
                      className="block w-full bg-secondary text-white py-2 md:py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors text-center text-sm md:text-base"
                    >
                      Discuss Project
                    </Link>
                  </div>
                </motion.div>
              );
            })}
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
            <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-6">Let's Start Your Project</h2>
            <p className="text-sm md:text-base text-white/90 mb-6 md:mb-8 max-w-2xl mx-auto">
              Schedule a free consultation with our design team to discuss your requirements and budget.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-primary px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm md:text-base"
            >
              Book Free Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
