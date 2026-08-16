'use client';

import { motion } from 'framer-motion';
import { FiGrid, FiBox, FiHome, FiBriefcase, FiTrendingUp, FiCheckSquare, FiLayout, FiDroplet, FiSettings, FiTool, FiShoppingCart, FiAward, FiHardDrive, FiRefreshCw } from 'react-icons/fi';
import HeroImage from '@/components/HeroImage';

const services = [
  // CORE INTERIOR SOLUTIONS
  {
    id: 1,
    category: 'Core Solutions',
    icon: FiGrid,
    title: 'Modular Kitchen Design',
    description: 'Efficient, stylish modular kitchens with custom storage solutions. Premium plywood, quartz countertops, and ergonomic layouts designed for modern Indian homes. Transform your kitchen into a functional and beautiful space.',
    features: ['Premium plywood & materials', 'Quartz countertops', 'Smart storage solutions'],
    keywords: ['modular kitchen', 'kitchen design', 'custom storage'],
  },
  {
    id: 2,
    category: 'Core Solutions',
    icon: FiBox,
    title: 'Full Home Interiors',
    description: 'Complete end-to-end interior solutions for your entire home. From living rooms and bedrooms to kitchens and bathrooms - we design every space with precision, aesthetics, and functionality. Professional execution with quality assurance.',
    features: ['Complete home transformation', 'Custom designed spaces', 'Quality furniture installation'],
    keywords: ['full home interior', 'home design', 'interior solutions'],
  },
  {
    id: 3,
    category: 'Core Solutions',
    icon: FiHome,
    title: 'Bedroom Interior',
    description: 'Beautiful, functional bedroom interiors with custom wardrobes and intelligent space planning. Modern false ceilings with integrated lighting, personalized color themes, and premium finishes. Create your dream bedroom sanctuary.',
    features: ['Custom wardrobe design', 'False ceiling with lighting', 'Smart space planning'],
    keywords: ['bedroom interior', 'wardrobe design', 'bedroom renovation'],
  },
  {
    id: 4,
    category: 'Core Solutions',
    icon: FiTrendingUp,
    title: 'Bathroom Interior',
    description: 'Modern bathroom designs with premium fittings and waterproofing systems. Elegant tile layouts, sophisticated vanity units, and efficient ventilation. Luxurious yet practical bathrooms for everyday comfort and durability.',
    features: ['Modern layouts', 'Premium fittings & tiles', 'Waterproofing systems'],
    keywords: ['bathroom design', 'bathroom renovation', 'bathroom interiors'],
  },

  // DESIGN & VISUALIZATION
  {
    id: 5,
    category: 'Design Services',
    icon: FiLayout,
    title: '2D & 3D Interior Design',
    description: 'Detailed 2D floor plans with accurate space planning and furniture placement. High-quality 3D photorealistic renders and immersive walkthroughs that help you visualize the final design before execution begins.',
    features: ['Detailed 2D floor plans', '3D visualization rendering', 'Walkthrough videos'],
    keywords: ['interior design', '3D rendering', 'space planning'],
  },
  {
    id: 6,
    category: 'Design Services',
    icon: FiDroplet,
    title: 'Material & Color Consultation',
    description: 'Expert guidance on selecting tiles, laminates, paints, fabrics, and finishes that match your style and budget. Professional recommendations on quality, durability, and aesthetic appeal for every element of your interior.',
    features: ['Tile & laminate selection', 'Paint & finish guidance', 'Budget optimization'],
    keywords: ['material selection', 'color consultation', 'interior materials'],
  },
  {
    id: 7,
    category: 'Design Services',
    icon: FiSettings,
    title: 'Lighting Design',
    description: 'Comprehensive lighting plans that enhance mood, functionality, and aesthetics. Ambient, task, and accent lighting solutions with smart home integration options for energy-efficient and beautiful illumination throughout your space.',
    features: ['Ambient & task lighting', 'Smart lighting integration', 'Energy-efficient solutions'],
    keywords: ['lighting design', 'interior lighting', 'smart lights'],
  },

  // EXECUTION & BUILD SERVICES
  {
    id: 8,
    category: 'Execution Services',
    icon: FiTool,
    title: 'Carpentry & Woodwork',
    description: 'Custom modular units, wardrobes, TV panels, and storage solutions crafted with precision. High-quality woodwork using premium materials and skilled craftsmen ensuring durability, aesthetics, and perfect fit for your space.',
    features: ['Custom modular units', 'TV panels & wall units', 'Precision craftsmanship'],
    keywords: ['carpentry', 'custom woodwork', 'wooden furniture'],
  },
  {
    id: 9,
    category: 'Execution Services',
    icon: FiBriefcase,
    title: 'False Ceiling & Integrated Lighting',
    description: 'Modern gypsum and POP false ceiling designs with integrated LED lighting solutions. Acoustic benefits, decorative profiles, and hidden wiring integration for a clean, sophisticated look that enhances your interior aesthetics.',
    features: ['Gypsum ceiling designs', 'LED lighting solutions', 'Acoustic treatments'],
    keywords: ['false ceiling', 'ceiling design', 'integrated lighting'],
  },
  {
    id: 10,
    category: 'Execution Services',
    icon: FiCheckSquare,
    title: 'Painting & Wall Finishes',
    description: 'Premium paint finishes, texture paints, and wallpaper installations that transform your walls. From accent walls and murals to textured finishes, we provide quality wall decoration that elevates your interior design.',
    features: ['Premium paint finishes', 'Texture & wallpaper options', 'Wall decor installation'],
    keywords: ['painting services', 'wall finishes', 'wallpaper installation'],
  },
  {
    id: 11,
    category: 'Execution Services',
    icon: FiAward,
    title: 'Turnkey Execution & Site Supervision',
    description: 'Complete end-to-end project execution with on-site quality supervision. Civil modifications, electrical work, plumbing, and all finishes handled by our expert team with timeline guarantee and vendor coordination.',
    features: ['End-to-end execution', 'Quality supervision', 'Timeline guarantee'],
    keywords: ['project execution', 'site supervision', 'interior execution'],
  },

  // SPECIALIZED SOLUTIONS
  {
    id: 12,
    category: 'Specialized',
    icon: FiHardDrive,
    title: 'Modular Storage Solutions',
    description: 'Intelligent storage systems and multi-functional furniture designed to maximize space in compact homes. Smart wardrobe systems, hidden storage, and space-optimization solutions that blend style with functionality.',
    features: ['Wardrobe systems', 'Smart storage optimization', 'Multi-functional furniture'],
    keywords: ['storage solutions', 'modular storage', 'space optimization'],
  },
  {
    id: 13,
    category: 'Specialized',
    icon: FiShoppingCart,
    title: 'Commercial Interiors',
    description: 'Professional commercial interior design for offices, retail showrooms, restaurants, cafes, and healthcare clinics. Brand-aligned interiors that enhance functionality, customer experience, and create inspiring workspaces.',
    features: ['Office interiors', 'Retail showrooms', 'Restaurant & cafe design'],
    keywords: ['commercial interiors', 'office design', 'retail design'],
  },
  {
    id: 14,
    category: 'Specialized',
    icon: FiRefreshCw,
    title: 'Renovation & Makeover Services',
    description: 'Transform old spaces into modern, functional interiors with complete home and office renovations. Kitchen remodeling, bathroom upgrades, office refurbishment - giving new life to your existing spaces with contemporary design.',
    features: ['Complete home renovation', 'Kitchen remodeling', 'Office refurbishment'],
    keywords: ['home renovation', 'interior renovation', 'remodeling services'],
  },
  {
    id: 15,
    category: 'Specialized',
    icon: FiTrendingUp,
    title: 'Smart Home & Premium Add-ons',
    description: 'Future-ready homes with smart lighting automation, home automation systems, and IoT-enabled controls. Optional Vastu-aligned planning and acoustic treatments for a personalized, technologically advanced interior experience.',
    features: ['Smart lighting automation', 'Home automation systems', 'Vastu-aligned planning'],
    keywords: ['smart home', 'home automation', 'smart lighting'],
  },
];

