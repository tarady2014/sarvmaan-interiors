'use client';

import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function WhatsAppButton() {
  const whatsappNumber = '917447722255';
  const message = encodeURIComponent('Hi Sarvmaan Home Superhero, I would like to book a free consultation for my interior design project.');
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <>
      {/* Desktop - Fixed button on right */}
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex fixed bottom-8 right-8 z-40 bg-green-500 text-white p-4 rounded-full shadow-elevated hover:bg-green-600 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        aria-label="Contact on WhatsApp"
      >
        <FaWhatsapp size={28} />
      </motion.a>

      {/* Mobile - Full-width sticky button at bottom */}
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-green-500 text-white py-3 px-4 flex items-center justify-center gap-2 font-semibold text-base shadow-lg"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        aria-label="Contact on WhatsApp"
      >
        <FaWhatsapp size={24} />
        Chat with us
      </motion.a>

      {/* Spacer for mobile to prevent content being hidden */}
      <div className="md:hidden h-16" />
    </>
  );
}
