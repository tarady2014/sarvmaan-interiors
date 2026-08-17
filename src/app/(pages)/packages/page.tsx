'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiCheck, FiX } from 'react-icons/fi';
import HeroImage from '@/components/HeroImage';
import { Metadata } from 'next';

type Package = {
  name: string;
  subtitle: string;
  price: string;
  range: string;
  description: string;
  timeline: string;
  popular?: boolean;
  features: { name: string; included: boolean }[];
  cta: string;
};

const packages: Package[] = [
  {
    name: 'Essential',
    subtitle: 'Perfect for small spaces',
    price: '₹2L',
    range: '₹2 - 5 Lakhs',
    description: 'Basic interior design for compact apartments and studios',
    timeline: '4-6 weeks',
    features: [
      { name: 'Single Room Design', included: true },
      { name: '3D Visualization', included: true },
      { name: 'Material & Color Consultation', included: true },
      { name: 'On-site Installation', included: true },
      { name: '1 Year Warranty', included: true },
      { name: 'Basic Support', included: true },
      { name: 'Custom Designs', included: false },
      { name: 'Project Manager', included: false },
      { name: 'Extended Warranty', included: false },
    ],
    cta: 'Get Quotation',
  },
  {
    name: 'Premium',
    subtitle: 'Most popular choice',
    price: '₹5L',
    range: '₹5 - 15 Lakhs',
    description: 'Complete design for 2-3 bedroom homes',
    timeline: '6-8 weeks',
    popular: true,
    features: [
      { name: 'Multi-room Design (2-3 rooms)', included: true },
      { name: 'Advanced 3D Renderings', included: true },
      { name: 'Premium Material Selection', included: true },
      { name: 'Full Installation & Supervision', included: true },
      { name: '2 Years Extended Warranty', included: true },
      { name: 'Regular Progress Updates', included: true },
      { name: 'Custom Design Solutions', included: true },
      { name: 'Dedicated Support', included: true },
      { name: 'Free Design Modifications', included: false },
    ],
    cta: 'Get Quotation',
  },
  {
    name: 'Luxury',
    subtitle: 'Full home transformation',
    price: '₹15L',
    range: '₹15 - 50 Lakhs',
    description: 'Complete home interior design with premium materials',
    timeline: '8-12 weeks',
    features: [
      { name: 'Complete Full-Home Design', included: true },
      { name: '3D + VR Walkthrough Experience', included: true },
      { name: 'Luxury Material Sourcing', included: true },
      { name: 'Premium Installation with Quality Checks', included: true },
      { name: 'Lifetime Warranty', included: true },
      { name: 'Dedicated Project Manager', included: true },
      { name: 'Unlimited Custom Designs', included: true },
      { name: '24/7 Priority Support', included: true },
      { name: 'Free Design Modifications & Upgrades', included: true },
    ],
    cta: 'Book Consultation',
  },
];

const commonFeatures = [
  { icon: '📐', title: 'Consultation', description: 'In-depth understanding of your needs' },
  { icon: '🎨', title: 'Design Planning', description: '3D renders and design proposals' },
  { icon: '🛠️', title: 'Execution', description: 'Professional installation with supervision' },
  { icon: '✅', title: 'Warranty', description: 'Quality assurance and after-sales support' },
];


