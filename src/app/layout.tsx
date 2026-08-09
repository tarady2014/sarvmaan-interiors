import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sarvmaan Home Superhero | Premium Interior Design & Modular Kitchens",
  description: "Transform your house into your dream home with Sarvmaan Home Superhero. Award-winning interior design, modular kitchens, wardrobes, and full home renovations. 500+ projects completed.",
  keywords: "interior design, modular kitchen, wardrobes, home renovation, Pune interiors, premium design",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://sarvmaanhomesuperhero.com",
    title: "Sarvmaan Home Superhero | Premium Interior Design",
    description: "Transform your house into your dream home with Sarvmaan Home Superhero",
    images: [
      {
        url: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarvmaan Home Superhero | Premium Interior Design",
    description: "Transform your house into your dream home with Sarvmaan Home Superhero",
  },
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1 pt-16">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
