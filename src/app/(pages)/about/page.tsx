'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FiAward, FiTarget, FiUsers, FiHeart } from 'react-icons/fi';
import HeroImage from '@/components/HeroImage';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'About Sarvmaan Home Superhero | Award-Winning Interior Designers',
  description: '6+ years of excellence in interior design. 500+ successful projects. Meet our expert team dedicated to transforming homes in Pune with premium design solutions.',
  keywords: 'interior designers Pune, home design experts, modular kitchen designers, wardrobes, furniture design',
  openGraph: {
    type: 'website',
    url: 'https://sarvmaan.com/about',
    title: 'About Sarvmaan | Pune Interior Design Experts',
    description: '6+ years of excellence. 500+ projects. Premium interior design & modular solutions.',
    images: [
      {
        url: '/images/hero-about.webp',
        width: 1200,
        height: 630,
        alt: 'About Sarvmaan | Pune Interior Design Experts',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Sarvmaan | Pune Interior Design Experts',
    description: 'Award-winning interior designers with 500+ successful projects',
  },
};

export default function About() {
  const values = [
    { icon: FiTarget, title: 'Excellence' },
    { icon: FiHeart, title: 'Customer Focus' },
    { icon: FiUsers, title: 'Collaboration' },
    { icon: FiAward, title: 'Innovation' },
  ];

  const team = [
    {
      name: 'Nitin',
      role: 'Founder',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
    },
    {
      name: 'Priya Patel',
      role: 'Designer',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop',
    },
    {
      name: 'Amit Kumar',
      role: 'Project Manager',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop',
    },
    {
      name: 'Sneha Desai',
      role: 'Specialist',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
    },
  ];

  return (
    <div className="flex flex-col">
      <HeroImage 
        title="About Sarvmaan Home Superhero"
        subtitle="Premium interior design solutions since 2017"
        imageUrl="/images/hero-about.webp"
        imageAlt="About Sarvmaan Home Superhero"
      />

      {/* Story Section */}
      <section className="py-8 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3 md:mb-6">Our Story</h2>
              <div className="space-y-3 md:space-y-4">
                <p className="text-sm md:text-base text-foreground leading-relaxed">
                  Founded in 2017, Sarvmaan Home Superhero started with a simple vision: to make premium interior design accessible to everyone.
                </p>
                <p className="text-sm md:text-base text-foreground leading-relaxed">
                  Over 6+ years, we've completed 500+ projects across Pune, earning the trust of thousands with professional execution and transparent pricing.
                </p>
                <p className="text-sm md:text-base text-foreground leading-relaxed">
                  We create spaces that enhance quality of life, improve functionality, and reflect personality through 3D design, ISI-marked materials, and milestone tracking.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-72 md:h-96"
            >
              <Image
                src="/images/sarvmaan-office.webp"
                alt="Sarvmaan Home Superhero Office"
                fill
                className="object-cover rounded-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-8 md:py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-6 md:mb-12"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-primary mb-2 md:mb-4">Our Values</h2>
            <p className="text-sm md:text-lg text-foreground/70">
              Driven by design excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4 md:p-6 bg-white rounded-lg shadow-soft hover:shadow-base transition-all"
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 mx-auto mb-2 md:mb-3 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <Icon className="text-lg md:text-2xl text-secondary" />
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-primary">{value.title}</h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* COMMENTED OUT - Core Team Section
      <section className="py-8 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-6 md:mb-12"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-primary mb-2 md:mb-4">Our Team</h2>
            <p className="text-sm md:text-lg text-foreground/70">
              Talented professionals
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative h-40 md:h-64 w-full mb-2 md:mb-4 rounded-lg overflow-hidden bg-gray-200">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-sm md:text-base font-bold text-primary">{member.name}</h3>
                <p className="text-xs md:text-sm text-secondary font-medium">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* Stats Section */}
      <section className="py-8 md:py-16 bg-gradient-to-r from-[#1a1410] to-[#b8956a] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
            {[
              { number: '500+', label: 'Projects' },
              { number: '10+', label: 'Years' },
              { number: '1000+', label: 'Clients' },
              { number: '50+', label: 'Team' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-3xl md:text-5xl font-bold mb-1 md:mb-2">{stat.number}</p>
                <p className="text-xs md:text-base text-gray-200">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 md:py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3 md:mb-6">Transform Your Space?</h2>
            <p className="text-sm md:text-lg text-foreground/70 mb-6 md:mb-8 max-w-2xl mx-auto">
              Let's discuss your interior design project.
            </p>
            <Link
              href="/contact"
              className="inline-block text-primary px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:opacity-90 transition-colors text-sm md:text-base"
              style={{ backgroundColor: '#d4af37', color: '#1a1410' }}
            >
              Book a Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
