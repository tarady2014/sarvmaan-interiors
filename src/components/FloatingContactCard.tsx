'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiPhone } from 'react-icons/fi';

export default function FloatingContactCard() {
  return (
    <motion.div
      className="fixed top-20 md:bottom-24 left-1/2 md:left-auto md:right-6 transform -translate-x-1/2 md:translate-x-0 z-40 w-11/12 md:max-w-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.6 }}
    >
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-orange-500">
        {/* Mobile Layout */}
        <div className="md:hidden p-1.5 space-y-1">
          {/* Call Section */}
          <div className="flex items-center justify-between gap-1">
            <a
              href="tel:+917447722255"
              className="flex-1 flex items-center justify-center gap-0.5 bg-green-600 text-white px-2 py-1 rounded-lg font-bold hover:bg-green-700 transition-all text-xs"
            >
              <FiPhone size={12} />
              +91 74477 22255
            </a>
            <Link
              href="/contact"
              className="flex-1 bg-green-600 text-white px-2 py-1 rounded-lg font-bold text-center hover:bg-green-700 transition-all text-xs"
            >
              Get Quote
            </Link>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block p-2.5 space-y-2">
          {/* Call Button */}
          <a
            href="tel:+917447722255"
            className="flex items-center justify-center gap-2 w-full bg-green-600 text-white px-3 py-1.5 rounded-lg font-bold hover:bg-green-700 transition-all text-sm"
          >
            <FiPhone size={16} />
            Call: +91 74477 22255
          </a>

          {/* Get Free Quotation Button */}
          <Link
            href="/contact"
            className="block w-full bg-green-600 text-white px-3 py-1.5 rounded-lg font-bold text-center hover:bg-green-700 transition-all text-sm"
          >
            Get Free Quotation
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
