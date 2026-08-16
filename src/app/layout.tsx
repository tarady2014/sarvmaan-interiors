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
    url: "https://sarvmaan.com",
    title: "Sarvmaan Home Superhero | Premium Interior Design",
    description: "Transform your house into your dream home with Sarvmaan Home Superhero",
    images: [
      {
        url: "/images/hero-home.webp",
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
      suppressHydrationWarning
    >
      <head>
        <meta name="color-scheme" content="light only" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className="bg-white text-gray-900">
        <Header />
        <main className="pt-[80px]">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
