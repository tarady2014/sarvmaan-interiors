export interface Project {
  id: string;
  title: string;
  category: "kitchen" | "wardrobe" | "hall" | "tvunit" | "mandir" | "bedroom" | "renovation" | "commercial";
  type: "photo" | "video"; // "photo" for gallery, "video" for YouTube
  image: string;
  youtubeVideoId?: string; // For video type projects
  description: string;
  location: string;
  timeline: string;
  materials?: string[];
  testimonial?: string;
  testimonialAuthor?: string;
}

export const projects: Project[] = [
  // PHOTO PORTFOLIOS
  {
    id: "1",
    title: "Modular Kitchen - Bavdhan",
    category: "kitchen",
    type: "photo",
    image: "/images/projects/kitchen-1.webp",
    description: "Contemporary kitchen with sleek cabinetry, integrated appliances, and premium countertops",
    location: "Bavdhan, Pune",
    timeline: "45 days",
    materials: ["German plywood", "Quartz countertop", "Stainless steel appliances"],
  },
  {
    id: "2",
    title: "Designer Wardrobe - Wakad",
    category: "wardrobe",
    type: "photo",
    image: "/images/projects/wardrobe-1.webp",
    description: "Custom wardrobe with smart storage solutions, soft-close hinges, and internal LED lighting",
    location: "Wakad, Pune",
    timeline: "25 days",
    materials: ["Engineered wood", "Soft-close hardware", "LED lighting"],
  },
  {
    id: "3",
    title: "Living Hall - Baner",
    category: "hall",
    type: "photo",
    image: "/images/projects/livingroom-1.webp",
    description: "Spacious living room with modular seating, entertainment unit, and smart ambient lighting",
    location: "Baner, Pune",
    timeline: "40 days",
    materials: ["Natural wood paneling", "Marble flooring", "Designer upholstery"],
  },
  {
    id: "4",
    title: "TV Unit - Baner",
    category: "tvunit",
    type: "photo",
    image: "/images/projects/tvunit-1.webp",
    description: "Modern TV unit with storage, cable management, and recessed lighting design",
    location: "Baner, Pune",
    timeline: "20 days",
    materials: ["Premium plywood", "Laminate finish", "LED strip lighting"],
  },
  {
    id: "5",
    title: "Master Bedroom - Viman Nagar",
    category: "bedroom",
    type: "photo",
    image: "/images/projects/masterbedroom-1.webp",
    description: "Luxurious bedroom with custom wardrobes, ambient lighting, and premium finishes",
    location: "Viman Nagar, Pune",
    timeline: "35 days",
    materials: ["Italian tiles", "Premium plywood", "LED accent lighting"],
  },

  // VIDEO PORTFOLIOS (YouTube links)
  {
    id: "6",
    title: "Complete Home Renovation Walkthrough",
    category: "renovation",
    type: "video",
    image: "/images/projects/completeinterior-1.webp",
    youtubeVideoId: "a0UyjY2bUt8", // Replace with actual Sarvmaan YouTube video ID
    description: "Complete 3BHK home renovation with modular kitchen, wardrobes, flooring, and décor",
    location: "Pune",
    timeline: "120 days",
  },
  {
    id: "7",
    title: "Modular Kitchen Installation - Before & After",
    category: "kitchen",
    type: "video",
    image: "/images/projects/completeinterior-1.webp",
    youtubeVideoId: "a0UyjY2bUt8", // Replace with actual Sarvmaan YouTube video ID
    description: "Professional modular kitchen installation with premium fittings and finishes",
    location: "Bhugaon, Pune",
    timeline: "45 days",
  },
  {
    id: "8",
    title: "Mandir Design & Installation",
    category: "mandir",
    type: "video",
    image: "/images/projects/completeinterior-1.webp",
    youtubeVideoId: "a0UyjY2bUt8", // Replace with actual Sarvmaan YouTube video ID
    description: "Beautiful pooja room design with traditional elements and modern aesthetics",
    location: "Various locations",
    timeline: "15-30 days",
  },
  {
    id: "9",
    title: "Commercial Office Space Design",
    category: "commercial",
    type: "video",
     image: "/images/projects/completeinterior-1.webp",
    youtubeVideoId: "a0UyjY2bUt8", // Replace with actual Sarvmaan YouTube video ID
    description: "Modern office space with collaborative zones, meeting rooms, and workstations",
    location: "Hinjewadi, Pune",
    timeline: "90 days",
  },
];
