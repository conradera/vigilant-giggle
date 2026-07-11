export interface Resource {
  id: string;
  title: string;
  type: "tds" | "msds" | "guide" | "brochure";
  category: string;
  description: string;
  fileSize: string;
  file?: string;
  productSlug?: string;
}

export const resources: Resource[] = [
  {
    id: "tds-vinyl-silk",
    title: "NIM Vinyl Silk — Technical Data Sheet",
    type: "tds",
    category: "Interior",
    description: "Complete technical specifications, application guidelines, and performance data for NIM Vinyl Silk.",
    fileSize: "1.2 MB",
    productSlug: "nim-vinyl-silk",
  },
  {
    id: "tds-weatherguard",
    title: "WEATHERGUARD — Technical Data Sheet",
    type: "tds",
    category: "Exterior",
    description: "UV resistance data, coverage rates, curing times, and substrate preparation for WEATHERGUARD.",
    fileSize: "1.4 MB",
    productSlug: "weatherguard",
  },
  {
    id: "tds-texture-paste",
    title: "NIM Texture Paste — Technical Data Sheet",
    type: "tds",
    category: "Textured",
    description: "Texture grade specifications, application techniques, and coverage rates for NIM Texture Paste.",
    fileSize: "1.1 MB",
    productSlug: "nim-texture-paste",
  },
  {
    id: "msds-vinyl-silk",
    title: "NIM Vinyl Silk — Material Safety Data Sheet",
    type: "msds",
    category: "Interior",
    description: "Safety handling instructions, chemical composition, first aid measures, and disposal guidelines.",
    fileSize: "0.9 MB",
    productSlug: "nim-vinyl-silk",
  },
  {
    id: "msds-weatherguard",
    title: "WEATHERGUARD — Material Safety Data Sheet",
    type: "msds",
    category: "Exterior",
    description: "Safety data for exterior application including VOC content, storage requirements, and spill procedures.",
    fileSize: "1.0 MB",
    productSlug: "weatherguard",
  },
  {
    id: "guide-surface-preparation",
    title: "Surface Preparation Guide for Tropical Climates",
    type: "guide",
    category: "Guides",
    description: "A comprehensive guide to preparing walls, concrete, and metal surfaces in high-humidity environments.",
    fileSize: "2.4 MB",
  },
  {
    id: "guide-color-selection",
    title: "Color Selection Guide 2026",
    type: "guide",
    category: "Guides",
    description: "Trend colors for East African architecture, color theory basics, and our signature palette recommendations.",
    fileSize: "3.1 MB",
  },
  {
    id: "brochure-complete",
    title: "NIM Paints Complete Product Brochure 2026",
    type: "brochure",
    category: "Brochures",
    description: "Full product catalog with specifications, color swatches, and project references.",
    fileSize: "8.5 MB",
  },
  {
    id: "brochure-architectural",
    title: "Architectural Specifications Brochure",
    type: "brochure",
    category: "Brochures",
    description: "Technical specifications for architects, engineers, and specifiers.",
    fileSize: "5.2 MB",
  },
  {
    id: "company-profile",
    title: "NIM Paints Company Profile 2025",
    type: "brochure",
    category: "Brochures",
    description: "Complete company profile covering our history, product range, services, projects, and certifications.",
    fileSize: "1.9 MB",
    file: "/resources/nim-company-profile-2025.pdf",
  },
];

export const resourceCategories = ["All", "TDS", "MSDS", "Guides", "Brochures"] as const;
