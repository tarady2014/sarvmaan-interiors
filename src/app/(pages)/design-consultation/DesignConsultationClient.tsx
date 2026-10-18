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
          className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-4 md:mb-6 leading-tight"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Professional Design & Consultancy
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-100 max-w-3xl mb-8"
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

      {/* Comparison Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="overflow-x-auto mb-16"
      >
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-4 text-left font-semibold">Aspect</th>
              <th className="border border-gray-300 p-4 text-left font-semibold">Traditional Designers</th>
              <th className="border border-gray-300 p-4 text-left font-semibold">Local Contractors</th>
              <th className="border border-gray-300 p-4 text-left font-semibold text-amber-700 font-bold">The SarvMaan Solution</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-4 font-semibold">Pricing Model</td>
              <td className="border border-gray-300 p-4">% Based Commission</td>
              <td className="border border-gray-300 p-4">Hidden Costs</td>
              <td className="border border-gray-300 p-4 bg-amber-50 text-amber-700 font-semibold">✓ Fixed, Transparent Pricing</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-4 font-semibold">Design Quality</td>
              <td className="border border-gray-300 p-4">Professional but Slow</td>
              <td className="border border-gray-300 p-4">Plan as They Go</td>
              <td className="border border-gray-300 p-4 bg-amber-50 text-amber-700 font-semibold">✓ Complete 3D & 2D Blueprints</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-4 font-semibold">Team Structure</td>
              <td className="border border-gray-300 p-4">One-Man Dependency</td>
              <td className="border border-gray-300 p-4">No Design Expertise</td>
              <td className="border border-gray-300 p-4 bg-amber-50 text-amber-700 font-semibold">✓ Dedicated Project Manager + Designer Team</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-4 font-semibold">Execution Support</td>
              <td className="border border-gray-300 p-4">Limited Monitoring</td>
              <td className="border border-gray-300 p-4">No Quality Audits</td>
              <td className="border border-gray-300 p-4 bg-amber-50 text-amber-700 font-semibold">✓ Scheduled Quality Checks</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-4 font-semibold">Contractor Network</td>
              <td className="border border-gray-300 p-4">May Lack Coordination</td>
              <td className="border border-gray-300 p-4">N/A</td>
              <td className="border border-gray-300 p-4 bg-amber-50 text-amber-700 font-semibold">✓ Verified & Trusted Network</td>
            </tr>
          </tbody>
        </table>
      </motion.div>

      {/* Key Advantages */}
      <div className="grid md:grid-cols-4 gap-8">
        {[
          {
            icon: '🎯',
            title: 'Zero Obligation',
            description: 'Bring your own contractors or use ours. 100% flexibility in every decision.',
          },
          {
            icon: '💰',
            title: 'Massive ROI',
            description: 'Fixed fee prevents costly rework, material wastage, and contractor disputes.',
          },
          {
            icon: '�',
            title: 'Total Transparency',
            description: 'Know exactly what you pay and exactly what value you receive.',
          },
          {
            icon: '👥',
            title: 'Expert Team',
            description: 'Senior architects & designers, not a single designer.',
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="p-8 bg-gradient-to-br from-amber-50 to-white border border-amber-200 rounded-lg hover:shadow-lg transition-shadow"
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

        {/* Pricing Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="overflow-x-auto mb-12"
        >
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100 border-b-2 border-gray-300">
                <th className="p-4 text-left font-semibold text-gray-900">Package</th>
                <th className="p-4 text-left font-semibold text-gray-900">Price (INR)</th>
                <th className="p-4 text-left font-semibold text-gray-900">Included Visits</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 hover:bg-amber-50">
                <td className="p-4 font-semibold text-gray-900">1 BHK Design & Consultancy</td>
                <td className="p-4 text-2xl font-bold text-amber-700">₹25,000</td>
                <td className="p-4 text-gray-600">4 scheduled on-site visits</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-amber-50 bg-amber-100/50">
                <td className="p-4 font-semibold text-gray-900">2 BHK Design & Consultancy</td>
                <td className="p-4 text-2xl font-bold text-amber-700">₹50,000</td>
                <td className="p-4 text-gray-600">6 scheduled on-site visits</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-amber-50">
                <td className="p-4 font-semibold text-gray-900">3 BHK Design & Consultancy</td>
                <td className="p-4 text-2xl font-bold text-amber-700">₹75,000</td>
                <td className="p-4 text-gray-600">7 scheduled on-site visits</td>
              </tr>
            </tbody>
          </table>
        </motion.div>

        {/* Package Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white border-2 border-amber-200 rounded-xl p-8 max-w-4xl mx-auto"
        >
          <p className="text-gray-700 text-center text-lg leading-relaxed">
            <span className="font-semibold text-gray-900">Committed to ensuring low costs for you with no % fees.</span><br/><br/>
            Each package includes:
            <div className="mt-4 grid md:grid-cols-2 gap-4 text-left">
              <div>✓ Complete 3D & 2D Blueprints</div>
              <div>✓ Precise Material Estimates</div>
              <div>✓ Project Manager + Designer Team</div>
              <div>✓ Scheduled On-Site Quality Checks</div>
            </div>
            <div className="mt-6 text-amber-700 font-semibold">
              Ready for ANY contractor to execute flawlessly.
            </div>
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/contact">
            <button className="px-10 py-4 bg-amber-700 text-white rounded-lg font-semibold hover:bg-amber-800 transition-all text-lg">
              Book Your Consultation Today
            </button>
          </Link>
        </motion.div>
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
        className="bg-gradient-to-r from-amber-700 via-amber-800 to-amber-900 rounded-2xl p-12 md:p-16 text-white text-center"
      >
        <h2 className="text-4xl md:text-5xl font-light mb-6">
          Want Us To Execute Too?
        </h2>
        <p className="text-lg text-amber-100 max-w-3xl mx-auto mb-8 leading-relaxed">
          If you decide to work with SarvMaan for complete interior execution after the design consultation, your design fees can be adjusted towards your turnkey project cost.
        </p>
        <Link href="/packages">
          <button className="bg-amber-300 text-amber-900 px-10 py-4 rounded-lg font-semibold hover:bg-amber-200 transition-all text-lg">
            Explore Turnkey Interiors
          </button>
        </Link>
      </motion.div>
    </div>
  </section>
);

const TestimonialSection = () => {
  const testimonials = [
    {
      name: 'Priya Sharma',
      area: 'Wakad, Pune',
      text: 'The design consultation was exactly what I needed. I got professional guidance without overwhelming myself with a full turnkey project.',
      rating: 5,
    },
    {
      name: 'Rajesh Patel',
      area: 'Hinjewadi, Pune',
      text: 'The 3D visualizations helped me visualize the space perfectly. The material recommendations saved me thousands!',
      rating: 5,
    },
    {
      name: 'Anjali Desai',
      area: 'Baner, Pune',
      text: 'Professional, responsive, and flexible. They understood my vision and delivered exactly what I needed.',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            What Our Clients Say
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-gradient-to-br from-amber-50 to-white border border-amber-100 rounded-lg"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-amber-700">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.area}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

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
                className="w-full p-6 flex justify-between items-center hover:bg-amber-50 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900 text-left">{faq.question}</span>
                <span className="text-2xl text-amber-700">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>

              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6 text-gray-600 border-t border-amber-100"
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

const FinalCTA = () => (
  <section className="py-20 px-4 sm:px-8 bg-white">
    <div className="max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
          Stop Overspending on Renovations
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Most Indian homeowners overspend by 30-40% on renovations due to poor planning and rushed decisions. Get a comprehensive, contractor-ready design plan with precise budget estimates and expert guidance—all at a transparent, fixed price. Save money. Avoid mistakes. Execute with confidence.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <button className="px-10 py-4 bg-amber-700 text-white rounded-lg font-semibold hover:bg-amber-800 transition-all text-lg">
              Book Free Consultation Call
            </button>
          </Link>
          <button 
            onClick={() => {
              const element = document.getElementById('packages');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="px-10 py-4 border-2 border-amber-700 text-amber-700 rounded-lg font-semibold hover:bg-amber-50 transition-all text-lg"
          >
            View All Packages
          </button>
        </div>
      </motion.div>
    </div>
  </section>
);

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
      <TestimonialSection />
      <FAQSection />
      <FinalCTA />
    </main>
  );
}
