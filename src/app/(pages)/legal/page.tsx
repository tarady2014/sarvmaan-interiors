import { Metadata } from 'next';
import LegalClient from './LegalClient';

export const metadata: Metadata = {
  alternates: { canonical: "https://sarvmaan.com/legal" },
  title: 'Legal & Privacy Policy | Terms & Conditions | Sarvmaan',
  description: 'Read our Terms & Conditions, Privacy Policy, and Disclaimer. Learn how we protect your data and our commitment to transparent business practices.',
  keywords: 'privacy policy, terms and conditions, disclaimer, data protection, privacy',
  openGraph: {
    type: 'website',
    url: 'https://sarvmaan.com/legal',
    title: 'Legal & Privacy Policy | Sarvmaan',
    description: 'Terms & Conditions, Privacy Policy, and Disclaimer',
    images: [
      {
        url: '/images/sarvmaan-office.webp',
        width: 1200,
        height: 630,
        alt: 'Legal & Privacy Policy | Sarvmaan',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Legal & Privacy Policy | Sarvmaan',
    description: 'Terms, Privacy Policy, and Disclaimer',
  },
};

export default function Legal() {
  return <LegalClient />;
}
