'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiAlertCircle, FiCheckCircle } from 'react-icons/fi';

interface FormState {
  status: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

export default function ContactForm() {
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

  const [formState, setFormState] = useState<FormState>({
    status: 'idle',
    message: '',
  });

  // Fetch CSRF token on component mount
  useEffect(() => {
    const fetchCSRFToken = async () => {
      try {
        const response = await fetch('/api/csrf');
        if (response.ok) {
          const data = await response.json();
          setCSRFToken(data.token);
          console.log('✅ CSRF token fetched successfully');
        } else {
          console.error('Failed to fetch CSRF token');
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState({ status: 'loading', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, csrfToken }),
      });

      const data = await response.json();

      if (response.ok) {
        setFormState({
          status: 'success',
          message: 'Thank you! We will contact you shortly.',
        });
        setFormData({ fullName: '', phone: '', email: '', city: '', projectType: '', timeline: '', message: '' });
        // Fetch a new CSRF token for next submission
        const newTokenResponse = await fetch('/api/csrf');
        if (newTokenResponse.ok) {
          const newToken = await newTokenResponse.json();
          setCSRFToken(newToken.token);
        }
      } else {
        // Always fetch a fresh token after any submission attempt (success or failure)
        const newTokenResponse = await fetch('/api/csrf');
        if (newTokenResponse.ok) {
          const newToken = await newTokenResponse.json();
          setCSRFToken(newToken.token);
        }
        throw new Error(data.error || 'Failed to submit form');
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to submit form. Please try again.';
      setFormState({
        status: 'error',
        message: errorMessage,
      });
      console.error('Form submission error:', error);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-2xl shadow-soft"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Full Name */}
      <div className="mb-6">
        <label className="block text-primary font-semibold mb-2">Full Name *</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border-2 border-light rounded-lg focus:border-secondary focus:outline-none transition"
          placeholder="Enter your full name"
        />
      </div>

      {/* Phone Number and Email - 2 columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-primary font-semibold mb-2">Phone Number *</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border-2 border-light rounded-lg focus:border-secondary focus:outline-none transition"
            placeholder="Your primary contact number"
          />
        </div>
        <div>
          <label className="block text-primary font-semibold mb-2">Email Address *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border-2 border-light rounded-lg focus:border-secondary focus:outline-none transition"
            placeholder="Your email for sharing project details"
          />
        </div>
      </div>

      {/* City and Project Type - 2 columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-primary font-semibold mb-2">City / Area *</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border-2 border-light rounded-lg focus:border-secondary focus:outline-none transition"
            placeholder="Where is your property located?"
          />
        </div>
        <div>
          <label className="block text-primary font-semibold mb-2">Project Type *</label>
          <select
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border-2 border-light rounded-lg focus:border-secondary focus:outline-none transition"
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
      <div className="mb-6">
        <label className="block text-primary font-semibold mb-2">Approx. Timeline *</label>
        <select
          name="timeline"
          value={formData.timeline}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border-2 border-light rounded-lg focus:border-secondary focus:outline-none transition"
        >
          <option value="">When do you plan to start?</option>
          <option value="immediately">Immediately</option>
          <option value="1-3-months">1–3 months</option>
          <option value="3-6-months">3–6 months</option>
        </select>
      </div>

      {/* Message / Requirements */}
      <div className="mb-6">
        <label className="block text-primary font-semibold mb-2">Message / Requirements</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="w-full px-4 py-3 border-2 border-light rounded-lg focus:border-secondary focus:outline-none transition"
          placeholder="Tell us about your project, requirements, or any specific preferences"
        ></textarea>
      </div>

      {formState.message && (
        <motion.div
          className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
            formState.status === 'success'
              ? 'bg-green-50 text-green-700'
              : 'bg-red-50 text-red-700'
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {formState.status === 'success' ? (
            <FiCheckCircle size={20} />
          ) : (
            <FiAlertCircle size={20} />
          )}
          {formState.message}
        </motion.div>
      )}

      <button
        type="submit"
        disabled={formState.status === 'loading'}
        className="w-full bg-gradient-to-r from-secondary to-accent text-white font-bold py-3 rounded-lg hover:opacity-90 transition disabled:opacity-50"
      >
        {formState.status === 'loading' ? 'Submitting...' : 'Book Consultation'}
      </button>
    </motion.form>
  );
}