export const metadata: Metadata = {
  title: 'Interior Design Packages & Pricing | Flexible Solutions',
  description: 'Affordable interior design packages starting from ₹2L. Essential, Premium, and Luxury packages. Flexible timeline, 3D visualization, and quality furniture included.',
  keywords: 'interior design packages, interior design cost, affordable interior design, modular kitchen price, interior design pricing',
  openGraph: {
    type: 'website',
    url: 'https://sarvmaan.com/packages',
    title: 'Interior Design Packages & Pricing | Sarvmaan',
    description: 'Affordable packages from ₹2L. Essential, Premium, and Luxury options with flexible timelines.',
    images: [
      {
        url: '/images/hero-package.webp',
        width: 1200,
        height: 630,
        alt: 'Interior Design Packages & Pricing | Sarvmaan',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Interior Design Packages | Sarvmaan Home Superhero',
    description: 'Affordable interior design packages starting from ₹2L',
  },
};

export default function PackagesPage() {
  const [selectedPackage, setSelectedPackage] = useState<number | null>(1);

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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroImage
        title="Interior Design Packages"
        subtitle="Choose the perfect package tailored to your budget and needs"
        imageUrl="/images/hero-package.webp"
        imageAlt="Interior Design Packages"
      />

      {/* Packages Section */}
      <section className="py-8 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Intro */}
          <motion.div
            className="text-center mb-8 md:mb-12 lg:mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Flexible Packages for <span className="text-secondary">Every Budget</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto mb-2">
              Starting estimates shown. Actual cost depends on space size, materials, complexity, and your specific requirements.
            </p>
            <p className="text-secondary font-semibold text-sm md:text-base">
              💡 All packages are customizable - connect with us for a personalized quote
            </p>
          </motion.div>

          {/* Pricing Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                onClick={() => setSelectedPackage(index)}
                className={`relative rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer h-full ${
                  pkg.popular
                    ? 'ring-2 ring-secondary shadow-2xl transform md:scale-105'
                    : 'shadow-lg hover:shadow-xl'
                } ${selectedPackage === index ? 'ring-2 ring-secondary' : ''}`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-secondary text-primary px-4 py-2 font-bold text-sm rounded-bl-xl z-10">
                    MOST POPULAR
                  </div>
                )}

                <div className={`p-6 md:p-8 h-full flex flex-col bg-white`}>
                  {/* Package Header */}
                  <h3 className={`text-2xl md:text-3xl font-bold mb-2 text-primary`}>
                    {pkg.name}
                  </h3>
                  <p className={`text-sm mb-4 text-gray-600`}>
                    {pkg.subtitle}
                  </p>

                  {/* Price */}
                  <div className="mb-6">
                    <div className={`text-4xl font-bold text-secondary`}>
                      {pkg.price}
                    </div>
                    <p className={`text-sm text-gray-500 mt-1`}>
                      Starting from {pkg.range}
                    </p>
                  </div>

                  {/* Description */}
                  <p className={`text-sm mb-6 text-gray-600`}>
                    {pkg.description}
                  </p>

                  {/* Timeline */}
                  <div className={`mb-6 pb-6 border-b border-gray-200`}>
                    <p className={`text-xs font-semibold text-secondary`}>
                      ⏱️ PROJECT TIMELINE
                    </p>
                    <p className={`text-sm text-primary`}>{pkg.timeline}</p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-grow">
                    {pkg.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        {feature.included ? (
                          <FiCheck className={`flex-shrink-0 w-5 h-5 mt-0.5 text-secondary`} />
                        ) : (
                          <FiX className={`flex-shrink-0 w-5 h-5 mt-0.5 text-gray-300`} />
                        )}
                        <span className={`text-sm ${feature.included ? 'text-gray-700' : 'text-gray-400'}`}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Link
                    href="/contact"
                    className={`block w-full py-3 rounded-lg font-bold text-center transition-all bg-secondary text-primary hover:bg-secondary/90`}
                  >
                    {pkg.cta} →
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* What's Included Section */}
          <motion.div
            className="mb-12 md:mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-center text-primary mb-8 md:mb-12">
              What's Included in <span className="text-secondary">Every Package</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {commonFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h4 className="font-bold text-primary mb-2">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            className="bg-gray-50 rounded-2xl p-6 md:p-8 lg:p-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-8">
              Frequently Asked <span className="text-secondary">Questions</span>
            </h3>

            <div className="space-y-6">
              {[
                {
                  q: 'Can I customize a package?',
                  a: 'Yes! All packages are starting points. We can customize any package based on your specific needs, budget, and preferences.',
                },
                {
                  q: 'What is included in the price?',
                  a: 'Design, premium materials, labor, and professional installation. The exact scope depends on your chosen package and project requirements.',
                },
                {
                  q: 'How long does a project take?',
                  a: 'Essential: 4-6 weeks | Premium: 6-8 weeks | Luxury: 8-12 weeks. Timeline depends on project scope and complexity.',
                },
                {
                  q: 'Do you offer payment plans?',
                  a: 'Yes! We offer flexible payment schedules: 30% upfront, 30% at material procurement, 40% at final completion.',
                },
                {
                  q: 'What is your warranty coverage?',
                  a: 'Essential: 1 year | Premium: 2 years | Luxury: Lifetime. Coverage includes workmanship and materials.',
                },
                {
                  q: 'Can I see previous projects?',
                  a: 'Absolutely! We have completed 500+ projects. Explore our portfolio or request a custom project showcase via contact form.',
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-4 md:p-6 border-l-4 border-secondary"
                >
                  <h4 className="font-bold text-primary mb-2 text-sm md:text-base">{faq.q}</h4>
                  <p className="text-gray-600 text-sm md:text-base">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="mt-12 md:mt-16 bg-gradient-to-r from-primary to-primary/90 rounded-2xl p-8 md:p-12 text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Still unsure which package suits you?
            </h3>
            <p className="mb-6 text-white/90 max-w-2xl mx-auto">
              Get a free, personalized consultation from our design experts. No hidden charges, no obligations!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-secondary text-primary px-8 py-3 rounded-lg font-bold hover:bg-secondary/90 transition-all"
              >
                Get Free Quotation
              </Link>
              <a
                href="tel:+917447722255"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition-all"
              >
                Call us: +91 74477 22255
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
