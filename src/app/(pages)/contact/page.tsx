'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import HeroImage from '@/components/HeroImage';

export default function Contact() {
  const [csrfToken, setCSRFToken] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    city: '',
    projectType: '',
    timeline: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Fetch CSRF token on component mount
  useEffect(() => {
    const fetchCSRFToken = async () => {
      try {
        const response = await fetch('/api/csrf');
        if (response.ok) {
          const data = await response.json();
          setCSRFToken(data.token);
        }
      } catch (error) {
        console.error('Failed to fetch CSRF token:', error);
      }
    };

    fetchCSRFToken();
  }, []);

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
        body: JSON.stringify({ ...formData, csrfToken }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ 
          fullName: '', 
          phone: '', 
          email: '', 
          city: '',
          projectType: '',
          timeline: '',
          message: '' 
        });
        // Fetch a new CSRF token for next submission
        const newTokenResponse = await fetch('/api/csrf');
        if (newTokenResponse.ok) {
          const newToken = await newTokenResponse.json();
          setCSRFToken(newToken.token);
        }
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        const errorData = await response.json();
        console.error('Form submission error:', errorData);
        // Always fetch a fresh token after any submission attempt (success or failure)
        const newTokenResponse = await fetch('/api/csrf');
        if (newTokenResponse.ok) {
          const newToken = await newTokenResponse.json();
          setCSRFToken(newToken.token);
        }
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
                {/* Full Name */}
                <div>
                  <label className="block text-xs md:text-sm font-semibold text-foreground/70 mb-1 md:mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary text-sm"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Phone Number and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                  <div>
                    <label className="block text-xs md:text-sm font-semibold text-foreground/70 mb-1 md:mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary text-sm"
                      placeholder="Your primary contact number"
                    />
                  </div>
                  <div>
                    <label className="block text-xs md:text-sm font-semibold text-foreground/70 mb-1 md:mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary text-sm"
                      placeholder="Your email for sharing project details"
                    />
                  </div>
                </div>

                {/* City / Area and Project Type */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                  <div>
                    <label className="block text-xs md:text-sm font-semibold text-foreground/70 mb-1 md:mb-2">
                      City / Area *
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary text-sm"
                      placeholder="Where is your property located?"
                    />
                  </div>
                  <div>
                    <label className="block text-xs md:text-sm font-semibold text-foreground/70 mb-1 md:mb-2">
                      Project Type *
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                      className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary text-sm"
                    >
                      <option value="">Select your project type</option>
                      <option value="home-interior">Home Interior</option>
                      <option value="kitchen">Kitchen</option>
                      <option value="wardrobe">Wardrobe</option>
                      <option value="commercial">Commercial</option>
                      <option value="renovation">Renovation</option>
                    </select>
                  </div>
                </div>

                {/* Approx. Timeline */}
                <div>
                  <label className="block text-xs md:text-sm font-semibold text-foreground/70 mb-1 md:mb-2">
                    Approx. Timeline *
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    required
                    className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary text-sm"
                  >
                    <option value="">When do you plan to start?</option>
                    <option value="immediately">Immediately</option>
                    <option value="1-3-months">1–3 months</option>
                    <option value="3-6-months">3–6 months</option>
                  </select>
                </div>

                {/* Message / Requirements */}
                <div>
                  <label className="block text-xs md:text-sm font-semibold text-foreground/70 mb-1 md:mb-2">
                    Message / Requirements
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary text-sm"
                    placeholder="Tell us about your project, requirements, or any specific preferences"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  style={{ backgroundColor: '#d4af37', color: '#ffffff' }}
                  className="w-full py-3 md:py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 text-sm md:text-base"
                >
                  {loading ? 'Sending...' : 'Book Consultation'}
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

      {/* Follow Our Work - Social Media Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">FOLLOW OUR WORK</h2>
            <p className="text-base md:text-lg text-foreground/70 mb-8">
              Connect with us on social media to see our latest projects and design inspirations:
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-6 md:gap-8 justify-center flex-wrap">
              {/* Instagram */}
              <motion.a
                href="https://www.instagram.com/sarvmaan_india/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-center"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-lg bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 flex items-center justify-center shadow-lg hover:shadow-xl transition-all mx-auto mb-3">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                  </svg>
                </div>
                <p className="text-primary font-bold text-sm md:text-base">Instagram</p>
              </motion.a>

              {/* Facebook */}
              <motion.a
                href="https://www.facebook.com/HomeSuperhero"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-center"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-lg bg-blue-600 flex items-center justify-center shadow-lg hover:shadow-xl transition-all mx-auto mb-3">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <p className="text-primary font-bold text-sm md:text-base">Facebook</p>
              </motion.a>

              {/* YouTube */}
              <motion.a
                href="https://www.youtube.com/@SarvMaan"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-center"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-lg bg-red-600 flex items-center justify-center shadow-lg hover:shadow-xl transition-all mx-auto mb-3">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
                <p className="text-primary font-bold text-sm md:text-base">YouTube</p>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
