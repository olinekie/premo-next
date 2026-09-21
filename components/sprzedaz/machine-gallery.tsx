"use client";

import { useState } from "react";
import Image from "next/image";

type MachineGalleryProps = {
  images: string[];
  name: string;
};

export default function MachineGallery({
  images,
  name,
}: MachineGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousImage = () => {
    setCurrentIndex((current) =>
      current === 0 ? images.length - 1 : current - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((current) =>
      current === images.length - 1 ? 0 : current + 1
    );
  };

  return (
    <div className="machine-gallery">

      <div className="machine-gallery-main">

        <Image
          src={images[currentIndex]}
          alt={`${name} - zdjęcie ${currentIndex + 1}`}
          fill
          priority
          sizes="(max-width: 900px) 100vw, 60vw"
        />

        {images.length > 1 && (
          <>
            <button
              className="gallery-arrow gallery-arrow-left"
              onClick={previousImage}
              aria-label="Poprzednie zdjęcie"
            >
              ←
            </button>

            <button
              className="gallery-arrow gallery-arrow-right"
              onClick={nextImage}
              aria-label="Następne zdjęcie"
            >
              →
            </button>
          </>
        )}

        <div className="gallery-counter">
          {currentIndex + 1} / {images.length}
        </div>

      </div>

      <div className="machine-gallery-thumbnails">
        {images.map((image, index) => (
          <button
            key={image}
            className={`gallery-thumbnail ${
              index === currentIndex
                ? "gallery-thumbnail-active"
                : ""
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Pokaż zdjęcie ${index + 1}`}
          >
            <Image
              src={image}
              alt=""
              fill
              sizes="100px"
            />
          </button>
        ))}
      </div>

    </div>
  );
}