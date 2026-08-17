import { Metadata } from 'next';
import ServicesClient from './ServicesClient';

export const metadata: Metadata = {
  alternates: { canonical: "https://sarvmaan.com/services" },
  title: 'Interior Design Services | Modular Kitchens, Wardrobes & More',
  description: 'Complete interior design services - modular kitchens, wardrobes, full home interiors, TV units, and commercial design. Customize your space with premium solutions.',
  keywords: 'interior design services, modular kitchen Pune, wardrobe design, TV unit, full home interior, commercial design',
  openGraph: {
    type: 'website',
    url: 'https://sarvmaan.com/services',
    title: 'Interior Design Services | Sarvmaan Home Superhero',
    description: 'Modular kitchens, wardrobes, full home interiors, and commercial design solutions.',
    images: [
      {
        url: '/images/hero-services.webp',
        width: 1200,
        height: 630,
        alt: 'Interior Design Services | Sarvmaan Home Superhero',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Interior Design Services | Sarvmaan Home Superhero',
    description: 'Custom modular kitchens, wardrobes, and complete home solutions',
  },
};

export default function Services() {
  return <ServicesClient />;
}
