'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { projects } from '@/data/projects';
import { FiPlay, FiX, FiMapPin, FiCalendar } from 'react-icons/fi';
import HeroImage from '@/components/HeroImage';
import { Metadata } from 'next';

type Category = 'all' | 'kitchen' | 'wardrobe' | 'hall' | 'tvunit' | 'mandir' | 'bedroom' | 'complete-home-interior' | 'commercial';


export const metadata: Metadata = {
  title: 'Interior Design Portfolio | 500+ Completed Projects in Pune',
  description: 'Browse our portfolio of 500+ successful interior design projects. Kitchens, wardrobes, bedrooms, living halls, and complete home interiors. See our award-winning work.',
  keywords: 'interior design portfolio, completed projects, kitchen design, wardrobe interior, home design Pune, before after',
  openGraph: {
    type: 'website',
    url: 'https://sarvmaan.com/projects',
    title: 'Our Portfolio | 500+ Interior Design Projects',
    description: 'Explore our award-winning interior design projects - kitchens, wardrobes, and complete homes.',
    images: [
      {
        url: '/images/hero-portfolio.webp',
        width: 1200,
        height: 630,
        alt: 'Our Portfolio | 500+ Interior Design Projects',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Portfolio | 500+ Interior Design Projects',
    description: 'Award-winning interior design projects across Pune',
  },
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<Category>('all');
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const filters: { id: Category; label: string }[] = [
    { id: 'all', label: 'All Work' },
    { id: 'kitchen', label: 'Kitchens' },
    { id: 'wardrobe', label: 'Wardrobes' },
    { id: 'hall', label: 'Living Halls' },
    { id: 'tvunit', label: 'TV Units' },
    { id: 'mandir', label: 'Mandirs' },
    { id: 'bedroom', label: 'Bedrooms' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'complete-home-interior', label: 'Complete Home' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const selectedProjectData = projects.find(p => p.id === selectedProject);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
            <HeroImage 
              title="Our Portfolio"
              subtitle="Explore our diverse collection of interior design projects"
              imageUrl="images/hero-portfolio.webp"
              imageAlt="Interior Design Services"
            />

      {/* Filter Section */}
      <section className="py-3 sm:py-6 bg-white sticky top-16 z-40 shadow-soft">
        <div className="max-w-7xl mx-auto px-3 sm:px-4">
          <div className="flex flex-wrap gap-1.5 sm:gap-2 lg:gap-3 justify-center">
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-2 sm:px-3 lg:px-5 py-1 sm:py-1.5 rounded-full font-medium text-xs sm:text-xs lg:text-sm transition-all whitespace-nowrap min-w-fit ${
                  activeFilter === filter.id
                    ? 'bg-primary text-secondary shadow-elevated'
                    : 'bg-light text-primary hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter.label && <span>{filter.label}</span>}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project.id)}
              >
                <div className="relative h-48 sm:h-56 md:h-64 mb-3 sm:mb-4 rounded-2xl overflow-hidden bg-gray-200">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    priority={index < 3}
                  />
                  
                  {/* Overlay for both photo and video */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    {project.type === 'video' ? (
                      <div className="text-center">
                        <FiPlay className="text-white text-4xl sm:text-5xl mx-auto mb-2" />
                        <span className="text-white font-semibold text-sm sm:text-lg">Watch Video</span>
                      </div>
                    ) : (
                      <span className="text-white font-semibold text-sm sm:text-lg">View Details</span>
                    )}
                  </div>
                  
                  {/* Video badge */}
                  {project.type === 'video' && (
                    <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-red-500 text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-bold">
                      VIDEO
                    </div>
                  )}
                </div>

                <div className="p-3 sm:p-4">
                  <span className="inline-block bg-secondary/20 text-secondary px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-medium mb-2 sm:mb-3 capitalize">
                    {project.category}
                  </span>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-primary mb-1.5 sm:mb-2 group-hover:text-secondary transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-muted text-xs sm:text-sm mb-2 sm:mb-3 line-clamp-2">{project.description}</p>

                  <div className="grid grid-cols-1 text-xs sm:text-sm gap-2 sm:gap-4 pt-2 sm:pt-4 border-t border-gray-200">
                    <div>
                      <p className="text-muted text-xs mb-0.5 sm:mb-1">Location</p>
                      <p className="font-semibold text-primary">{project.location}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-light">
        <div className="max-w-7xl mx-auto px-3 sm:px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4 sm:mb-6">Portfolio Highlights</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center">
            {[
              { number: '500+', label: 'Projects Completed' },
              { number: filteredProjects.length, label: 'Featured Projects' },
              { number: '1000+', label: 'Happy Clients' },
              { number: '50+', label: 'Team Members' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-1 sm:mb-2">{stat.number}</p>
                <p className="text-xs sm:text-sm md:text-base text-foreground font-medium line-clamp-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-[#1a1410] to-[#b8956a] text-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 md:mb-6 text-white">Want Similar Design for Your Home?</h2>
            <p className="text-base sm:text-lg md:text-xl text-white mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
              Get a free consultation from our design experts
            </p>
            <Link
              href="/contact"
              className="inline-block text-white px-6 sm:px-8 py-2.5 sm:py-4 rounded-full font-semibold text-sm sm:text-base hover:opacity-90 transition-all"
              style={{ backgroundColor: '#d4af37' }}
            >
              Book Consultation
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProjectData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-3 sm:p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={e => e.stopPropagation()}
              className="bg-white rounded-2xl w-full max-w-2xl max-h-[85vh] sm:max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <div className="sticky top-0 bg-white border-b border-gray-200 px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center z-10">
                <h2 className="text-lg sm:text-2xl font-bold text-primary truncate">{selectedProjectData.title}</h2>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-500 hover:text-primary transition-colors ml-2 flex-shrink-0"
                >
                  <FiX size={24} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                {/* Photo or Video Display */}
                {selectedProjectData.type === 'photo' ? (
                  <div className="relative h-48 sm:h-80 rounded-xl overflow-hidden bg-gray-200">
                    <Image
                      src={selectedProjectData.image}
                      alt={selectedProjectData.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="relative h-48 sm:h-80 rounded-xl overflow-hidden bg-gray-900">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${selectedProjectData.youtubeVideoId}`}
                      title={selectedProjectData.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="rounded-xl"
                    />
                  </div>
                )}

                {/* Project Details */}
                <div>
                  <span className="inline-block bg-secondary/20 text-secondary px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4 capitalize">
                    {selectedProjectData.category}
                  </span>
                  <p className="text-sm sm:text-lg text-foreground leading-relaxed mb-4 sm:mb-6">
                    {selectedProjectData.description}
                  </p>
                </div>

                {/* Info Grid */}
                <div className="grid grid-cols-2 gap-2 sm:gap-4">
                  <div className="bg-light p-3 sm:p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-1 sm:mb-2">
                      <FiMapPin className="text-secondary flex-shrink-0" size={16} />
                      <p className="text-xs sm:text-sm font-medium text-foreground">Location</p>
                    </div>
                    <p className="font-semibold text-primary text-sm sm:text-base">{selectedProjectData.location}</p>
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  href="/contact"
                  className="w-full block text-center bg-secondary text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-accent transition-colors"
                  onClick={() => setSelectedProject(null)}
                >
                  Get Similar Design
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
