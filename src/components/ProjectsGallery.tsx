'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { projects, Project } from '@/data/projects';
import { FiX, FiChevronLeft, FiChevronRight, FiPlay } from 'react-icons/fi';

type Category = 'all' | 'kitchen' | 'wardrobe' | 'hall' | 'tvunit' | 'mandir' | 'bedroom' | 'complete-home-interior' | 'commercial';

export default function ProjectsGallery() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: { id: Category; label: string }[] = [
    { id: 'all', label: 'All' },
    { id: 'kitchen', label: 'Kitchen' },
    { id: 'wardrobe', label: 'Wardrobe' },
    { id: 'hall', label: 'Living' },
    { id: 'tvunit', label: 'TV Unit' },
    { id: 'mandir', label: 'Mandir' },
    { id: 'bedroom', label: 'Bedroom' },
    { id: 'complete-home-interior', label: 'Complete Home' },
    { id: 'commercial', label: 'Commercial' },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  const currentIndex = selectedProject ? filteredProjects.findIndex(p => p.id === selectedProject.id) : -1;

  const handleNext = () => {
    if (currentIndex < filteredProjects.length - 1) {
      setSelectedProject(filteredProjects[currentIndex + 1]);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setSelectedProject(filteredProjects[currentIndex - 1]);
    }
  };

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-2 md:mb-4">
            Featured Projects
          </h2>
          <p className="text-sm md:text-lg text-foreground/70">
            Explore our portfolio
          </p>
        </motion.div>

        {/* Filters - Horizontal scroll on mobile */}
        <div className="flex gap-2 md:gap-3 justify-start md:justify-center mb-8 md:mb-12 overflow-x-auto pb-2">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                setSelectedProject(null);
              }}
              style={{
                padding: '8px 16px',
                borderRadius: '9999px',
                fontWeight: '600',
                fontSize: '14px',
                border: isSelected ? 'none' : '1px solid #d1d5db',
                cursor: 'pointer',
                transition: 'all 300ms ease-in-out',
                backgroundColor: isSelected ? '#ffffff' : '#faf8f6',
                color: isSelected ? '#1a1410' : '#1a1410',
                whiteSpace: 'nowrap',
              } as React.CSSProperties}
            >
              {cat.label}
            </button>
            );
          })}
        </div>

        {/* Gallery Grid - Full width on mobile, 2x2 on tablet, 3 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2, delay: index * 0.02 }}
                className="cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-48 md:h-72 rounded-lg overflow-hidden shadow-soft hover:shadow-base transition-shadow bg-gray-200 group">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    priority={index < 3}
                  />
                  
                  {/* Overlay for both photo and video */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                    {project.type === 'video' && (
                      <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <FiPlay className="text-white text-4xl md:text-5xl mx-auto mb-2" />
                        <span className="text-white font-semibold text-sm md:text-base">Watch Video</span>
                      </div>
                    )}
                  </div>

                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end p-3 md:p-4">
                    <div className="opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 w-full" style={{ color: '#ffffff', textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>
                      <h3 className="text-white text-base md:text-lg font-bold" style={{ color: '#ffffff', opacity: 1 }}>{project.title}</h3>
                      <p className="text-gray-200 text-xs md:text-sm" style={{ color: '#d1d5db', opacity: 1 }}>{project.location}</p>
                    </div>
                  </div>
                  
                  {/* Video badge */}
                  {project.type === 'video' && (
                    <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                      VIDEO
                    </div>
                  )}
                  
                  <div className="absolute top-3 right-3 bg-secondary text-white px-3 py-1 rounded-full text-xs font-semibold opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity" style={{ color: '#ffffff', opacity: 1 }}>
                    {project.type === 'video' ? '' : 'View'}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-lg overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header with close button */}
              <div className="sticky top-0 flex justify-between items-center p-4 md:p-6 bg-white border-b">
                <h2 className="text-xl md:text-2xl font-bold text-primary">{selectedProject.title}</h2>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-foreground/60 hover:text-primary transition-colors"
                >
                  <FiX size={24} />
                </button>
              </div>

              <div className="p-4 md:p-6">
                {/* Project Image/Video/Google Album */}
                {selectedProject.type === 'photo' ? (
                  <div className="relative w-full h-96 md:h-[500px] mb-6 rounded-lg overflow-hidden bg-gray-200">
                    <Image
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : selectedProject.type === 'google-album' ? (
                  <div className="w-full mb-6 rounded-lg overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 aspect-video flex items-center justify-center border-2 border-blue-200">
                    <div className="text-center p-6 max-w-md">
                      <h3 className="text-2xl font-bold text-blue-900 mb-2">📸 Google Photos Album</h3>
                      <p className="text-sm text-blue-700 mb-4">View all project photos in this gallery</p>
                      <motion.a
                        href={`https://photos.app.goo.gl/${selectedProject.googleAlbumId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        🔗 Open Google Photos Album
                      </motion.a>
                      <p className="text-xs text-blue-600 mt-3">Opens in a new tab</p>
                    </div>
                  </div>
                ) : (
                  <div className="w-full mb-6 rounded-lg overflow-hidden bg-black aspect-video">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${selectedProject.youtubeVideoId}?rel=0`}
                      title={selectedProject.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                      allowFullScreen
                      referrerPolicy="no-referrer"
                      sandbox="allow-same-origin allow-scripts allow-popups allow-presentation"
                      loading="lazy"
                    />
                  </div>
                )}

                {/* Project Details */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-6">
                  <div className="border-l-4 border-secondary pl-4">
                    <p className="text-foreground/60 text-sm">Location</p>
                    <p className="text-primary font-semibold">{selectedProject.location}</p>
                  </div>
                  {selectedProject.type === 'photo' && (
                    <div className="border-l-4 border-secondary pl-4">
                      <p className="text-foreground/60 text-sm">Category</p>
                      <p className="text-primary font-semibold capitalize">{selectedProject.category}</p>
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  {selectedProject.description}
                </p>

                {/* CTA Button */}
                <motion.a
                  href={`https://wa.me/917447722255?text=Hi Sarvmaan Home Superhero, I'm interested in this project: ${selectedProject.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-secondary text-white py-4 px-6 rounded-lg font-bold text-center hover:bg-secondary/90 transition-all duration-300 text-base md:text-lg shadow-base"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{ backgroundColor: '#d4af37', color: '#ffffff' }}
                >
                  💬 Discuss Your Project
                </motion.a>

                {/* Navigation */}
                {filteredProjects.length > 1 && (
                  <div className="flex justify-between items-center mt-6 pt-6 border-t">
                    <button
                      onClick={handlePrev}
                      disabled={currentIndex === 0}
                      className="flex items-center gap-2 text-primary hover:text-secondary disabled:text-gray-300 transition-colors font-medium"
                    >
                      <FiChevronLeft /> Previous
                    </button>
                    <span className="text-foreground/60 text-sm">
                      {currentIndex + 1} of {filteredProjects.length}
                    </span>
                    <button
                      onClick={handleNext}
                      disabled={currentIndex === filteredProjects.length - 1}
                      className="flex items-center gap-2 text-primary hover:text-secondary disabled:text-gray-300 transition-colors font-medium"
                    >
                      Next <FiChevronRight />
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
