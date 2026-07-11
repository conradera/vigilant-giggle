export interface Palette {
  name: string;
  finish: string;
  color: string;
  hex: string;
}

export const palettes: Palette[] = [
  { name: "Forest Canopy", finish: "Gloss Finish", color: "bg-leaf-green", hex: "#1D8A35" },
  { name: "Kampala Gold", finish: "Satin Finish", color: "bg-flame-gold", hex: "#D4A017" },
  { name: "Royal Crest", finish: "Matte Finish", color: "bg-royal-purple", hex: "#6820B8" },
  { name: "Midnight Sky", finish: "Textured", color: "bg-deep-forest", hex: "#1A2B1C" },
  { name: "Misty Peak", finish: "Eggshell", color: "bg-surface-dim", hex: "#CBE0C9" },
];

export const roomScenes = [
  {
    id: "living-room",
    name: "Living Room",
    walls: "#1D8A35",
    trim: "#ffffff",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
  },
  {
    id: "bedroom",
    name: "Bedroom",
    walls: "#D4A017",
    trim: "#ffffff",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80",
  },
  {
    id: "exterior",
    name: "Exterior Facade",
    walls: "#1A2B1C",
    trim: "#D4A017",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
  },
  {
    id: "commercial",
    name: "Commercial Space",
    walls: "#6820B8",
    trim: "#ffffff",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  },
];
