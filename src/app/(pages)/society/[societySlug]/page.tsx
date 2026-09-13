import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { societies } from '@/data/societies'
import ContactForm from '@/components/ContactForm'

interface SocietyPageProps {
  params: {
    societySlug: string
  }
}

// Generate static params for all societies
export async function generateStaticParams() {
  return societies.map((society) => ({
    societySlug: society.name
      .toLowerCase()
      .replace(/[&]/g, 'and')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
  }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }: SocietyPageProps): Promise<Metadata> {
  const society = findSocietyBySlug(params.societySlug)

  if (!society) {
    return {
      title: 'Society Not Found',
      description: 'The requested society page could not be found.'
    }
  }

  const title = `Premium Interior Design Services in ${society.name} | Sarvmaan Interiors`
  const description = `Transform your home in ${society.name}, ${society.area} with expert interior design services. Personalized designs, quality craftsmanship, and proven expertise. Free consultation!`

  return {
    title,
    description,
    keywords: [
      `interior designer ${society.name}`,
      `interior design ${society.area}`,
      `home design ${society.name}`,
      `interior decorator ${society.area}`,
      `modular kitchen ${society.name}`,
      `interior designer Pune ${society.area}`
    ],
    alternates: {
      canonical: `https://sarvmaan.com/society/${params.societySlug}`
    },
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'en_IN',
      url: `https://sarvmaan.com/society/${params.societySlug}`,
      images: [
        {
          url: '/logo.png',
          width: 1200,
          height: 630,
          alt: `${society.name} Interior Design`
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/logo.png']
    }
  }
}

function findSocietyBySlug(slug: string) {
  return societies.find((s) =>
    s.name
      .toLowerCase()
      .replace(/[&]/g, 'and')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '') === slug
  )
}

export default function SocietyPage({ params }: SocietyPageProps) {
  const society = findSocietyBySlug(params.societySlug)

  if (!society) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Society Not Found</h1>
          <p className="text-gray-600 mb-6">The society page you're looking for doesn't exist.</p>
          <Link href="/" className="text-blue-600 hover:text-blue-800 font-semibold">
            Return to Home
          </Link>
        </div>
      </div>
    )
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `Sarvmaan Interiors - ${society.name}`,
    description: `Premium interior design services in ${society.name}, ${society.area}`,
    url: `https://sarvmaan.com/society/${params.societySlug}`,
    image: '/logo.png',
    telephone: '+91-XXXXXXXXXX',
    areaServed: {
      '@type': 'City',
      name: society.area,
      state: 'Maharashtra',
      country: 'India'
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: society.area,
      addressRegion: 'Pune',
      addressCountry: 'IN'
    },
    priceRange: '₹150000 - ₹2000000',
    ratingValue: '4.8',
    reviewCount: '450+'
  }

  return (
    <div className="min-h-screen bg-white">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-4 text-blue-300 font-semibold tracking-wide uppercase">
              Interior Design Services
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Premium Interior Design in {society.name}
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Transform your home in {society.name}, {society.area} with expert interior design services
              from Sarvmaan Interiors. We bring creativity, quality, and personalized solutions to every project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={`/contact?society=${society.name}&area=${society.area}`}
                className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors text-center"
              >
                Get Free Consultation
              </Link>
              <a
                href="https://wa.me/91XXXXXXXXXX?text=Hi%20Sarvmaan%20Interiors%2C%20I'm%20looking%20for%20interior%20design%20in%20${society.name}"
                className="inline-block px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-colors text-center"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="bg-gray-50 border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-blue-600 hover:text-blue-800">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">Interior Design in {society.name}</span>
          </nav>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Sarvmaan Interiors for {society.name}?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              We're not just interior designers – we're your partners in creating beautiful, functional homes
              in {society.name}. Here's what sets us apart:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🎯',
                title: 'Familiar with Your Community',
                description: `We understand the unique architecture, layout patterns, and character of ${society.name}. 
                This local knowledge helps us design spaces that perfectly complement your home's structure and your lifestyle.`
              },
              {
                icon: '⚡',
                title: 'Quick Turnaround Time',
                description: `Being local to ${society.area}, we have established relationships with suppliers, contractors, 
                and service providers. This means faster execution, better pricing, and quicker project completion.`
              },
              {
                icon: '👥',
                title: 'Personalized Attention',
                description: `Every home in ${society.name} is unique, and so is every client. We don't follow cookie-cutter designs. 
                Each project gets our dedicated team, custom approach, and full attention from concept to completion.`
              },
              {
                icon: '💎',
                title: 'Premium Quality Materials',
                description: `We source the finest materials that withstand Pune's climate and look stunning for decades. 
                Quality isn't an option – it's our standard. We believe in creating designs that last, not just impress.`
              },
              {
                icon: '💰',
                title: 'Flexible Budget Options',
                description: `Whether you're doing a ₹1.5 lakh makeover or a ₹20 lakh transformation, we have solutions for every budget. 
                No compromise on quality or creativity – we're skilled at maximizing value.`
              },
              {
                icon: '🤝',
                title: '24/7 Support & Follow-up',
                description: `After your project is complete, we're still here for you. Questions, tweaks, maintenance advice – 
                we provide ongoing support to ensure you're completely satisfied.`
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Interior Design Services for {society.name} Residents
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              We offer a complete range of interior design services tailored to your needs and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Residential Interior Design',
                description:
                  'Complete home makeovers including space planning, color consultation, furniture selection, and full execution. Perfect for new homes or renovations.'
              },
              {
                title: 'Kitchen & Bathroom Design',
                description:
                  'Modern, functional kitchens and luxurious bathrooms. We handle layout optimization, material selection, and high-quality execution.'
              },
              {
                title: 'Living Room Makeovers',
                description:
                  'Transform your living space into the heart of your home. From color schemes to furniture arrangement to lighting – we handle it all.'
              },
              {
                title: 'Bedroom Design & Customization',
                description:
                  'Create your personal sanctuary. We design bedrooms that balance aesthetics with functionality, ensuring comfort and style.'
              },
              {
                title: 'Color Consultation',
                description:
                  'Perfect color schemes can completely transform a space. Our experts help you choose colors that enhance mood, light, and overall ambiance.'
              },
              {
                title: 'Space Planning & Optimization',
                description:
                  'Make the most of every square foot. We analyze your space and create functional layouts that maximize usability without sacrificing style.'
              },
              {
                title: 'Material Selection & Sourcing',
                description:
                  'We guide you through material choices – flooring, walls, furniture, fixtures – ensuring quality, durability, and value for money.'
              },
              {
                title: '3D Design Visualization',
                description:
                  'See your new design before construction begins. Our 3D renderings help you visualize the final result and make confident decisions.'
              }
            ].map((service, idx) => (
              <div key={idx} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Design Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              From initial consultation to final handover, here's how we bring your dream home to life.
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                step: '01',
                title: 'Free Consultation',
                description: `We visit your home in ${society.name}, listen to your vision, understand your budget, timeline, and lifestyle needs. 
                No pressure, no obligation – just a friendly conversation about your home.`
              },
              {
                step: '02',
                title: 'Proposal & Design',
                description: `Based on our consultation, we create detailed proposals with design concepts. 
                We provide 3D visualizations so you can see exactly how your space will look before we start construction.`
              },
              {
                step: '03',
                title: 'Material Selection',
                description: `We guide you through material, color, and furniture choices. We show samples, explain durability, 
                discuss maintenance, and ensure every selection aligns with your vision and budget.`
              },
              {
                step: '04',
                title: 'Implementation',
                description: `Our trusted network of skilled contractors executes the design with precision. 
                We oversee every detail to ensure quality standards are maintained throughout the project.`
              },
              {
                step: '05',
                title: 'Quality Assurance',
                description: `Before handover, we thoroughly inspect every element – paint finish, tile alignment, furniture placement, 
                lighting, and more. Everything must be perfect.`
              },
              {
                step: '06',
                title: 'Follow-up Support',
                description: `After project completion, we're just a call away. Need tweaks? Have questions? Want maintenance tips? 
                We provide ongoing support to ensure your complete satisfaction.`
              }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-8 items-start">
                <div className="flex-shrink-0 w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  {item.step}
                </div>
                <div className="flex-grow pt-2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trends Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Latest Interior Design Trends We Implement
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              Stay modern and stylish with these trending design approaches we bring to {society.name} homes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                trend: 'Sustainable & Eco-Friendly Materials',
                icon: '🌱',
                description:
                  'More homeowners are choosing environmentally conscious materials. We offer eco-friendly options that look stunning and support sustainability.'
              },
              {
                trend: 'Smart Home Integration',
                icon: '🏠',
                description:
                  'Lighting, temperature, security – automation makes homes smarter. We integrate smart solutions seamlessly into your design.'
              },
              {
                trend: 'Minimalist Design',
                icon: '✨',
                description:
                  'Less is more. Clean lines, decluttered spaces, and functional beauty – minimalism creates calm, organized homes.'
              },
              {
                trend: 'Warm Neutrals & Natural Tones',
                icon: '🎨',
                description:
                  'Beige, warm grey, and natural earth tones dominate 2025. These calming colors create welcoming, timeless spaces.'
              },
              {
                trend: 'Multifunctional Spaces',
                icon: '🛋️',
                description:
                  'Home office + living room. Bedroom + workspace. We design flexible spaces that adapt to modern lifestyles.'
              },
              {
                trend: 'Local Artisan Products',
                icon: '🎭',
                description:
                  'Supporting local craftsmen while adding unique character. Local art and handmade pieces add authenticity to modern designs.'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.trend}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions About Interior Design in {society.name}
            </h2>
          </div>

          <div className="space-y-8">
            {[
              {
                q: `Do you work with ${society.name}'s society rules and regulations?`,
                a: `Absolutely! We're familiar with ${society.name}'s specific requirements and approval processes. 
                We ensure all designs and construction comply with your society's bylaws. We handle society approvals and coordination, 
                so you don't have to worry about it.`
              },
              {
                q: `What's the typical timeline for projects in ${society.name}?`,
                a: `Most ${society.name} projects complete in 4-6 weeks, depending on scope and complexity. 
                For simple makeovers, it can be 2-3 weeks. Complex renovations might take 8-10 weeks. 
                We provide a detailed timeline at the proposal stage, and we communicate progress throughout the project.`
              },
              {
                q: `Can we see your past projects in ${society.name}?`,
                a: `Many of our past clients in the ${society.area} area are happy to share testimonials and project photos. 
                We maintain confidentiality for those who prefer privacy, but we have plenty of references available. 
                Contact us to see a portfolio of similar work or connect with past clients.`
              },
              {
                q: `What's the minimum investment for interior design in ${society.name}?`,
                a: `We work with budgets from ₹1.5 lakhs for a single-room makeover to ₹20 lakhs+ for complete home renovations. 
                There's no minimum – we customize solutions for every budget. The key is discussing your specific needs and budget upfront so we can create the perfect plan.`
              },
              {
                q: `Do you offer virtual consultations?`,
                a: `Yes! We offer detailed video consultations where we can discuss your vision, show you inspiration, 
                and answer questions. After the initial virtual consultation, we follow up with an in-person site visit to finalize details.`
              },
              {
                q: `What happens if we need changes after the design is approved?`,
                a: `Minor changes are part of our process – we expect some refinements as designs come to life. 
                For significant changes after construction starts, we discuss the impact on timeline and budget. 
                After project completion, we're always available for tweaks and adjustments.`
              },
              {
                q: `Do you handle complete execution or just design?`,
                a: `We handle both! We provide design concepts AND manage the complete execution through our trusted contractor network. 
                We oversee construction, quality control, and timeline management so you don't have to stress about the details.`
              },
              {
                q: `How do you ensure quality in the final output?`,
                a: `Quality is non-negotiable. We use premium materials, work with experienced contractors, 
                and do thorough inspections at every stage. Before handover, we do a complete quality audit – 
                paint, tiles, furniture, lighting, everything. We don't hand over a project until it's perfect.`
              }
            ].map((item, idx) => (
              <details key={idx} className="group border-b border-gray-200 pb-6">
                <summary className="cursor-pointer flex justify-between items-start py-4">
                  <h3 className="text-lg font-bold text-gray-900 group-open:text-blue-600 transition-colors">
                    {item.q}
                  </h3>
                  <span className="text-2xl text-gray-400 group-open:text-blue-600 transition-colors flex-shrink-0 ml-4">
                    +
                  </span>
                </summary>
                <p className="text-gray-600 leading-relaxed pb-4">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Trusted by {society.area} Residents</h2>
            <p className="text-xl text-gray-600">
              See why homeowners in {society.area} choose Sarvmaan Interiors for their design needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                stat: '450+',
                label: 'Happy Clients'
              },
              {
                stat: '4.8★',
                label: 'Average Rating'
              },
              {
                stat: '10+ Years',
                label: 'Industry Experience'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-lg p-8 text-center shadow-sm">
                <div className="text-4xl font-bold text-blue-600 mb-2">{item.stat}</div>
                <div className="text-gray-600 font-semibold">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold mb-6">Ready to Transform Your {society.name} Home?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a FREE consultation from our interior design experts. No obligation, just honest advice
            and beautiful ideas for your space.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href={`/contact?society=${society.name}&area=${society.area}`}
              className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors"
            >
              Book Free Consultation
            </Link>
            <a
              href="https://wa.me/91XXXXXXXXXX?text=Hi%20Sarvmaan%20Interiors%2C%20I'm%20looking%20for%20interior%20design%20in%20${society.name}"
              className="inline-block px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer Link Back */}
      <section className="py-8 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 mb-4">
            Looking for interior design services in a different society?
          </p>
          <Link href="/projects" className="text-blue-600 hover:text-blue-800 font-semibold">
            Explore Other Locations →
          </Link>
        </div>
      </section>
    </div>
  )
}
