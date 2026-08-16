export interface Project {
  id: string;
  title: string;
  category: "kitchen" | "wardrobe" | "hall" | "tvunit" | "mandir" | "bedroom" | "complete-home-interior" | "commercial";
  type: "photo" | "video" | "google-album"; // "photo" for gallery, "video" for YouTube, "google-album" for Google Photos
  image: string;
  youtubeVideoId?: string; // For video type projects
  googleAlbumId?: string; // For Google Photos album
  description: string;
  location: string;
  testimonial?: string;
  testimonialAuthor?: string;
}

export const projects: Project[] = [
  // PHOTO PORTFOLIOS
  {
    id: "1",
    title: "Modular Kitchen",
    category: "kitchen",
    type: "photo",
    image: "/images/projects/kitchen-1.webp",
    description: "Contemporary kitchen with sleek cabinetry, integrated appliances, and premium countertops",
    location: "VJ Supernova ,Wakad, Pune",
  },
  {
    id: "2",
    title: "Designer Wardrobe",
    category: "wardrobe",
    type: "photo",
    image: "/images/projects/wardrobe-1.webp",
    description: "Custom wardrobe with smart storage solutions, soft-close hinges, and internal LED lighting",
    location: "Royal Entrada ,Wakad, Pune",
  },
  {
    id: "3",
    title: "Living Hall",
    category: "hall",
    type: "photo",
    image: "/images/projects/livingroom-1.webp",
    description: "Spacious living room with modular seating, entertainment unit, and smart ambient lighting",
    location: "Royal Entrada ,Wakad, Pune",
  },
  {
    id: "4",
    title: "TV Unit",
    category: "tvunit",
    type: "photo",
    image: "/images/projects/tvunit-1.webp",
    description: "Modern TV unit with storage, cable management, and recessed lighting design",
    location: "VTP leonara, Mahalunge",
  },
  {
    id: "5",
    title: "Master Bedroom",
    category: "bedroom",
    type: "photo",
    image: "/images/projects/masterbedroom-1.webp",
    description: "Luxurious bedroom with custom wardrobes, ambient lighting, and premium finishes",
    location: "VJ Supernova ,Wakad, Pune",
  },

  {
    id: "6",
    title: "Kids Bedroom",
    category: "bedroom",
    type: "photo",
    image: "/images/projects/kidsbedroom-1.webp",
    description: "Modern Kids’ Bedroom with Integrated Study Desks, Double Beds, and Symmetrical Design",
    location: "Gera Emerald City , Baner ,Pune",
  },
  // VIDEO PORTFOLIOS (YouTube links)
  {
    id: "7",
    title: "Full Home Interior Execution Walkthrough",
    category: "complete-home-interior",
    type: "video",
    image: "/images/projects/completeinterior-1.webp",
    youtubeVideoId: "a0UyjY2bUt8",
    description: "Experience the complete interior design and execution of this newly built apartment, crafted with a perfect blend of functionality, aesthetics, and modern detailing. This walkthrough showcases every space — from entrance to bedrooms — highlighting material choices, color palette, lighting design, carpentry finish, and overall spatial planning.",
    location: "VJ Supernova , Wakad ,Pune",
  },
  {
    id: "8",
    title: "Bringing the Vision to Life: Walkthrough & Client Reflections",
    category: "complete-home-interior",
    type: "video",
    image: "/images/projects/completeinterior-2.webp",
    youtubeVideoId: "4sN4e6oioEk",
    description: "Step inside this thoughtfully designed 3 BHK home at Royal Entrada, Wakad. In this video, we take you through a full walkthrough of the space, showcasing how smart spatial planning and a clean, minimalist interior design transform a compact footprint into an airy, functional, and warm home. Watch until the end to hear the client’s real-time feedback and review as they share their experience of bringing this project to life.",
    location: "Royal Entrada ,Wakad, Pune",
  },
  {
    id: "9",
    title: "Turnkey 2 BHK Interior Design & Execution | Client Experience Included",
    category: "complete-home-interior",
    type: "video",
    image: "/images/projects/completeinterior-3.webp",
    youtubeVideoId: "4sN4e6oioEk",
    description: "Presenting our beautifully completed 2 BHK home interior project at Mantra Monarch, Balewadi, Pune, where thoughtful design meets flawless execution. Every corner of this home reflects SarvMaan Interiors’ commitment to premium craftsmanship, functional planning, and elegant aesthetics. The entrance welcomes you with a custom shoe rack, a beautifully crafted security door, and a personalized nameplate that sets a warm tone for the home. The living area features a serene Mandir designed with precision, creating a peaceful focal point. The kitchen is modern, spacious, and optimized for everyday convenience with smart storage and clean finishes. Both bedrooms are styled with comfort‑driven layouts, premium materials, and practical storage solutions that elevate the overall ambience. This project showcases our expertise in full interior design and execution, transforming a newly built apartment into a stylish, functional, and personalized living space.",
    location: "Mantra Monarch ,Balewadi, Pune",
  },
];
