"use client";

import { Carousel } from "react-responsive-carousel";
import { useState } from "react";
import Button from "@/components/ui/button";
import { ControlsContainer } from "@/components/controls-container";
// carousel styles
import "react-responsive-carousel/lib/styles/carousel.css";
import styles from "./page.module.css";

const images = [
  "/intro_1.gif",
  "/intro_2.gif",
  "/intro_3.gif",
  "/intro_4.gif",
  "/intro_5.gif",
  "/intro_6.gif",
  "/intro_7.gif",
  "/intro_8.gif",
];

export default function Intro() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showSkipIntroButton, setShowSkipIntroButton] = useState(true);
  const [showStartGameButton, setShowStartGameButton] = useState(false);

  const config = {
    showArrows: true,
    showStatus: false,
    showIndicators: false,
    showThumbs: false,
    emulateTouch: true,
    onChange: (index: number) => {
      setCurrentImageIndex(index);
      if (index === images.length - 1) {
        setShowSkipIntroButton(false);
        setShowStartGameButton(true);
      } else {
        setShowSkipIntroButton(true);
        setShowStartGameButton(false);
      }
    },
  };

  return (
    <div className={styles.page}>
      <main className="mt-[100px]">
        <Carousel {...config}>
          {images.map((image, i) => (
            <img key={i} src={currentImageIndex === i ? image : undefined} /> // ensure the gif animation only starts playing on scroll into view
          ))}
        </Carousel>
      </main>
      <ControlsContainer>
        {showSkipIntroButton && <Button href="/" text="Skip intro" />}
        {showStartGameButton && <Button href="/" text="Start game" />}
      </ControlsContainer>
    </div>
  );
}
