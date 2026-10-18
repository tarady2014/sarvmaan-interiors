import type { Metadata, Viewport } from "next";
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
  robots: "index, follow",
  icons: {
    icon: [
      {
        url: "/favicon.png",
        type: "image/png",
        sizes: "any",
      },
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
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
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PTMTV5W2');`,
          }}
        />
        {/* End Google Tag Manager */}

        {/* Favicon Links */}
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta name="color-scheme" content="light only" />
        <meta name="theme-color" content="#ffffff" />
        
        {/* Google Analytics 4 (GA4) & Google Ads (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-6V2Q2XSC18"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              // Google Analytics 4
              gtag('config', 'G-6V2Q2XSC18');
              // Google Ads
              gtag('config', 'AW-18417335374');
            `,
          }}
        />
      </head>
      <body className="bg-white text-gray-900">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PTMTV5W2"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

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
