'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/packages', label: 'Packages' },
    { href: '/projects', label: 'Portfolio' },
    { href: '/process', label: 'Process' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-white shadow-md transition-shadow duration-300"
    >
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="SarvMaan Home Superhero Logo"
            width={40}
            height={40}
            className="w-10 h-10"
          />
          <div className="flex flex-col">
            <span className="text-lg font-bold text-primary leading-tight">
              SarvMaan
            </span>
            <span className="text-xs font-semibold text-secondary">Home Superhero</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-primary hover:text-secondary transition-colors font-medium text-sm"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="/contact"
          className="hidden md:inline-block bg-secondary text-white px-6 py-2 rounded-full hover:bg-accent transition-colors font-medium"
        >
          Book Consultation
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-primary hover:text-secondary transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          style={{
            position: 'fixed',
            top: '64px',
            left: 0,
            right: 0,
            width: '100%',
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(12px)',
            borderTop: '1px solid #e5e7eb',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
            zIndex: 49,
            display: 'md:none',
          }}
          className="md:hidden"
        >
          <div className="flex flex-col p-4 gap-4 max-w-7xl mx-auto">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-primary hover:text-secondary transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-secondary text-white px-6 py-2 rounded-full text-center font-medium hover:bg-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Book Consultation
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
}
