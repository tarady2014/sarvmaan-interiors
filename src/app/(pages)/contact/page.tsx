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
    serviceType: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

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
        setFormData({ name: '', email: '', phone: '', serviceType: '', message: '' });
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
    { icon: FiMail, title: 'Email', value: 'hello@SarvMaan.com', link: 'mailto:hello@SarvMaan.com' },
    { icon: FiMapPin, title: 'Location', value: 'Bhavdhan, Pune', link: 'https://maps.google.com' },
    { icon: FiClock, title: 'Hours', value: 'Mon - Sat: 10 AM - 6 PM', link: '#' },
  ];

  return (
    <div className="flex flex-col">
      <HeroImage 
        title="Get in Touch"
        subtitle="Have a project in mind? Let's discuss how we can help"
        imageUrl="/images/hero-contact.webp"
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
              <h2 className="text-xl md:text-2xl font-bold text-primary mb-4 md:mb-6">Send us a Message</h2>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg"
                >
                  <p className="text-green-700 text-sm md:text-base font-medium">
                    Thank you! We'll get back to you soon.
                  </p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
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

                <div>
                  <label className="block text-xs md:text-sm font-semibold text-foreground/70 mb-1 md:mb-2">
                    Service Type *
                  </label>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    required
                    className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary text-sm"
                  >
                    <option value="">Select a service</option>
                    <option value="kitchen">Modular Kitchen</option>
                    <option value="wardrobe">Wardrobe</option>
                    <option value="living">Living Room</option>
                    <option value="bedroom">Bedroom</option>
                    <option value="commercial">Commercial</option>
                    <option value="renovation">Full Renovation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs md:text-sm font-semibold text-foreground/70 mb-1 md:mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary text-sm"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-secondary text-white py-3 md:py-4 rounded-lg font-semibold hover:bg-secondary/90 transition-colors disabled:opacity-50 text-sm md:text-base flex items-center justify-center gap-2"
                >
                  <FiSend size={18} />
                  {loading ? 'Sending...' : 'Send Message'}
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
                    href="mailto:hello@sarvmaan.com"
                    className="flex items-center gap-3 p-3 bg-light rounded-lg hover:bg-secondary/10 transition-colors"
                  >
                    <FiMail className="text-secondary text-xl flex-shrink-0" />
                    <span className="text-sm md:text-base font-medium text-foreground">hello@sarvmaan.com</span>
                  </a>
                </div>
              </div>

              <div className="bg-white p-4 md:p-6 rounded-lg shadow-soft">
                <h3 className="text-lg md:text-xl font-bold text-primary mb-3 md:mb-4">Business Hours</h3>
                <div className="space-y-2 md:space-y-3 text-sm md:text-base">
                  <div className="flex justify-between text-foreground/80">
                    <span>Monday - Saturday:</span>
                    <span className="font-semibold">10 AM - 6 PM</span>
                  </div>
                  <div className="flex justify-between text-foreground/80">
                    <span>Sunday:</span>
                    <span className="font-semibold">Closed</span>
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
