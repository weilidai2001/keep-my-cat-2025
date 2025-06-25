"use client";

import React, { useCallback } from "react";
import { useRouter } from "next/navigation";
import { Carousel } from "react-responsive-carousel";

// carousel styles
import "react-responsive-carousel/lib/styles/carousel.css";

type ResponsiveCarouselProps = {
  images: string[];
  buttonText: string;
  buttonTextLast: string;
  nextDestination: string;
};

const createImageNameByIndex = (index: number) => `intro-image-${index}`;

const ResponsiveCarousel: React.FC<ResponsiveCarouselProps> = ({
  images,
  buttonText,
  buttonTextLast,
  nextDestination,
}) => {
  const placeholder = "/white.png";

  const props = (src: string) => ({
    "data-src": src,
  });

  const config = {
    showArrows: false,
    showStatus: false,
    showIndicators: false,
    showThumbs: false,
    emulateTouch: true,
    onChange: (index: number) => {},
  };

  return (
    <div className="responsive-carousel">
      <header />
      <main>
        <img
          className="responsive-carousel__prompt"
          src="/slideshow_continue.png"
        />
        <Carousel {...config}>
          {images.map((image, i) => (
            <img
              id={createImageNameByIndex(i)}
              {...props(image)}
              key={image}
              src={i === 0 ? image : placeholder}
            />
          ))}
        </Carousel>
      </main>
      <footer className="flex justify-center">
        <button
          className="responsive-carousel__button--normal text-[15px] w-auto px-[15px] py-[5px]"
          onClick={() => {}}
        >
          Skip intro
        </button>
        <button
          className="responsive-carousel__button--last text-[22px] w-auto px-[15px] py-[5px] hidden"
          onClick={() => {}}
        >
          Start game
        </button>
      </footer>
    </div>
  );
};

export default ResponsiveCarousel;
