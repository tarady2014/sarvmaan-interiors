'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

// Hero Section Component
const HeroSectionCustom = () => (
  <section className="relative w-full pt-16">
    <div className="relative w-full h-96 md:h-[600px] overflow-hidden bg-black">
      <Image
        src="/images/hero-home.webp"
        alt="Professional Interior Design Consultation"
        fill
        className="object-cover w-full h-full"
        priority
      />
      <div className="absolute inset-0 bg-black/40"></div>

      <motion.div
        className="absolute inset-0 flex flex-col justify-center items-start px-4 md:px-8 max-w-7xl mx-auto w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light text-white mb-4 md:mb-6 leading-tight"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Professional Design & Consultancy
        </motion.h1>

        <motion.p
          className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-100 max-w-3xl mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Bridge the gap between professional design expertise and flawless execution. Get contractor-ready blueprints, precise material estimates, and expert guidance—all at transparent, fixed-fee pricing with zero hidden charges.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Link href="/contact">
            <button className="px-8 py-3 bg-amber-700 text-white rounded-lg font-semibold hover:bg-amber-800 transition-all">
              Book Free Consultation
            </button>
          </Link>
          <button 
            onClick={() => {
              const element = document.getElementById('packages');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all"
          >
            View Packages
          </button>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

// Section Components
const WhyThisService = () => (
  <section className="py-20 px-4 sm:px-8 bg-white">
    <div className="max-w-7xl mx-auto">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
          Why Choose SarvMaan Design & Consultancy?
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-4">
          Most Indian homeowners overspend by 30-40% on renovations due to poor planning and contractor miscommunication. We bridge the gap between professional design expertise and flawless execution.
        </p>
      </motion.div>

      {/* Comparison Cards */}
      <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16">
        {[
          {
            title: 'Traditional Interior Designers',
            points: ['% Based Commission', 'Expensive Fees', 'Time-consuming delays', 'One man dependency'],
            highlight: false,
          },
          {
            title: 'Local Contractors',
            points: ['Lack design knowledge', 'Plan as they go', 'Material wastage', 'No quality assurance'],
            highlight: false,
          },
          {
            title: 'The SarvMaan Solution',
            points: ['✓ Fixed, transparent pricing', '✓ Complete 3D & 2D Blueprints', '✓ Project Manager + Team', '✓ Scheduled Quality Checks'],
            highlight: true,
          },
        ].map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`p-6 md:p-8 rounded-xl border-2 ${
              section.highlight
                ? 'border-[#d4af37] bg-gradient-to-br from-amber-50 to-white'
                : 'border-gray-200 bg-white'
            }`}
          >
            <h3 className={`text-xl md:text-2xl font-bold mb-6 ${
              section.highlight ? 'text-[#d4af37]' : 'text-gray-900'
            }`}>
              {section.title}
            </h3>
            <ul className="space-y-3">
              {section.points.map((point, i) => (
                <li key={i} className={`text-sm md:text-base leading-relaxed ${
                  section.highlight ? 'text-gray-800 font-semibold' : 'text-gray-600'
                }`}>
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const DesignProcess = () => (
  <section className="py-20 px-4 sm:px-8 bg-gradient-to-b from-white to-amber-50">
    <div className="max-w-7xl mx-auto">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
          The 7-Step Client Journey
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Our standardized operational process from client onboarding to project handover
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Connector line */}
        <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-amber-200 via-amber-700 to-amber-200"></div>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              number: '01',
              title: 'Site Measurement Visit',
              description: 'Initial on-site architectural measurement (post-advance payment)',
            },
            {
              number: '02',
              title: '3D Conceptualization',
              description: 'Design and delivery of immersive 3D drawings for all rooms',
            },
            {
              number: '03',
              title: '2D Working Drawings Release',
              description: 'Handover of exact technical blueprints for the execution team',
            },
            {
              number: '04',
              title: 'Cost & Material Handover',
              description: 'Delivery of comprehensive material and cost estimate list',
            },
            {
              number: '05',
              title: 'Accompanied Material Selection',
              description: 'Guided market visits for finishes, laminates, tiles, and fixtures',
            },
            {
              number: '06',
              title: 'Contractor Selection',
              description: 'Choose from our verified network or bring your own contractor',
            },
            {
              number: '07',
              title: 'Quality Monitoring',
              description: 'Scheduled site visits to audit work and ensure flawless finishing',
            },
          ].map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Number circle */}
              <div className="flex justify-center mb-6">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-700 to-amber-900 text-white flex items-center justify-center text-2xl font-light shadow-lg"
                >
                  {step.number}
                </motion.div>
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const PackagesSection = () => {
  return (
    <section className="py-20 px-4 sm:px-8 bg-gradient-to-b from-white to-amber-50" id="packages">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Fixed-Fee Packages
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our pricing model is strictly flat-fee. No percentage-based commissions, no hidden charges. This transparency is our core selling point.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {[
            {
              title: '1 BHK Design & Consultancy',
              price: '₹25,000',
              visits: '4 scheduled on-site visits',
              highlight: false,
            },
            {
              title: '2 BHK Design & Consultancy',
              price: '₹50,000',
              visits: '6 scheduled on-site visits',
              highlight: true,
            },
            {
              title: '3 BHK Design & Consultancy',
              price: '₹75,000',
              visits: '7 scheduled on-site visits',
              highlight: false,
            },
          ].map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`p-6 md:p-8 rounded-xl border-2 transition-all ${
                pkg.highlight
                  ? 'border-[#d4af37] bg-gradient-to-br from-amber-50 to-white shadow-lg md:scale-105'
                  : 'border-gray-200 bg-white hover:border-[#d4af37] hover:shadow-lg'
              }`}
            >
              {pkg.highlight && (
                <div className="inline-block bg-[#d4af37] text-[#1a1410] px-4 py-1 rounded-full text-sm font-bold mb-4">
                  Most Popular
                </div>
              )}
              <h3 className={`text-xl md:text-2xl font-bold mb-4 ${
                pkg.highlight ? 'text-gray-900' : 'text-gray-900'
              }`}>
                {pkg.title}
              </h3>
              <div className="mb-4">
                <p className={`text-4xl font-bold ${
                  pkg.highlight ? 'text-[#d4af37]' : 'text-[#d4af37]'
                }`}>
                  {pkg.price}
                </p>
              </div>
              <div className="mb-6 pb-6 border-b border-gray-200">
                <p className="text-gray-600 font-medium text-sm md:text-base">{pkg.visits}</p>
              </div>
              
              {/* Package Includes */}
              <div className="mb-6">
                <ul className="space-y-2 text-xs md:text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-[#d4af37] flex-shrink-0">✓</span>
                    <span className="text-gray-600">Complete 3D & 2D Blueprints</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#d4af37] flex-shrink-0">✓</span>
                    <span className="text-gray-600">Precise Material Estimates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#d4af37] flex-shrink-0">✓</span>
                    <span className="text-gray-600">Project Manager + Designer Team</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#d4af37] flex-shrink-0">✓</span>
                    <span className="text-gray-600">Scheduled Quality Checks</span>
                  </li>
                </ul>
              </div>
              
              <button
                onClick={() => window.location.href = '/contact'}
                className={`w-full py-3 px-4 rounded-lg font-bold transition-all text-center ${
                  pkg.highlight
                    ? 'bg-[#d4af37] text-[#1a1410] hover:bg-[#e8c547]'
                    : 'bg-gray-100 text-gray-900 hover:bg-[#d4af37] hover:text-[#1a1410]'
                }`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhatYouReceive = () => {
  const items = [
    {
      icon: '🖼️',
      title: 'Photo-Realistic 3D Designs',
      description: 'Complete visual representation of the final space in stunning detail',
    },
    {
      icon: '📐',
      title: 'Contractor-Ready 2D Working Drawings',
      description: 'Detailed technical layouts for electricals, false ceilings, and custom furniture',
    },
    {
      icon: '💰',
      title: 'Total Cost & Material Estimates',
      description: 'Precise lists of required materials to prevent over-ordering and over-spending',
    },
    {
      icon: '🔍',
      title: 'On-Site Quality Audits',
      description: 'Rigorous inspection during scheduled visits to ensure expected quality and standards',
    },
    {
      icon: '👥',
      title: 'Verified Network Referrals',
      description: 'Access to our vetted network of skilled workers, reliable contractors, and trusted material vendors',
    },
    {
      icon: '🛒',
      title: 'Purchase Assistance',
      description: 'Professional guidance during material procurement to secure quality and value',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-8 bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Core Deliverables
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ensure every client understands that our deliverable package equips ANY contractor to build easily and accurately.
          </p>
        </motion.div>

        {/* Items Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-white border-2 border-amber-200 rounded-xl hover:shadow-xl transition-shadow"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SarvMaanAdvantage = () => (
  <section className="py-20 px-4 sm:px-8 bg-white">
    <div className="max-w-7xl mx-auto">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
          The SarvMaan Advantage
        </h2>
      </motion.div>

      {/* Advantages Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {[
          {
            title: 'Massive ROI',
            description: 'The fixed fee pays for itself by preventing costly re-work, reducing material wastage, and eliminating contractor disputes.',
            icon: '📊',
          },
          {
            title: 'Total Transparency',
            description: 'No surprises. Clients know exactly what they are paying us and exactly what value they receive in return.',
            icon: '🔍',
          },
          {
            title: '100% Zero Obligation',
            description: 'Total flexibility. Bring your own contractors or use ours. Use our vendors or find your own. We are consultants, not gatekeepers.',
            icon: '🆓',
          },
          {
            title: 'Expert Team, Not Single Designer',
            description: 'Senior architects & designers ensure quality. We have a professional design team, not a single designer working alone.',
            icon: '👥',
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="p-8 bg-gradient-to-br from-amber-50 to-white border-2 border-amber-200 rounded-xl"
          >
            <div className="text-5xl mb-4">{item.icon}</div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">{item.title}</h3>
            <p className="text-gray-600 leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const TurnkeyConversion = () => (
  <section className="py-20 px-4 sm:px-8">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-[#1a1410] via-[#2d2420] to-[#1a1410] rounded-2xl p-8 md:p-12 lg:p-16 text-white text-center"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4 md:mb-6">
          Want Us To Execute Too?
        </h2>
        <p className="text-base md:text-lg text-gray-200 max-w-3xl mx-auto mb-8 leading-relaxed">
          If you decide to work with SarvMaan for complete interior execution after the design consultation, your design fees can be adjusted towards your turnkey project.
        </p>
        <Link href="/packages" className="inline-block">
          <button className="bg-[#d4af37] text-[#1a1410] px-8 md:px-10 py-3 md:py-4 rounded-lg font-bold hover:bg-[#e8c547] transition-all text-base md:text-lg">
            Explore Turnkey Interiors
          </button>
        </Link>
      </motion.div>
    </div>
  </section>
);

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Can I use my own contractors?',
      answer:
        'Absolutely! 100% zero obligation. You can bring your own contractors or use our verified network. You have complete flexibility in choosing who executes your design. We are consultants, not gatekeepers.',
    },
    {
      question: 'How does fixed pricing benefit me?',
      answer:
        'With fixed-fee pricing, you know exactly what you are paying and what value you receive. No percentage-based commissions, no hidden charges, no surprise costs. This transparency is our core selling point.',
    },
    {
      question: 'What are the scheduled on-site visits for?',
      answer:
        '1 BHK includes 4 visits, 2 BHK includes 6 visits, and 3 BHK includes 7 visits. These scheduled visits cover site measurement, design conceptualization, 2D drawing release, material selection guidance, contractor selection, and quality checks during execution.',
    },
    {
      question: 'Do you help with material selection?',
      answer:
        'Yes! Purchase Assistance is included. We guide you during material procurement with our Accompanied Material Selection service—guided market visits to help you select finishes, laminates, tiles, and fixtures at the best value.',
    },
    {
      question: 'Can I later upgrade to a full turnkey project?',
      answer:
        'Yes! If you decide to work with SarvMaan for complete interior execution, your design consultation fees can be credited towards your turnkey project cost.',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-8 bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="border border-amber-200 rounded-lg overflow-hidden bg-white"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-4 md:p-6 flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="text-base md:text-lg font-semibold text-gray-900 text-left">{faq.question}</span>
                <span className="text-2xl text-[#d4af37] flex-shrink-0 ml-4">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>

              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-4 md:px-6 pb-4 md:pb-6 text-gray-600 text-sm md:text-base border-t border-gray-200"
                >
                  {faq.answer}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function DesignConsultationClient() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSectionCustom />

      {/* Sections */}
      <WhyThisService />
      <DesignProcess />
      <PackagesSection />
      <WhatYouReceive />
      <SarvMaanAdvantage />
      <TurnkeyConversion />
      <FAQSection />
    </main>
  );
}
