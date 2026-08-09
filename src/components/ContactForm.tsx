'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiAlertCircle, FiCheckCircle } from 'react-icons/fi';

interface FormState {
  status: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [formState, setFormState] = useState<FormState>({
    status: 'idle',
    message: '',
  });

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
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormState({
          status: 'success',
          message: 'Thank you! We will contact you shortly.',
        });
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      setFormState({
        status: 'error',
        message: 'Failed to submit form. Please try again.',
      });
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-primary font-semibold mb-2">Full Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border-2 border-light rounded-lg focus:border-secondary focus:outline-none transition"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block text-primary font-semibold mb-2">Email *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border-2 border-light rounded-lg focus:border-secondary focus:outline-none transition"
            placeholder="your@email.com"
          />
        </div>
      </div>

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
            placeholder="+91 9876543210"
          />
        </div>
        <div>
          <label className="block text-primary font-semibold mb-2">Service Type *</label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border-2 border-light rounded-lg focus:border-secondary focus:outline-none transition"
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
      </div>

      <div className="mb-6">
        <label className="block text-primary font-semibold mb-2">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="w-full px-4 py-3 border-2 border-light rounded-lg focus:border-secondary focus:outline-none transition"
          placeholder="Tell us about your project..."
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
