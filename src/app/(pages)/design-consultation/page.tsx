import { Metadata } from 'next';
import DesignConsultationClient from './DesignConsultationClient';

export const metadata: Metadata = {
  title: 'Interior Design Consultation Services | SarvMaan Interiors',
  description:
    'Professional interior design consultation services including 2D layouts, 3D designs, material selection guidance, and execution support. Flexible design packages for homeowners.',
  keywords:
    'interior design consultation, interior designer near me, 3D home interior design, interior design services, home renovation consultation, space planning services',
  alternates: {
    canonical: 'https://sarvmaan.com/design-consultation',
  },
  openGraph: {
    type: 'website',
    url: 'https://sarvmaan.com/design-consultation',
    title: 'Interior Design Consultation Services | SarvMaan Interiors',
    description:
      'Get expert interior design plans, 3D visualizations, material guidance, and execution support. Flexible packages tailored to your needs.',
    images: [
      {
        url: '/images/hero-home.webp',
        width: 1200,
        height: 630,
        alt: 'Professional Interior Design Consultation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Interior Design Consultation Services',
    description: 'Expert design guidance with flexible packages. 2D layouts, 3D visualizations, material selection, and execution support.',
  },
};

export default function DesignConsultationPage() {
  return (
    <>
      <DesignConsultationClient />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Interior Design Consultation Services',
            provider: {
              '@type': 'LocalBusiness',
              name: 'SarvMaan Interiors',
              url: 'https://sarvmaan.com',
              telephone: '+91-XXXXXXXXXX',
              areaServed: 'Pune, India',
            },
            description:
              'Professional interior design consultation including 2D layouts, 3D designs, material selection, and execution support.',
            serviceType: ['Interior Design', 'Space Planning', 'Material Selection'],
            offers: [
              {
                '@type': 'Offer',
                name: 'Essential Design Package',
                price: 'Contact for pricing',
                priceCurrency: 'INR',
              },
              {
                '@type': 'Offer',
                name: 'Premium Design Package',
                price: 'Contact for pricing',
                priceCurrency: 'INR',
              },
              {
                '@type': 'Offer',
                name: 'Design + Project Guidance',
                price: 'Contact for pricing',
                priceCurrency: 'INR',
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Can I use my own contractors?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes! Our design consultation service is designed for flexibility. You can use your preferred contractors or work with our recommended vendors.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do you provide only design services?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Our consultation packages focus on design and guidance. However, we can provide execution support if needed, or help you coordinate with your chosen contractors.',
                },
              },
              {
                '@type': 'Question',
                name: 'How many revisions are included?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Essential packages include 1 revision, Premium includes 2 revisions, and Design + Project Guidance packages include unlimited revisions.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do you help with material selection?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Absolutely! Material selection guidance and recommendations are core parts of all our consultation packages.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can I upgrade to a turnkey package later?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes! Your design fees can be credited towards a complete turnkey project if you decide to work with us for full execution.',
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}
