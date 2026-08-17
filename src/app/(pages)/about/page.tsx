import { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  alternates: { canonical: "https://sarvmaan.com/about" },
  title: 'About Sarvmaan Home Superhero | Award-Winning Interior Designers',
  description: '6+ years of excellence in interior design. 500+ successful projects. Meet our expert team dedicated to transforming homes in Pune with premium design solutions.',
  keywords: 'interior designers Pune, home design experts, modular kitchen designers, wardrobes, furniture design',
  openGraph: {
    type: 'website',
    url: 'https://sarvmaan.com/about',
    title: 'About Sarvmaan | Pune Interior Design Experts',
    description: '6+ years of excellence. 500+ projects. Premium interior design & modular solutions.',
    images: [
      {
        url: '/images/hero-about.webp',
        width: 1200,
        height: 630,
        alt: 'About Sarvmaan | Pune Interior Design Experts',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Sarvmaan | Pune Interior Design Experts',
    description: 'Award-winning interior designers with 500+ successful projects',
  },
};

export default function About() {
  return <AboutClient />;
}
