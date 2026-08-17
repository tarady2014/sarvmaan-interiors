import { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  alternates: { canonical: "https://sarvmaan.com/contact" },
  title: 'Contact Sarvmaan | Get Your Free Interior Design Consultation',
  description: 'Get in touch with our interior design experts for a free consultation. Call +91 74477 22255 or fill our contact form. 24/7 support for your dream home project.',
  keywords: 'contact interior designer, free consultation, interior design inquiry, Pune design services, home renovation contact',
  openGraph: {
    type: 'website',
    url: 'https://sarvmaan.com/contact',
    title: 'Contact Sarvmaan | Free Interior Design Consultation',
    description: 'Get in touch with our interior design experts for a free consultation. 24/7 support available.',
    images: [
      {
        url: '/images/hero-contact.webp',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Sarvmaan | Free Interior Design Consultation',
    description: 'Get in touch with our interior design experts. Call +91 74477 22255 or fill our contact form.',
  },
};

export default function Contact() {
  return <ContactClient />;
}
