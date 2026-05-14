export interface Product {
  id: string;
  name: string;
  href: string;
  price: number;
  originalPrice?: number;
  image: string;
  hoverImage?: string;
  images?: string[];
  rating: number;
  reviews: number;
  badges?: string[];
  description?: string;
  features?: string[];
}

export const products: Product[] = [
  {
    id: "masque-chirurgical",
    name: "Masque Chirurgical Type IIR - Boîte de 20",
    href: "/masque-chirurgical-type-2r",
    price: 9.90,
    originalPrice: 17.90,
    image: "/images/11.png",
    hoverImage: "/images/22.png",
    images: [
      "/images/11.png",
      "/images/22.png",
      "/images/33.png",
      "/images/44.png",
      "/images/55.png"
    ],
    rating: 4.8,
    reviews: 124,
    badges: ["Best Seller", "-45%"],
    description: "Masques chirurgicaux de type IIR à haute filtration (EFB ≥ 99%) avec résistance aux projections. Norme EN 14683:2019+AC:2019.",
    features: [
      "Efficacité de Filtration Bactérienne (EFB) ≥ 99%",
      "Résistant aux projections de fluides",
      "Élastiques auriculaires confortables",
      "Barrette nasale ajustable",
      "Boîte de 20 masques"
    ]
  },
  {
    id: "masque-ffp2",
    name: "MASQUE FFP2 – Boite de 20 masques – Sans Graphène – ou Auriol",
    href: "/masque-ffp2",
    price: 19.90,
    originalPrice: 29.90,
    image: "/images/0.png",
    hoverImage: "/images/01.png",
    images: [
      "/images/0.png",
      "/images/1.png",
      "/images/2.png",
      "/images/3.png",
      "/images/4.png",
      "/images/6.png"
    ],
    rating: 4.9,
    reviews: 86,
    badges: ["Haute Protection", "-33%"],
    description: "Masques FFP2 haute protection avec 5 couches de filtration. Conformes à la norme EN 149:2001+A1:2009. Certifiés CE.",
    features: [
      "Filtration des particules (PFE) ≥ 99%",
      "Structure en 5 couches filtrantes",
      "Format ergonomique 3D",
      "Emballage individuel",
      "Boîte de 20 masques"
    ]
  }
];

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}
