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
          Professional Interior Design & Consultation Services
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-100 max-w-2xl mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Get expert interior design plans, 3D visualizations, material guidance, and execution
          support without committing to a full turnkey package.
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
          <Link href="#packages">
            <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all">
              View Packages
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

// Section Components
const WhyThisService = () => (
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
          Designed For Homeowners Who Want
          <span className="block text-amber-700">Flexibility</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Get professional design guidance without the commitment of a full turnkey project
        </p>
      </motion.div>

      {/* Cards Grid */}
      <div className="grid md:grid-cols-4 gap-8">
        {[
          {
            icon: '⏱️',
            title: 'Execute At Your Own Pace',
            description: 'Take your time implementing the design. No pressure, no timelines.',
          },
          {
            icon: '🤝',
            title: 'Work With Your Preferred Vendors',
            description: 'Use contractors you trust or our recommendations. Complete flexibility.',
          },
          {
            icon: '💡',
            title: 'Avoid Costly Design Mistakes',
            description: 'Professional guidance helps you make confident decisions and save money.',
          },
          {
            icon: '🎯',
            title: 'Get Expert Guidance Before Investing',
            description: 'Understand the full scope before you commit significant resources.',
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
          Our Design Process
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          A structured approach to transform your vision into reality
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Connector line */}
        <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-amber-200 via-amber-700 to-amber-200"></div>

        {/* Steps */}
        <div className="grid md:grid-cols-5 gap-8">
          {[
            {
              number: '01',
              title: 'Discovery Call',
              description: 'Understand your vision, lifestyle, and requirements',
            },
            {
              number: '02',
              title: 'Site Measurement & Requirement Gathering',
              description: 'Detailed measurements and in-depth consultation',
            },
            {
              number: '03',
              title: '2D Layout & Space Planning',
              description: 'Optimized floor plans and space configuration',
            },
            {
              number: '04',
              title: '3D Design & Material Selection',
              description: 'Photorealistic visualizations and material recommendations',
            },
            {
              number: '05',
              title: 'Execution Support & Vendor Guidance',
              description: 'Ongoing support during implementation phase',
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
  const packages = [
    {
      name: 'Essential Design',
      price: 'Starting at ₹25,000',
      features: [
        'Design consultation',
        '2D layouts',
        'Mood boards',
        'Material recommendations',
        'One revision',
      ],
      highlighted: false,
    },
    {
      name: 'Premium Design',
      price: 'Starting at ₹50,000',
      features: [
        'Everything in Essential',
        'Photorealistic 3D designs',
        'Electrical & lighting plans',
        'Material selection guidance',
        '2 site visits',
        'Two revisions',
      ],
      highlighted: true,
      badge: 'Most Popular',
    },
    {
      name: 'Design + Project Guidance',
      price: 'Starting at ₹75,000',
      features: [
        'Everything in Premium',
        'Vendor recommendations',
        'Procurement support',
        'Site review visits',
        'Execution guidance',
        'Unlimited revisions',
      ],
      highlighted: false,
    },
  ];

  return (
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
            Flexible Packages For Every Need
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the perfect package based on your requirements and budget
          </p>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-xl overflow-hidden transition-all ${
                pkg.highlighted
                  ? 'bg-gradient-to-br from-amber-700 to-amber-900 text-white md:scale-105 shadow-2xl'
                  : 'bg-white border-2 border-gray-200 text-gray-900'
              }`}
            >
              {/* Badge */}
              {pkg.badge && (
                <div className="absolute top-0 right-0 bg-amber-300 text-amber-900 px-4 py-1 text-sm font-semibold">
                  {pkg.badge}
                </div>
              )}

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-2">{pkg.name}</h3>
                <div className="text-3xl font-light mb-8">{pkg.price}</div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <span className={`${pkg.highlighted ? 'text-amber-300' : 'text-amber-700'}`}>
                        ✓
                      </span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link href="/contact">
                  <button
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                      pkg.highlighted
                        ? 'bg-amber-300 text-amber-900 hover:bg-amber-200'
                        : 'bg-amber-700 text-white hover:bg-amber-800'
                    }`}
                  >
                    Choose Package
                  </button>
                </Link>
              </div>
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
      title: '2D Layout Plans',
      description: 'Optimized floor plans and spatial configurations',
    },
    {
      title: '3D Visualizations',
      description: 'Photorealistic renderings of your space',
    },
    {
      title: 'Material Selection Guide',
      description: 'Curated options for quality and budget',
    },
    {
      title: 'Color Palette',
      description: 'Harmonious colors for your space',
    },
    {
      title: 'Vendor Recommendations',
      description: 'Trusted suppliers and contractors',
    },
    {
      title: 'Execution Guidance',
      description: 'Support during implementation',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-8 bg-gradient-to-b from-amber-50 to-white">
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
            What You Receive
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive deliverables for every stage of your design journey
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
              className="p-6 bg-white border border-amber-100 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">
                {['📐', '🖼️', '🎨', '🌈', '👥', '🏗️'][index]}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TurnkeyConversion = () => (
  <section className="py-20 px-4 sm:px-8">
    <div className="max-w-6xl mx-auto">
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
        <p className="text-lg text-amber-100 max-w-2xl mx-auto mb-8">
          If you decide to work with SarvMaan for complete interior execution, your design
          fees can be adjusted towards your turnkey project.
        </p>
        <Link href="/packages">
          <button className="bg-amber-300 text-amber-900 px-8 py-3 rounded-lg font-semibold hover:bg-amber-200 transition-all">
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
        'Yes! Our design consultation service is designed for flexibility. You can use your preferred contractors or work with our recommended vendors. We provide guidance either way.',
    },
    {
      question: 'Do you provide only design services?',
      answer:
        'Our consultation packages focus on design and guidance. However, we can provide execution support if needed, or help you coordinate with your chosen contractors.',
    },
    {
      question: 'How many revisions are included?',
      answer:
        'Essential packages include 1 revision, Premium includes 2 revisions, and Design + Project Guidance packages include unlimited revisions.',
    },
    {
      question: 'Do you help with material selection?',
      answer:
        'Absolutely! Material selection guidance and recommendations are core parts of all our consultation packages. We help you choose quality materials within your budget.',
    },
    {
      question: 'Can I upgrade to a turnkey package later?',
      answer:
        'Yes! Your design fees can be credited towards a complete turnkey project if you decide to work with us for full execution later.',
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
      >
        <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
          Start Your Interior Journey With Expert Guidance
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Whether you execute independently or choose SarvMaan for a complete transformation,
          we help you make confident design decisions.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <button className="px-8 py-3 bg-amber-700 text-white rounded-lg font-semibold hover:bg-amber-800 transition-all">
              Schedule Consultation
            </button>
          </Link>
          <Link href="/contact">
            <button className="px-8 py-3 border-2 border-amber-700 text-amber-700 rounded-lg font-semibold hover:bg-amber-50 transition-all">
              Contact Us
            </button>
          </Link>
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
      <TurnkeyConversion />
      <TestimonialSection />
      <FAQSection />
      <FinalCTA />
    </main>
  );
}
