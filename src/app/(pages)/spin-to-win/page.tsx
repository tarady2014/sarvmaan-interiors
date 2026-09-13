import { Metadata } from 'next';
import SocietiesDirectoryClient from './SocietiesDirectoryClient';

export const metadata: Metadata = {
  alternates: { canonical: "https://sarvmaan.com/spin-to-win" },
  title: 'Spin to Win - Get Interior Design Discounts | Sarvmaan Home Superhero',
  description: 'Spin the wheel and win amazing offers! Get up to 5% discount or free ₹5,000 design consultation on interior design services in Pune.',
  keywords: 'spin to win, interior design discount, Pune interior design, free consultation, home interior offers',
  openGraph: {
    type: 'website',
    url: 'https://sarvmaan.com/spin-to-win',
    title: 'Spin to Win - Interior Design Offers | Sarvmaan',
    description: 'Spin the wheel and win exclusive discounts or free design consultation!',
    images: [
      {
        url: '/images/hero-home.webp',
        width: 1200,
        height: 630,
        alt: 'Spin to Win - Interior Design Offers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spin to Win - Interior Design Offers',
    description: 'Spin the wheel and win amazing discounts on interior design',
  },
};

export default function SocietiesPage() {
  return <SocietiesDirectoryClient />;
}
