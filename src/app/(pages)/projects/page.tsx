import { Metadata } from 'next';
import ProjectsClient from './ProjectsClient';

export const metadata: Metadata = {
  alternates: { canonical: "https://sarvmaan.com/projects" },
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
    description: 'Explore 500+ successfully completed interior design projects',
  },
};

export default function Projects() {
  return <ProjectsClient />;
}