function ServiceCard({ service }: { service: typeof services[0] }) {
  const Icon = service.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-light rounded-lg p-6 md:p-8 border border-gray-200 hover:shadow-base transition-shadow flex flex-col h-full"
    >
      {/* Icon & Title */}
      <div className="flex items-start gap-3 mb-4">
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
          <Icon className="text-2xl md:text-3xl text-secondary" />
        </div>
        <h3 className="text-lg md:text-xl font-bold text-primary mt-1">{service.title}</h3>
      </div>

      {/* Description */}
      <p className="text-sm md:text-base text-foreground/80 mb-4 leading-relaxed">
        {service.description}
      </p>

      {/* Features */}
      <div className="mb-4">
        <p className="text-xs md:text-sm font-semibold text-foreground/70 mb-2">Key Features:</p>
        <ul className="space-y-1">
          {service.features.map((feature, idx) => (
            <li key={idx} className="text-xs md:text-sm text-foreground/80 flex items-start gap-2">
              <span className="text-secondary mt-0.5">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Keywords */}
      <div className="mb-4 pb-4 border-b border-gray-300">
        <p className="text-xs font-semibold text-foreground/60 uppercase tracking-wide mb-2">Keywords:</p>
        <div className="flex flex-wrap gap-1.5">
          {service.keywords.map((keyword, idx) => (
            <span key={idx} className="text-xs bg-secondary/10 text-secondary px-2 py-0.5 rounded-full">
              {keyword}
            </span>
          ))}
        </div>
      </div>

      {/* CTA Button - Always visible at bottom */}
      <div className="mt-auto">
        <a
          href="/contact"
          className="inline-block w-full py-3 px-4 rounded-lg font-bold text-center text-sm md:text-base"
          style={{ backgroundColor: '#d4af37', color: '#ffffff', textDecoration: 'none' }}
        >
          Discuss Project
        </a>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <div className="flex flex-col">
      <HeroImage 
        title="Our Services"
        subtitle="Comprehensive interior design and execution"
        imageUrl="images/hero-services.webp"
        imageAlt="Interior Design Services"
      />

      {/* Services Grid */}
      <section className="py-8 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Core Solutions */}
          <div className="mb-12">
            <motion.h3
              className="text-2xl md:text-3xl font-bold text-primary mb-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              🏠 Core Interior Solutions
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12">
              {services.filter(s => s.category === 'Core Solutions').map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>

          {/* Design Services */}
          <div className="mb-12">
            <motion.h3
              className="text-2xl md:text-3xl font-bold text-primary mb-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              🎨 Design & Visualization
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              {services.filter(s => s.category === 'Design Services').map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>

          {/* Execution Services */}
          <div className="mb-12">
            <motion.h3
              className="text-2xl md:text-3xl font-bold text-primary mb-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              🛠️ Execution & Build Services
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12">
              {services.filter(s => s.category === 'Execution Services').map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>

          {/* Specialized Solutions */}
          <div className="mb-12">
            <motion.h3
              className="text-2xl md:text-3xl font-bold text-primary mb-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              🧩 Specialized Solutions
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12">
              {services.filter(s => s.category === 'Specialized').map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 md:py-16 bg-gradient-to-r from-[#1a1410] to-[#b8956a] text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-6">Let's Start Your Project</h2>
            <p className="text-sm md:text-base text-white/90 mb-6 md:mb-8 max-w-2xl mx-auto">
              Schedule a free consultation with our design team to discuss your requirements and budget.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-primary px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm md:text-base"
              style={{ backgroundColor: '#d4af37', color: '#ffffff', textDecoration: 'none' }}
            >
              Book Free Consultation
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
