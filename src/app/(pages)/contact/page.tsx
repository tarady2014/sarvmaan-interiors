'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiPhone, FiMail, FiMapPin, FiClock, FiSend } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import HeroImage from '@/components/HeroImage';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    serviceCategory: '',
    service: '',
    bhkType: '',
    commercialType: '',
    carpetArea: '',
    budgetRange: '',
    timeline: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Service categories and options matching Services Page
  const serviceOptions = {
    'Core Solutions': [
      'Modular Kitchen Design',
      'Full Home Interiors',
      'Bedroom Interior',
      'Bathroom Interior',
    ],
    'Design Services': [
      '2D & 3D Interior Design',
      'Material & Color Consultation',
      'Lighting Design',
    ],
    'Execution Services': [
      'Carpentry & Woodwork',
      'False Ceiling & Integrated Lighting',
      'Painting & Wall Finishes',
      'Turnkey Execution & Site Supervision',
    ],
    'Specialized': [
      'Modular Storage Solutions',
      'Commercial Interiors',
      'Renovation & Makeover Services',
      'Smart Home & Premium Add-ons',
    ],
  };

  const bhkOptions = ['1 BHK', '2 BHK', '3 BHK', '4 BHK', '4+ BHK'];
  const commercialOptions = ['Office', 'Retail', 'Café/Restaurant', 'Healthcare', 'Other'];
  const budgetOptions = [
    '₹1-3 Lakhs',
    '₹3-5 Lakhs',
    '₹5-10 Lakhs',
    '₹10-20 Lakhs',
    '₹20+ Lakhs',
  ];
  const timelineOptions = ['Immediate', '1-3 months', '3-6 months', '6+ months'];

  const isHomeInteriorService = () => {
    const homeServices = ['Full Home Interiors', 'Bedroom Interior', 'Bathroom Interior'];
    return homeServices.includes(formData.service);
  };

  const isCommercialService = () => {
    return formData.service === 'Commercial Interiors';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ 
          name: '', 
          email: '', 
          phone: '', 
          location: '',
          serviceCategory: '',
          service: '',
          bhkType: '',
          commercialType: '',
          carpetArea: '',
          budgetRange: '',
          timeline: '',
          message: '' 
        });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    { icon: FiPhone, title: 'Phone', value: '+91 74477 22255', link: 'tel:+917447722255' },
    { icon: FiMail, title: 'Email', value: 'contact@SarvMaan.com', link: 'mailto:contact@SarvMaan.com' },
    { icon: FiMapPin, title: 'Location', value: 'Bavdhan, Pune', link: 'https://maps.google.com' },
    { icon: FiClock, title: 'Hours', value: 'Mon - Sun: 08 AM - 08 PM', link: '#' },
  ];

  return (
    <div className="flex flex-col">
      <HeroImage 
        title="Get in Touch"
        subtitle="Have a project in mind? Let's discuss how we can help"
        imageUrl="/images/hero-about.webp"
        imageAlt="Contact Sarvmaan Home Superhero"
      />

      {/* Contact Information Cards */}
      <section className="py-8 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={index}
                  href={info.link}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-3 md:p-6 rounded-lg bg-light border border-gray-200 hover:shadow-base transition-all text-center"
                >
                  <Icon className="text-2xl md:text-3xl text-secondary mx-auto mb-2 md:mb-3" />
                  <h3 className="text-xs md:text-sm font-semibold text-foreground/70 mb-1">{info.title}</h3>
                  <p className="text-xs md:text-sm font-bold text-primary">{info.value}</p>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-8 md:py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-4 md:p-8 rounded-lg shadow-base"
            >
              <h2 className="text-xl md:text-2xl font-bold text-primary mb-1 md:mb-2">Request Free Consultation</h2>
              <p className="text-xs md:text-sm text-gray-600 mb-4 md:mb-6">Tell us about your project and get a personalized solution</p>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg"
                >
                  <p className="text-green-700 text-sm md:text-base font-medium">
                    Thank you! We'll get back to you within 24 hours.
                  </p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
                {/* Name & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                  <div>
                    <label className="block text-xs md:text-sm font-semibold text-foreground/70 mb-1 md:mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary text-sm"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs md:text-sm font-semibold text-foreground/70 mb-1 md:mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary text-sm"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                {/* Email & Location */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                  <div>
                    <label className="block text-xs md:text-sm font-semibold text-foreground/70 mb-1 md:mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary text-sm"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs md:text-sm font-semibold text-foreground/70 mb-1 md:mb-2">
                      City / Location *
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      required
                      className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary text-sm"
                      placeholder="Pune, Bavdhan..."
                    />
                  </div>
                </div>

                {/* Service Category */}
                <div>
                  <label className="block text-xs md:text-sm font-semibold text-foreground/70 mb-1 md:mb-2">
                    Service Category *
                  </label>
                  <select
                    name="serviceCategory"
                    value={formData.serviceCategory}
                    onChange={handleChange}
                    required
                    className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary text-sm"
                  >
                    <option value="">Select a category</option>
                    <option value="Core Solutions">Core Solutions</option>
                    <option value="Design Services">Design Services</option>
                    <option value="Execution Services">Execution Services</option>
                    <option value="Specialized">Specialized Services</option>
                  </select>
                </div>

                {/* Specific Service */}
                {formData.serviceCategory && (
                  <div>
                    <label className="block text-xs md:text-sm font-semibold text-foreground/70 mb-1 md:mb-2">
                      Select Service *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary text-sm"
                    >
                      <option value="">Choose a service</option>
                      {serviceOptions[formData.serviceCategory as keyof typeof serviceOptions]?.map((svc) => (
                        <option key={svc} value={svc}>
                          {svc}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                {/* Conditional Fields - Home Interiors */}
                {isHomeInteriorService() && (
                  <div>
                    <label className="block text-xs md:text-sm font-semibold text-foreground/70 mb-1 md:mb-2">
                      Property Type *
                    </label>
                    <select
                      name="bhkType"
                      value={formData.bhkType}
                      onChange={handleChange}
                      required
                      className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary text-sm"
                    >
                      <option value="">Select property type</option>
                      {bhkOptions.map((bhk) => (
                        <option key={bhk} value={bhk}>
                          {bhk}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                {/* Conditional Fields - Commercial */}
                {isCommercialService() && (
                  <div>
                    <label className="block text-xs md:text-sm font-semibold text-foreground/70 mb-1 md:mb-2">
                      Commercial Type *
                    </label>
                    <select
                      name="commercialType"
                      value={formData.commercialType}
                      onChange={handleChange}
                      required
                      className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary text-sm"
                    >
                      <option value="">Select type</option>
                      {commercialOptions.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                {/* Carpet Area */}
                {formData.service && (
                  <div>
                    <label className="block text-xs md:text-sm font-semibold text-foreground/70 mb-1 md:mb-2">
                      Carpet Area (sq ft) *
                    </label>
                    <input
                      type="number"
                      name="carpetArea"
                      value={formData.carpetArea}
                      onChange={handleChange}
                      required
                      className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary text-sm"
                      placeholder="e.g., 1500"
                    />
                  </div>
                )}

                {/* Budget & Timeline */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                  <div>
                    <label className="block text-xs md:text-sm font-semibold text-foreground/70 mb-1 md:mb-2">
                      Budget Range *
                    </label>
                    <select
                      name="budgetRange"
                      value={formData.budgetRange}
                      onChange={handleChange}
                      required
                      className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary text-sm"
                    >
                      <option value="">Select budget</option>
                      {budgetOptions.map((budget) => (
                        <option key={budget} value={budget}>
                          {budget}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs md:text-sm font-semibold text-foreground/70 mb-1 md:mb-2">
                      Timeline *
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      required
                      className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary text-sm"
                    >
                      <option value="">Select timeline</option>
                      {timelineOptions.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs md:text-sm font-semibold text-foreground/70 mb-1 md:mb-2">
                    Additional Details
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary text-sm"
                    placeholder="Any specific requirements or ideas for your project..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  style={{ backgroundColor: '#d4af37', color: '#ffffff' }}
                  className="w-full py-3 md:py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 text-sm md:text-base flex items-center justify-center gap-2"
                >
                  <FiSend size={18} />
                  {loading ? 'Sending...' : 'Request Free Consultation'}
                </button>
              </form>
            </motion.div>

            {/* Quick Contact */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4 md:space-y-6"
            >
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-soft">
                <h3 className="text-lg md:text-xl font-bold text-primary mb-3 md:mb-4">Quick Contact</h3>
                <p className="text-sm md:text-base text-foreground/80 mb-4">
                  Prefer to reach out directly? Contact us via phone, email, or WhatsApp.
                </p>
                <div className="space-y-2 md:space-y-3">
                  <a
                    href="tel:+917447722255"
                    className="flex items-center gap-3 p-3 bg-light rounded-lg hover:bg-secondary/10 transition-colors"
                  >
                    <FiPhone className="text-secondary text-xl flex-shrink-0" />
                    <span className="text-sm md:text-base font-medium text-foreground">+91 74477 22255</span>
                  </a>
                  <a
                    href="https://wa.me/917447722255"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                  >
                    <FaWhatsapp className="text-green-600 text-xl flex-shrink-0" />
                    <span className="text-sm md:text-base font-medium text-green-700">Chat on WhatsApp</span>
                  </a>
                  <a
                    href="mailto:contact@sarvmaan.com"
                    className="flex items-center gap-3 p-3 bg-light rounded-lg hover:bg-secondary/10 transition-colors"
                  >
                    <FiMail className="text-secondary text-xl flex-shrink-0" />
                    <span className="text-sm md:text-base font-medium text-foreground">contact@sarvmaan.com</span>
                  </a>
                </div>
              </div>

              <div className="bg-white p-4 md:p-6 rounded-lg shadow-soft">
                <h3 className="text-lg md:text-xl font-bold text-primary mb-3 md:mb-4">Business Hours</h3>
                <div className="space-y-2 md:space-y-3 text-sm md:text-base">
                  <div className="flex justify-between text-foreground/80">
                    <span>Monday - Sunday:</span>
                    <span className="font-semibold">08 AM - 08 PM</span>
                  </div>
                  <p className="text-xs md:text-sm text-foreground/60 mt-3 pt-3 border-t">
                    Response time: Within 24 hours
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
