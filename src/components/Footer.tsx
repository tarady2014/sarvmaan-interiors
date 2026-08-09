'use client';

import Link from 'next/link';
import { FiPhone, FiMail, FiMapPin, FiArrowRight } from 'react-icons/fi';
import { FaWhatsapp, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1410] text-white">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-lg md:text-2xl font-bold mb-3 md:mb-4 text-secondary">
              SarvMaan
            </h3>
            <p className="text-xs md:text-sm text-gray-400 mb-2 font-semibold">Home Superhero</p>
            <p className="text-xs md:text-sm text-gray-400 mb-4 md:mb-6 leading-relaxed">
              Premium interior design solutions since 2017.
            </p>
            <div className="flex gap-3">
              <a href="https://wa.me/917447722255" className="hover:text-secondary transition" aria-label="WhatsApp">
                <FaWhatsapp size={18} />
              </a>
              <a href="https://www.facebook.com/HomeSuperhero" className="hover:text-secondary transition" aria-label="Facebook">
                <FaFacebook size={18} />
              </a>
              <a href="https://www.instagram.com/sarvmaan_india/" className="hover:text-secondary transition" aria-label="Instagram">
                <FaInstagram size={18} />
              </a>
              <a href="https://www.youtube.com/@SarvMaan" className="hover:text-secondary transition" aria-label="YouTube">
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm md:text-lg font-semibold mb-3 md:mb-6">Quick Links</h4>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link href="/" className="hover:text-secondary transition flex items-center gap-2 text-xs md:text-sm">
                  <FiArrowRight size={14} /> Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-secondary transition flex items-center gap-2 text-xs md:text-sm">
                  <FiArrowRight size={14} /> About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-secondary transition flex items-center gap-2 text-xs md:text-sm">
                  <FiArrowRight size={14} /> Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-secondary transition flex items-center gap-2 text-xs md:text-sm">
                  <FiArrowRight size={14} /> Portfolio
                </Link>
              </li>
              <li>
                <Link href="/process" className="hover:text-secondary transition flex items-center gap-2 text-xs md:text-sm">
                  <FiArrowRight size={14} /> Process
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm md:text-lg font-semibold mb-3 md:mb-6">Services</h4>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link href="/services" className="hover:text-secondary transition text-xs md:text-sm">
                  Modular Kitchen Design
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-secondary transition text-xs md:text-sm">
                  Full Home Interiors
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-secondary transition text-xs md:text-sm">
                  2D & 3D Interior Design
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-secondary transition text-xs md:text-sm">
                  False Ceiling & Lighting
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-secondary transition text-xs md:text-sm">
                  Wall Finishes & Painting
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm md:text-lg font-semibold mb-3 md:mb-6">Contact</h4>
            <ul className="space-y-2 md:space-y-3">
              <li className="flex items-start gap-2">
                <FiPhone className="text-secondary mt-0.5 flex-shrink-0" size={16} />
                <div>
                  <p className="font-medium text-xs md:text-sm">+91 74477 22255</p>
                  <p className="text-gray-400 text-xs">Mon–Sat, 9am – 7pm</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <FiMail className="text-secondary mt-0.5 flex-shrink-0" size={16} />
                <div>
                  <p className="font-medium text-xs md:text-sm">hello@sarvmaan.com</p>
                  <p className="text-gray-400 text-xs">Email 24/7</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <FiMapPin className="text-secondary mt-0.5 flex-shrink-0" size={16} />
                <div>
                  <p className="font-medium text-xs md:text-sm">Bhavdhan, Pune</p>
                  <p className="text-gray-400 text-xs">Near Chaundhe Lake</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-4 md:pt-6 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-0">
          <p className="text-gray-400 text-xs md:text-sm text-center md:text-left">
            &copy; 2017–{currentYear} SarvMaan Tech Solutions. All rights reserved.
          </p>
          <div className="flex gap-3 md:gap-6 flex-wrap justify-center">
            <a href="#" className="text-gray-400 hover:text-secondary transition text-xs">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-secondary transition text-xs">
              Terms
            </a>
            <a href="#" className="text-gray-400 hover:text-secondary transition text-xs">
              Disclaimer
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
