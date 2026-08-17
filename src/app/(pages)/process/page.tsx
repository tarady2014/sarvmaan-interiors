import { Metadata } from 'next';
import ProcessClient from './ProcessClient';

export const metadata: Metadata = {
  alternates: { canonical: "https://sarvmaan.com/process" },
  title: 'Our Interior Design Process | 6-Step Transparent Workflow',
  description: 'Understand our proven 6-step design process: Consultation, Design, Planning, Execution, Quality Check, and Handover. Transparent, professional, and customer-focused.',
  keywords: 'interior design process, design workflow, home design steps, interior design consultation, project management',
  openGraph: {
    type: 'website',
    url: 'https://sarvmaan.com/process',
    title: 'Our Design Process | Sarvmaan Home Superhero',
    description: '6-step transparent process: Consultation → Design → Planning → Execution → QC → Handover',
    images: [
      {
        url: '/images/hero-process.webp',
        width: 1200,
        height: 630,
        alt: 'Our Design Process | Sarvmaan Home Superhero',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Design Process | Sarvmaan Home Superhero',
    description: '6-step transparent workflow for your interior design project',
  },
};

export default function Process() {
  return <ProcessClient />;
}
