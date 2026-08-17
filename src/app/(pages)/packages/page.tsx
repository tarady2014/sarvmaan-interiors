import { Metadata } from 'next';
import PackagesClient from './PackagesClient';

export const metadata: Metadata = {
  alternates: { canonical: "https://sarvmaan.com/packages" },
  title: 'Interior Design Packages & Pricing | Flexible Solutions',
  description: 'Affordable interior design packages starting from ₹2L. Essential, Premium, and Luxury packages. Flexible timeline, 3D visualization, and quality furniture included.',
  keywords: 'interior design packages, interior design cost, affordable interior design, modular kitchen price, interior design pricing',
  openGraph: {
    type: 'website',
    url: 'https://sarvmaan.com/packages',
    title: 'Interior Design Packages & Pricing | Sarvmaan',
    description: 'Affordable packages from ₹2L. Essential, Premium, and Luxury options with flexible timelines.',
    images: [
      {
        url: '/images/hero-package.webp',
        width: 1200,
        height: 630,
        alt: 'Interior Design Packages & Pricing | Sarvmaan',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Interior Design Packages & Pricing | Sarvmaan',
    description: 'Essential, Premium, and Luxury packages starting from ₹2L',
  },
};

export default function Packages() {
  return <PackagesClient />;
}
