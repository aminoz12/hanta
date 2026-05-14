"use client";

import { useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export default function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image */}
      <div className="relative aspect-square w-full bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden flex items-center justify-center p-8">
        <Image 
          src={mainImage} 
          alt={productName} 
          fill
          className="object-contain transition-opacity duration-300"
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-4">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setMainImage(img)}
              className={clsx(
                "relative aspect-square bg-gray-50 rounded-xl border-2 overflow-hidden transition-all",
                mainImage === img ? "border-primary shadow-sm" : "border-transparent hover:border-gray-200"
              )}
            >
              <Image 
                src={img} 
                alt={`${productName} thumbnail ${idx + 1}`} 
                fill 
                className="object-contain p-2"
                sizes="(max-width: 768px) 25vw, (max-width: 1200px) 15vw, 10vw"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
